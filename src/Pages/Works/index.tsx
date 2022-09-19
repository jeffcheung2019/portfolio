import { Box, Card, Grid, Typography } from '@mui/material';
import { headerHeight } from 'Layout/GlobalHeader';
import React, { FC, useCallback, useMemo, useState } from 'react';
import times from 'lodash/times'
import Timeline from 'Components/Timeline';
import map from 'lodash/map';

type WorksProps = {
    pageRefs: {
        coverRef: React.MutableRefObject<HTMLDivElement | null>,
        aboutRef: React.MutableRefObject<HTMLDivElement | null>,
        skillsRef: React.MutableRefObject<HTMLDivElement | null>,
        workExpRef: React.MutableRefObject<HTMLDivElement | null>,
    }
}

const workDtls = [
    {
        website: "Metawars",
        uri: "https://app.metawars.gg/",
        logo: "https://app.metawars.gg/images/Logo.png",
        desc: "A dapp for a 3d robot defi game "
    },
    {
        website: "Metagods",
        uri: "https://app.metagods.gg/",
        logo: "https://app.metagods.gg/static/media/loigo.4e211518.png",
        desc: "A dapp for a 2d pixel defi game"
    },
    {
        website: "FitEvo",
        uri: "https://app.metawars.gg/",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVQx6lldkS7fYva1AXH-VWErn11EDCrpjeJUFrE6fI-Tn2y_hFYcooCXN4L86ETJ1qB4&usqp=CAU",
        desc: "A fitness move-to-earn app"
    },
    {
        website: "Bamily",
        uri: "https://bamilygo.com/",
        logo: "https://static.wixstatic.com/media/14401c_b9515e5cf1594962a508c85296bf87dc~mv2.png/v1/fill/w_54,h_54,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/App%20Name%2058x58.png",
        desc: "A social networking app that makes it easy for you to connect and share your hiking experience with your friends and family."
    },

]

const Works: FC<WorksProps> = () => {

    return <Grid container alignItems="center" justifyContent="center" p="80px">
        <Grid container item xs={12}>
            <Typography variant="h4">
                Recent Works
            </Typography>
        </Grid>

        <Grid container item xs={12} spacing={2} justifyContent="center">
            {
                map(workDtls, (e, idx) => {
                    return <Grid item container xs={6} key={`work-${idx}`}>
                        <Card sx={{

                        }}>
                            <Grid container item xs={12}>
                                <Box 
                                    sx={{
                                        background: `url(${e.uri})`,
                                        width: '100%',
                                        height: 50,
                                    }}
                                />
                            </Grid>
                            <Grid container item xs={12}>
                                <Typography>{e.website}</Typography>
                            </Grid>
                            <Grid container item xs={12}>
                                <Typography>{e.desc}</Typography>
                            </Grid>
                        </Card>
                    </Grid>
                })
            }


        </Grid>


    </Grid>
}

export default Works