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
import React, { FC, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import GlobalHeader from "./GlobalHeader";
import { headerHeight } from "Layout/GlobalHeader";
import { colors, routeNames } from "Utils/constants";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import HomeIcon from "@mui/icons-material/Home";
import TerminalIcon from "@mui/icons-material/Terminal";
type LayoutProps = {};

const drawerWidth = 60;

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
const Layout: FC<LayoutProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const onRouteItemClick = (routeName: string) => {
    navigate(routeName);
  };
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
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.spaceCadet,
              borderColor: "transparent",
              padding: "0px 8px",
            },
          }}
          variant="persistent"
          anchor="left"
          open={true}
        >
          <List
            sx={{
              alignItems: "center",
              width: "100%",
            }}
          >
            {routeItems.map((elem, index) => (
              <ListItem key={elem.name} disablePadding>
                <ListItemButton
                  onClick={() => onRouteItemClick(elem.routeName)}
                  sx={{
                    justifyContent: "center",
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
                </ListItemButton>
              </ListItem>
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
