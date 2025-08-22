import * as React from "react";
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
import { useNavigate } from "react-router-dom";

const pages = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Open-Source", path: "/open-source" },
  { label: "Articles", path: "/articles" },
  { label: "Reach-Out", path: "/reach-out" },
];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <AppBar position="static" sx={{
    background: "linear-gradient(to right, #141e30, #243b55)",
    }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* ---------- Left Section (Logo) ---------- */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontFamily: "Great Vibes, cursive",
                fontWeight: 700,
                color: "white",
              }}
            >
              Rohan&apos;s Portfolio
            </Typography>
          </Box>

          {/* ---------- Middle Section (Nav Links) ---------- */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.path}
                onClick={() => navigate(page.path)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)", // light grey on hover
                  },
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          {/* ---------- Mobile Menu Button (hamburger) ---------- */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.path}
                  onClick={() => {
                    navigate(page.path);
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
