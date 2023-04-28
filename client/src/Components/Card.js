import React from 'react'
import {Link} from 'react-router-dom';
import './Card.css';

function Card(props) {
  return (
    <article className='contact__card'>
        <h4>{props.name}</h4>
        <div>{props.email}</div>
        <div className='action'>
            <Link to={props.url} className='text-decoration-none btn btn-success'>Update</Link>
            <button onClick={props.onClick} className='btn btn-danger'>Delete</button> 
        </div>     
    </article>
  )
}

export default Card
