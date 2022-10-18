import { Box, ButtonBase, Grid, Typography } from "@mui/material";
// @ts-ignore
import React, { FC, useEffect, useRef, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { colors } from "Utils/constants";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./index.scss";
import programmerGif from "Assets/Images/programmer.gif";
type AboutProps = {};

const About: FC<AboutProps> = ({}) => {
  const onLinkedinClick = () =>
    window.open("https://www.linkedin.com/in/jeff-cheung-54a496217/");
  return (
    <Grid
      container
      flexDirection={"row"}
      overflow="hidden"
      position="relative"
      alignContent="center"
      alignItems="center"
      height="100%"
    >
      <Grid
        container
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: `url(${programmerGif})`,
          backgroundSize: "contain",
          height: "40%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        alignItems="center"
        justifyContent="center"
      ></Grid>

      <Grid
        container
        item
        xs={12}
        md={6}
        alignItems="center"
        justifyContent="center"
        alignContent={"center"}
        pr={["20px", "120px"]}
        pl={["20px", "0px"]}
      >
        <Grid
          container
          item
          xs={12}
          py="30px"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography fontSize={[14, 16, 18]} sx={{}}>
            Hey, My name is jeff cheung!
          </Typography>

          <Typography fontSize={[14, 16, 18]} sx={{}}>
            I have over 4 years of working experience in web app development.
          </Typography>

          <Typography fontSize={[14, 16, 18]} sx={{}}>
            I am an extremely curious and self-motivated individual, passionate
            about knowing how everything in web & mobile app development works.
          </Typography>
        </Grid>

        <Grid
          container
          item
          xs={12}
          alignItems="center"
          justifyContent="flex-start"
        >
          <Grid container item width="60px">
            <ButtonBase onClick={onLinkedinClick}>
              <LinkedInIcon
                sx={{
                  color: colors.white,
                  width: 40,
                  height: 40,
                  transition: `all ease-in-out 0.5s`,
                  "&:hover": {
                    color: colors.aquamarine,
                    transform: `translateY(-4px)`,
                  },
                }}
              />
            </ButtonBase>
          </Grid>
          <Grid container item width="60px">
            <ButtonBase
              onClick={() => window.open("mailto:jeffcheung2019@gmail.com")}
            >
              <GoogleIcon
                sx={{
                  color: colors.white,
                  width: 40,
                  height: 40,
                  transition: `all ease-in-out 0.5s`,
                  "&:hover": {
                    color: colors.aquamarine,
                    transform: `translateY(-4px)`,
                  },
                }}
              />
            </ButtonBase>
          </Grid>
          <Grid container item width="60px">
            <ButtonBase
              onClick={() => window.open("https://github.com/jeffcheung2019")}
            >
              <GitHubIcon
                sx={{
                  color: colors.white,
                  width: 40,
                  height: 40,
                  transition: `all ease-in-out 0.5s`,
                  "&:hover": {
                    color: colors.aquamarine,
                    transform: `translateY(-4px)`,
                  },
                }}
              />
            </ButtonBase>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
