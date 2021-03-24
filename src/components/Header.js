import React from 'react'
import { CssBaseline, Box, AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { Link } from "react-router-dom";


function Header() {
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <Box display='flex' flexGrow={1}>
            <Typography variant='h6'>
              User Authentication
            </Typography>
          </Box>


          <Button variant="contained" color="white" style={{ marginRight: '5px' }}>
            <Link to='/signin'>Login</Link>
          </Button>

          <Button variant="contained" color="white">
            <Link to='/signup'>Sign Up</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
