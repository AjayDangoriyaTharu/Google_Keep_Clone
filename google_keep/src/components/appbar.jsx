import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Heading = styled(Typography)`
  color: #5f6368;
  font-size: 22px;
`;

const Header = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: 1201,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "#fff",
  boxShadow: "inset 0 -1px 0 0  #dadce0",
}));

const NavAppBar = ({ open, handleDrawerOpen }) => {
  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: "20px",
          }}
        >
          <MenuIcon />
        </IconButton>
        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt=""
        />
        <Heading>Keep</Heading>
      </Toolbar>
    </Header>
  );
};

export default NavAppBar;
