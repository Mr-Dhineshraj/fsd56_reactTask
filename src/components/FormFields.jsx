import React from 'react';

function FormFields({ handleButton, name, setName, username, setUsername, email, setEmail, address, setAddress, phone, setPhone, editUser }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleButton();
  };

  return (
    <form className="d-grid mt-5 justify-content-center align-items-center" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-5">
          <label htmlFor="name"><strong>Name</strong></label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" className="form-control" placeholder="Name" required />
        </div>
        <div className="col-5">
        <label htmlFor="name"><strong>UserName</strong></label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="username"className="form-control" placeholder="Username" required />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-5">
        <label htmlFor="email"><strong>Email</strong></label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="form-control" placeholder="Email" required />
        </div>
        <div className="col-5">
        <label htmlFor="street"><strong>Street</strong></label>
          <input type="text" value={address.street} onChange={(e) => setAddress({ ...address, street: e.target.value })} className="form-control" id="street" placeholder="Street" required />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-5">
        <label htmlFor="city"><strong>City</strong></label>
          <input type="text" value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} className="form-control" id="city" placeholder="City" required />
        </div>
        <div className="col-5">
        <label htmlFor="pincode"><strong>Pincode</strong></label>
          <input type="text" value={address.zipcode} onChange={(e) => setAddress({ ...address, zipcode: e.target.value })} className="form-control" id="pincode" placeholder="Zipcode" required />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-5">
        <label htmlFor="phone"><strong>Phone Number</strong></label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" className="form-control" placeholder="Phone" required />
        </div>
        <div className="col-5 mt-4">
          <button type="submit" className="btn btn-success">
            {editUser ? "Update User" : "Add User"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormFields;
