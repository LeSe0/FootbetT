// React
import React from "react";
// MUI
import { Grid } from "@mui/material";
// components
import HeaderContent from "../HeaderComponents/HeaderContent";
import HeaderWebSites from "../HeaderComponents/headerWebSitesComponents/HeaderWebSites";

export default function Header() {
  return (
    <Grid
      container
      sx={theme =>({
        display : "flex",
        flexWrap : "nowrap",
        overflowX : "hidden",
        backgroundColor : "#12112c",
        height : "100%"
      })}
    >
      <HeaderWebSites />
      <HeaderContent />
    </Grid>
  );
}
