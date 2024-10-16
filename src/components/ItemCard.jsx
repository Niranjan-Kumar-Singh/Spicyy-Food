import React from 'react';
import { Card, Button } from 'react-bootstrap'; // Import Button for "Add to Cart"
import PropTypes from 'prop-types';
import '../styles/ItemCard.css'; // CSS file for styling

// ItemCard component
function ItemCard({ item, onAddToCart }) {
  return (
    <Card className="item-card">
      <Card.Img
        variant="top"
        src={item.image}
        alt={item.name}
        onError={(e) => { 
          e.target.onerror = null; 
          e.target.src = 'path/to/fallback-image.jpg'; // Replace with fallback image path
        }}
      />
      <Card.Body>
        <Card.Title className="item-title">{item.name}</Card.Title>
        <Card.Text className="item-description">{item.description}</Card.Text>
        <Card.Text className="item-price">₹{item.price.toFixed(2)}</Card.Text>
        <Button variant="primary" className="add-to-cart-btn" onClick={() => onAddToCart(item)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string, // Add description
    price: PropTypes.number.isRequired, // Add price
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ItemCard;
