import { createTheme } from "@mui/material";
import { colors } from "Utils/constants";

const theme = createTheme({
    components: {
        // Name of the component ⚛️
        MuiButtonBase: {
            defaultProps: {
                // The default props to change
                disableRipple: true, // No more ripple, on the whole application 💣!
            },
        },
        MuiTypography: {
            defaultProps: {
                style: {
                    animation: `appear 1s`,
                    textAlign: "left",
                    fontFamily:"Nunito",
                    color: colors.wildBlueYonder
                }
            }
        }
    },
});

export default theme