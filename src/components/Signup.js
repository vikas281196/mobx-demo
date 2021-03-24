import React, { Fragment } from 'react'
import { Container, Button, Grid, Paper, Typography, Avatar, TextField } from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    padding: '20px',
    height: '70vh',
    marginTop: '50px',
  },

  submitbtn: {
    marginTop: '15px'
  }
}));

const Signup = observer(({ userStore }) => {
  let history = useHistory();
  const classes = useStyles();

  const handleSubmit = () => {

    history.push("/userprofile");
  }

  return (
    <Fragment>
      <main>
        <Container maxWidth='sm'>
          <Paper elevation={10} className={classes.paperStyle}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} justify='center'>
                <Grid item sm={12} align='center'>
                  <Avatar><LockIcon /></Avatar>
                </Grid>
                <Grid item>
                  <Typography variant='h6' align='center' color='textPrimary' gutterBottom>
                    Sign Up
                </Typography>
                </Grid>
              </Grid>

              <Grid>
                <TextField
                  name="fullname"
                  label="Full Name"
                  fullWidth
                  required
                  value={userStore.user.fullname}
                  onChange={userStore.handleChange}
                />
              </Grid>

              <Grid>
                <TextField
                  name="email"
                  label="Email"
                  type='email'
                  fullWidth
                  required
                  value={userStore.user.email}
                  onChange={userStore.handleChange}
                />
              </Grid>

              <Grid>
                <TextField
                  name="password"
                  label="Password"
                  type='password'
                  fullWidth
                  required
                  value={userStore.user.password}
                  onChange={userStore.handleChange}
                />
              </Grid>

              <Button variant='contained' type='submit' color='primary' fullWidth className={classes.submitbtn}>Sign Up</Button>
            </form>
          </Paper>
        </Container >
      </main>
    </Fragment>
  )
})

export default Signup
