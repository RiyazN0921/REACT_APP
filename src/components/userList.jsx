// src/components/UserList.js
import React, { useState, useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import axios from 'axios';

const UserList = ({ onSelectUser }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("https://602e7c2c4410730017c50b9d.mockapi.io/users");
                setUsers(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching users:', error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ListGroup>
                    {users.length > 0 ? (
                        users.map(user => (
                            <ListGroup.Item key={user.id} action onClick={() => onSelectUser(user)}>
                                <img src={user.avatar} alt={user.profile.firstName} width="30" height="30" className="mr-2" />
                                {user.profile.firstName} {user.profile.lastName}
                            </ListGroup.Item>
                        ))
                    ) : (
                        <p>No data to show</p>
                    )}
                </ListGroup>
            )}
        </div>
    );
};

export default UserList;
