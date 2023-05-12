import { Box } from "@mui/material";
import React from "react";
import DataRibbon from "@/components/Dashboard/DataRibbon/DataRibbon";
import Transactions from "@/components/Dashboard/Transactions/Transactions";

function Dashboard() {
  return (
    <Box>
      <DataRibbon />
      <Transactions />
    </Box>
  );
}

export default Dashboard;
