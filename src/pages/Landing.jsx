import React from 'react'
import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage';
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.svg";
import { Link } from 'react-router-dom';



const Landing = () => {
  return (
    <Wrapper>
     <nav>
<img src={logo} alt="jobify" className='logo' />
     </nav>
     <div className="container page">
        <div className="info">
            <h1>
                Job <span>Tracking</span> app
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam hendrerit, justo at dignissim auctor,
                metus dolor varius nulla, eu aliquet risus dui non quam.
                Sed nec bibendum elit. Sed nec justo eu lectus eleifend
                vehicula vel sit amet neque. Phasellus euismod mi eu libero
                 egestas, non feugiat
                orci dapibus. Vivamus bibendum lorem eget turpis tempor,
                nec varius purus ultrices.
            </p>
            <Link to="/register" className='btn register-link'>
                Register
            </Link>

              <Link to="/login" className='btn'>
                Login
            </Link>
        </div>
        <img src={main} alt="job hunt" className='img main-img' />
     </div>
    </Wrapper>
  )
}



export default Landing
