// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './CartSlice';
import { Container, Table, Button, Row, Col, Card } from 'react-bootstrap';

const Carts = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const products = useSelector(state => state.cart.products);

  const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Container className="mt-5">
      <h1 className="text-center">Shopping Cart</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>
                <Button variant="primary" onClick={() => dispatch(addToCart(item))}>+</Button>
                <Button variant="danger" onClick={() => dispatch(removeFromCart(item.id))}>-</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Row className="mt-4">
        <Col>
          <h4>Total Quantity: {totalQuantity}</h4>
        </Col>
        <Col className="text-end">
          <h4>Total Amount: ${totalAmount.toFixed(2)}</h4>
        </Col>
      </Row>

      <h2 className="text-center mt-5">Products</h2>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <Card className="h-100">
              {/* Use the first image from the images array */}
              <Card.Img variant="top" src={product.images[0]} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> ${product.price.toFixed(2)}<br />
                  <strong>Discount:</strong> {product.discountPercentage}%<br />
                  <strong>Rating:</strong> {product.rating}<br />
                  <strong>Stock:</strong> {product.stock}<br />
                  <strong>Brand:</strong> {product.brand}<br />
                  <strong>Category:</strong> {product.category}<br />
                  <strong>Description:</strong> {product.description}
                </Card.Text>
                <Button variant="success" onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Carts;
