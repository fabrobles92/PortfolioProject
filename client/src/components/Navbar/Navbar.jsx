import { useState, useEffect, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { NavLink } from "react-router-dom";
import './NavBar.css'

const pages = ['Projects', 'Contact', 'About'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



const Link_ = ({children, classes , ...props}) => {
  console.log('rendetizando Link')
  return(
    <NavLink 
    className={`${'NavLinks'} ${classes}`} 
    style={({isActive}) => ({
      color: isActive ? 'orange' : null
    })} 
    {...props}>
      {children}
    </NavLink>
  )
}

const ResponsiveAppBar = () => {

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const ref = useRef()

  function checkSize(){
    if (window.innerWidth > 700){
      setIsMenuVisible(false)
    }

  }
  window.addEventListener('resize', checkSize);

  useEffect(() => {
    console.log('use Effect Usado')
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      console.log('checkIfClickedOutside', isMenuVisible && ref.current && !ref.current.contains(e.target))
      // console.log(ref.current)
      // console.log(e.target)
      if (isMenuVisible && ref.current && !ref.current.contains(e.target)) {
        setIsMenuVisible(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      console.log('use Effect quitado')
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isMenuVisible])

  const handleOpenNavMenu = () => {
    console.log('Click en icono')
    setIsMenuVisible(!isMenuVisible);
  };

  const handleCloseNavMenu = () => {
    setIsMenuVisible(false);
  };

  console.log('Renderizando pagina, isMenuVisible: ' + isMenuVisible)
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#24292f", position: 'relative', boxShadow: 'none'}}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 0, display: { xs: 'none', md: 'flex' } }}
            >
            <Link_ to='/'>
              <HomeIcon 
                sx={{fontSize: "2.5rem"}}
              />
            </Link_>
            
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
              {/* <Menu
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu> */}

            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, justifyContent: 'end', display: { xs: 'flex', md: 'none' } }}
            >
            <a className='NavLinks' href='/'>
              <HomeIcon fontSize="large"/>
            </a>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>            
              {pages.map((page) => (
                <Link_
                  key={page}
                  onClick={handleCloseNavMenu}
                  to={page}
                  classes='CentralLinksNavBar'
                >
                  {page}
                </Link_>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 0, display: { xs: 'none', md: 'flex' } }}
              >
                <a className='NavLinks' href='/'>
                    <LinkedInIcon sx={{fontSize: "2.5rem"}}/>
                </a>
                <a className='NavLinks' href='/'>
                  <GitHubIcon sx={{fontSize: "2.5rem"}}/>
                </a>
                <a className='NavLinks' href='/'>
                  <FacebookIcon sx={{fontSize: "2.5rem"}}/>
                </a>
              </Typography>
              </Tooltip>
            </Box>



          </Toolbar>
        </Container>
        {isMenuVisible && 
        <div className='ContainerDropdown' ref={ref} >
          {pages.map( page => (
            <a key={page} href={page} className='DropDownElement'>{page}</a>
          ))}
        <div className='DropDownElement'>
        <a className='NavLinks' href='/'>
          <LinkedInIcon sx={{fontSize: "2.5rem"}}/>
        </a>
        <a className='NavLinks' href='/'>
          <GitHubIcon sx={{fontSize: "2.5rem"}}/>
        </a>
        <a className='NavLinks' href='/'>
          <FacebookIcon sx={{fontSize: "2.5rem"}}/>
        </a>
        </div>
        </div>}
        
      </AppBar>
    </>
  );
};
export default ResponsiveAppBar;