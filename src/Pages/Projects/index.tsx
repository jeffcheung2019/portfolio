import { Box, ButtonBase, Card, Grid, Typography } from "@mui/material";
import { headerHeight } from "Layout/GlobalHeader";
import React, { FC, useCallback, useMemo, useState } from "react";
import times from "lodash/times";
import Timeline from "Components/Timeline";
import map from "lodash/map";
import { colors } from "Utils/constants";
import ReactPlayer from "react-player";
type ProjectsProps = {};

const workDtls = [
  {
    website: "Stock Tracker",
    uri: "",
    logo: "https://iili.io/tlKNwB.png",
    desc: "Personal mobile app side project that allow users to track their favourite stocks. Features include news notification subscription, company earning calendar and etc.",
  },
  {
    website: "FitEvo",
    uri: "https://app-dev.dragonevolution.gg/home",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVQx6lldkS7fYva1AXH-VWErn11EDCrpjeJUFrE6fI-Tn2y_hFYcooCXN4L86ETJ1qB4&usqp=CAU",
    desc: "A gamefi mobile app that combines fitness & gaming with the move-to-earn mechanics like popular game called STEPN.",
    videoUri: "https://www.youtube.com/shorts/r0gLpPRgwPU",
  },
  {
    website: "Metagods",
    uri: "https://app.metagods.gg/",
    logo: "https://app.metagods.gg/static/media/loigo.4e211518.png",
    desc: "A play-to-earn dapp for a 2d pixel defi game. It allows user stake their MGOD tokens to earn more and buy NFT characters to play the defi game",
    websiteThumbnailUri: "https://iili.io/tlJ99I.md.png",
  },
  {
    website: "Metawars",
    uri: "https://app.metawars.gg/",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoD54yw7qrBFD6f62fnBF1c5s6-wlGh_mYqrkilvekybejmDc4S43GjKVgHhVeIw6aR0&usqp=CAU",
    desc: "A play-to-earn dapp for a 3d robot defi game. It allows user stake their WARS tokens to earn more and buy NFT characters and planets to play the defi game",
    websiteThumbnailUri: "https://iili.io/tlHKYB.md.png",
  },
  {
    website: "Degen dog pound",
    uri: "https://app.degendogpound.com/",
    logo: "https://pbs.twimg.com/profile_banners/1531687519158693888/1654138331/1500x500",
    desc: "A play-to-earn dapp for a defi game called degen dog pound. User can play and stake their NFT characters.",
    websiteThumbnailUri: "https://iili.io/tlKnjI.png",
  },
  {
    website: "Farmtom",
    uri: "https://farmtom.com/",
    logo: "https://farmtom.com/static/media/logo_farmtom.12a3d0c9.png",
    desc: "Farmtom is a decentralized exchange developed to facilitate swapping, staking and yield farming their tokens.",
    websiteThumbnailUri:
      "https://miro.medium.com/max/850/1*HvQBQkLdQABu7KmnTIVKUw.png",
  },
  {
    website: "Bamily",
    uri: "https://bamilygo.com/",
    logo: "https://static.wixstatic.com/media/14401c_02d15c703cfe4dabb4ed6177c03cd14e~mv2.png/v1/fit/w_2500,h_1330,al_c/14401c_02d15c703cfe4dabb4ed6177c03cd14e~mv2.png",
    desc: "A social networking mobile app that makes it easy for user to connect and share their hiking experience with friends and family.",
  },
];

const Projects: FC<ProjectsProps> = () => {
  const onProjectClick = (website: string) => {
    window.open(website);
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      p={["10px", "40px"]}
    >
      <Grid container item xs={12} mb="20px">
        <Typography
          sx={{
            fontSize: [20, 24, 28],
          }}
        >
          Past Projects
        </Typography>
      </Grid>

      <Grid container item xs={12} spacing={2} justifyContent="flex-start">
        {map(workDtls, (e, idx) => {
          return (
            <Grid
              item
              container
              xs={12}
              md={6}
              lg={4}
              key={`work-${idx}`}
              width="100%"
              sx={{}}
            >
              <Card
                sx={{
                  padding: 4,
                  width: "100%",
                  borderRadius: "20px",
                }}
              >
                {e.logo === "" ? null : (
                  <Grid
                    container
                    item
                    xs={12}
                    height="80px"
                    justifyContent={"center"}
                    alignItems="center"
                    width="100%"
                  >
                    <Box
                      sx={{
                        backgroundImage: `url(${e.logo})`,
                        width: "100%",
                        height: 50,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                      }}
                    />
                  </Grid>
                )}
                {e.website === "" ? null : (
                  <Grid container item xs={12}>
                    <Typography variant="h5">{e.website}</Typography>
                  </Grid>
                )}
                {e.uri === "" ? null : (
                  <Grid container item xs={12}>
                    <ButtonBase onClick={() => onProjectClick(e.uri)}>
                      <Typography
                        sx={{
                          color: colors.gainsboro,
                          textDecoration: "underline",
                        }}
                      >
                        {e.uri}
                      </Typography>
                    </ButtonBase>
                  </Grid>
                )}
                <Grid container item xs={12}>
                  <Typography>{e.desc}</Typography>
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  height="400px"
                  alignItems={"center"}
                  sx={{
                    marginTop: "auto",
                  }}
                >
                  {e.websiteThumbnailUri ? (
                    <Box
                      sx={{
                        backgroundImage: `url(${e.websiteThumbnailUri})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "90%",
                        width: "100%",
                        height: "100%",
                        backgroundPosition: "center",
                        backgroundColor: colors.gainsboro,
                      }}
                    />
                  ) : (
                    <ReactPlayer url={e.videoUri} />
                  )}
                </Grid>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Projects;
