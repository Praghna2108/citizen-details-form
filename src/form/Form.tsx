import React from 'react'
import { useState } from 'react'
import './Form.css'

function Form() {

    const [values, setValues]=useState(
        {
            firstname:'',
            lastname:'',
            age:'',
            dob:'',
            aadhar:'',
            pan:'',
            gender:'',
            address:'',
            phonenumber:'',
            mothersName:'',
            fathersName:'',
            education:''
        }
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>{
        const { name,value } = event.target;
        setValues((prevData) => ({...prevData,[name]: value,})
        );
    }; 
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

    const savedData = JSON.parse(localStorage.getItem("userFormDaata") || "[]");
    const updatedData = [...savedData, values];

    localStorage.setItem("userFormData", JSON.stringify(updatedData));

    alert(" form data is saved successfully !!!");

    setValues({
        firstname:'',
        lastname:'',
        age:'',
        dob:'',
        aadhar:'',
        pan:'',
        gender:'',
        address:'',
        phonenumber:'',
        mothersName:'',
        fathersName:'',
        education:''
    });
    };

    return (
        <div className='container'>
            <title>Form</title>
            <h1>INDIAN CITIZEN DETAILS</h1>
            <form>

                <div className="name-container">
                    <div className="name-field">
                        <label htmlFor='firstname'>First Name</label>
                        <input type='text' placeholder='Enter First Name' name='firstname' value={values.firstname} onChange={handleChange} required/>
                    </div>

                    <div className="name-field">
                        <label htmlFor='lastname'>Last Name</label>
                        <input type='text' placeholder='Enter Last Name' name='lastname' value={values.lastname} onChange={handleChange} required/>
                    </div>
                </div>

                <label htmlFor='age'>Age</label>
                <input type='text' placeholder='Enter Age' name='age' value={values.age} onChange={handleChange} required/>

                <label htmlFor='dob'>Date of Birth</label>
                <input type='date' placeholder='Enter Date of Birth' name='dob' value={values.dob} onChange={handleChange} required/>

                <label htmlFor='aadhar'>Aadhar Number</label>
                <input type='text' placeholder='Enter Aadhar Number' name='aadhar' value={values.aadhar} onChange={handleChange} required/>

                <label htmlFor='pan'>PAN Card Number</label>
                <input type='text' placeholder='Enter PAN Number' name='pan' value={values.pan} onChange={handleChange} required/>

                <label htmlFor='gender'>Gender</label>
                <input type='radio' name='gender' value={values.gender} onChange={handleChange}/> Male
                <input type='radio' name='gender' value={values.gender} onChange={handleChange}/> Female
                <input type='radio' name='gender' value={values.gender} onChange={handleChange}/> Other

                <label htmlFor='address'>Address</label>
                <textarea placeholder='Enter Your Address' name='address' value={values.address} onChange={handleChange} required></textarea>

                <label htmlFor='phonenumber'>Phone Number</label>
                <input type='text' placeholder='Enter phone Number' name='phonenumber' value={values.phonenumber} onChange={handleChange} required/>


                <div className="name-container">
                <div className="name-field">
                        <label htmlFor='mothersName'>Mother's Name</label>
                        <input type='text' placeholder="Enter Mother's Name" name='mothersName' value={values.mothersName} onChange={handleChange} required/>
                    </div>

                    <div className="name-field">
                        <label htmlFor='fathersName'>Father's Name</label>
                        <input type='text' placeholder="Enter Father's Name" name='fathersName' value={values.fathersName} onChange={handleChange} required/>
                    </div>
                </div>

                <label htmlFor='education'>Education</label>
                <input type='text'placeholder='Enter your Education Qualification' name='education' value={values.education} onChange={handleChange} required/>

                <button type='button'>Reset</button>
                <button type='submit'>Submit</button>

            </form>

        </div>
    )
}

export default Form