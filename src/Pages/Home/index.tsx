import { Grid, Typography } from '@mui/material';
import { headerHeight } from 'Layout/GlobalHeader';
import About from 'Pages/About';
import Skills from 'Pages/Skills';
import Cover from 'Pages/Cover';
import WorkExperiences from 'Pages/WorkExperiences';
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { routeNames, routes } from 'Utils/constants';
// @ts-ignore
import { useIsVisible } from 'react-is-visible'

const Home = () => {
    const location = useLocation()
    const coverRef = useRef<null | HTMLDivElement>(null)
    const aboutRef = useRef<null | HTMLDivElement>(null)
    const skillsRef = useRef<null | HTMLDivElement>(null)
    const workExpRef = useRef<null | HTMLDivElement>(null)

    const isCoverVisible = useIsVisible(coverRef)
    const isAboutVisible = useIsVisible(aboutRef)
    const isSkillsVisible = useIsVisible(skillsRef)
    const isWorkExpVisible = useIsVisible(workExpRef)

    useEffect(() => {
        if (workExpRef === null || aboutRef === null || coverRef === null || skillsRef === null) return
        switch (location.pathname) {
            case routes.Cover:
                coverRef?.current?.scrollIntoView({behavior: "smooth"})
                break
            case routes.Home:
                break
            case routes.About:
                aboutRef?.current?.scrollIntoView({behavior: "smooth"})
                break
            case routes.Skills:
                skillsRef?.current?.scrollIntoView({behavior: "smooth"})
                break
            case routes.Experiences:
                workExpRef?.current?.scrollIntoView({behavior: "smooth"})
                break

        }
    }, [location.pathname, 
        coverRef, aboutRef, skillsRef, workExpRef])

    return <Grid container>
        <Grid container item xs={12} height={`100vh`} ref={coverRef}>
            <Cover />
        </Grid>

        <Grid container item xs={12} height={`100vh`} ref={aboutRef}>
            <About />
        </Grid>

        <Grid container item xs={12} height={`auto`} ref={skillsRef}>
            <Skills />
        </Grid>

        <Grid container item xs={12} height={`100vh`} ref={workExpRef}>
            <WorkExperiences />
        </Grid>

    </Grid>
}

export default Home