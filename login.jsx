import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import sideImage from '../Components/images/20944201.jpg';
import './login.css';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons';
import React, {useState} from 'react';
import axios from 'axios';
function Login() {
const navigate = useNavigate();
      const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.id]: e.target.value });

    const handleLogin = async (e) => {
        e.preventDefault(); 
        try {
            const config = { headers: { 'Content-Type': 'application/json' } };
            const body = JSON.stringify({ email, password });

            const res = await axios.post('http://localhost:5000/api/users/login', body, config);

            localStorage.setItem('token', res.data.token); 
            
            navigate('/app/home'); 

        } catch (err) {
            alert(err.response?.data?.msg || 'Login failed. Please check your credentials.'); 
            console.error(err);
        }
    };
    
    const handleRegister = () => {
        navigate('/register');
    };
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='4' md='6'>
          <img src={sideImage} className="img-fluid" alt="image" />
        </MDBCol>

        <MDBCol col='12' md='6'>

          <div className="d-flex flex-row align-items-center justify-content-center">

            <p className="lead fw-normal mb-0 me-3">Sign in with</p>

            <MDBBtn floating size='md' tag='a' className='d-flex align-items-center justify-content-center me-2 '>
              <FontAwesomeIcon icon={faFacebookF} />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='d-flex align-items-center justify-content-center me-2'>
              <FontAwesomeIcon icon={faTwitter} />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='d-flex align-items-center justify-content-center me-2'>
              <FontAwesomeIcon icon={faGoogle}/>
            </MDBBtn>

          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>
            <form onSubmit={handleLogin}>
          <MDBInput wrapperClass='mb-4' label='Email address' id='email' type='email' size="lg" value={email} onChange={onChange} required/>
          <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' size="lg" value={password} onChange={onChange} required/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <Link to="/ForgotPass">Forgot password?</Link>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg' type='submit'>Login</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a  className="link-danger" onClick={handleRegister} >Register</a></p>
          </div>
          </form>
        </MDBCol>

      </MDBRow>
     <div className='footer'>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

        <div className="text-white mb-3 mb-md-0">
          Made by Ritesh Gulia
        </div>

        <div>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <FontAwesomeIcon icon={faFacebookF} size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <FontAwesomeIcon icon={faTwitter} size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <FontAwesomeIcon icon={faGoogle} size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <FontAwesomeIcon icon={faLinkedinIn} size="md"/>
          </MDBBtn>

        </div>
        </div>
      </div>
      </MDBContainer>
  );
}

export default Login;