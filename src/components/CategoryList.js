import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [
      { arabaId: 1, arabaModel: "mercedes" },
      { arabaId: 2, arabaModel: "mercedes" },
      { arabaId: 3, arabaModel: "mercedes" },
    ],
  };

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ListGroup flush>
          {this.state.categories.map((category) => (
            <ListGroupItem key={category.arabaId}>
              {category.arabaModel}{" "}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
