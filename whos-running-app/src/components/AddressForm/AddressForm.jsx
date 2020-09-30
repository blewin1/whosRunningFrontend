import React, { useState, useContext } from "react";
import { UserContext } from "../../utils/userContext.js";
import Flex from "../layout/Flex.jsx";
import Button from "../Styled/Button.styled.jsx";
import Input from "../Styled/Input.styled.jsx";

const AddressForm = ({ history }) => {

    const { setAddress } = useContext(UserContext)

    const [input, setInput] = useState({
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
    });

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        });
    };
    const submitForm = async (event) => {
        event.preventDefault();
        setAddress(input)
        setInput({ address1: "", address2: "", city: "", state: "", zip: "" });
        history.push('/dashboard')
    };

    return (
        <Flex as="form" onSubmit={submitForm} direction="column" width="100%">
            <Input
                type="text"
                name="address1"
                onChange={handleChange}
                value={input.address1}
                placeholder="Address Line 1"
            />
            <Input
                type="text"
                name="address2"
                onChange={handleChange}
                value={input.address2}
                placeholder="Address Line 2"
            />
            <Input
                type="text"
                name="city"
                onChange={handleChange}
                value={input.city}
                placeholder="City"
            />
            <Flex width="100%">
                <Input
                    type="text"
                    name="state"
                    onChange={handleChange}
                    value={input.state}
                    placeholder="State"
                />
                <Input
                    type="text"
                    name="zip"
                    onChange={handleChange}
                    value={input.zip}
                    placeholder="ZIP"
                />
            </Flex>
            <Button type="submit">Submit</Button>
        </Flex>
    );
};

export default AddressForm;
