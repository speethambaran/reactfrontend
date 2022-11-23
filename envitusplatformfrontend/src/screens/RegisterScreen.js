import { useState } from "react";
import FormInput from "../screens/FormInput"
import axios from 'axios'
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [Values, setValues] = useState({
        name: "",
        email: "",
        contact: "",
        username: "",
        password: "",
        confirmpassword: "",

    });

    const handleSubmit =  async (e) => {
        e.preventDefault()
        await axios.post('http://192.46.210.81:7002/register/', { Values }).then((result) => {
            console.log(result)

        })
    



};

const navigate=useNavigate()
const onChange = (e) => {
    setValues({ ...Values, [e.target.name]: e.target.value });
};


const inputs = [
    {
        id: 1,
        name: "name",
        // label: "Your name",
        errorMessage: "Should be 3-16 characters and shouldn't include any special character",
        placeholder: "Your name",
        type: "text",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,


    },
    {
        id: 2,
        name: "email",
        // label: "Your email",
        errorMessage: "should be a valid email address",
        placeholder: "Your email",
        type: "email",
        // pattern:"^/S+@/S+/./S+$",

        required: true,


    },
    {
        id: 3,
        name: "contact",
        // label: "Your contact",
        errorMessage: "should be 10 digits",
        placeholder: "Your contact",
        type: "tel",
        pattern:"^[0-9]{10,12}",
        required: true,


    },
    {
        id: 4,
        name: "username",
        // label: "Your username",
        errorMessage: "Should be 3-16 characters and shouldn't include any special character",
        placeholder: "Your username",
        type: "text",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,



    },
    {
        id: 5,
        name: "password",
        // label: "Your password",
        errorMessage: " must be eight characters or longer",
        placeholder: "Your password",
        type: "password",
        // pattern: "^(?=.{8,})",
        required: true,

       

    },
    {
        id: 6,
        name: "confirmpassword",
        // label: "confirm password",
        errorMessage: "passwords don't match",
        placeholder: "confirm password",
        type: "password",
        pattern: Values.password,
        required: true,



    }
]


return (

    <div className="app">

        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            {inputs.map((input) => (
                <FormInput key={input.id} {...input} value={Values
                [input.name]} onChange={onChange} />
            ))}
             <button onClick={()=> navigate('/login')}>Submit</button>
            <p>Already Registered?<a href="/login">Login</a></p>
        </form>
    </div>
);


};

export default Register;