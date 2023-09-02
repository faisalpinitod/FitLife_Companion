// import React, { useState } from 'react';
// import styled from 'styled-components';
// import {Link} from 'react-router-dom'


// const UserProfileContainer = styled.div`
//   max-width: 400px;
//   margin: 0 auto;
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h2`
//   font-size: 24px;
//   margin-bottom: 20px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 20px;
// `;

// const Label = styled.label`
//   font-size: 16px;
//   margin-bottom: 8px;
// `;

// const Input = styled.input`
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;
// const Select = styled.select`
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   font-size: 16px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// function Userlogin1() {
//     const [data,setData]=useState()
//     const [data1,setData1]=useState()
//     const [btn,setBtn]=useState(true)



//     const handleSaveUser = async (e) => {
//       e.preventDefault();
  
//       try {
//         const response = await fetch('http://localhost:8000/user/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(data),
//         });
  
//         if (response.ok) {
//             const responseBody = await response.json();
//             const authTokenUser = responseBody.token; 
        
            
//             localStorage.setItem('authTokenUser', authTokenUser);
        
//             console.log('Login Successful');
          
//         } else {
//           console.error('Failed to login');
    
//         }
//       } catch (error) {
//         console.error('An error occurred:', error);
        
//       }
//     };

//     const handleSaveTrainer = async (e) => {
//       e.preventDefault();
  
//       try {
//         const response = await fetch('http://localhost:8000/trainer/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(data1),
//         });
  
//         if (response.ok) {
//             const responseBody = await response.json();
//             const authTokenTrainer = responseBody.token; 
        
            
//             localStorage.setItem('authTokentrainer', authTokenTrainer);
        
//             console.log('Login Successful');
          
//         } else {
//           console.error('Failed to login');
    
//         }
//       } catch (error) {
//         console.error('An error occurred:', error);
        
//       }
//     };
  
//     const handleChange = (e)=>{
//       const {id,value}=e.target
//       setData({...data,[id]:value})
//     }

//     const buttonClick=()=>{
//         setBtn(!btn)
//     }

//     const handleChange1 = (e)=>{
//         const {id,value}=e.target
//         setData1({...data1,[id]:value})
//       }
  
  
//     return (
//         <div>
//             <button
//   onClick={buttonClick}
//   style={{
//     backgroundColor: btn ? '#007bff' : '#28a745', // Blue for User, Green for Trainer
//     color: 'white',
//     padding: '10px 20px',
//     fontSize: '16px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease-in-out',
//   }}
// >
//   {btn ? 'Login As A User' : 'Login As A Trainer'}
// </button>
//             <UserProfileContainer>
        
       
//         {btn?  (<div>
//             <Title>User Login</Title>
//             <Form>
            
//             <FormGroup>
//                 <Label>Email:</Label>
//                 <Input type="email" id="email"  onChange={handleChange} />
//             </FormGroup>
//             <FormGroup>
//                 <Label>Password:</Label>
//                 <Input type="password" id="password"  onChange={handleChange} />
//             </FormGroup>
//             <Button onClick={handleSaveUser}>Save Profile</Button>
//             <Link to="/user-profile"><p>Create account here</p> </Link>
//             </Form>
//         </div>) : <div>
//             <Title>Trainer Login</Title>
//             <Form>
            
//             <FormGroup>
//                 <Label>Email:</Label>
//                 <Input type="email" id="email"  onChange={handleChange1} />
//             </FormGroup>
//             <FormGroup>
//                 <Label>Password:</Label>
//                 <Input type="password" id="password"  onChange={handleChange1} />
//             </FormGroup>
//             <Button onClick={handleSaveTrainer}>Save Profile</Button>
//             <Link to="/TrainerProfile"><p>Create account here</p> </Link>
//             </Form>
//         </div>}
        
        
        
//       </UserProfileContainer>
//         </div>
      
//     );
//   };

// export default Userlogin1



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/login.css';

function UserLogin1() {
  const [data, setData] = useState({});
  const [btn, setBtn] = useState(true);

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
              <button onClick={handleSaveUser}>Save Profile</button>
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
              <button onClick={handleSaveTrainer}>Save Profile</button>
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
