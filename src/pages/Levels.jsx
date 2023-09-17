import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Levels = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Container fluid={true} className="levels d-flex flex-column">
        <div className="allBtns d-flex flex-column w-100 justify-content-center align-items-center gap-3 text-center">
          <h1 className="text-white">
            Memory Game 🎉
          </h1>
          <h4 className="text-white">Choose a level please</h4>
          <Row lg='6' sm='5' xs='6' md='6' className="w-100">
          <Button onClick={() => navigate('/level1')} className="col-12">Level 1</Button>
          </Row>
          <Row lg='6' sm='5' xs='6' md='6' className="w-100">
          <Button onClick={() => navigate('/level2')} className="col-12">Level 2</Button>
          </Row>
          <Row lg='6' sm='5' xs='6' md='6' className="w-100">
          <Button onClick={() => navigate('/level3')} className="col-12">Level 3</Button>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Levels;
