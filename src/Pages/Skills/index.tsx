import { Box, Grid, Typography } from '@mui/material';
import { headerHeight } from 'Layout/GlobalHeader';
import React, { useState, useEffect } from 'react';
import map from 'lodash/map'
// @ts-ignore
import Card from 'react-animated-3d-card'

import { colors } from 'Utils/constants';

const Skills = () => {

    return <Grid container alignContent="flex-start" p="40px">
        <Grid container item xs={12}>
            <Typography variant="h4">
                Skills
            </Typography>
        </Grid>

        <Grid container item xs={12} spacing={3} py="20px" sx={{animation: "appear 2s"}}>
            {
                map(skillValues, (skillVal, idx) => {
                    return <Grid container item xs={6} md={3} key={`SkillVal-${idx}`} sx={{
                        "& .parallax-card, &>div": {
                            width: "100%",
                        }
                    }}>
                        <Card shineStrength={0.9} cursorPointer style={{
                            width: "100%",
                            borderRadius: 8,
                            height: "300px",
                        }}>
                            <Grid container item xs={12} alignItems="flex-start" py="20px" px="20px" height="90%">
                                <Grid container item xs={4} alignItems="center" height="50px">
                                    <Box sx={{
                                        backgroundImage: `url(${skillVal.toolUrl})`,
                                        height: "50px",
                                        width: "50px",
                                        backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                    }} />
                                </Grid>
                                <Grid container item xs={8} alignItems="center" height="50px">
                                    <Typography fontSize={"16px"}>
                                        {skillVal.name}
                                    </Typography>
                                </Grid>

                                <Grid container item xs={12} alignItems="flex-start" mt="24px" height={"calc(100% - 50px)"}>
                                    {
                                        skillVal.descs.map((desc, sIdx) => {
                                            return <Typography fontSize={"12px"}>
                                                {desc}
                                            </Typography>
                                        })
                                    }

                                </Grid>
                            </Grid>
                            <Grid container item xs={12} alignItems="center" height="10%">
                                <Box sx={{
                                    backgroundColor: colors.gainsboro, 
                                    height: "4px", width: "140px"
                                }}/>
                            </Grid>
                        </Card>
                    </Grid>

                })
            }

        </Grid>


    </Grid>
}

type SkillValue = {
    name: string
    value: number
    toolUrl: string
    descs: string[]
}


const skillValues: SkillValue[] = [
    {
        name: "React js",
        value: 100,
        toolUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        descs: [
            "▶ Have over 3 years of experience of using react.js to develop websites"
        ],
    },
    {
        name: "React Native",
        value: 90,
        toolUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        descs: [
            "▶ Help created hiking social media app called Bamily",
            "▶ Built a fitness app for blockchain move-to-earn app called Fitevo",
            "▶ Have experiences of creating animation, UI, notification, authentication, deep linking for mobile app.",

        ],
    },
    {
        name: "Firebase",
        toolUrl: "https://www.gstatic.com/devrel-devsite/prod/v1a2d2d725c48303ffd65eb7122e57032dbf9bb148227658cacdfddf0dcae1e46/firebase/images/touchicon-180.png",
        descs: [
            "▶ Deploy testable IOS & Android App to testers using app distribution",
            "▶ Used firebase crashlytics to log error from mobile app",
            "▶ Used firebase Cloud messaging to deliver remote message to end users"
        ],
        value: 80,
    },
    {
        name: "Typescript",
        value: 90,
        toolUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
        descs: [
            "▶ Mostly used in react & react native projects"
        ],
    },
    {
        name: "MongoDB",
        value: 90,
        toolUrl: "https://www.ictdemy.com/images/5728/mdb.png",
        descs: [
            "▶ Have over 2 years of experience writing complex queries"
        ],
    },
    {
        name: "AWS Lambda",
        toolUrl: "https://i.imgur.com/gwQtHO5.png",
        descs: [
            "▶ Serverless API (AWS SAM) & S3 Trigger Layer for getting gif & png thumbnail from video",
        ],
        value: 50,
    },
    {
        name: "AWS S3",
        toolUrl: "https://miro.medium.com/max/333/1*1A1CQ8a-vKphpDu97_U6Kw.png",
        descs: [
            "▶ Wrote API that allow user to put their video into S3 via signed Url",
        ],
        value: 50,
    },
    {
        name: "AWS Amplify",
        toolUrl: "https://panduz.net/wp-content/uploads/2021/01/amplify.png",
        descs: [
            "▶ Integrate with AWS Cognito to provide social login options for mobile app",
        ],
        value: 50,
    },
    {
        name: "AWS Cloudformation",
        toolUrl: "https://la-tech.co/post/hypermodern-cloudformation/cloudformation.png",
        descs: [
            "▶ Wrote deployment scripts, templates & integrate all needed AWS serivces",
        ],
        value: 60,
    },
    {
        name: "AWS Elasticache",
        toolUrl: "https://d2908q01vomqb2.cloudfront.net/887309d048beef83ad3eabf2a79a64a389ab1c9f/2021/08/10/AWS_ElastiCache_Icon-1.png",
        descs: [
            "▶ Deploy redis cluster for caching data fetched from AWS Dynamodb",
        ],
        value: 60,
    },
    {
        name: "AWS Dynamodb",
        toolUrl: "https://symbiotics.co.za/wp-content/uploads/2021/07/t_aws-dynamodb5235.jpg",
        descs: [
            "▶ Normal CRUD operations like storing user, video inforamtion",
        ],
        value: 60,
    },
    {
        name: "SQL",
        value: 90,
        toolUrl: "https://thumbs.dreamstime.com/b/sql-database-icon-logo-design-ui-ux-app-orange-inscription-shadow-96841969.jpg",
        descs: [
            "▶ Have over 2 years of experience writing complex queries"
        ],
    },
    {
        name: "SCSS",
        value: 80,
        toolUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png",
        descs: [
            "▶ Have over 1 year of working experiences writing scss",
        ],
    },
    {
        name: "Javascript",
        value: 80,
        toolUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
        descs: [
            "▶ Help created dapp project metagod's zoomable & interactable landsale map using only canvas",
            "▶ Help developed many server side projects using express.js"
        ],
    },

    
]


export default Skills