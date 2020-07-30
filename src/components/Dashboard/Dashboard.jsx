import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Container } from "reactstrap";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 40,
  },
});

function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <Container
        className="themed-container"
        fluid="md"
        style={{ margin: "1em auto" }}
      >
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              In Progress Work(s)
            </Typography>
            <Typography variant="h5" component="h2">
              0
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Completed Work(s)
            </Typography>
            <Typography variant="h5" component="h2">
              0
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Earnings
            </Typography>
            <Typography variant="h5" component="h2">
              0 IDR
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default Dashboard;
