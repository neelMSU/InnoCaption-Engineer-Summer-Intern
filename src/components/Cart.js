// Import necessary modules and hooks from React, the CartContext for accessing cart state and actions and various Bootstrap components for UI styling.
import React from 'react';
import { useCart } from '../components/CartContext';
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap';

const CartItem = ({ item }) => {// component that represents a single item in the cart.
  const { editCartItem, removeFromCart } = useCart();

  const handleQuantityChange = (e) => {//quantity input changes
    const newQuantity = Number(e.target.value);
    editCartItem(item.id, newQuantity);
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>Price: ${item.price}</Card.Text>
        <Form.Group controlId={`quantity-${item.id}`} className="mb-3">
          <Form.Label>Quantity:</Form.Label>
          <Form.Control
            type="number"
            min="1"
            value={item.quantity}
            onChange={handleQuantityChange}
          />
        </Form.Group>
        <Button variant="danger" onClick={() => removeFromCart(item.id)}>
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
};

const Cart = () => {//Define the Cart component
  const { cart } = useCart();//Retriving current state

  return (
    <Container>
      <h2>Cart</h2>
      <Row>
        {cart.map((item, index) => (
          <Col key={index} sm={12}>
            <CartItem item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cart;//Export cart
