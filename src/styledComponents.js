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
	:before {
	content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 14px;
		height: 4px;
		background-color: #fff;
	}
	:after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 4px;
		height: 14px;
		background-color: #fff;
	}
	:hover {
		opacity: 0.7;
		cursor: pointer;
	}
	${props => `width: ${props.cellSize + 'px'};
				height: ${props.cellSize + 'px'};
				bottom: ${'-' + props.cellSize + 'px'};
	`};
`

export const AddWidthButton = styled.div`
	position: absolute;
    top: 2px;
	background-color: orange;
	:before {
	content: '';
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 14px;
	height: 4px;
	background-color: #fff;
	}
	:after {
		content: '';
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 4px;
	height: 14px;
	background-color: #fff;
	}
	:hover {
		opacity: 0.7;
		cursor: pointer;
	}
	${props => `width: ${props.cellSize + 'px'};
				height: ${props.cellSize + 'px'};
				right: ${"-" + props.cellSize + 'px'};
	`};
`

export const DeleteRowButton = styled.div`
	position: absolute;
	background-color: orangered;
	transition: all .3s;
	:before {
	content: '';
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 14px;
	height: 4px;
	background-color: #fff;
	}
	:hover {
		opacity: 0.7;
		cursor: pointer;
	}
	${props => `width: ${props.cellSize + 'px'};
				height: ${props.cellSize + 'px'};
				left: ${"-" + props.cellSize + 'px'};
				top: ${props.offsetTop + 'px'};
				display: ${props.buttonsDisplay ? 'block' : 'none'};
	`};
`


export const DeleteColumnButton = styled.div`
	position: absolute;
	background-color: orangered;
	transition: all .3s;
	:before {
	content: '';
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 14px;
	height: 4px;
	background-color: #fff;
	}
	:hover {
		opacity: 0.7;
		cursor: pointer;
	}
	${props => `width: ${props.cellSize + 'px'};
				height: ${props.cellSize + 'px'};
				top: ${"-" + props.cellSize + 'px'};
				left: ${props.offsetLeft + 'px'};
				display: ${props.buttonsDisplay ? 'block' : 'none'};
	`};
`

export const Td = styled.td`
    background-color: skyblue;
    ${props => `width: ${props.cellSize + 'px'};
		height: ${props.cellSize + 'px'};
    `};
`