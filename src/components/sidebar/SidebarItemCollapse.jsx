import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import SidebarItem from "./SidebarItem";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const SidebarItemCollapse = ({ item }) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const [active, setActive] = useState("");

  const theme = useTheme();

  const { appState } = useSelector((state) => state.global.appState);

  useEffect(() => {
    if (appState?.includes(item.state)) {
      setOpen(true);
    }
  }, [appState, item]);

  return item.sidebarProps ? (
    <>
      <ListItemButton
        onClick={() => {setActive(item.path);setOpen(!open)}}
        sx={{
          backgroundColor:
            active === item.path ? theme.palette.secondary[300] : "transparent",
          color:
            active === item.path
              ? theme.palette.primary[600]
              : theme.palette.secondary[100],
        }}
      >
        <ListItemIcon
          sx={{
            ml: "1rem",
            color:
              active === item.path
                ? theme.palette.primary[600]
                : theme.palette.secondary[200],
          }}
        >
          {item.sidebarProps.icon && item.sidebarProps.icon}
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary={<Typography>{item.sidebarProps.displayText}</Typography>}
        />
        {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
        <List>
          {item.child?.map((route, index) =>
            route.sidebarProps ? (
              route.child ? (
                <SidebarItemCollapse item={route} key={index} />
              ) : (
                <SidebarItem item={route} key={index} />
              )
            ) : null
          )}
        </List>
      </Collapse>
    </>
  ) : null;
};

export default SidebarItemCollapse;
