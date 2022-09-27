import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import "./costProfit.scss";

export const CostProfit = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={12} className="cardCost">
          <Row>
            <div className="tituloCost">
              <p>Coste del proyecto y Ganancias estimadas</p>
              <img src="/assets/icons/info.svg" />
            </div>
          </Row>

          <Row className="coste">
            <Col lg={3} className="p-0">
              <img src="/assets/icons/pine_tree.svg" />
            </Col>

            <Col lg={9} className="p-0 d-flex align-items-end">
              <div className="d-flex flex-column justify-content-center">
                <p>Coste del proyecto</p>
                <h4>575.800 €</h4>
              </div>
            </Col>
          </Row>

          <Row className="ganancias">
            <Col lg={3} className="p-0">
              <img src="/assets/icons/money.svg" />
            </Col>

            <Col lg={9} className="p-0 d-flex align-items-end">
              <div>
                <p>Ganancias Consultoría</p>
                <h4>86.700 €</h4>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="p-0">
              <Button className="more-info">Acceder a todos los datos</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
