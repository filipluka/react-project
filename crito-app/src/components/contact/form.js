import React from 'react';
import { useState } from 'react';

function Form() {

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [textarea, setTextarea] = useState("");

    function validateForm() {
        if (name.length == 0) {
            alert('Name can not be empty');
            return;
        }
        if (mail.length == 0) {
            alert('Email can not be empty');
            return;
        }
        if (textarea == 0) {
            alert('Message can not be empty');
            return;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
    }

    const handleChange = (event) => {
        setTextarea(event.target.value)
      }

    return (
        <div className='form'>
            <h2>Leave us a message for any information</h2>
            <form onSubmit={handleSubmit}>
                <div className='label-container'>
                    <input
                        type="text"
                        placeholder='Name*'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='label-container'>
                    <input
                        type="text"
                        placeholder='email*'
                        value={mail}
                        onChange={(m) => setMail(m.target.value)}
                    />
                </div>

                <div className='label-container'>
                    <textarea
                        placeholder={"Your Message*"}
                        value={textarea} 
                        onChange={handleChange} 
                    />
                </div>
                <button type='submit' className="yellow-btn" onClick={() => { validateForm() }}>Send Message</button>
            </form>
        </div>
    );
}

export default Form;