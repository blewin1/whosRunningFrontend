import React from 'react';
import AddressForm from '../../AddressForm/AddressForm';
import Flex from '../../layout/Flex';
import HeaderNav from "../../HeaderNav";
import HomePageStyled from './HomePage.styled';

const HomePage = ({ history }) => {
	return (
		<div> 
		<HomePageStyled> 
		<HeaderNav />
		<Flex
			alignItems='center'
			justifyContent='start'
			direction='column'
			height='100vh'
			padding='0 35px'>
			<h2 className="informed">Be an informed voter.</h2>
			<p className = "top">
				View the elections you will be voting in and learn more about
				the candidates by entering your address.
			</p>
			<AddressForm history={history} />
		</Flex>
		</HomePageStyled>
		</div>
	);
};

export default HomePage;
