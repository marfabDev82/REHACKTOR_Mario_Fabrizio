
import { useState } from "react";
import {
    FormSchemaLogin,
    ConfirmSchemaLogin,
    getErrors,
    getFieldError,
} from "../lib/validationForm";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import supabase from "../supabase/supabase-client";
import { Link, Navigate, useNavigate } from "react-router";


export default function LoginForm() {
    const navigate = useNavigate();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [touchedFields, setTouchedFields] = useState({});
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        const { error, data } = ConfirmSchemaLogin.safeParse(formState);
        if (error) {
            const errors = getErrors(error);
            setFormErrors(errors);
            // console.log(errors);
        } else {
            let { error } = await supabase.auth.signInWithPassword({
                email: data.email,
                password: data.password,

            });
            if (error) {
                alert("Signing In error 👎🏻!");
            } else {
                alert("Signed In 👍🏻!");
                await new Promise((resolve) => setTimeout(resolve, 1000));
                navigate("/");
            }
        }
    };

    const onBlur = (property) => () => {
        const message = getFieldError(FormSchemaLogin, property, formState[property]);
        setFormErrors((prev) => ({ ...prev, [property]: message }));
        setTouchedFields((prev) => ({ ...prev, [property]: true }));
    };

    const isInvalid = (property) => {
        if (formSubmitted || touchedFields[property]) {
            return !!formErrors[property];
        }
        return undefined;
    };

    const setField = (property, valueSelector) => (e) => {
        setFormState((prev) => ({
            ...prev,
            [property]: valueSelector ? valueSelector(e) : e.target.value,
        }));
    };

    return (

        <Form onSubmit={onSubmit} noValidate>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={formState.email}
                    onChange={setField("email")} type="email" onBlur={onBlur("email")}
                    aria-invalid={isInvalid("email")}
                    required placeholder="email" />
                {formErrors.email && <small>{formErrors.email}</small>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={formState.password}
                    onChange={setField("password")}
                    onBlur={onBlur("password")}
                    aria-invalid={isInvalid("password")}
                    required placeholder="Password" />
                {formErrors.password && <small>{formErrors.password}</small>}
            </Form.Group>
            <Button variant="primary" type="submit">
                Sign In
            </Button>
            <div className="mt-3 text-center">
                <p>Non sei ancora registrato? <Link to="/register">Registrati</Link></p>
            </div>
        </Form>
    );
}
