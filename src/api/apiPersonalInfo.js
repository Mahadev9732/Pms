import { axiosPrivate } from "./config";

// Fetch data from the API
const fetchData = async (url) => {
  try {
    const response = await axiosPrivate.get(url);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Fetch the ETag from the API (HEAD request)
export const fetchETag = async (url) => {
  try {
    // Send a HEAD request to fetch only headers
    const response = await axiosPrivate.head(url);
    console.log("Response Headers:", response.headers);

    // Extract the ETag (check for custom "mahadev-etag" or default "etag")
    const etag = response.headers["mahadev-etag"] || response.headers["etag"];
    if (etag) {
      console.log("Extracted ETag:", etag);
      return etag;
    } else {
      console.log("No ETag found in response headers");
      return null; // Return null if ETag not found
    }
  } catch (error) {
    console.error("Error fetching ETag:", error);
    return null; // Return null if there's an error
  }
};

export const getProfileInfo = async (url) => {
  const cacheKey = "planningData"; // Cache key for the data
  const cachedData = localStorage.getItem(cacheKey);

  if (cachedData) {
    const cached = JSON.parse(cachedData);
    console.log("Cached ETag:", cached.etag); // Log cached ETag

    // Fetch ETag and data in the background
    setTimeout(async () => {
      try {
        const etagServer = await fetchETag(url); // Fetch ETag from server
        console.log("Server ETag:", etagServer);
        if (!etagServer || etagServer !== cached.etag) {
          // If ETag has changed, fetch new data
          const data = await fetchData(url);
          const etagNew = await fetchETag(url);
          localStorage.setItem(
            cacheKey,
            JSON.stringify({ etag: etagNew, data }) // Cache updated data and ETag
          );
        }
      } catch (error) {
        console.error("Error during background update check:", error);
      }
    }, 0); // Execute background task ASAP

    // Return cached data immediately
    return cached.data;
  }

  // Fetch data if not cached
  try {
    const data = await fetchData(url); // Fetch the data
    const etagNew = await fetchETag(url); // Fetch the ETag
    localStorage.setItem(cacheKey, JSON.stringify({ etag: etagNew, data })); // Cache new data and ETag
    console.log("New ETag:", etagNew);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
