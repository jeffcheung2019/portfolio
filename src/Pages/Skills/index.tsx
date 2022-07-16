import { Box, Grid, Typography, Card, Divider } from '@mui/material';
import { headerHeight } from 'Layout/GlobalHeader';
import React, { useState, useEffect, FC } from 'react';
import map from 'lodash/map'

import { colors } from 'Utils/constants';
import { useParallax } from 'react-scroll-parallax';
import ProgressBar from "@ramonak/react-progress-bar";
// @ts-ignore
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

type SkillsProps = {
    pageRefs: {
        coverRef: React.MutableRefObject<HTMLDivElement | null>,
        aboutRef: React.MutableRefObject<HTMLDivElement | null>,
        skillsRef: React.MutableRefObject<HTMLDivElement | null>,
    }
}

const skillValNames: string[] = [
    "Frontend",
    "Backend",
    "Database",
    "Cloud services"
]

const data = [
    {
        data: {
            frontend: 0.9,
            backend: 0.8,
            database: 0.8,
            cloudServices: 0.6,
            mobileApp: 0.6
        },
        meta: { color: colors.aquamarine }
    },
];

const captions = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    cloudServices: 'Cloud Services',
    mobileApp: 'Mobile App'
};

const Skills: FC<SkillsProps> = ({ pageRefs }) => {

    let coverClientHeight: number | undefined = pageRefs?.coverRef?.current?.clientHeight
    let aboutClientHeight: number | undefined = pageRefs?.aboutRef?.current?.clientHeight

    const { ref: parallaxRef } = useParallax<HTMLDivElement>({
        // easing: 'easeInOut',
        // translateY: [0, 100],

        startScroll: (coverClientHeight !== undefined ? coverClientHeight : 0),
        endScroll: (coverClientHeight !== undefined ? coverClientHeight : 0) +
            (aboutClientHeight !== undefined ? aboutClientHeight : 0),
        translateX: [100, 0],
        opacity: [0, 1],
        rootMargin: {
            top: 0, left: 0, right: 0,
            bottom: 200
        }
    });


    return <Grid overflow="hidden" container alignContent="flex-start" p={["10px", "80px"]}>
        <Grid ref={parallaxRef} container item xs={12} py="20px" spacing={3}>
            <Grid container item xs={12} lg={5} justifyContent="center" alignItems="center" pr="20px">
                <Card elevation={4} sx={{
                    borderRadius: "10px",
                    height: "100%",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    padding: "20px"
                }}>
                    <RadarChart
                        captions={captions}
                        data={data}
                        size={450}
                    />
                </Card>
            </Grid>

            <Grid container item xs={12} lg={7}>

                {
                    map([frontendSkillValues, backendSkillValues, dbSkillValues, cloudServicesSkillValues], (skillVals, idx) => {
                        return <Grid container item xs={12} spacing={3} key={`SkillVal-${idx}`}
                            sx={{
                                animation: "appear 2s",
                            }}>
                            <Grid container item xs={12} mt="20px">
                                <Typography sx={{
                                    fontSize: [20, 26, 32]
                                }}>{skillValNames[idx]}</Typography>

                            </Grid>
                            {
                                map(skillVals, (skillVal, sIdx) => {
                                    return <Grid container item xs={6} md={3} key={`SkillVal-${idx}-${sIdx}`} sx={{
                                        cursor: "pointer",
                                        transition: "all ease-in-out 0.5s",
                                        "&:hover": {
                                            transform: "scale(1.1)"
                                        }
                                    }}>
                                        <Card elevation={4} sx={{
                                            width: "100%",
                                            borderRadius: "10px",
                                        }}>
                                            <Grid container item xs={12} alignItems="flex-start" py="20px" px="20px" height="90%">
                                                <Grid container item xs={4} alignItems="center" height="50px">
                                                    <Box sx={{
                                                        backgroundImage: `url(${skillVal.toolUrl})`,
                                                        height: "40px",
                                                        width: "40px",
                                                        backgroundSize: "contain",
                                                        backgroundRepeat: "no-repeat",
                                                        backgroundPosition: "center",
                                                    }} />
                                                </Grid>
                                                <Grid container item xs={8} alignItems="center" height="50px">
                                                    <Typography fontSize={"14px"} sx={{
                                                    }}>
                                                        {skillVal.name}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container item xs={12} alignItems="center" position="relative" height="10%">
                                                <Box sx={{
                                                    backgroundColor: colors.gainsboro,
                                                    height: "4px", width: "30%",
                                                    bottom: 0, right: 0,
                                                    position: "absolute",
                                                }} />

                                            </Grid>
                                        </Card>
                                    </Grid>


                                })
                            }
                            <Divider sx={{ marginTop: "10px", backgroundColor: colors.philippineGray,
                             width: "95%", marginLeft: "24px", height: "2px" }} />
                        </Grid>
                    })
                }
            </Grid>


        </Grid>


    </Grid>
}

