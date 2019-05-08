import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Footer from '../../components/Footer/Footer';
import Nav from '../../features/Nav';
import Bar from '../../components/Pricing/Bar';
import CookieBar from '../../components/CookieBar/CookieBar';
import styles from '../../styles';

export default function BasicTemplate(props) {
  const classes = styles();
  console.log(props);
  return (
    <React.Fragment>
      <CssBaseline />
      {/* Start Bar */}
      <CookieBar />
      <Nav />
      <Bar />
      {/* End Hero */}

      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
          Hero
        </Typography>
        <Typography variant="h5" align="left" color="textSecondary" component="p">
          This is a hero thing, and should probably be broken out into its own component,
          depending on the degree of complexity.
        </Typography>
      </Container>


      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
            <Grid item key="123" xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title="Example Card"
                  subheader="Example subheader"
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action="Pro"
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      $9.99
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    <Typography component="li" variant="subtitle1" align="center" key="123">
                      This is where the description goes
                    </Typography>
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="outlined" color="primary">
                    Button
                  </Button>
                </CardActions>
              </Card>
            </Grid>
        </Grid>
      </Container>

      <Footer classes={classes}/>
    </React.Fragment>
  );
}
