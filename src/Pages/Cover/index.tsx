import { Box, ButtonBase, Grid, Typography } from '@mui/material';
import { headerHeight } from 'Layout/GlobalHeader';
import times from 'lodash/times';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { colors, routeNames, routes } from 'Utils/constants';


let intervalTimer: NodeJS.Timer

const Cover = () => {
    const canvasRef = useRef<null | HTMLCanvasElement>(null)

    const navigate = useNavigate()
    const [showUnderline, setShowUnderline] = useState(false)

    const onMouseOver = () => setShowUnderline(true)

    const onMouseLeave = () => setShowUnderline(false)

    const onExploreMoreClick = () => {
        navigate(routes.About)
    }

    useEffect(() => {
        if (canvasRef === null) return
        const canvas = canvasRef?.current
        const ctx = canvas?.getContext('2d')
        if (!(ctx instanceof CanvasRenderingContext2D) || canvas === null) return
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        
        let codeDtls = times(100).map(() => {
            return {
                x: Math.random() * canvas.width - 40,
                y: Math.random() * canvas.height,
                codeIdx: Math.floor(Math.random() * codes.length),
                fontSize: Math.floor(Math.random() * 12 + 12),
                codeColorIdx: Math.floor(Math.random() * codeColors.length)
            }
        })
        
        const onResizeCanvas = () => {
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = window.innerHeight;
        }
        window.addEventListener("resize", onResizeCanvas)

        intervalTimer = setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < codeDtls.length; i++) {
                let codeDtl = codeDtls[i]
                let currRandNo = Math.random()
                if (codeDtls[i].x > canvas.width) {
                    codeDtls[i] = {
                        x: Math.random() * canvas.width - 40,
                        y: Math.random() * canvas.height,
                        codeIdx: Math.floor(Math.random() * codes.length),
                        fontSize: Math.floor(Math.random() * 12 + 12),
                        codeColorIdx: Math.floor(Math.random() * codeColors.length)
                    }
                }
                codeDtls[i].x += 1
                ctx.font = `${codeDtls[i].fontSize}px Nunito`
                ctx.fillStyle = codeColors[codeDtls[i].codeColorIdx]
                ctx.shadowColor = codeColors[codeDtls[i].codeColorIdx]
                ctx.shadowOffsetX = 1;
                ctx.shadowOffsetY = 1;
                ctx.fillText(codes[codeDtls[i].codeIdx], codeDtls[i].x, codeDtls[i].y);
            }

        }, 1000 / 10)

        return () => {
            clearInterval(intervalTimer)
            window.removeEventListener("resize", onResizeCanvas)

        }

    }, [canvasRef])

    return <Grid container justifyContent="center" position="relative" alignItems="center">
        <canvas ref={canvasRef} style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.1,
            zIndex: 1,
        }} />
        <Grid container item xs={12} position="absolute" zIndex={2}>
            <Grid container item xs={12} height="60px" justifyContent="center">
                <Typography fontSize={"36px"}>
                    Hello, I am
                </Typography>
                <Box
                    onMouseOver={onMouseOver}
                    onMouseLeave={onMouseLeave}
                    sx={{
                        position: "relative",
                        paddingLeft: "10px",
                        cursor: "pointer"
                    }}>
                    <Typography sx={{
                        color: `${colors.aquamarine} !important`,
                    }} fontSize={"36px"}>Jeff Cheung</Typography>
                    <Box sx={{
                        height: "2px",
                        width: showUnderline ? "95%" : "0%",
                        position: "absolute",
                        bottom: 8,
                        backgroundColor: colors.aquamarine,
                        transition: "all 0.5s"
                    }} />
                </Box>
            </Grid>
            <Grid container item xs={12} height="60px" justifyContent="center">
                <Typography fontSize={"36px"}>
                    I am a full stack developer.
                </Typography>
            </Grid>
            <Grid container item xs={12} height="100px" pt="20px" justifyContent="center">
                <ButtonBase sx={{
                    border: `1px solid ${colors.aquamarine}`,
                    borderRadius: "6px",
                    color: colors.aquamarine,
                    width: "180px",
                    height: "60px",
                    fontSize: "20px",
                    transition: "all ease-in-out 0.5s",
                    fontFamily: "Nunito",
                    fontWeight: "bold",
                    "&:hover": {
                        backgroundColor: colors.aquamarine,
                        color: colors.spaceCadet,
                        transform: "scale(1.1)"
                    }
                }}
                    onClick={onExploreMoreClick}
                >
                    Explore
                </ButtonBase>

            </Grid>
        </Grid>

    </Grid>
}

export default Cover


const codes = [
    "<div>",
    "<br />",
    "@import",
    "<script></script>",
    "elif",
    "if",
    "instanceof",
    "typeof",
    `$("className")`,
    "String[]",
    "env.type",
    "Select * from Table",
    "Console.log()",
    "sh deploy.sh",
    "b.push(a[c])",
    "a.length - 1",
    "signal.Stop()",
    "a := b",
    "grep",
    "cd",
    "mkdir",
    "docker",
    "javascript",
    "html",
    "css",
    "scss",
    "sass",
    "export",
    "debug",
    "Math.random()",
    "Update table",
    "def function",
]

const codeColors = [
    "#C0392B",
    "#EC7063",
    "#AF7AC5",
    "#8E44AD",
    "#5499C7",
    "#3498DB",
    "#48C9B0",
    "#138D75",
    "#52BE80",
    "#ABEBC6",
    "#F7DC6F",
    "#FAD7A0",
    "#CA6F1E",
    "#85929E",
    "#ABB2B9",
    "#BFC9CA"
]