import { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
    const [focused, setFocused] = useState(false)
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true)

    };


    return (
        <div className="formInput">
            <label>{label}</label>

            <input {...inputProps} onChange={onChange}
                onBlur={handleFocus} onFocus={() =>
                    inputProps.name === "confirmpassword" && setFocused(true)}
                focused={focused.toString()} />
            <span>{errorMessage}</span><br/>
        </div>

    );
};
export default FormInput;