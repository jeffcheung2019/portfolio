import { Box, ButtonBase, Grid, Typography } from '@mui/material';
// @ts-ignore
import { Avatar, AvatarStyle, TopType } from 'avataaars';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { colors } from 'Utils/constants';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
const About = () => {

    const onLinkedinClick = () => window.open("https://www.linkedin.com/in/jeff-cheung-54a496217/")
    return <Grid container flexDirection={"row"}
        p="40px 0px 40px 40px" position="relative"
        alignContent="flex-start" alignItems="center">
            <div style={{
                backgroundImage: `url(https://papers.co/wallpaper/papers.co-wb70-coding-rainbow-mac-pattern-background-23-wallpaper.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
                opacity: 0.1,
                position: "absolute",
                top: 0,left:0,
                backgroundAttachment: "fixed"
            }}/>
        <Grid container item xs={6} alignItems="center" 
            pl="60px"
            alignContent={"center"} height="100%">
            <Grid container item xs={12} height="100px">
                <Typography variant="h4">
                    About Me
                </Typography>
            </Grid>
            <Grid container item xs={12}>
                <Typography fontSize={[14, 18, 20, 22]}>
                    Hi, My name is jeff cheung. I am a fullstack developer from Hong Kong.
                </Typography>
                <Typography fontSize={[14, 18, 20, 22]}>
                    I am an extremely curious and self-motivated individual. I have a huge passion on knowing the whole process of how website is created. Being just a
                    frontend developer or backend developer can't satisfy my curiosity and passion.
                </Typography>
                <Typography fontSize={[14, 18, 20, 22]}>
                    As a developer, i always strive to do my best to deliver a better quality result.
                </Typography>
            </Grid>

            <Grid container item xs={12} alignItems="center" height="200px">
                <Grid container item width="60px">
                    <ButtonBase onClick={onLinkedinClick}>
                        <LinkedInIcon sx={{
                            color: colors.white,
                            width: 40, height: 40,
                            transition: `all ease-in-out 0.5s`,
                            "&:hover": {
                                color: colors.aquamarine,
                                transform: `translateY(-4px)`
                            }
                        }} />
                    </ButtonBase>
                </Grid>
                <Grid container item width="60px">
                    <ButtonBase onClick={() => window.open('mailto:jeffcheung2019@gmail.com')}>
                        <GoogleIcon sx={{
                            color: colors.white,
                            width: 40, height: 40,
                            transition: `all ease-in-out 0.5s`,
                            "&:hover": {
                                color: colors.aquamarine,
                                transform: `translateY(-4px)`
                            }
                        }} />
                    </ButtonBase>
                </Grid>
                <Grid container item width="60px">
                    <ButtonBase onClick={() => window.open('https://github.com/jeffcheung2019')}>
                        <GitHubIcon sx={{
                            color: colors.white,
                            width: 40, height: 40,
                            transition: `all ease-in-out 0.5s`,
                            "&:hover": {
                                color: colors.aquamarine,
                                transform: `translateY(-4px)`
                            }
                        }} />
                    </ButtonBase>
                </Grid>

                
            </Grid>
        </Grid>

        <Grid container item xs={6} sx={{
            display: ["flex", "flex", "flex"]
        }} alignItems="center" justifyContent="center" height="100%">
            <Box sx={{
                backgroundImage: `url(https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
                width: ["70%", "50%"],
                aspectRatio: `264 / 280`,
                animation: "appear 1s",
            }}
            />
        </Grid>
    </Grid>
}

export default About