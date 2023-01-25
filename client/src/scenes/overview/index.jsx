import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Box, Select } from "@mui/material";
import Header from "components/Header";
import OverviewChart from "components/OverviewChart";

const Overview = () => {
  const [view, setView] = useState("units");
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="개요" subtitle="일반 수익 및 수익에 대한 개요." />

      <Box height="75vh">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>보기</InputLabel>
          <Select
            value={view}
            label="보기"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">판매</MenuItem>
            <MenuItem value="units">단위</MenuItem>
          </Select>
        </FormControl>

        <OverviewChart view={view} />
      </Box>
    </Box>
  );
};

export default Overview;
