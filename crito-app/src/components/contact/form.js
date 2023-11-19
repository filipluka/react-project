import React from 'react';
import { useState } from 'react';

function Form() {

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [textarea, setTextarea] = useState("");



    var isFormValid = () => {
        const isValid = true;
        if (name.length == 0) {
            alert('Name can not be empty');
            isValid = false;
            return;
        }
        if (mail.length == 0) {
            alert('Email can not be empty');
            isValid = false;
            return;
        }
        if (textarea == 0) {
            alert('Message can not be empty');
            isValid = false;
            return;
        }
        return isValid;
    }

    let handleSubmit = async (e) => {
        try {
            if (isFormValid()) {
                e.preventDefault();
                let response = await fetch("https://win23-assignment.azurewebsites.net/api/contactform", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json, text/plain',
                        'Content-Type': 'application/json;charset=UTF-8'
                    },
                    body: JSON.stringify({
                        name: name,
                        email: mail,
                        message: textarea,
                    }),
                });
                let responseJson = await response.json();
                if (response.status === 200) {
                    alert(responseJson);
                } else {
                    alert("Some error occured");
                }
            }
        } catch (err) {
            console.log(err);
        }
    };

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
                <button type='submit' className="yellow-btn" onClick={() => { handleSubmit() }}>Send Message</button>
            </form>
        </div>
    );
}

export default Form;