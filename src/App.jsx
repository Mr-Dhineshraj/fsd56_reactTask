import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormFields from './components/FormFields';
import Cards from './components/Cards';
import MyTodo from './components/MyTodo';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState({
    street: '',
    city: '',
    zipcode: ''
  });
  const [phone, setPhone] = useState('');
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  };

  const handleAddUser = () => {
    if (editUser) {
      handleUpdateUser();
    } else {
      const newUser = {
        name: name,
        username: username,
        email: email,
        address: {
          street: address.street,
          city: address.city,
          zipcode: address.zipcode
        },
        phone: phone
      };

      axios.post('https://jsonplaceholder.typicode.com/users', newUser)
        .then(response => {
          setUsers([...users, response.data]);
          clearForm();
        })
        .catch(error => {
          console.error('Error adding user: ', error);
        });
    }
  };

  const handleUpdateUser = () => {
    const updatedUser = {
      id: editUser.id,
      name: name,
      username: username,
      email: email,
      address: {
        street: address.street,
        city: address.city,
        zipcode: address.zipcode
      },
      phone: phone
    };

    axios.put(`https://jsonplaceholder.typicode.com/users/${editUser.id}`, updatedUser)
      .then(response => {
        const updatedUsers = users.map(user => (user.id === response.data.id ? response.data : user));
        setUsers(updatedUsers);
        clearForm();
        alert('User updated successfully!');
      })
      .catch(error => {
        console.error('Error updating user: ', error);
      });
  };

  const handleDeleteUser = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
      })
      .catch(error => {
        console.error('Error deleting user: ', error);
      });
  };

  const handleEditUser = (user) => {
    setName(user.name);
    setUsername(user.username);
    setEmail(user.email);
    setAddress({
      street: user.address.street,
      city: user.address.city,
      zipcode: user.address.zipcode
    });
    setPhone(user.phone);
    setEditUser(user);
  };


  const clearForm = () => {
    setName('');
    setUsername('');
    setEmail('');
    setAddress({
      street: '',
      city: '',
      zipcode: ''
    });
    setPhone('');
    setEditUser(null);
  };

  
  return (
    <div className="container mt-5">
      <FormFields
        handleButton={handleAddUser}
        name={name}
        setName={setName}
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        address={address}
        setAddress={setAddress}
        phone={phone}
        setPhone={setPhone}
        editUser={editUser}
      />

      <div className="row mt-5">
        <MyTodo />
      </div>

      <div className="row d-flex justify-content-evenly">
        {users.map(user => (
          <Cards
            key={user.id}
            user={user}
            handleToDelete={() => handleDeleteUser(user.id)}
            handleEdit={() => handleEditUser(user)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
