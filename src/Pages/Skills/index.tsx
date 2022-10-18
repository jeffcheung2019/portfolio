import { Box, Grid, Typography, Card, Divider } from "@mui/material";
import { headerHeight } from "Layout/GlobalHeader";
import React, { useState, useEffect, FC } from "react";
import map from "lodash/map";

import { colors } from "Utils/constants";
import "react-svg-radar-chart/build/css/index.css";

type SkillsProps = {};

const skillValNames: string[] = [
  "Frontend",
  "Backend",
  "Database",
  "DevOps",
  "Cloud services",
];

const data = [
  {
    data: {
      frontend: 0.9,
      backend: 0.8,
      database: 0.8,
      cloudServices: 0.6,
      mobileApp: 0.6,
    },
    meta: { color: colors.aquamarine },
  },
];

const captions = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  cloudServices: "Cloud Services",
  mobileApp: "Mobile App",
};

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <Grid
      overflow="hidden"
      container
      alignContent="flex-start"
      p={["10px", "40px"]}
    >
      <Grid container item xs={12} py="0px" spacing={3}>
        <Grid container item xs={12} lg={12}>
          {map(
            [
              frontendSkillValues,
              backendSkillValues,
              dbSkillValues,
              devOpsSkillValues,
              cloudServicesSkillValues,
            ],
            (skillVals, idx) => {
              return (
                <Grid
                  container
                  item
                  xs={12}
                  spacing={2}
                  key={`SkillVal-${idx}`}
                  sx={{
                    animation: "appear 2s",
                  }}
                >
                  <Grid container item xs={12}>
                    <Typography
                      sx={{
                        fontSize: [20, 24, 28],
                      }}
                    >
                      {skillValNames[idx]}
                    </Typography>
                  </Grid>
                  {map(skillVals, (skillVal, sIdx) => {
                    return (
                      <Grid
                        container
                        item
                        xs={4}
                        md={3}
                        lg={2}
                        key={`SkillVal-${idx}-${sIdx}`}
                        sx={{
                          cursor: "pointer",
                          transition: "all ease-in-out 0.5s",
                          "&:hover": {
                            transform: "scale(1.1)",
                          },
                        }}
                      >
                        <Card
                          elevation={4}
                          sx={{
                            width: "100%",
                            borderRadius: "10px",
                          }}
                        >
                          <Grid
                            container
                            item
                            xs={12}
                            alignItems="flex-start"
                            py="20px"
                            px="20px"
                            height="90%"
                          >
                            <Grid
                              container
                              item
                              xs={4}
                              alignItems="center"
                              height="50px"
                            >
                              <Box
                                sx={{
                                  backgroundImage: `url(${skillVal.toolUrl})`,
                                  height: "40px",
                                  width: "40px",
                                  backgroundSize: "contain",
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: "center",
                                }}
                              />
                            </Grid>
                            <Grid
                              container
                              item
                              xs={8}
                              alignItems="center"
                              height="50px"
                            >
                              <Typography fontSize={"14px"} sx={{}}>
                                {skillVal.name}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Card>
                      </Grid>
                    );
                  })}
                  <Divider
                    sx={{
                      marginTop: "10px",
                      backgroundColor: colors.philippineGray,
                      width: "95%",
                      marginLeft: "24px",
                      height: "2px",
                    }}
                  />
                </Grid>
              );
            }
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

type SkillValue = {
  name: string;
  toolUrl: string;
};

const frontendSkillValues: SkillValue[] = [
  {
    name: "React js",
    toolUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    name: "Angular",
    toolUrl: "https://logojinni.com/image/logos/angular-555.svg",
  },
  {
    name: "React Native",
    toolUrl:
      "https://www.datocms-assets.com/45470/1631026680-logo-react-native.png",
  },
  {
    name: "SCSS",
    toolUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png",
  },
  {
    name: "Javascript",
    toolUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    name: "Typescript",
    toolUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
  },
  {
    name: "Jquery",
    toolUrl: "https://cdn.iconscout.com/icon/free/png-256/jquery-8-1175153.png",
  },
];

const backendSkillValues: SkillValue[] = [
  {
    name: "Express.js",
    toolUrl:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--KkScstnJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zojuy79lo3fn3qdt7g6p.png",
  },
];

const dbSkillValues: SkillValue[] = [
  {
    name: "MongoDB",
    toolUrl: "https://www.ictdemy.com/images/5728/mdb.png",
  },
  {
    name: "SQL",
    toolUrl:
      "https://thumbs.dreamstime.com/b/sql-database-icon-logo-design-ui-ux-app-orange-inscription-shadow-96841969.jpg",
  },
  {
    name: "AWS Dynamodb",
    toolUrl:
      "https://symbiotics.co.za/wp-content/uploads/2021/07/t_aws-dynamodb5235.jpg",
  },
  {
    name: "Elastic Search",
    toolUrl:
      "https://ci-jie.github.io/images/Elasticsearch&ObejctStorage/Elasticsearch.png",
  },
];

const devOpsSkillValues: SkillValue[] = [
  {
    name: "Docker",
    toolUrl:
      "https://www.docker.com/wp-content/uploads/2021/10/Moby-logo-sm.png",
  },
  {
    name: "Kubernetes",
    toolUrl: "https://kubernetes.io/images/favicon.png",
  },
  {
    name: "Terraform",
    toolUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Terraform_Logo.svg/1280px-Terraform_Logo.svg.png",
  },
  {
    name: "Helm",
    toolUrl: "https://helm.sh/img/helm.svg",
  },
  {
    name: "Github Actions",
    toolUrl:
      "https://cdn.invicti.com/statics/img/drive/h2jfrvzrbyh1yff2n3wfu2hkqqps6x_uvqo.png",
  },
];

const cloudServicesSkillValues: SkillValue[] = [
  {
    name: "Firebase",
    toolUrl:
      "https://www.gstatic.com/devrel-devsite/prod/v1a2d2d725c48303ffd65eb7122e57032dbf9bb148227658cacdfddf0dcae1e46/firebase/images/touchicon-180.png",
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
    toolUrl: "https://miro.medium.com/max/1400/0*y-ZimaRh8fnftZVZ",
  },
  {
    name: "AWS Cloudformation",
    toolUrl:
      "https://la-tech.co/post/hypermodern-cloudformation/cloudformation.png",
  },
  {
    name: "AWS Redis",
    toolUrl:
      "https://dwglogo.com/wp-content/uploads/2017/12/1100px_Redis_Logo_01.png",
  },
  {
    name: "AWS Cloudfront",
    toolUrl:
      "https://www.shareicon.net/download/2015/08/28/92179_content_512x512.png",
  },
  {
    name: "AWS Opensearch",
    toolUrl: "https://opensearch.org/assets/opensearch-twitter-card.png",
  },
  {
    name: "AWS DMS",
    toolUrl: "https://symbols.getvecta.com/stencil_18/1_aws-dms.a182d25a50.svg",
  },
  {
    name: "AWS RDS",
    toolUrl: "https://miro.medium.com/max/800/1*KqNnfYtaVshGXbuGUCTOQw.png",
  },
  {
    name: "AWS VPC",
    toolUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/AWS_Simple_Icons_Virtual_Private_Cloud.svg/1200px-AWS_Simple_Icons_Virtual_Private_Cloud.svg.png",
  },
  {
    name: "AWS Cognito",
    toolUrl:
      "https://www.drupal.org/files/styles/grid-3-2x/public/project-images/553dbabbd287c26ca83aef42.jpg?itok=ruAqqobg",
  },
  {
    name: "AWS EC2",
    toolUrl: "https://cdn.quantiphi.com/2020/05/aws_ec2-1.jpg",
  },
  {
    name: "AWS Secret Manager",
    toolUrl: "https://opstree.github.io/cloud/static/aws_secret_manager.png",
  },
  {
    name: "AWS KMS",
    toolUrl: "https://symbols.getvecta.com/stencil_23/6_aws-kms.62bf270314.svg",
  },
  {
    name: "Terraform cloud",
    toolUrl:
      "https://d3pbgyccvprzn0.cloudfront.net/CIRC-338983-0a239c26c9/assets/terraform-cloud-logo-81769debed7594dfa089baf99d4a402aedadaaf69303482f37fac40d39e7c047.svg",
  },
];

export default Skills;
