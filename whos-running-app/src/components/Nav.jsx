import React, { useState } from 'react';

import { Button } from 'styled-button-component';
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownDivider,
} from '../../node_modules/styled-dropdown-component';

const Nav = (props) => {
	const description = [
		{
			name: 'U.S. President Candidates',
			description:
				'The President is both the head of state and head of government of the United States of America, and Commander-in-Chief of the armed forces. Under Article II of the Constitution, the President is responsible for the execution and enforcement of the laws created by Congress.',
		},
		{
			name: 'U.S. Senate  Candidates',
			description:
				'The Senate of the United States shall be composed of two Senators from each State, elected by the people thereof, for six years; and each Senator shall have one vote. The electors in each State shall have the qualifications requisite for electors of the most numerous branch of the State legislatures.',
		},
		{
			name: 'U.S. House of Representatives Candidates',
			description:
				'The House of Representatives is made up of 435 elected members, divided among the 50 states in proportion to their total population. In addition, there are 6 non-voting members, representing the District of Columbia, the Commonwealth of Puerto Rico, and four other territories of the United States. The presiding officer of the chamber is the Speaker of the House, elected by the Representatives. He or she is third in the line of succession to the Presidency',
		},
		{
			name: 'Governor Candidates',
			description:
				'The House of Representatives is made up of 435 elected members, divided among the 50 states in proportion to their total population. In addition, there are 6 non-voting members, representing the District of Columbia, the Commonwealth of Puerto Rico, and four other territories of the United States. The presiding officer of the chamber is the Speaker of the House, elected by the Representatives. He or she is third in the line of succession to the Presidency',
		},
		{
			name: 'Executive Council Candidates',
			description:
				"The Executive Council advises the Governor on all matters and provides a check on the governor's power. While the governor retains the right to veto legislation passed by the New Hampshire General Court, and commands the New Hampshire National Guard, the council has veto power over pardons, contracts with a value greater than $10,000, and nominations.",
		},
		{
			name: 'NH Senate Candidates',
			description:
				'The New Hampshire Senate has been meeting since 1784.[1] It is the upper house of the New Hampshire General Court. It consists of 24 members representing Senate districts based on population. ',
		},
		{
			name: 'NH House of Representatives Candidates',
			description:
				"The New Hampshire House of Representatives is the lower house in the New Hampshire General Court, the bicameral legislature of the state of New Hampshire. The House of Representatives consists of 400 members coming from 204 legislative districts across the state, created from divisions of the state's counties.",
		},
	];
	const [hidden, setHidden] = useState(true);
	const des = description.map((names, index) => {
			const handleClick = () => {
			// return <p>{names.description}</p>
			console.log(names)
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
