import React, { useState } from 'react';
import './Form.css';
import { useNavigate } from 'react-router-dom';

function Form() {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        age: '',
        dob: '',
        aadhar: '',
        pan: '',
        gender: '',
        address: '',
        phonenumber: '',
        mothersName: '',
        fathersName: '',
        education: ''
    });

    const [errors, setErrors] = useState({
        firstname: '',
        lastname: '',
        aadhar: '',
        pan: '',
        phonenumber: '',
        address: '',
        fathersName:'',
        mothersName:''
    });

    const navigate = useNavigate();

    const calculateAge = (dob: string) => {
        if (!dob) return "";
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age.toString();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        let updatedValue = value;


        if (name === "dob") {
            updatedValue = value;
            const calculatedAge = calculateAge(value);
            setValues((prevData) => ({
                ...prevData,
                dob: updatedValue,
                age: calculatedAge, 
            }));
            return; 
        }

        setValues((prevData) => ({ ...prevData, [name]: updatedValue }));

        let errorMsg = "";            

        if (name === "phonenumber") {
            const phonePattern = /^(?:\+91|91)?[789]\d{9}$/;
            errorMsg = phonePattern.test(value) ? "" : "Invalid phone number!";
        }

        if (name === "aadhar") {
            const aadharPattern = /^\d{12}$/;
            errorMsg = aadharPattern.test(value) ? "" : "Invalid Aadhar! Must be 12 digits.";
        }

        if (name === "pan") {
            const pancardPattern = /^[A-Za-z]{5}[0-9]{4}[A-Za-z]$/;
            errorMsg = pancardPattern.test(value) ? "" : "Invalid PAN!";
        }
    
        if (["firstname","lastname","mothersName","fathersName"].includes(name)) {
            const namePattern = /^[A-Za-z ]*$/;
            errorMsg = namePattern.test(value) ? "" : "Should not contain any numbers or special characters";
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMsg,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (Object.values(errors).some((error) => error !== "")) {
            alert('Please fix the errors before submitting');
            return;
        }

        const savedData = JSON.parse(localStorage.getItem('userFormData') || '[]');
        const updatedData = [...savedData, values];

        localStorage.setItem('userFormData', JSON.stringify(updatedData));
        alert('Form data is saved successfully!');

        navigate('/');


        setValues({
            firstname: '',
            lastname: '',
            age: '',
            dob: '',
            aadhar: '',
            pan: '',
            gender: '',
            address: '',
            phonenumber: '',
            mothersName: '',
            fathersName: '',
            education: ''
        });
    };

    return (
        <div className='container'>
            <title>Form</title>
            <h1>INDIAN CITIZEN DETAILS</h1>
            <form onSubmit={handleSubmit}>

                <div className="name-container">
                    <div className="name-field">
                        <label htmlFor='firstname'>First Name</label>
                        <input type='text' placeholder='Enter First Name' name='firstname' value={values.firstname} onChange={handleChange} required />
                        {errors.firstname && <p style={{ color: 'red' }}>{errors.firstname}</p>}
                    </div>

                    <div className="name-field">
                        <label htmlFor='lastname'>Last Name</label>
                        <input type='text' placeholder='Enter Last Name' name='lastname' value={values.lastname} onChange={handleChange} required/>
                        {errors.lastname && <p style={{ color: 'red' }}>{errors.lastname}</p>}
                    </div>
                </div>

                <label htmlFor='dob'>Date of Birth</label>
                <input type='date'  placeholder='Enter Date of Birth' name='dob' value={values.dob} onChange={handleChange} required/>

                <label htmlFor='age'>Age</label>
                <input type='text'  placeholder='Enter Age' name='age' value={values.age} onChange={handleChange} readOnly />

                <label htmlFor='aadhar'>Aadhar Number</label>
                <input  type='text'  placeholder='Enter Aadhar Number'  name='aadhar'  value={values.aadhar}  onChange={handleChange}  required />
                {errors.aadhar && <p style={{ color: 'red' }}>{errors.aadhar}</p>}

                <label htmlFor='pan'>PAN Card Number</label>
                <input type='text' placeholder='Enter PAN Number' name='pan' value={values.pan} onChange={handleChange} required />
                {errors.pan && <p style={{ color: 'red' }}>{errors.pan}</p>}

                <label htmlFor='gender'>Gender</label>
                <input type='radio' name='gender' value="Male" checked={values.gender === 'Male'} onChange={handleChange} /> Male
                <input type='radio'  name='gender'  value="Female" checked={values.gender === 'Female'} onChange={handleChange}/> Female
                <input type='radio' name='gender' value="Others" checked={values.gender === 'Other'} onChange={handleChange}/> Others

                <label htmlFor='address'>Address</label>
                <textarea placeholder='Enter Your Address' name='address' value={values.address} onChange={handleChange} required></textarea>
                {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}

                <label htmlFor='phonenumber'>Phone Number</label>
                <input  type='text'  placeholder='Enter Phone Number'  name='phonenumber'  value={values.phonenumber}  onChange={handleChange}  required />
                {errors.phonenumber && <p style={{ color: 'red' }}>{errors.phonenumber}</p>} 

                <div className="name-container">
                    <div className="name-field">
                        <label htmlFor='mothersName'>Mother's Name</label>
                        <input type='text'  placeholder="Enter Mother's Name" name='mothersName' value={values.mothersName} onChange={handleChange} required />
                        {errors.mothersName && <p style={{ color: 'red' }}>{errors.mothersName}</p>}
                    </div>

                    <div className="name-field">
                        <label htmlFor='fathersName'>Father's Name</label>
                        <input type='text'  placeholder="Enter Father's Name"  name='fathersName'  value={values.fathersName}  onChange={handleChange} required />
                        {errors.fathersName && <p style={{ color: 'red' }}>{errors.fathersName}</p>}
                    </div>
                </div>

                <label htmlFor='education'>Education</label>
                <input type='text' placeholder='Enter your Education Qualification' name='education' value={values.education} onChange={handleChange} required />

                <button type='button' onClick={() => {
                                setValues({
                                    firstname: '',
                                    lastname: '',
                                    age: '',
                                    dob: '',
                                    aadhar: '',
                                    pan: '',
                                    gender: '',
                                    address: '',
                                    phonenumber: '',
                                    mothersName: '',
                                    fathersName: '',
                                    education: ''
                                });
                                setErrors({
                                    firstname: '',
                                    lastname: '',
                                    aadhar: '',
                                    pan: '',
                                    phonenumber: '',
                                    address: '',
                                    fathersName:'',
                                    mothersName:''
                                });
                                   }}>Reset</button>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Form;
