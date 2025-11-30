import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import './ResponsiveAppBar.css';

const pages = [{
  name: 'Portfolio',
  destination: '/',
  icon: '📁'
},
{
  name: 'Blog',
  destination: '/blogs',
  icon: '📝'
}];

const socialLinks = [
  { title: 'Github', url: 'https://github.com/Yogi-Codes', icon: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://github.com&size=256' },
  { title: 'Youtube', url: 'https://www.youtube.com/@yogicodes', icon: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://youtube.com&size=256' },
  { title: 'LinkedIn', url: 'https://www.linkedin.com/in/anik-ghosh-954a85202/', icon: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://linkedin.com&size=256' },
  { title: 'X (Twitter)', url: 'https://x.com/yogicodes101', icon: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://twitter.com&size=256' }
];

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
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

  const handleNavigation = (destination) => {
    if (destination.startsWith('http')) {
      window.open(destination, '_blank');
    } else {
      navigate(destination);
      handleCloseNavMenu();
    }
  };

  return (
    <div style={{position:"fixed", zIndex:"10", width:"100%"}}>
      <AppBar 
        position="static" 
        sx={{
          backgroundColor: "#0a0a0a",
          backgroundImage: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
          borderBottom: "1px solid rgba(76, 175, 80, 0.1)"
        }}
      >
        <Container maxWidth="xl" sx={{backgroundColor: "transparent"}}>
          <Toolbar disableGutters sx={{gap: 3, py: 1}}>
            {/* Logo */}
            <Box 
              onClick={() => handleNavigation('/')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#fff'
                }}
              >
                Y
              </Box>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 800,
                  letterSpacing: '.1rem',
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '16px',
                  background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                YOGI-CODES
              </Typography>
            </Box>

            {/* Mobile Menu Icon */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }} />
            <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
              {socialLinks.map((social) => (
                <Tooltip key={social.title} title={social.title} enterDelay={300}>
                  <IconButton 
                    onClick={() => window.open(social.url, '_blank')}
                    className="social-icon-button-mobile"
                    sx={{ p: 0.5 }}
                  >
                    <Avatar alt={social.title} src={social.icon} sx={{width: 28, height: 28}} />
                  </IconButton>
                </Tooltip>
              ))}
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                className="nav-menu-icon"
                sx={{
                  color: '#fff',
                  ml: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(76, 175, 80, 0.1)'
                  }
                }}
              >
                {Boolean(anchorElNav) ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>

            {/* Mobile Menu */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  backgroundColor: '#1a1a2e',
                  backgroundImage: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                  border: '1px solid rgba(76, 175, 80, 0.2)',
                  borderRadius: '12px',
                  mt: 1
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page.name} 
                  onClick={() => handleNavigation(page.destination)}
                  sx={{
                    color: '#fff',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(76, 175, 80, 0.15)',
                      color: '#4CAF50',
                      paddingLeft: '20px'
                    }
                  }}
                >
                  <span style={{marginRight: '8px'}}>{page.icon}</span>
                  <Typography>{page.name}</Typography>
                </MenuItem>
              ))}
              <MenuItem 
                onClick={() => handleNavigation('https://github.com/Yogi-Codes/Resume')}
                sx={{
                  color: '#fff',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(76, 175, 80, 0.15)',
                    color: '#4CAF50',
                    paddingLeft: '20px'
                  }
                }}
              >
                <span style={{marginRight: '8px'}}>📄</span>
                <Typography>Resume</Typography>
              </MenuItem>
            </Menu>

            {/* Desktop Navigation */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
              {pages.map((page) => (
                <Box
                  key={page.name}
                  onClick={() => handleNavigation(page.destination)}
                  className="nav-button-redesign"
                  sx={{ 
                    color: 'white',
                    position: 'relative',
                    fontSize: '14px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    padding: '10px 20px',
                    borderRadius: '6px',
                    border: '2px solid transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    whiteSpace: 'nowrap',
                    '&:hover': {
                      color: '#4CAF50',
                      borderColor: 'rgba(76, 175, 80, 0.6)',
                      boxShadow: 'inset 0 0 0 1px rgba(76, 175, 80, 0.5)',
                      backgroundColor: 'transparent'
                    }
                  }}
                >
                  {page.icon} {page.name}
                </Box>
              ))}
              <Box
                onClick={() => handleNavigation('https://github.com/Yogi-Codes/Resume')}
                className="nav-resume-btn"
                sx={{ 
                  color: 'white',
                  position: 'relative',
                  fontSize: '14px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.2) 0%, rgba(76, 175, 80, 0.1) 100%)',
                  border: '1px solid rgba(76, 175, 80, 0.3)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.3) 0%, rgba(76, 175, 80, 0.2) 100%)',
                    boxShadow: '0 4px 16px rgba(76, 175, 80, 0.35)',
                    borderColor: 'rgba(76, 175, 80, 0.6)',
                    color: '#4CAF50'
                  }
                }}
              >
                📄 Resume
              </Box>
            </Box>

            {/* Desktop Social Icons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center', ml: 2 }}>
              <Box sx={{height: '30px', width: '1px', backgroundColor: 'rgba(76, 175, 80, 0.2)'}} />
              {socialLinks.map((social) => (
                <Tooltip key={social.title} title={social.title} enterDelay={300} leaveDelay={200}>
                  <IconButton 
                    onClick={() => window.open(social.url, '_blank')}
                    className="social-icon-button"
                    sx={{ 
                      p: 0.5,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.2)'
                      }
                    }}
                  >
                    <Avatar alt={social.title} src={social.icon} sx={{width: 32, height: 32}} />
                  </IconButton>
                </Tooltip>
              ))}
            </Box>

            {/* Settings Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}>
              <Menu
                sx={{ 
                  mt: '45px',
                  '& .MuiPaper-root': {
                    backgroundColor: '#1a1a2e',
                    backgroundImage: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                    border: '1px solid rgba(76, 175, 80, 0.2)',
                    borderRadius: '12px'
                  }
                }}
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
                <MenuItem key={`Home`} onClick={() => {
                  handleCloseUserMenu();
                  handleNavigation('/');
                }}
                sx={{
                  color: '#fff',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(76, 175, 80, 0.15)',
                    color: '#4CAF50'
                  }
                }}>
                  <Typography>🏠 Home</Typography>
                </MenuItem>
                <MenuItem key={`Blogs`} onClick={() => {
                  handleCloseUserMenu();
                  handleNavigation('/blogs');
                }}
                sx={{
                  color: '#fff',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(76, 175, 80, 0.15)',
                    color: '#4CAF50'
                  }
                }}>
                  <Typography>📝 Blogs</Typography>
                </MenuItem>
                <MenuItem key={`New Blog`} onClick={() => {
                  handleCloseUserMenu();
                  handleNavigation('/blogs/new');
                }}
                sx={{
                  color: '#fff',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(76, 175, 80, 0.15)',
                    color: '#4CAF50'
                  }
                }}>
                  <Typography>✨ New Blog</Typography>
                </MenuItem>
              </Menu>
              <Tooltip title="Menu" className='social-tooltip' enterDelay={300} leaveDelay={200}>
                <IconButton 
                  onClick={handleOpenUserMenu} 
                  sx={{ 
                    p: 0.5,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(76, 175, 80, 0.15)',
                      transform: 'rotate(90deg)'
                    }
                  }} 
                  className="social-icon-button"
                >
                  <Avatar 
                    alt="Settings" 
                    src="https://tryhackme-images.s3.amazonaws.com/user-avatars/6ba0d49c3dd47aeb901c29d701c8d426.jpg" 
                    sx={{width: 36, height: 36, boxShadow: '0 2px 8px rgba(76, 175, 80, 0.2)'}} 
                  />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default ResponsiveAppBar;
