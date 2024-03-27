import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import { useCart } from '../components/CartContext';
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap';

const cardStyle = { height: '400px' };//To fix the issue of product cards un-uniformity
const imageStyle = { height: '200px', objectFit: 'cover' };


const ProductList = () => {// Fetch and display list
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []); //Bring in products from API

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    // To search products
    <Container>
      <Form.Group controlId="searchProduct" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search for products..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>
      <Row xs={1} md={2} lg={4} className="g-4">
      {filteredProducts.map((product, idx) => (
        <Col key={product.id}>
          <Card style={cardStyle}>
            {/* Create cards */}
            <Card.Img variant="top" src={product.thumbnail} style={imageStyle} />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                Price: ${product.price}
              </Card.Text>
              {/* This onclick function helps to call addtoCart function and add products to cart */}
              <Button variant="primary" className="mt-auto" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
};

export default ProductList;
