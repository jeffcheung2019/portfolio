import { Grid, Typography } from '@mui/material';
import { headerHeight } from 'Layout/GlobalHeader';
import About from 'Pages/About';
import Skills from 'Pages/Skills';
import Cover from 'Pages/Cover';
import Works from 'Pages/Works';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { routeNames, routes } from 'Utils/constants';
import Footer from 'Pages/Footer';

let targetIdsSet = new Set<String>(["cover", "about", "skills", "workExp"])

const difference = (currSet: Set<String>, otherSet: Set<String>) => {
    var differenceSet = new Set<String>();

    currSet.forEach((elem) => {
        if (!otherSet.has(elem))
            differenceSet.add(elem);
    })

    return differenceSet;
}

const Home = () => {
    const homeRef = useRef<HTMLDivElement | null>(null)
    const coverRef = useRef<HTMLDivElement | null>(null)
    const aboutRef = useRef<HTMLDivElement | null>(null)
    const skillsRef = useRef<HTMLDivElement | null>(null)
    const workExpRef = useRef<HTMLDivElement | null>(null)

    const [coverIsVisible, setCoverIsVisible] = useState<boolean>(false)
    const [aboutIsVisible, setAboutIsVisible] = useState<boolean>(false)
    const [skillsIsVisible, setSkillsIsVisible] = useState<boolean>(false)
    const [workExpIsVisible, setWorkExpIsVisible] = useState<boolean>(false)

    useEffect(() => {
        let coverRefCurr = coverRef?.current
        let aboutRefCurr = aboutRef?.current
        let skillsRefCurr = skillsRef?.current
        let workExpRefCurr = workExpRef?.current

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                let currTarget = entry?.target?.id
                if (currTarget === 'cover') {
                    setCoverIsVisible(entry.isIntersecting)
                } else if (currTarget === 'about') {
                    setAboutIsVisible(entry.isIntersecting)
                } else if (currTarget === 'skills') {
                    setSkillsIsVisible(entry.isIntersecting)
                }
            })
        });

        // if (coverRefCurr && aboutRefCurr && skillsRefCurr && workExpRefCurr) {
        //     observer.observe(coverRefCurr);
        //     observer.observe(aboutRefCurr);
        //     observer.observe(skillsRefCurr);
        //     observer.observe(workExpRefCurr);
        //     return () => {
        //         observer.unobserve(coverRefCurr!);
        //         observer.unobserve(aboutRefCurr!);
        //         observer.unobserve(skillsRefCurr!);
        //         observer.unobserve(workExpRefCurr!);
        //     }
        // }

    }, [coverRef, aboutRef, skillsRef, workExpRef])

    return <Grid container ref={homeRef}>
        <Grid container item xs={12} height={`100vh`} ref={coverRef} id="cover">
            <Cover pageRefs={{
                coverRef,
                aboutRef,
                skillsRef,
                workExpRef
            }} />
        </Grid>

        <Grid container item xs={12} height={`100vh`} ref={aboutRef} id="about">
            <About
                pageRefs={{
                    coverRef,
                    aboutRef,
                    skillsRef,
                    workExpRef
                }}
                isVisible={aboutIsVisible}
            />
        </Grid>

        <Grid container item xs={12} height={`auto`} ref={skillsRef} id="skills">
            <Skills pageRefs={{
                coverRef,
                aboutRef,
                skillsRef,
                workExpRef
            }} />
        </Grid>

        <Grid container item xs={12} height={`auto`} ref={workExpRef} id="skills">
            <Works pageRefs={{
                coverRef,
                aboutRef,
                skillsRef,
                workExpRef
            }} />
        </Grid>

        <Grid container item xs={12} height={`80vh`}>
            <Footer pageRefs={{
                coverRef,
                aboutRef,
                skillsRef,
                workExpRef

            }}/>
        </Grid>
    </Grid>
}

export default Home