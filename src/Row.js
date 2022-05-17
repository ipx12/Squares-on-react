import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';

export const Td = styled.td`
    background-color: skyblue;
    ${props => `width: ${props.cellSize + 'px'};
                height: ${props.cellSize + 'px'};
    `};
`



const Row = (props) => {

    const createRow = () => {
        let elem = [];
        for(let i = 0; i < props.initialWidth; i++) {
            elem.push(<Td data-column={i} key={i} cellSize={props.cellSize}>{i}</Td>)
        }

        return elem
        
    }
    
    let elements = createRow();

    
    return (
        <tr data-row={uuidv4()}>
            {elements}
        </tr>
    )
}

export default Row;