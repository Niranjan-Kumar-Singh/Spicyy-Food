import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaShoppingCart, FaBell, FaUserAlt, FaListAlt, FaInfoCircle, FaEnvelope,
  FaHandsHelping, FaFileAlt, FaSignOutAlt, FaCreditCard, FaCog, FaHeart
} from 'react-icons/fa';

function SidebarContent({ handleClose }) {
  return (
    <Nav className="flex-column sidebar-nav">
      <Nav.Link as={Link} to="/#categories" onClick={handleClose} className="nav-item">
        <FaListAlt className="me-2" /> All Categories
      </Nav.Link>
      <Nav.Link as={Link} to="/orders" onClick={handleClose} className="nav-item">
        <FaShoppingCart className="me-2" /> My Orders
      </Nav.Link>
      <Nav.Link as={Link} to="/cart" onClick={handleClose} className="nav-item">
        <FaShoppingCart className="me-2" /> My Cart
      </Nav.Link>
      <Nav.Link as={Link} to="/account" onClick={handleClose} className="nav-item">
        <FaUserAlt className="me-2" /> My Account
      </Nav.Link>
      <Nav.Link as={Link} to="/notifications" onClick={handleClose} className="nav-item">
        <FaBell className="me-2" /> My Notifications
      </Nav.Link>

      <div className="sidebar-divider"></div>

      {/* New Sidebar Items */}
      <Nav.Link as={Link} to="/favorites" onClick={handleClose} className="nav-item">
        <FaHeart className="me-2" /> My Favorites
      </Nav.Link>
      <Nav.Link as={Link} to="/payment" onClick={handleClose} className="nav-item">
        <FaCreditCard className="me-2" /> Payment Methods
      </Nav.Link>
      <Nav.Link as={Link} to="/settings" onClick={handleClose} className="nav-item">
        <FaCog className="me-2" /> Settings
      </Nav.Link>

      <div className="sidebar-divider"></div>

      <Nav.Link as={Link} to="/about" onClick={handleClose} className="nav-item">
        <FaInfoCircle className="me-2" /> About
      </Nav.Link>
      <Nav.Link as={Link} to="/contact" onClick={handleClose} className="nav-item">
        <FaEnvelope className="me-2" /> Contact
      </Nav.Link>
      <Nav.Link as={Link} to="/help" onClick={handleClose} className="nav-item">
        <FaHandsHelping className="me-2" /> Help Center
      </Nav.Link>
      <Nav.Link as={Link} to="/legal" onClick={handleClose} className="nav-item">
        <FaFileAlt className="me-2" /> Legal
      </Nav.Link>
      <Nav.Link as={Link} to="/logout" onClick={handleClose} className="nav-item logout-link">
        <FaSignOutAlt className="me-2" /> Logout
      </Nav.Link>
    </Nav>
  );
}

export default SidebarContent;