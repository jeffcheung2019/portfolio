import { Box, Card, Grid, Typography } from '@mui/material';
import { headerHeight } from 'Layout/GlobalHeader';
import React, { FC, useCallback, useMemo, useState } from 'react';
import times from 'lodash/times'
import Timeline from 'Components/Timeline';
import map from 'lodash/map';

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

const skillPics = {
    react: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    reactNative: "https://img-blog.csdnimg.cn/img_convert/1ceefe2a13ab17f1a04ce8cba6737d32.png",
    angular: "https://logojinni.com/image/logos/angular-555.svg",
    firebase: "https://www.gstatic.com/devrel-devsite/prod/v1a2d2d725c48303ffd65eb7122e57032dbf9bb148227658cacdfddf0dcae1e46/firebase/images/touchicon-180.png",
    typescript: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
    mongodb: "https://www.ictdemy.com/images/5728/mdb.png",
    awsLambda: "https://i.imgur.com/gwQtHO5.png",
    awsS3: "https://miro.medium.com/max/333/1*1A1CQ8a-vKphpDu97_U6Kw.png",
    awsAmplify: "https://panduz.net/wp-content/uploads/2021/01/amplify.png",
    awsCloudformation: "https://la-tech.co/post/hypermodern-cloudformation/cloudformation.png",
    awsElasticache: "https://d2908q01vomqb2.cloudfront.net/887309d048beef83ad3eabf2a79a64a389ab1c9f/2021/08/10/AWS_ElastiCache_Icon-1.png",
    awsDynamodb: "https://symbiotics.co.za/wp-content/uploads/2021/07/t_aws-dynamodb5235.jpg",
    sql: "https://thumbs.dreamstime.com/b/sql-database-icon-logo-design-ui-ux-app-orange-inscription-shadow-96841969.jpg",
    scss: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png",
    javascript: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
    python: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",   
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

const jobDtlData = [

    {
        title: "Web Developer",
        company: "Vico Systems",
        dateRange: "Dec 2017 - Apr 2019",
        skills: [
            "AWS: S3, lambda / Java spring boot / React.js / Angular / SCSS / Mongodb / MySQL / Meteor.js"
        ],
        details: [
            "Worked on a website for Prudential ‘s agent to internally manage their matched customers using angular and spring boot.",
            "Helped create oddup, a fintech company’s website which provide stock and crypto related data to their subscribed users.",
            "Helped revamp Prudential’s online insurance web app by enhancing both the app’s functionality and user experiences.",
            
        ]
    },
    {
        title: "Developer",
        company: "KYWH Limited",
        dateRange: "Nov 2019 - Nov 2021",
        skills: [
            "AWS Lambda, S3, EC2 / Firebase / Express.js / React.js / Typescript / Mongodb / MySQL / Socket.io / Elasticsearch / Google API"
        ],
        details: [
            "Worked on a HR portal web app for easing the tediousness of manual HR tasks and streamlining the application process of employee’s benefits.",
            "Worked on multiple internal management web apps that help clients to manage their drug shipments, orders, and a to-do-list task system for streamlining and speeding up their processes and workflows",
            "Wrote reusable, performant, and robust components for different internal projects",
            "Participated in the full life cycle of a mobile hiking social media app project using react native. This app supports route drawing, route sharing, private chat room between users, allowing users to post and share their hiking experiences with their friends."
        ]
    },
    {
        title: "Analyst Programmer",
        company: "Ozaru Limited (Cinchblock)",
        dateRange: "Nov 2021 - Present",
        skills: [
            "AWS: SAM, Lambda, Cognito, Amplify, Cloudformation, Dynamodb, Elastic cache / Firebase / React.js / React Native / Typescript / Web3 / canvas / FFmpeg"
        ],
        details: [
            "Developed multiple web dapp for blockchain games. E.g. metawars, metagods.",
            "Help created video thumbnails whenever video is uploaded to AWS S3 using AWS Lambda & FFmpeg.",
            "Worked on aws serverless app and integrate with the dapp frontend.",
            "Built the login system and in app UI, notifiaction, deep linking for a fitness app running on both ios & android.",
            "Created a zoomable & user input interactable landsale map using canvas",
        ]
    },
]
type WorkExperiencesProps = {
    pageRefs: {
        coverRef: any,
        aboutRef: any,
        skillsRef: any,
        workExpRef: any,
    }
}

const WorkExperiences : FC<WorkExperiencesProps> = () => {

    const [currTab, setCurrTab] = useState(0)

    const workExps = () => {
        return <Grid container item xs={12} height="400px" alignContent="flex-start" key={new Date().getTime()}>
            <Typography sx={jobTitle} fontWeight="bold">
                {jobDtlData[currTab].title} | {jobDtlData[currTab].company} | {jobDtlData[currTab].dateRange}
            </Typography>
            <Typography sx={jobSkills}>
                {jobDtlData[currTab].skills}
            </Typography>
            {
                map(jobDtlData[currTab].details, (e, idx) => {
                    return <Typography sx={jobDetail} key={`jobDetail-${idx}`}>
                        ▶ {e}
                    </Typography>
                })
            }
        </Grid>
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
                                animation: `hueRotateInf 4s infinite`,
                                left: 0
                            }
                        },
                        {
                            style: {
                                backgroundColor: "#87be7e",
                                animation: `hueRotateInf 4s infinite`,
                            }
                        },
                        {
                            style: {
                                backgroundColor: "#fdbb2d",
                                animation: `hueRotateInf 4s infinite`,
                                right: 0
                            }
                        }]}
                    />
                </Grid>
                {workExps()}
            </Grid>

            <Grid container item xs={4} flexDirection="row" alignItems="center" justifyContent="center">
                <Card elevation={4} sx={{
                    animation: "appear 1s"
                }}>
                {
                    jobDtlData[currTab].skills
                }
                </Card>
            </Grid>

        </Grid>


    </Grid>
}

export default WorkExperiences