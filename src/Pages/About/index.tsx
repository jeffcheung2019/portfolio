import { Box, ButtonBase, Grid, Typography } from '@mui/material';
// @ts-ignore
import React, { FC, useEffect, useRef, useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { colors } from 'Utils/constants';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./index.scss"
import AnimatedAvatar from 'Components/AnimatedAvatar';
import { useParallax } from 'react-scroll-parallax';

type AboutProps = {
    pageRefs: {
        coverRef: React.MutableRefObject<HTMLDivElement | null>,
        aboutRef: React.MutableRefObject<HTMLDivElement | null>,
        skillsRef: React.MutableRefObject<HTMLDivElement | null>,
        workExpRef: React.MutableRefObject<HTMLDivElement | null>,
    },
    isVisible: boolean
}

const About: FC<AboutProps> = ({ pageRefs, isVisible }) => {

    let coverClientHeight: number | undefined = pageRefs?.coverRef?.current?.clientHeight
    let aboutClientHeight: number | undefined = pageRefs?.aboutRef?.current?.clientHeight
    const { ref: parallaxRef } = useParallax<HTMLDivElement>({
        // easing: 'easeInOut',
        // translateY: [0, 100],

        startScroll: 0,
        endScroll: (coverClientHeight !== undefined ? coverClientHeight : 0),
        scale: [0.5, 1],
        opacity: [0, 1],
        rootMargin: {
            top: 0, left: 0, right: 0,
            bottom: 200
        }
    });

    const onLinkedinClick = () => window.open("https://www.linkedin.com/in/jeff-cheung-54a496217/")
    return <Grid container flexDirection={"row"}
        overflow="hidden"
        position="relative"
        alignContent="flex-start" alignItems="center">
        <Box sx={{
            backgroundImage: `url(https://papers.co/wallpaper/papers.co-wb70-coding-rainbow-mac-pattern-background-23-wallpaper.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            opacity: 0.1,
            position: "absolute",
            top: 0, left: 0,
            backgroundAttachment: "fixed"
        }} />

        <Grid ref={parallaxRef} container item xs={12} alignItems="center"
            justifyContent="center"
            alignContent={"center"} height="100%">

            <Grid container item xs={12} sx={{
                animation: `appear 3s`,
                paddingBottom: "20px",
            }} alignItems="center" justifyContent="center">
                <AnimatedAvatar isVisible={isVisible} />
            </Grid>

            <Grid container item xs={12} px={["40px", "80px", "250px", "300px"]} py="30px" justifyContent="center" alignItems="center">
                <Typography fontSize={[14, 16, 18]} sx={{ textAlign: "center !important" }}>
                    Hi, My name is jeff cheung.
                </Typography>
                <Typography fontSize={[14, 16, 18]} sx={{ textAlign: "center !important" }}>
                    I am a fullstack developer from Hong Kong.
                </Typography>
                <Typography fontSize={[14, 16, 18]} sx={{ textAlign: "center !important" }}>
                    I am an extremely curious and self-motivated individual, passionate about knowing how everything in web & mobile app development works. Just focusing on frontend / backend can't satisfy my curiosity.
                </Typography>
            </Grid>

            <Grid container item xs={12} alignItems="center" justifyContent="center">
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


    </Grid>
}

export default About