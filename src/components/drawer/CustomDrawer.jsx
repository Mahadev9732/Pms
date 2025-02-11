import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const CustomDrawer = ({ children, direction = "left", isOpen, onClose }) => {
  const computedHeight =
    direction === "left" || direction === "right" ? "100vh" : "auto";
  const maxHeight =
    direction === "top" || direction === "bottom" ? "20vh" : "auto";

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      direction={direction}
      style={{
        backgroundColor: "white",
        width: "auto",
        height: computedHeight,
        maxHeight,
        zIndex: "999",
        marginTop: "64px", // Adjust this based on Navbar height
      }}
    >
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
