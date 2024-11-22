import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Register = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const navigate = useNavigate()
  const register = async (e) => {
    e.preventDefault()
    try {
      const NewData = {
        fullName: name,
        password: password,
        phone: '+998'+phone
      }
      const response = await axios.post('/users/register', NewData)
      localStorage.setItem('token', response.data.token);
      console.log(response)
      Swal.fire({
        title: 'Muvaffaqiyatli!',
        icon: 'success',
        position: 'top-end',
        timer: 3000,
        timerProgressBar: true,
        showCloseButton: true,
        toast: true,
        showConfirmButton: false,
      });
      console.log(response)
      setTimeout(() => {
        navigate('/login')
      }, 1000)
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.response?.data?.message || 'Ошибка при удалении.',
        icon: 'error',
        position: 'top-end',
        timer: 3000,
        timerProgressBar: true,
        showCloseButton: true,
        toast: true,
        showConfirmButton: false,
      });
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[90%] max-w-md p-8 space-y-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
        <form className="space-y-6" onSubmit={register}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="fullName">
              Full Name
            </label>
            <input
              placeholder='Name'
              type="text"
              id="fullName"
              name="fullName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder='Password'
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="phone">
              Phone Number
            </label>
            <input
              placeholder='+998'
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
          <NavLink className={`block text-end text-[blue]`} to={'/login'}>
              Login
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Register;
