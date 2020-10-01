import React, { useState } from 'react';
import { positions } from './routes/BallotPage/BallotPositionsList';
import { Button } from 'styled-button-component';
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
} from '../../node_modules/styled-dropdown-component';
import { Transition } from 'styled-base-components';
import NavStyled from './Nav.styled';

const Nav = ({ setSelected }) => {
	const [hidden, setHidden] = useState(true);
	const des = positions.map((names, index) => {
		const handleClick = () => {
			setSelected(index);
			setHidden(true);
		};
		return (
			<DropdownItem onClick={handleClick} key={index}>
				{names.name}
			</DropdownItem>
		);
	});
	return (
		<NavStyled>
		<Dropdown>
			<Button dropdownToggle onClick={() => setHidden(!hidden)}>
				Branches
			</Button>
			<Transition hidden={hidden}>
				<DropdownMenu
					hidden={hidden}
					toggle={() => setHidden(!hidden)}
					className='dropdown'>
					{des}
				</DropdownMenu>
			</Transition>
		</Dropdown>
		</NavStyled>
	);
};

export default Nav;
