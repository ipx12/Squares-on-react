import styled from 'styled-components'

export const Wrapper = styled.div`
	display: inline-block;
    position: relative;
`

export const AddHeightButton = styled.div`
	position: absolute;
    bottom: -50px;
    left: 2px;
	background-color: orange;
	${props => `width: ${props.cellSize + 'px'};
				height: ${props.cellSize + 'px'};
				bottom: ${'-' + props.cellSize + 'px'};
	`};
`

export const AddWidthButton = styled.div`
	position: absolute;
    top: 2px;
	background-color: orange;
	${props => `width: ${props.cellSize + 'px'};
				height: ${props.cellSize + 'px'};
				right: ${"-" + props.cellSize + 'px'};
	`};
`

export const RemoveHeightButton = styled.div`
	position: absolute;
	background-color: orangered;
	transition: all .3s;
	${props => `width: ${props.cellSize + 'px'};
				height: ${props.cellSize + 'px'};
				top: ${"-" + props.cellSize + 'px'};
				left: ${props.offsetLeft + 'px'};
				display: ${props.buttonsDisplay ? 'block' : 'none'};
	`};
`

export const RemoveWidthButton = styled.div`
	position: absolute;
	background-color: orangered;
	transition: all .3s;
	${props => `width: ${props.cellSize + 'px'};
				height: ${props.cellSize + 'px'};
				left: ${"-" + props.cellSize + 'px'};
				top: ${props.offsetTop + 'px'};
				display: ${props.buttonsDisplay ? 'block' : 'none'};
	`};
`

export const Td = styled.td`
    background-color: skyblue;
    ${props => `width: ${props.cellSize + 'px'};
                height: ${props.cellSize + 'px'};
    `};
`