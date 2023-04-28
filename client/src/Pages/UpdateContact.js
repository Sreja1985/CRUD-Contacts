import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css';

function UpdateContact() {

    const navigate = useNavigate();
    const {id} = useParams();

    const [contact, setContact] = useState({
        name: '',
        email: ''
    })

    useEffect(() => {        
            axios.get(`http://localhost:3001/contacts/${id}`)
            .then((response) => {
                setContact(response.data);
                console.log(response.data);
            });
            
        
        
    }, [id])


    const handleUpdate =(e) => {
        e.preventDefault();
        axios.patch(`http://localhost:3001/contacts/${id}`,contact)
        .then((response) => {
            alert("Contact Updeted !")
            navigate('/')            
        })
    }
  return (
    <section className='page'>
        <form className='formUser' onSubmit={handleUpdate}>
            < div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    name="name" 
                    defaultValue={contact.name}
                    onChange={ e => setContact({...contact, name: e.target.value})}
                    />                
            </div>
            <div className="form-group">
                <input 
                    type="email" 
                    className="form-control" 
                    name="email" 
                    defaultValue={contact.email}
                    onChange={ e => setContact({...contact, email: e.target.value})}
                    />
            </div>
            <button type="submit" className="btn btn-info">Update</button>
    </form>
      
    </section>
  )
}

export default UpdateContact
