import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import About from "Pages/About";
import NotFound from "Pages/NotFound";
import PageRoutes from "Pages/PageRoutes";
import Skills from "Pages/Skills";
import Projects from "Pages/Projects";
import React, { FC, useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import GlobalHeader from "./GlobalHeader";
import { headerHeight } from "Layout/GlobalHeader";
import { colors, routeNames } from "Utils/constants";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import HomeIcon from "@mui/icons-material/Home";
import TerminalIcon from "@mui/icons-material/Terminal";
import jeffIcon from "Assets/Images/jeff_icon.png";
type LayoutProps = {};

const routeItems = [
  {
    name: "Home",
    icon: <HomeIcon sx={{ color: colors.gainsboro }} />,
    routeName: routeNames.Home,
  },
  {
    name: "About",
    icon: <AccountCircleIcon sx={{ color: colors.gainsboro }} />,
    routeName: routeNames.About,
  },
  {
    name: "Skills",
    icon: <TerminalIcon sx={{ color: colors.gainsboro }} />,
    routeName: routeNames.Skills,
  },
  {
    name: "Projects",
    icon: <ViewModuleIcon sx={{ color: colors.gainsboro }} />,
    routeName: routeNames.Projects,
  },
];

const getWindowDimensions = () => {};

const Layout: FC<LayoutProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const onRouteItemClick = (routeName: string) => {
    navigate(routeName);
  };
  const [drawerWidth, setDrawerWidth] = useState(200);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      // setWindowDimensions(getWindowDimensions());
      if (window.innerWidth >= 768) {
        setDrawerWidth(200);
      } else {
        setDrawerWidth(60);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Grid container height="100%">
      {location.pathname.includes(routeNames.Home) ? null : (
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            overflow: "hidden",
            opacity: 0.95,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: colors.spaceCadet,
              borderColor: "transparent",
              padding: "0px 8px",
              alignItems: "flex-end",
            },
          }}
          variant="persistent"
          anchor="left"
          open={true}
        >
          <Box
            sx={{
              width: ["60%", "20%"],
              marginBottom: "auto",
              marginTop: "20px",
              padding: "8px",
            }}
          >
            <img src={jeffIcon} style={{ width: "100%" }} />
          </Box>
          <List
            sx={{
              alignItems: "flex-end",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              marginBottom: "auto",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            {routeItems.map((elem, index) => (
              <Button
                onClick={() => onRouteItemClick(elem.routeName)}
                sx={{
                  justifyContent: "flex-end",
                  minWidth: 40,
                  margin: "10px 0px",
                  padding: "8px",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <Tooltip title={elem.name} placement="right">
                  <ListItemIcon
                    sx={{
                      minWidth: 40,
                      justifyContent: "center",
                    }}
                  >
                    {elem.icon}
                  </ListItemIcon>
                </Tooltip>
              </Button>
            ))}
          </List>
        </Drawer>
      )}
      <Grid
        container
        item
        height="100%"
        sx={{
          backgroundColor: colors.spaceCadet,
          width: location.pathname.includes(routeNames.Home)
            ? "100%"
            : `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <PageRoutes />
      </Grid>
    </Grid>
  );
};

export default Layout;
