import { useState } from "react";
import FormInput from "../screens/FormInput"
import axios from 'axios'

const Register = () => {
    const [Values, setValues] = useState({
        
        username: "",
        password: "",
       

    });

    const handleSubmit =  async (e) => {
        e.preventDefault()
        await axios.post('http://192.46.210.81:7002/register/', { Values }).then((result) => {
            console.log(result)
        })
    



};
const onChange = (e) => {
    setValues({ ...Values, [e.target.name]: e.target.value });
};


const inputs = [
   
    {
        id: 1,
        name: "username",
        label: "Your username",
        errorMessage: "Should be 3-16 characters and shouldn't include any special character",
        placeholder: "Your username",
        type: "text",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,



    },
    {
        id: 2,
        name: "password",
        label: "Your password",
        errorMessage: "should be 8-20 characters and include atleast 1 letter,1 number and 1 specialcharacter",
        placeholder: "Your password",
        type: "password",
        // pattern:'^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})',
        required: true,



    },
   
]


return (

    <div className="app">

        <forms onSubmit={handleSubmit}>
            <h1>Login</h1>
            {inputs.map((input) => (
                <FormInput key={input.id} {...input} value={Values
                [input.name]} onChange={onChange} />
            ))}
             <button>Submit</button>
            <p>Not a user?<a href="/register">Register</a></p>
        </forms>
    </div>
);


};

export default Register;