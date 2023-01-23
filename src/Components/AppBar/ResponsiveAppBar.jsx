import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';

const pages = [{
  name: 'Portfolio',
  destination: '/'
},
{
  name: 'Blog',
  destination: '/blogs'
}];




const ResponsiveAppBar = () => {
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
    <div style={{position:"fixed", zIndex:"10",width:"100%"}}>
    <AppBar position="static" sx={{backgroundColor: "black" }}>
      <Container maxWidth="xl" sx={{backgroundColor: "black" }}>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 ,backgroundColor: "black" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            YOGI-CODES
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },backgroundColor: "black"  }}>
            {pages.map((page, index) => (
              <Link to={`${page.destination}`} style={{textDecoration: "none"}} >
              <Button
                className="no-hover"
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block'  }}
              >
                {page.name}
              </Button>
              </Link>
            ))}
               <a href="https://github.com/Yogi-Codes/Resume" target="_blank" rel="noreferrer"> 
              <Button
                className="no-hover"
                key="Resume"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block'  }}
              >
                Resume
              </Button>
              </a>
              
          </Box>

          <Box sx={{ flexGrow: 0 ,backgroundColor: "black" }}>
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                    <MenuItem key={`Home`} onClick={handleCloseUserMenu}>
                    <Link to="/" style={{textDecoration: "none"}} >
                     <Typography color="black"  textAlign="center">{`Home`}</Typography>
                      </Link>
                      </MenuItem>
                      <MenuItem key={`Blogs`} onClick={handleCloseUserMenu}>
                    <Link to="/blogs" style={{textDecoration: "none"}} >
                     <Typography color="black"  textAlign="center">{`Blogs`}</Typography>
                      </Link>
                      </MenuItem>
                      <MenuItem key={`New Blog`} onClick={handleCloseUserMenu}>
                    <Link to="/blogs/new" style={{textDecoration: "none"}} >
                     <Typography color="black"  textAlign="center">{`New Blog`}</Typography>
                      </Link>
                      </MenuItem>
                      
            </Menu>
            <div style={{display:"flex", justifyContent:"right",alignItems:"center",width:"100%"}} className="nohover"  >
            <Tooltip title="Open settings" className='no-hover' >
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 , mr:10 }} className="no-hover">
                <Avatar alt="Remy Sharp" src="https://tryhackme-images.s3.amazonaws.com/user-avatars/6ba0d49c3dd47aeb901c29d701c8d426.jpg" />
              </IconButton>
            
            </Tooltip>
            <Tooltip title="Github" className='no-hover' >
            <a href="https://github.com/Yogi-Codes" rel="noreferrer" target="_blank">
              <IconButton  sx={{ p: 0,mr:2 }} className="no-hover" >

                <Avatar alt="Remy Sharp" src="https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://github.com&size=256" />
              </IconButton>
              </a>
            </Tooltip>
            <Tooltip title="Youtube" className='no-hover' >
            <a href="https://www.youtube.com/@yogicodes" rel="noreferrer" target="_blank">
              <IconButton  sx={{ p: 0,mr:2 }} className="no-hover">
                <Avatar alt="Remy Sharp" src="https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://youtube.com&size=256" />
              </IconButton>
              </a>
            </Tooltip>
            <Tooltip title="Linkedin" className='no-hover' >
            <a href="https://www.linkedin.com/in/anik-ghosh-954a85202/" rel="noreferrer" target="_blank">
              <IconButton  sx={{ p: 0,mr:2 }} className="no-hover">
                <Avatar alt="Remy Sharp" src="https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://linkedin.com&size=256" />
              </IconButton>
              </a>
            </Tooltip>
            <Tooltip title="Twitter" className='no-hover' >
            <a href="https://twitter.com/The_Darkist" rel="noreferrer" target="_blank">
              <IconButton  sx={{ p: 0,mr:2 }} className="no-hover">
                
                <Avatar alt="Remy Sharp" src="https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://twitter.com&size=256" />
              </IconButton>
              </a>
            </Tooltip>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
};
export default ResponsiveAppBar;
