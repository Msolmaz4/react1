import React, { Component } from "react";
import CategoryList from "./components/CategoryList";
import Navi from "./components/Navi";
import ProductList from "./components/ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {


  state={arabaCategory7:""}


  changeCategory = category => {
    this.setState({ arabaCategory7:category.arabaId });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList 
              arabaCategory7={this.state.arabaCategory7}
              changeCategory={this.changeCategory}
               title="liste"
               name='araba'
               />
            </Col>
            <Col xs="9">
              <ProductList 
              arabaCategory7={this.state.arabaCategory7}
              title='urunler'/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}












