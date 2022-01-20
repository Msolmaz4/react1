import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [
      { arabaId: 1, arabaModel: "mercedes" },
      { arabaId: 2, arabaModel: "audo" },
      { arabaId: 3, arabaModel: "skida" },
    ]
   
  };

  

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ListGroup flush>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              key={category.arabaId}
            >
              {category.arabaModel}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.arabaCategory7}</h4>
      </div>
    );
  }
}
