import { useState } from "react"

export default function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);
    const [formValid, setFormValid] = useState(false)

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (Object.values(values).includes('')) {
            setFormValid(true)
            return ''
        }
        setFormValid(false)

        submitHandler(values);
    };

    return {
        values,
        onChange,
        onSubmit,
        formValid,
    }
}