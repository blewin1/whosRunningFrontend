import React, { useState } from 'react';
import {positions} from './routes/BallotPage/BallotPositionsList'
import { Button } from 'styled-button-component';
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownDivider,
} from '../../node_modules/styled-dropdown-component';

const Nav = ({setSelected}) => {
	 
	const [hidden, setHidden] = useState(true);
	const des = positions.map((names, index) => {
			const handleClick = () => {
				setSelected (index)
				setHidden(true)
			console.log(names, index)
			};
		return( 
		<DropdownItem onClick={handleClick}>{names.name}</DropdownItem>);
	});
	return (
		<Dropdown>
			<Button dropdownToggle onClick={() => setHidden(!hidden)}>
				Candidates
			</Button>
			<DropdownMenu hidden={hidden} toggle={() => setHidden(!hidden)}>
				{des}
			</DropdownMenu>
		</Dropdown>
	);
};

export default Nav;
