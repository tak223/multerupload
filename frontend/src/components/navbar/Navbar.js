import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { TextField } from "@mui/material";
import {  Link } from "react-router-dom";
import Logo from "../../img/Logo3.png";


const pages = ["Home", "Products", "DoctorList"];
const settings = ["Profile", "Logout", "My Basket", "My Favorites"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/Home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
         <img src={Logo} alt="logo"   style={{
            resizeMode: "cover",
            height: 150,
            width: 150,
            marginTop:"-30px",
            marginLeft:"60px",
            marginBottom:"-13px",
          }}/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }}}>
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton> */}
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
              
            >
             {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" >
                    <Link to ={`/${page}`}>{page}</Link>
                   
                  
                  </Typography>
                </MenuItem>
              ))}
              
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              {/* ************hethi mta3 css nav bar********* */}
          <Box sx={{ flexGrow: 1 , display: { xs: "none", md: "flex" , marginTop:"30px"} }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                
                sx={{ my: 2, color: "white", display: "block" }}
             
              >
                  <Link  style={{ textDecoration:"none", color: "white" }} to ={`/${page}`}>{page}</Link>
              </Button>
            ))}
          </Box>
          {/* ************hetha text fild************** */}
          <TextField
         
            id="standard-basic"
            label="search"
            variant="standard"
            className="search"
            
            style={{
              color: "white",
              marginTop:"-29px",
              marginLeft:"60px",
              marginBottom:"-13px",
           
            }}
            
          />

          {/* *****hetha drop menue*******  */}
          <Box sx={{ flexGrow: 0 }}    style={{
             
             marginTop:"-10px",
             marginLeft:"40px",
             marginBottom:"-13px",
             marginRight:"120px"
           }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"  style={{width:"55px",height:"55px"}} />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
