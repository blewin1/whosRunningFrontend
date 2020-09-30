import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || ''};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    height: ${props => props.height || ''};
    padding: ${props => props.padding || ''};
    margin: ${props => props.margin || ''};
    width: ${props => props.width || ''};
`

export default Flex
