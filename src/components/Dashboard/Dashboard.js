import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Footer from '../../components/Footer/Footer';
import Nav from '../../features/Nav';
import Bar from '../../components/Pricing/Bar';

import styles from '../../styles';

export default function Pricing() {
  const classes = styles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Start Bar */}
      <Nav />
      <Bar />
      {/* End Bar */}

      <Container maxWidth="md" component="main" className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
            Dashboard
          </Typography>
          <Typography variant="h5" align="left" color="textSecondary" component="p" gutterBottom>
            Should probably put some cards up in here, up in here.
          </Typography>
        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
          <Grid item xs={4}>
            <Paper>
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>Word of the Day</Typography>
                  <Typography variant="h5" component="h2"> be {bull} nev {bull}o{bull} lent</Typography>
                  <Typography className={classes.pos} color="textSecondary">adjective</Typography>
                  <Typography component="p">well meaning and kindly. <br />{'"a benevolent smile"'}</Typography>
                </CardContent>
                <CardActions><Button size="small">Learn More</Button></CardActions>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>Word of the Day</Typography>
                  <Typography variant="h5" component="h2"> be {bull} nev {bull}o{bull} lent</Typography>
                  <Typography className={classes.pos} color="textSecondary">adjective</Typography>
                  <Typography component="p">well meaning and kindly. <br />{'"a benevolent smile"'}</Typography>
                </CardContent>
                <CardActions><Button size="small">Learn More</Button></CardActions>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Start footer */}
      <Footer classes={classes}/>
      {/* End footer */}
    </React.Fragment>
  );
}