type SkillValue = {
    name: string
    toolUrl: string
}


const frontendSkillValues: SkillValue[] = [
    {
        name: "React js",
        toolUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
        name: "Angular",
        toolUrl: "https://logojinni.com/image/logos/angular-555.svg",
    },
    {
        name: "React Native",
        toolUrl: "https://www.datocms-assets.com/45470/1631026680-logo-react-native.png",
    },
    {
        name: "SCSS",
        toolUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png",
    },
    {
        name: "Javascript",
        toolUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
    },
    {
        name: "Typescript",
        toolUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
    },
    {
        name: "Jquery",
        toolUrl: "https://cdn.iconscout.com/icon/free/png-256/jquery-8-1175153.png"
    }
]

const backendSkillValues: SkillValue[] = [


    {
        name: "Express.js",
        toolUrl: "https://res.cloudinary.com/practicaldev/image/fetch/s--KkScstnJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zojuy79lo3fn3qdt7g6p.png",
    },
    {
        name: "Spring boot",
        toolUrl: "https://jovepater.com/wp-content/uploads/2022/04/51ae022dd976554c4136946e79b844a7.png",
    },
]


const dbSkillValues: SkillValue[] = [
    {
        name: "MongoDB",
        toolUrl: "https://www.ictdemy.com/images/5728/mdb.png",
    },
    {
        name: "SQL",
        toolUrl: "https://thumbs.dreamstime.com/b/sql-database-icon-logo-design-ui-ux-app-orange-inscription-shadow-96841969.jpg",
    },
    {
        name: "AWS Dynamodb",
        toolUrl: "https://symbiotics.co.za/wp-content/uploads/2021/07/t_aws-dynamodb5235.jpg",
    },
    {
        name: "Elastic Search",
        toolUrl: "https://ci-jie.github.io/images/Elasticsearch&ObejctStorage/Elasticsearch.png",
    },
]

const cloudServicesSkillValues: SkillValue[] = [
    {
        name: "Firebase",
        toolUrl: "https://www.gstatic.com/devrel-devsite/prod/v1a2d2d725c48303ffd65eb7122e57032dbf9bb148227658cacdfddf0dcae1e46/firebase/images/touchicon-180.png",
    },
    {
        name: "AWS Lambda",
        toolUrl: "https://i.imgur.com/gwQtHO5.png",
    },
    {
        name: "AWS S3",
        toolUrl: "https://miro.medium.com/max/333/1*1A1CQ8a-vKphpDu97_U6Kw.png",
    },
    {
        name: "AWS Amplify",
        toolUrl: "https://panduz.net/wp-content/uploads/2021/01/amplify.png",
    },
    {
        name: "AWS Cloudformation",
        toolUrl: "https://la-tech.co/post/hypermodern-cloudformation/cloudformation.png",
    },
    {
        name: "AWS Elasticache",
        toolUrl: "https://d2908q01vomqb2.cloudfront.net/887309d048beef83ad3eabf2a79a64a389ab1c9f/2021/08/10/AWS_ElastiCache_Icon-1.png",
    },
    {
        name: "AWS Cloudfront",
        toolUrl: "https://www.shareicon.net/download/2015/08/28/92179_content_512x512.png",
    },
]


export default Skills