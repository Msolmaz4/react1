import React from 'react';
import{ListGroup,ListGroupItem} from 'reactstrap'

function CategoryList() {
  return <div>


<h2>categorui</h2>
<ListGroup flush>
  <ListGroupItem
    disabled
    href="#"
    tag="a"s
  >
    Cras justo odio
  </ListGroupItem>
  <ListGroupItem
    href="#"
    tag="a"
  >
    Dapibus ac facilisis in
  </ListGroupItem>
  <ListGroupItem
    href="#"
    tag="a"
  >
    Morbi leo risus
  </ListGroupItem>
  <ListGroupItem
    href="#"
    tag="a"
  >
    Porta ac consectetur ac
  </ListGroupItem>
  <ListGroupItem
    href="#"
    tag="a"
  >
    Vestibulum at eros
  </ListGroupItem>
</ListGroup>


  </div>;
}

export default CategoryList;
