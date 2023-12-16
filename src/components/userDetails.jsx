import React from 'react';

const UserDetails = ({ selectedUser }) => {
    return (
        <div>
            {selectedUser ? (
                <div>
                    <h3>User Details</h3>
                    <img src={selectedUser.avatar} alt={selectedUser.name} width="100" height="100" />
                    <p>Name: {selectedUser.name}</p>
                    <p>Email: {selectedUser.email}</p>
                </div>
            ) : (
                <p>Select a user to view details</p>
            )}
        </div>
    );
};

export default UserDetails;
