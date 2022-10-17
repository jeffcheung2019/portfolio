import { ButtonBase, Grid, Typography } from '@mui/material';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { colors, routes, routeNames } from 'Utils/constants';
import map from 'lodash/map'
export const headerHeight = "100px"


const GlobalHeader = () => {
    const navigate = useNavigate()
    const onRouteClick = (routeName: string) => {
        navigate(routeName)
    }

    return <Grid container sx={{
        backgroundColor: colors.eerieBlack,
        height: headerHeight,
        alignItems: "center",
        paddingLeft: "40%",
        paddingRight: "10%"
    }}>
        {
            map(Object.keys(routeNames), (routeName: string, idx: number) => {
                return <Grid item xs key={`Grid-title-${idx}`}
                    sx={{
                        cursor: "pointer",
                        fontSize: 20,
                        fontWeight: "bold",
                        color: colors.philippineGray,
                        "&:hover": {
                            color: colors.aquamarine
                        }
                    }}
                >
                    <ButtonBase onClick={() => onRouteClick(routes[routeName])}>
                        <Typography>
                            {routeNames[routeName]}
                        </Typography>
                    </ButtonBase>
                </Grid>
            })
        }
    </Grid>
}

export default GlobalHeader