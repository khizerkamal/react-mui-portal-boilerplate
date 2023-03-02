import { ListItemButton, ListItemIcon, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const SidebarItem = ({ item }) => {
  const { appState } = useSelector((state) => state.global.appState);
  const theme = useTheme();

  return (
    item.sidebarProps && item.path ? (
      <ListItemButton
        component={Link}
        to={item.path}
        sx={{
          backgroundColor: "transparent",
          color: theme.palette.secondary[100],
        }}
      >
        <ListItemIcon  sx={{
            ml: "1rem",
            color: theme.palette.secondary[100]
          }}>
          {item.sidebarProps.icon && item.sidebarProps.icon}
        </ListItemIcon>
        {item.sidebarProps.displayText}
      </ListItemButton>
    ) : null
  );
};

export default SidebarItem;