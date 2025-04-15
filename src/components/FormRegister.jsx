import { useState } from "react";
import {
    ConfirmSchema,
    getErrors,
    getFieldError,
} from "../lib/validationForm";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import supabase from "../supabase/supabase-client";
import { Link, Navigate, useNavigate } from "react-router";


export default function FormRegister() {
    const navigate = useNavigate();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [touchedFields, setTouchedFields] = useState({});
    const [formState, setFormState] = useState({
        email: "",
        firstName: "",
        lastName: "",
        username: "",
        password: "",
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        const { error, data } = ConfirmSchema.safeParse(formState);
        if (error) {
            const errors = getErrors(error);
            setFormErrors(errors);
            // console.log(errors);
        } else {
            let { error } = await supabase.auth.signUp({
                email: data.email,
                password: data.password,
                options: {
                    data: {
                        first_name: data.firstName,
                        last_name: data.lastName,
                        username: data.username
                    }
                }
            });
            if (error) {
                alert("Signing up error 👎🏻!");
            } else {
                alert("Signed up 👍🏻!");
                await new Promise((resolve) => setTimeout(resolve, 1000));
                navigate("/");
            }
        }
    };

    const onBlur = (property) => () => {
        const message = getFieldError(property, formState[property]);
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

                <Form.Control value={formState.email}
                    onChange={setField("email")} type="email" onBlur={onBlur("email")}
                    aria-invalid={isInvalid("email")}
                    required placeholder="Enter email" />
                {formErrors.email && <small>{formErrors.email}</small>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicFistName">
                <Form.Control type="text" value={formState.firstName}
                    onChange={setField("firstName")}
                    onBlur={onBlur("firstName")}
                    aria-invalid={isInvalid("firstName")}
                    required placeholder="First Name" />
                {formErrors.firstName && <small>{formErrors.firstName}</small>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Control type="text" value={formState.lastName}
                    onChange={setField("lastName")}
                    onBlur={onBlur("lastName")}
                    aria-invalid={isInvalid("lastName")}
                    required placeholder="Last Name" />
                {formErrors.lastName && <small>{formErrors.lastName}</small>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Control type="text" value={formState.username}
                    onChange={setField("username")}
                    onBlur={onBlur("username")}
                    aria-invalid={isInvalid("username")}
                    required placeholder="Username" />
                {formErrors.username && <small>{formErrors.username}</small>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" value={formState.password}
                    onChange={setField("password")}
                    onBlur={onBlur("password")}
                    aria-invalid={isInvalid("password")}
                    required placeholder="Password" />
                {formErrors.password && <small>{formErrors.password}</small>}
            </Form.Group>
            <Button variant="primary" type="submit">
                Invia
            </Button>
            <div className="mt-3 text-center">
                <p>Hai già un'account? <Link to="/login">Accedi</Link></p>
            </div>
        </Form>
    );
}
