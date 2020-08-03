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

export default function EditProfileTalent() {
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
        <Tab label="Profile" />
        <Tab label="Bank Account" />
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
                    <Label for="exampleFullName">Full Name</Label>
                    <Input
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Full Name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Email Address"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="Password"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Phone Number</Label>
                    <Input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Phone Number"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Skills *</Label>
                    <Input
                      type="text"
                      name="skills"
                      id="skilss"
                      placeholder="Separate skill by comma(s). Example: HTML, CSS, Javascript"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Link Portofolio</Label>
                    <Input
                      type="text"
                      name="link"
                      id="link"
                      placeholder="Link Portofolio"
                    />
                  </FormGroup>
                  <Button color="primary">Save Changes</Button>
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
                    <Label>Bank Name *</Label>
                    <Input
                      type="text"
                      name="bankName"
                      id="bankName"
                      placeholder="Bank Name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Account Name *</Label>
                    <Input
                      type="text"
                      name="accountName"
                      id="accountName"
                      placeholder="Account Name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Account Number *</Label>
                    <Input
                      type="text"
                      name="accountNumber"
                      id="accountNumber"
                      placeholder="Account Number"
                    />
                  </FormGroup>
                  <Button color="primary">Save Bank Account</Button>
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
