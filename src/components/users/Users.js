import React, { useEffect, useState } from 'react';
import './Users.css';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Users() {
  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues
  } = useForm();



  let getUsers=()=>{
    axios.get("http://localhost:4000/users")
    .then(response => {
      if (response.status === 200) {
        setUsers(response.data);
      }
    })
    .catch(error => {
      if (error.response) {
        setErr(error.message);
      }
      else if (error.request) {
        setErr(error.message);
      } else {
        setErr(error.message);
      }
    });
  }
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");

  const showModal = () => setShow(true);
  const closeModal = () => setShow(false);

  let [usertoedit, setUsertoedit] = useState(null);

  const editUser = (userObj) => {
    setUsertoedit(userObj);
    setValue("username", userObj.username);
    setValue("password", userObj.password);
    setValue("email", userObj.email);
    setValue("dob", userObj.dob);
    showModal();
  };

  const saveUser = () => {
    closeModal();
    let modifiedUser = getValues();
    modifiedUser.id = usertoedit.id;

    axios.put(`http://localhost:4000/users/${modifiedUser.id}`, modifiedUser)
      .then(res => {
        if (res.status === 200) {
          // Update the users state with the modified user
          // setUsers(users.map(user => user.id === modifiedUser.id ? modifiedUser : user));
          getUsers();
        }
      })
      .catch(err => {
        console.error("Error updating user:", err);
      });
  };

  useEffect(() => {
   getUsers();
  }, []);

  return (
    <div className='content-container'>
      {err.length !== 0 && <p className='text-danger'>{err}</p>}
      <div className='row row-cols-sm-2 row-cols-md-4 g-4'>
        {users.map((userObj) => (
          <div className='col' key={userObj.id}>
            <div className='card'>
              <div className='card-body'>
                <p className='username'>Username: {userObj.username}</p>
                <p className='password'>Password: {userObj.password}</p>
                <p className='lead email'>Email: {userObj.email}</p>
                <p className='lead dob'>DOB: {userObj.dob}</p>
                <button className='btn btn-warning float-start' onClick={() => editUser(userObj)}>Edit</button>
                <button className='btn btn-danger float-end'>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        show={show}
        onHide={closeModal}
        backdrop="static"
        centered
        className='modal'
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" className='form-control' {...register("username")} />
            </div>

            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className='form-control' {...register("password")} />
            </div>

            <div className="mb-3">
              <label htmlFor="email">EmailId</label>
              <input type="email" id="email" className='form-control' {...register("email")} />
            </div>

            <div className="mb-3">
              <label htmlFor="dob">DateOfBirth:</label>
              <input type="date" id="dob" className='form-control' {...register("dob")} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Close</Button>
          <Button variant="primary" onClick={handleSubmit(saveUser)}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Users;
