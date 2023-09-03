


import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';


import './style/login.css';

function UserLogin1() {
  const [data, setData] = useState({});
  const [btn, setBtn] = useState(true);
  const navigate = useNavigate();

  
  const handleSaveUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseBody = await response.json();
        const authTokenUser = responseBody.token;

        localStorage.setItem('authTokenUser', authTokenUser);

        console.log('Login Successful');
        alert("Login Successful")
        navigate("/")
      } else {
        console.error('Failed to login');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };



  const handleSaveTrainer = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8000/trainer/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseBody = await response.json();
        const authTokenTrainer = responseBody.token;

        localStorage.setItem('authTokentrainer', authTokenTrainer);

        console.log('Login Successful');
        alert("Login Successful")
        navigate("/workout-plan")
      } else {
        console.error('Failed to login');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const buttonClick = () => {
    setBtn(!btn);
  };

  return (
    <div>
      <div className="toggle-button-container">
      <button className="toggle-button" onClick={buttonClick}>
        {btn ? 'Login As A User' : 'Login As A Trainer'}
      </button>
    </div>
      <div className="user-profile-container">
        {btn ? (
          <div>
            <h2>User Login</h2>
            <form className="form-group">
              <div className="form-group">
                <label>Email:</label>
                <input type="email" id="email" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" id="password" onChange={handleChange} />
              </div>
              <button onClick={handleSaveUser}>Login</button>
              <Link to="/user-profile">
              <p>Don't have an account? SignUp</p>
              </Link>
            </form>
          </div>
        ) : (
          <div>
            <h2>Trainer Login</h2>
            <form className="form-group">
              <div className="form-group">
                <label>Email:</label>
                <input type="email" id="email" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" id="password" onChange={handleChange} />
              </div>
              <button onClick={handleSaveTrainer}>Login</button>
              <Link to="/TrainerProfile">
                <p>Don't have an account? SignUp</p>
              </Link>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserLogin1;



// // UserLogin1.js
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
//  // Import the AuthContext hook

// import './style/login.css';

// function UserLogin1() {
//   const { login } = useAuth(); // Access the login function from AuthContext
//   const [data, setData] = useState({});
//   const [btn, setBtn] = useState(true);
//   const navigate = useNavigate();

//   const handleSaveUser = async (e) => {
//     e.preventDefault();

//     const success = await login(data, 'user'); // Use the login function with user type

//     if (success) {
//       console.log('Login Successful');
//       alert('Login Successful');
//       navigate('/');
//     } else {
//       console.error('Failed to login');
//     }
//   };

//   const handleSaveTrainer = async (e) => {
//     e.preventDefault();

//     const success = await login(data, 'trainer'); // Use the login function with trainer type

//     if (success) {
//       console.log('Login Successful');
//       alert('Login Successful');
//       navigate('/workout-plan');
//     } else {
//       console.error('Failed to login');
//     }
//   };

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setData({ ...data, [id]: value });
//   };

//   const buttonClick = () => {
//     setBtn(!btn);
//   };

//   return (
//     <div>
//       <div className="toggle-button-container">
//         <button className="toggle-button" onClick={buttonClick}>
//           {btn ? 'Login As A User' : 'Login As A Trainer'}
//         </button>
//       </div>
//       <div className="user-profile-container">
//           {btn ? (
//           <div>
//             <h2>User Login</h2>
//             <form className="form-group">
//               <div className="form-group">
//                 <label>Email:</label>
//                 <input type="email" id="email" onChange={handleChange} />
//               </div>
//               <div className="form-group">
//                 <label>Password:</label>
//                 <input type="password" id="password" onChange={handleChange} />
//               </div>
//               <button onClick={handleSaveUser}>Login</button>
//               <Link to="/user-profile">
//               <p>Don't have an account? SignUp</p>
//               </Link>
//             </form>
//           </div>
//         ) : (
//           <div>
//             <h2>Trainer Login</h2>
//             <form className="form-group">
//               <div className="form-group">
//                 <label>Email:</label>
//                 <input type="email" id="email" onChange={handleChange} />
//               </div>
//               <div className="form-group">
//                 <label>Password:</label>
//                 <input type="password" id="password" onChange={handleChange} />
//               </div>
//               <button onClick={handleSaveTrainer}>Login</button>
//               <Link to="/TrainerProfile">
//                 <p>Don't have an account? SignUp</p>
//               </Link>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default UserLogin1;

