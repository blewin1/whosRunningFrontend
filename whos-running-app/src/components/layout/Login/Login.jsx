import React, { useState, useContext, useEffect } from "react";
import Input from "../../Styled/Input.styled";
import { UserContext } from "../../../utils/userContext";
import Button from "../../Styled/Button.styled";
import Flex from "../Flex";
import { createUser, login as API_login } from "../../../utils/apiUtils";

const Login = ({ closeLogin }) => {
    const [input, setInput] = useState({
        email: "",
        name: "",
    });
    const [creatingAccount, setCreatingAccount] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        // setError('');
    }, []);

    const { setUser, user, address } = useContext(UserContext);

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        });
    };
    const submitForm = async (event) => {
        event.preventDefault();
        if (creatingAccount) {
            const success = await createAccount();
            if (!success){
                setError("Account already exists")
                return;
            }
        } else {
            await login();
        }
        setInput({ email: "", name: "" });
        closeLogin();
    };

    const login = async () => {
        try {
            const user = await API_login(input.email)
            setUser(user)
        } catch (err) {
            console.error(err)
        }
    };

    const createAccount = async () => {
        const userInfo = input;
        if (address) {
            userInfo.address = address;
        }
        try {
            const newUser = await createUser(userInfo);
            setUser(newUser)
        } catch (err) {
            console.error(err)
        }
    };

    return (
        <>
            <h2>{creatingAccount ? "Create Account" : "Login"}</h2>
            {creatingAccount ? (
                <Input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={input.name}
                    placeholder="Name"
                />
            ) : (
                ""
            )}
            <Flex
                as="form"
                onSubmit={submitForm}
                direction="column"
                width="100%"
            >
                <Input
                    type="email"
                    s
                    name="email"
                    onChange={handleChange}
                    value={input.email}
                    placeholder="email@example.com"
                />
                <Button type="submit">Submit</Button>
            </Flex>
            {error ? <span className="form-error">{error}</span> : ""}
            <span>
                {creatingAccount
                    ? "Already have an account? "
                    : "Need to create an account?"}
                <span
                    onClick={() => setCreatingAccount((c) => !c)}
                    className="link-btn"
                >
                    {creatingAccount ? "Sign In" : "Click Here"}
                </span>
            </span>
        </>
    );
};

export default Login;
