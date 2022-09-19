import { AddBoxRounded } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import React, { FC, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { colors } from 'Utils/constants';

let arrowBase64 = `url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTMxOS4xIDIxN2MyMC4yIDIwLjIgMTkuOSA1My4yLS42IDczLjdzLTUzLjUgMjAuOC03My43LjZsLTE5MC0xOTBjLTIwLjEtMjAuMi0xOS44LTUzLjIuNy03My43UzEwOSA2LjggMTI5LjEgMjdsMTkwIDE5MHoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzE5LjEgMjkwLjVjMjAuMi0yMC4yIDE5LjktNTMuMi0uNi03My43cy01My41LTIwLjgtNzMuNy0uNmwtMTkwIDE5MGMtMjAuMiAyMC4yLTE5LjkgNTMuMi42IDczLjdzNTMuNSAyMC44IDczLjcuNmwxOTAtMTkweiIvPjwvc3ZnPg==`

type FooterProps = {
    pageRefs: {
        coverRef: React.MutableRefObject<HTMLDivElement | null>,
        aboutRef: React.MutableRefObject<HTMLDivElement | null>,
        skillsRef: React.MutableRefObject<HTMLDivElement | null>,
        workExpRef: React.MutableRefObject<HTMLDivElement | null>,
    }
}

const Arrow: FC<{
    containerStyle: object,
}> = ({
    containerStyle
}) => {
        return <Box sx={{
            ...containerStyle,
        }}>
            <Box
                sx={{
                    transform: `rotate(-45deg)`,
                    width: "45%",
                    height: 20,
                    backgroundColor: colors.wildBlueYonder,
                    borderRadius: 99,
                    position: "absolute",
                    left: 30,
                }}
            />

            <Box
                sx={{
                    transform: `rotate(45deg)`,
                    width: "45%",
                    height: 20,
                    backgroundColor: colors.wildBlueYonder,
                    borderRadius: 99,
                    position: "absolute",
                    right: 30
                }}
            />
        </Box>
    }

const Footer: FC<FooterProps> = ({ pageRefs }) => {

    const [showAnimation, setShowAnimation] = useState(false)
    const onArrowMouseOver = () => setShowAnimation(true)

    const onArrowMouseLeave = () => setShowAnimation(false)

    const onArrowClick = () => {
        pageRefs?.coverRef?.current?.scrollIntoView({ behavior: "smooth" })
    }

    return <Grid container position="relative" overflow="hidden"

    >
        <Box
            sx={{
                backgroundImage: `url(https://papers.co/wallpaper/papers.co-wb70-coding-rainbow-mac-pattern-background-23-wallpaper.jpg)`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                opacity: 0.1,
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0, left: 0
            }}
        />
        <Box
            sx={{
                borderRadius: `50%`,
                position: "absolute",
                bottom: '-45vh',
                width: '200%',
                height: '90vh',
                background: colors.spaceCadet,
                zIndex: 2,
                left: "-48%",
            }}
        />


        <Box sx={{
            position: "absolute",
            top: "40%",
            left: "50%",
            zIndex: 3,
            transform: `scale(0.8)`
        }}>
            <Box onMouseOver={onArrowMouseOver}
                onMouseLeave={onArrowMouseLeave}
                onClick={onArrowClick}
                sx={{
                    position: "absolute",
                    top: 0,
                    transform: `translate(-50%, -50%)`,
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    backgroundColor: "aliceblue",
                    border: `8px solid ${colors.wildBlueYonder}`,
                    cursor: "pointer",

                }}>
                <Arrow containerStyle={{
                    position: "absolute",
                    bottom: "140px",
                    width: "100%",
                    ...(
                        showAnimation && ({
                            animation: `upperArrowMoveUp 0.7s infinite`
                        })
                    )
                }} />

                <Arrow containerStyle={{
                    position: "absolute",
                    bottom: '90px',
                    width: "100%",
                    ...(
                        showAnimation && ({
                            animation: `lowerArrowMoveUp 0.7s infinite`
                        })
                    )
                }} />

            </Box>
        </Box>

        <Box sx={{
            position: "absolute",
            bottom: 120,
            left: "50%",
            transform: `translate(-50%)`,
            zIndex: 4,
        }}>
            <Typography fontSize={[16, 22]} sx={{ textAlign: "center !important" }}>
                If you have any questions, feel free to contact me via email
            </Typography>

            <Typography fontSize={[16, 18]}
                sx={{ textAlign: "center !important", color: `${colors.aquamarine} !important` }}
            >
                jeffcheung2019@gmail.com
            </Typography>

        </Box>


    </Grid>
}

export default Footer