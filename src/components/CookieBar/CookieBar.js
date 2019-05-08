import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '0px',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
});

function CookieBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container alignItems="center" spacing={0} justify="space-between">
          <Grid>
            <Typography variant="body2" color="inherit">
              This site uses cookies to deliver services. <Link href="/legal/cookies">Learn More</Link>
            </Typography>
          </Grid>
          <Grid>
            <Button variant="contained">OK</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CookieBar;
