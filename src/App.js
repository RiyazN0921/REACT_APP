// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import UserDetails from './components/userDetails';
import UserList from './components/userList';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async (userId) => {
      try {
        const response = await axios.get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${userId}`);
        console.log('API Response:', response.data);
        setSelectedUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setLoading(false);
      }
    };

    if (selectedUser && selectedUser.id) {
      fetchUserDetails(selectedUser.id);
    }
  }, [selectedUser]);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <Router>
      <Container>
        <Row>
          <Col xs={4}>
            <UserList onSelectUser={handleSelectUser} />
          </Col>
          <Col xs={8}>
            <Routes>
              <Route
                path="/"
                element={
                  loading ? (
                    <p>Loading user details...</p>
                  ) : (
                    <UserDetails selectedUser={selectedUser} />
                  )
                }
              />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;
