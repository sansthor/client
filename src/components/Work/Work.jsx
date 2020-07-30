import React from "react";
import { Container, Button } from "reactstrap";

function Work() {
  return (
    <div>
      <Container
        className="themed-container"
        fluid="md"
        style={{ margin: "1em auto" }}
      >
        <Button color="primary">+ Add Offer</Button>
      </Container>
      <Container
        className="themed-container"
        fluid="md"
        style={{ backgroundColor: "#ffdbc5", height: "30vh" }}
      >
        <h4 style={{ margin: "0", textAlign: "center" }}>
          No Offer Posted Yet
        </h4>
      </Container>
    </div>
  );
}

export default Work;
