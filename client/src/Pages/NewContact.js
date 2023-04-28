import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import '../App.css';

function NewContact() {

    const [newContact, setNewContact] = useState({
        name: '',
        email: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/contacts', newContact)
        .then((response) => {
            alert("New contact created")
            navigate('/')            
        })
    }

  return (
    <section className='page'>
        <form className='formUser' onSubmit={handleSubmit}>
            < div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    name="name" 
                    placeholder="New name..." 
                    onChange={ (e )=> setNewContact({...newContact, name: e.target.value})}
                    required/>                
            </div>
            <div class="form-group">
                <input 
                    type="email" 
                    className="form-control" 
                    name="email" 
                    placeholder="Email..." 
                    onChange={ (e )=> setNewContact({...newContact, email: e.target.value})}
                    required/>
            </div>
            <button type="submit" className="btn btn-info">Create</button>
    </form>
      
    </section>
  )
}

export default NewContact
