import React from 'react'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import Card from '../Components/Card';

function Home() {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const loadContacts = async() => {
            const response = await axios.get("http://localhost:3001/contacts");
            setContacts(response.data);
            console.log(response.data);
        };
        loadContacts();
    }, [])

    const handleDelete=(id) => {
        const confirm = window.confirm("Do you like to delete ?");
        if(confirm) {
            axios.delete(`http://localhost:3001/contacts/${id}`)
            .then((response) => {
                setContacts(contacts.filter( deleteContact => deleteContact.id !== id));
            });
        }
    }



  return (
    <section className='page'>
        <h2>CRUD Contacts</h2>
        <Link to={'/new-contact'} className='btn btn-primary'> New Contact</Link>
            <div className='list'>
                { contacts.map((value, key) => {
                    return (
                        <Card 
                            key = {value.id}
                            name= {value.name}
                            email= {value.email}
                            url= {`/edit-contact/${value.id}`}
                            onClick={e => handleDelete(value.id)}
                        />
                    )
                    })
                }
            </div>
           
    </section>
  )
}

export default Home
