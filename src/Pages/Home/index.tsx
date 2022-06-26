import { Grid, Typography } from '@mui/material';
import { headerHeight } from 'Layout/GlobalHeader';
import About from 'Pages/About';
import Skills from 'Pages/Skills';
import WorkExperiences from 'Pages/WorkExperiences';
import React from 'react'; 

const Home = () => {
    return <Grid container>
        <Grid container item xs={12} height={`calc(100vh - ${headerHeight})`}>
            <About />
        </Grid>

        <Grid container item xs={12} height={`auto`}>
           <Skills />
        </Grid>

        <Grid container item xs={12} height={`calc(100vh - ${headerHeight})`}>
           <WorkExperiences />
        </Grid>
        
    </Grid>
}

export default Home