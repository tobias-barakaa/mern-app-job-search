import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';
const Error = () => {
    const error = useRouteError();
    if (error.status === 404) {
     return <Wrapper>
        <div>
            <img src={img} alt="notfounc" />
            <h3>Ohh! page not found</h3>
            <p>We can't seem to find what you looking for</p>
        <Link to="/dashboard">back home</Link>
        </div>
     </Wrapper>
    }

  return (
    <div>
     <h3>Something went wrong</h3>
    </div>
  )
}

export default Error
