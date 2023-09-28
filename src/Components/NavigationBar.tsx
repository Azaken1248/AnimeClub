import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styled from "styled-components";
import logoWhite from "../assets/logo-white.png";

//import LogoBlack from "../assets/LogoBlack.png";

interface Props {
  window?: () => Window;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const MangaStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Caveat+Brush&display=swap");
`;

const drawerWidth = 240;
const navItems = ["Home", "Events", "Members", "Contact Us"];

export default function DrawerAppBar(props: Props) {
  const { window, setCurrentPage } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  if (isLoggedIn == true) {
    setIsLoggedIn(true);
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        color: "#FFFFFF",
        backgroundColor: "#121212",
        fontFamily: "cursive",
      }}
    >
      <Typography variant="h6" sx={{ my: 2, fontFamily: "cursive" }}>
        <MangaStyle>VITC - Anime Realm</MangaStyle>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", fontFamily: "cursive" }}
              onClick={() => handleNavigate(item.toLowerCase())}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    console.log(page);
    setMobileOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#121212" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 3, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ height: "8%", width: "10%" }}>
            <img
              src={logoWhite}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                paddingTop: "6px",
              }}
            />
          </Box>
          {/*<Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 0,
              paddingRight: "50%",
              display: {
                xs: "none",
                sm: "block",
                fontFamily: "cursive",
                fontSize: "1.5em",
              },
            }}
          >
            <MangaStyle>VITC - Anime Realm</MangaStyle>
        </Typography>*/}
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                paddingLeft: "58.47%",
                paddingRight: "0%",
              },
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  position: "relative",
                  color: "#FFFFFF",
                  backgroundColor: "#121212",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  height: "8%",
                  fontFamily: "cursive",
                  fontSize: "0.9em",
                  "&:hover": {
                    backgroundColor: "#FFFFFF",
                    color: "#121212",
                  },
                  "&:focus": {
                    outline: "none",
                  },
                }}
                onClick={() => handleNavigate(item.toLowerCase())}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#121212",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box> */}
    </Box>
  );
}
