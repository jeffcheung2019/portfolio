import { Box, Grid, Typography } from '@mui/material';
import { headerHeight } from 'Layout/GlobalHeader';
import React, { useCallback, useMemo, useState } from 'react';
import times from 'lodash/times'
import Timeline from 'Components/Timeline';

const jobTitle = {
    width: "100%",
    fontSize: "20px"
}
const jobSkills = {
    width: "100%",
    fontSize: "16px",
    fontStyle: "italic"
}

const jobDetail = {
    width: "100%",
    fontSize: "16px"
}

const companyInfo = [
    {
        toolUrls: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        ]
    },
    {
        toolUrls: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        ]
    },
    {
        toolUrls: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        ]
    }
]

const WorkExperiences = () => {

    const [currTab, setCurrTab] = useState(0)

    const workExps = () => {
        if (currTab === 2) {
            return <Grid container item xs={12} height="400px" alignContent="flex-start" key={new Date().getTime()}>
                <Typography sx={jobTitle} fontWeight="bold">
                    Analyst Programmer | Ozaru Limited (Cinchblock) | Nov 2021 - Present
                </Typography>
                <Typography sx={jobSkills}>
                    AWS: SAM, Lambda, Cognito, Amplify, Cloudformation, Dynamodb, Elastic cache / Firebase / React.js / React Native / Typescript / Web3 / canvas / FFmpeg
                </Typography>
                <Typography sx={jobDetail}>
                    - Developed multiple web dapp for blockchain games. E.g. metawars, metagods.
                </Typography>
                <Typography sx={jobDetail}>
                    - Help created video thumbnails whenever video is uploaded to AWS S3 using AWS Lambda & FFmpeg.
                </Typography>
                <Typography sx={jobDetail}>
                    - Worked on aws serverless app and integrate with the dapp frontend.
                </Typography>
                <Typography sx={jobDetail}>
                    - Built the login system and in app UI, notifiaction, deep linking for a fitness app running both ios & android.
                </Typography>
                <Typography sx={jobDetail}>
                    - Created a zoomable & user input interactable landsale map using canvas
                </Typography>
            </Grid>
        } else if (currTab === 1) {
            return <Grid container item xs={12} height="400px" alignContent="flex-start" key={new Date().getTime()}>
                <Typography sx={jobTitle} fontWeight="bold">
                    Developer | KYWH Limited | Nov 2019 - Nov 2021
                </Typography>
                <Typography sx={jobSkills}>
                    AWS: Lambda, S3, EC2 / Firebase / Express.js / React.js / Typescript / Mongodb / MySQL / Socket.io / Elasticsearch / Google API
                </Typography>
                <Typography sx={jobDetail}>
                    - Worked on multiple internal management web apps for client to manage their drug shipments, orders, and a To do list task system to improve their submission - approval workflow.
                </Typography>
                <Typography sx={jobDetail}>
                    - Write reusable, performant, and robust code for different internal projects
                </Typography>
                <Typography sx={jobDetail}>
                    - Worked on a HR portal web app for easing the tediousness of manual HR tasks and streamlining the application process of employee’s benefits.
                </Typography>
                <Typography sx={jobDetail}>
                    - Participated in the full life cycle of a mobile hiking social media app project using react native. This app supports route drawing, route sharing, private chat room between users, allowing users to post and share their hiking experiences with their friends.
                </Typography>
            </Grid>

        } else if (currTab === 0) {
            return <Grid container item xs={12} height="400px" alignContent="flex-start" key={new Date().getTime()}>
                <Typography sx={jobTitle} fontWeight="bold">
                    Web Developer | Vico Systems | Dec 2017 - Apr 2019
                </Typography>
                <Typography sx={jobSkills}>
                    AWS: Lambda, S3 Java spring boot / React.js / Angular / SCSS / Mongodb / MySQL / Meteor.js
                </Typography>
                <Typography sx={jobDetail}>
                    - Worked on the website for Prudential ‘s agent to internally manage their matched customers using angular and spring boot.
                </Typography>
                <Typography sx={jobDetail}>
                    - Helped revamp a fintech company’s real time web app to display stock and crypto price data to their subscribed users.
                </Typography>
                <Typography sx={jobDetail}>
                    - Revamped Prudential’s online insurance application app by enhancing both the app’s functionality and speed.
                </Typography>
                <Typography sx={jobDetail}>
                    - Wrote SQL statements and stored procedures.
                </Typography>
            </Grid>

        } else {
            return null
        }

    }

    const onWorkExpTabClick = (tabIdx: number) => {
        setCurrTab(tabIdx)
    }

    return <Grid container alignItems="center" justifyContent="center" p="80px">
        <Grid container item xs={12}>
            <Typography variant="h4">
                Work Experiences
            </Typography>
        </Grid>

        <Grid container item xs={12} spacing={2} justifyContent="center">
            <Grid container item xs={8} flexDirection="row">
                <Grid container item xs={12} px="10px" position="relative" height="100px" justifyContent={"center"} alignItems="center">
                    <Timeline
                        activeIdx={currTab}
                        onTimelineBtnClick={onWorkExpTabClick}
                        timelineBtnDetails={[{
                            style: {
                                backgroundColor: "#22c1c3",
                                left: 0
                            }
                        },
                        {
                            style: {
                                backgroundColor: "#87be7e",
                            }
                        },
                        {
                            style: {
                                backgroundColor: "#fdbb2d",
                                right: 0
                            }
                        }]}
                    />
                </Grid>
                {workExps()}
            </Grid>

            {/* <Grid container item xs={4} flexDirection="row" alignItems="center" justifyContent="center">
                <Box key={`Company-${new Date().getTime()}`} sx={{
                    backgroundImage: `url(${companyInfo[currTab].imgUrl})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "50%",
                    height: "50%",
                    animation: `appearFromRight 1s`
                }} />
            </Grid> */}

        </Grid>

        
    </Grid>
}

export default WorkExperiences