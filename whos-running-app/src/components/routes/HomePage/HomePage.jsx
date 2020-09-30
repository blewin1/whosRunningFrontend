import React from "react";
import AddressForm from "../../AddressForm/AddressForm";
import Flex from "../../layout/Flex";

const HomePage = ({ history }) => {
    return (
        <Flex
            alignItems="center"
            justifyContent="start"
            direction="column"
            height="100vh"
            padding="0 35px"
        >
            <h2>Be an informed voter.</h2>
            <p>
                View the elections you will be voting in and learn more about
                the candidates by entering your address.
            </p>
            <AddressForm history={history} />
        </Flex>
    );
};

export default HomePage;
