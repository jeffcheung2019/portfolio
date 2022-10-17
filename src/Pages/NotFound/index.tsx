import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { routeNames } from "Utils/constants";
import "./index.scss";

const NotFound = () => {
  const navigate = useNavigate();
  const onReturnHomeClick = () => {
    navigate(routeNames.Home);
  };
  return (
    <Grid container className="Grid-NotFoundPage">
      <Grid container item xs={12}>
        <Typography variant="h1" className="Typography-404">
          404
        </Typography>
      </Grid>
      <Grid container item xs={12}>
        <Typography variant="h1">Page not found</Typography>
      </Grid>
      <Grid container item xs={12}>
        <Button onClick={onReturnHomeClick}>
          <Typography variant="h1">Return Home</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default NotFound;
