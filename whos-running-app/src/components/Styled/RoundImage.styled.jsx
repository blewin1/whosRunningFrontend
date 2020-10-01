import styled from 'styled-components'

export default styled.div`
    border-radius: 100%;
    border: 4px solid black;
    height: 75px;
    width: 75px;
    background-size: cover; //contain
    background-repeat: no-repeat;
    background-position: start center;
    ${props => props.image ? `background-image: url(${props.image})` : '' };

`