import { Box, ButtonBase, Grid, Typography } from '@mui/material';
// @ts-ignore
import React, { FC, useEffect, useRef, useState } from 'react';
import { colors } from 'Utils/constants';
import { ReactComponent as Avatar } from 'Assets/Svg/avatar.svg';
import throttle from 'lodash/throttle'

let eyeEventListener: any

type AnimatedAvatarProps = {
    isVisible: boolean
}

const AnimatedAvatar: FC<AnimatedAvatarProps> = ({ isVisible }) => {

    const svgRef = useRef<SVGSVGElement | null>(null)
    const [translateXY, setTranslateXY] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        let svgRefCurr = svgRef?.current
        if (svgRefCurr) {

            let eyes = svgRefCurr.getElementById("Eyes/Default")
            let glasses = svgRefCurr.getElementById("Top/_Resources/Prescription-02")

            eyeEventListener = window.addEventListener("mousemove", throttle((e) => {
                let dx = e.clientX / window.innerWidth - 0.5
                let dy = e.clientY / window.innerHeight
                if (isVisible) {
                    setTranslateXY({
                        x: dx * 18,
                        y: dy * 18
                    })
                    // eyes.setAttribute("transform", `translate(${dx * 10}, ${dy * 10})`)
                    // glasses.setAttribute("transform", `translate(${dx * 2 + 65}, ${dy * 2 + 85})`)
                }
            }, 1000 / 30))

            return () => {
                window.removeEventListener("mousemove", eyeEventListener)
            }
        }
    }, [svgRef, isVisible])
    

    return (<Box position="relative">
        <Avatar ref={svgRef} style={{
          filter: `drop-shadow(${translateXY.x}px ${translateXY.y}px 10px ${colors.wildBlueYonder})`  
        }}/>
        <Box sx={{
            borderRadius: 99,
            width: 10,
            height: 10,
            backgroundColor: colors.eerieBlack,
            position: "absolute",
            top: `${100}px`,
            left: `${100}px`,
            transform: `translate(${translateXY.x}px,${translateXY.y}px)`,
        }}></Box>
        <Box sx={{
            borderRadius: 99,
            width: 10,
            height: 10,
            backgroundColor: colors.eerieBlack,
            position: "absolute",
            top: `${100}px`,
            right: `${100}px`,
            transform: `translate(${translateXY.x}px,${translateXY.y}px)`
        }}></Box>
    </Box>)
}

export default AnimatedAvatar