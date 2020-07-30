import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AddOffer() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="1. Basic Info" />
        <Tab label="2. Offer Feature" />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Container style={{ marginTop: "2em" }}>
            <Row>
              <Col xs="3"></Col>
              <Col xs="6">
                <Form>
                  <FormGroup>
                    <Label for="exampleFullName">Title *</Label>
                    <Input
                      type="text"
                      name="titile"
                      id="title"
                      placeholder="Title"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Thumbnail</Label>
                    <Input
                      type="file"
                      name="thumbnail"
                      id="thumbnail"
                      placeholder="Upload thumbnail"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Description</Label>
                    <Col sm={20}>
                      <Input type="textarea" name="desc" id="desc" />
                    </Col>
                  </FormGroup>
                  <Button outline color="primary">
                    Back
                  </Button>
                  <Button color="primary">Next</Button>
                </Form>
              </Col>
              <Col xs="3"></Col>
            </Row>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Container style={{ marginTop: "2em" }}>
            <Row>
              <Col xs="3"></Col>
              <Col xs="6">
                <Form>
                  <FormGroup>
                    <Label>Price *</Label>
                    <Input
                      type="text"
                      name="price"
                      id="price"
                      placeholder="Price"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Revision</Label>
                    <Input
                      type="number"
                      name="revision"
                      id="revison"
                      placeholder="Input number of revision"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Col sm={{ size: 10 }}>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" id="checkbox2" /> Commercial
                          use
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label>Requirement</Label>
                    <Input
                      type="text"
                      name="requirement"
                      id="requirement"
                      placeholder="Tell your buyer what need to get started"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Additional Feature</Label>
                    <Input
                      type="text"
                      name="additional"
                      id="additional"
                      placeholder="Example: 5 hours of work"
                    />
                  </FormGroup>
                  <Button outline color="primary">
                    Back
                  </Button>
                  <Button color="primary">Submit</Button>
                </Form>
              </Col>
              <Col xs="3"></Col>
            </Row>
          </Container>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
