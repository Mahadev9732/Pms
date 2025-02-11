import React from "react";
import { Box, Tabs, Tab } from "@mui/material";

const TabsContainer = ({ tabs, activeTab, onTabChange }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={activeTab}
        onChange={onTabChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="Profile Tabs"
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          "& .MuiTab-root": {
            fontSize: { xs: "0.875rem", sm: "1rem" },
            minWidth: { xs: "100px", sm: "auto" },
          },
        }}
      >
        {tabs.map((tab) => (
          <Tab key={tab.value} value={tab.value} label={tab.label} />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabsContainer;
