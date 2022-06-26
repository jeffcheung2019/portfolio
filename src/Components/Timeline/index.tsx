import { Box, Grid, Typography } from '@mui/material';
import { headerHeight } from 'Layout/GlobalHeader';
import React, { useCallback, useMemo, useState } from 'react';
import "./index.scss"
import times from 'lodash/times'
import { colors } from 'Utils/constants';
type TimelineBtnDetail = {
    style: object

}

type TimelineProps = {
    onTimelineBtnClick: (idx: number) => void
    timelineBtnDetails: TimelineBtnDetail[]
    activeIdx: number
}

const Timeline = (props: TimelineProps) => {
    const {
        activeIdx,
        onTimelineBtnClick,
        timelineBtnDetails
    } = props

    return <Grid container item xs={12} position="relative" height="100px" justifyContent={"center"} alignItems="center">
        <div className='timeline-line' style={{ width: "100%" }} />
        {
            <div className="timeline-line"
                style={{
                    width: `${activeIdx * 100 / (timelineBtnDetails.length - 1)}%`,
                    left: 0,
                    transition: `width 1s`,
                    backgroundColor: colors.aquamarine
                }}
            />
        }
        {
            times(timelineBtnDetails.length).map((e, idx) => {
                return <Grid container item key={`Grid-${idx}`}
                    onClick={() => onTimelineBtnClick(idx)}
                    alignContent="center" justifyContent="center"
                    sx={{
                        borderRadius: 99,
                        width: 16,
                        height: 16,
                        cursor: "pointer",
                        position: "absolute",
                        "&:hover": {
                            filter: `drop-shadow(0px 0px 4px ${colors.aquamarine})`

                        },
                        ...timelineBtnDetails[idx].style,
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            height: 8,
                            width: 8,
                            zIndex: 2,
                            backgroundColor: "#fff",
                            borderRadius: 99,
                            transform: `translate(-50%, -50%)`,
                            "&:hover": {
                            }
                        }}
                    />
                </Grid>
            })
        }
    </Grid>

}



export default Timeline