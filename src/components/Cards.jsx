import React from 'react';

function Cards({ user, handleToDelete, handleEdit }) {
  const { name, username, email, address, phone } = user;

  return (
    <div className="card mt-5" style={{ width: '18rem', backgroundColor: 'rgb(204, 245, 211)' }}>
      <div className="card-body">
        <p className='card-text'><strong>Name: </strong>{name}</p>
        <p className='card-text'><strong>Username: </strong>{username}</p>
        <p className='card-text'><strong>Email: </strong>{email}</p>
        <p className='card-text'><strong>Address: </strong></p>
        <ul style={{ listStyleType: "none" }}>
          <li><strong>Street: </strong>{address.street}</li>
          <li><strong>City: </strong>{address.city}</li>
          <li><strong>Pincode: </strong>{address.zipcode}</li>
        </ul>
        <p className='card-text'><strong>Phone Number: </strong>{phone}</p>

        <div className='d-flex justify-content-end gap-2'>
          <button onClick={handleEdit} className="btn btn-success">Edit</button>
          <button onClick={handleToDelete} className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
