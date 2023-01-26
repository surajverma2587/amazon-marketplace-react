import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useApp } from "../context/AppProvider";

export const NavigationBar = () => {
  const navigate = useNavigate();
  const { basket } = useApp();
  const [showNavMenu, setShowNavMenu] = useState(false);

  const handleOpenNavMenu = (event) => {
    setShowNavMenu(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setShowNavMenu(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* nav bar for mobile viewports */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={showNavMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(showNavMenu)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/");
                }}
              >
                <Typography textAlign="center">Home</Typography>
              </MenuItem>

              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/wish-list");
                }}
              >
                <Typography textAlign="center">Wish List</Typography>
              </MenuItem>

              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/checkout");
                }}
              >
                <Typography textAlign="center">Checkout</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* nav bar for desktop viewports */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Button>

            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/wish-list");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Wish List
            </Button>

            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/checkout");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Checkout
            </Button>
          </Box>

          {/* box to contain the icons */}
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={basket.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
