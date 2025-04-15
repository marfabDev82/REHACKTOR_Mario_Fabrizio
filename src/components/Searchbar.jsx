import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function () {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [ariaInvalid, setAriaInvalid] = useState(null);

    const handleSearch = (event) => {
        event.preventDefault();
        if (typeof search === 'string' && search.trim().length !== 0) {
            navigate(`/search?query=${search}`)
            setSearch("");
        } else {
            setAriaInvalid(true)
        }
    };

    return (
        <Form className="d-flex w-75 " onSubmit={handleSearch}>
            <Form.Control
                type="search"
                placeholder={ariaInvalid ? "Devi Cercare Qualcosa" : "Search a game"}
                onChange={(event) => setSearch(event.target.value)}
                value={search}
                aria-invalid={ariaInvalid}
                className="me-2"
                aria-label="Search"
            />
            <Button type="submit" variant="outline-success">Search</Button>
        </Form>
    )
}