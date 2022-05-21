import { Component } from 'react';

import {Wrapper, AddHeightButton, AddWidthButton, DeleteColumnButton, DeleteRowButton} from './styledComponents'

import './Square.css';

class Square extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cellSize: props.cellSize,
			offsetLeft: 2,
			offsetTop: 2,
			activeColumn: '',
			activeRow: '',
			dispalayRemoveHigthBtn: false,
			dispalayRemoveWidthhBtn: false,
			squareStructure: []
		}
	}

	componentDidMount() {
		let initialBoard = [];

		for(let i = 0; i < this.props.initialHeight; i++) {
			let row = [];
			for(let j = 0; j < this.props.initialWidth; j++) {
				let cell = [];
				row.push(cell);
			} 
			initialBoard.push(row);
		}
		this.setState({squareStructure: initialBoard})
	}

	createSquare = () => {
		let {squareStructure} = this.state

		return squareStructure.map((row, rowIndex) => {
			return <tr data-row={rowIndex} key={rowIndex}>
					{
						row.map((_, cellIndex) => {
							return <td data-row={rowIndex}
										data-column={cellIndex}
										style={{width: this.props.cellSize, height: this.props.cellSize, backgroundColor: 'skyblue'}}
										key={`row${rowIndex} cell-${cellIndex}`}
										onMouseOver={(e) => this.onMouseOverUpdate(e)}>	
							</td>
						})
					}
					</tr>
		})
	}

	onMouseOverUpdate = (e) => {
		if (this.state.offsetLeft !== e.target.offsetLeft) {
			this.setState(() => ({
				offsetLeft: e.target.offsetLeft
			}))
		}

		if (this.state.offsetTop !== e.target.offsetTop) {
			this.setState(() => ({
				offsetTop: e.target.offsetTop
			}))
		}

		if (this.state.activeColumn !== e.target.getAttribute('data-column')) {
			this.setState(() => ({
				activeColumn: e.target.getAttribute('data-column')
			}))
		}

		if (this.state.activeRow !== e.target.getAttribute('data-row')) {
			this.setState(() => ({
				activeRow: e.target.getAttribute('data-row')
			}))
		}
	}


	onAddColumn = () => {
		 let {squareStructure} = this.state
		
		const newSquare = squareStructure.map(row => {
			 return [...row, []]
		 })
		 this.setState({squareStructure: newSquare})
	}

	onAddRow = () => {
		this.setState(({squareStructure}) => ({
			squareStructure: [...squareStructure, squareStructure[0]]
		}))
	}



	onDeleteColumn = () => {
		let {squareStructure, activeColumn} = this.state;
		let arr = squareStructure.map(row => {
			return row.filter(cell => {
				if (cell !== row[activeColumn]) {
					return cell;
				}
			})
		})
		console.log(arr)
		this.setState(() => ({
			squareStructure: arr,
			dispalayRemoveHigthBtn: false,
			dispalayRemoveWidthhBtn: false,
		}))
	}

	onDeleteRow = () => {
		let {squareStructure, activeRow} = this.state;
		let newArr = [...squareStructure.slice(0, activeRow), ...squareStructure.slice(activeRow + 1, squareStructure.length)]
		
		this.setState(() => ({
			squareStructure: newArr,
			dispalayRemoveHigthBtn: false,
			dispalayRemoveWidthhBtn: false,
		}))
	}


	showButtons = (e) => {
		if (this.state.squareStructure.length > 1) {
			this.setState(() => ({
				dispalayRemoveWidthhBtn: true 
			}))
		}

		if (this.state.squareStructure[0].length > 1) {
			this.setState(() => ({
				dispalayRemoveHigthBtn: true 
			}))
		}

		if (e.target.getAttribute('data-button') === 'addButton') {
			this.setState(() => ({
				dispalayRemoveHigthBtn: false,
				dispalayRemoveWidthhBtn: false
			}))
		}
	}

	removeButtons = () => {
		this.setState(() => ({
			dispalayRemoveHigthBtn: false,
			dispalayRemoveWidthhBtn: false
		}))
	}

	render() {
		const {cellSize, offsetLeft, offsetTop, dispalayRemoveHigthBtn, dispalayRemoveWidthhBtn} = this.state;

		let elements = this.createSquare()

		return(
			<Wrapper onMouseOver={this.showButtons}
					onMouseLeave={this.removeButtons}>
				<AddWidthButton cellSize={cellSize}
								onClick={this.onAddColumn}
								data-button='addButton'/>
				<AddHeightButton cellSize={cellSize}
								data-button='addButton'
								onClick={this.onAddRow}/>
				<DeleteColumnButton cellSize={cellSize}
									buttonsDisplay={dispalayRemoveHigthBtn}
									offsetLeft={offsetLeft}
									onClick={this.onDeleteColumn}/>
				<DeleteRowButton cellSize={cellSize}
									buttonsDisplay={dispalayRemoveWidthhBtn}
									offsetTop={offsetTop}
									onClick={this.onDeleteRow}
									/>
				<table style={{border: '1px solid skyblue'}}>
					<tbody>
						{elements}
					</tbody>
				</table>
			</Wrapper>
		)
	}
}

export default Square;
