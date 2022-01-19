import React from "react";
import CategoryList from "./components/CategoryList";
import Navi from "./components/Navi";
import ProductList from "./components/ProductList";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList
             title="liste"
             name='araba'
             />
          </Col>
          <Col xs="9">
            <ProductList title='urunler'/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
