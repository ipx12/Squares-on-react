import { Component } from 'react';

import {Wrapper, AddHeightButton, AddWidthButton, RemoveHeightButton, RemoveWidthButton} from './styledComponents'
import { v4 as uuidv4 } from 'uuid';

import Row from './Row';

import './Square.css';

class Square extends Component {
	constructor(props) {
		super(props);
		this.state = {
			initialWidth: props.initialWidth,
			initialHeight: props.initialHeight,
			cellSize: props.cellSize,
			offsetLeft: 2,
			offsetTop: 2,
			columnId: '',
			rowId: '',
			deleteColumn: '',
			dispalayRemoveHigthBtn: false,
			dispalayRemoveWidthhBtn: false,
			rows: this.createRows(this.props.initialHeight, this.props.initialWidth)
		}

	}

	createRows = (column, row) => {
		let arr = [];
		for(let i = 0; i < column; i++) {
			arr.push(<Row initialWidth={row}
							cellSize={this.props.cellSize}
							key={uuidv4()}/>
					)
		}
		console.log(arr)
		return arr
	}

	onAddColumn = () => {
		this.setState(({initialWidth, initialHeight}) => ({
			initialWidth: initialWidth + 1,
			rows: this.createRows(initialHeight, initialWidth + 1)
		}))
	}

	onAddRow = () => {
		this.setState(({initialHeight, initialWidth}) => ({
			initialHeight: initialHeight + 1,
			rows: this.createRows(initialHeight + 1, initialWidth)
		}))
	}



	onDeleteColumn = () => {
		if(this.state.initialWidth === 1) {
			return
		} 

		this.setState(({initialWidth, initialHeight}) => ({
			initialWidth: initialWidth - 1,
			dispalayRemoveHigthBtn: false,
			rows: this.createRows(initialHeight, initialWidth - 1),

		}))

		// let arr = this.state.rows.map((item) => {
		// 	console.log(this.state.columnId)
		// 	if(item.key !== this.state.columnId) {
		// 		return item
		// 	}
		// });
		// this.setState({rows: arr})
	}

	onDeleteRow = (id) => {
		if(this.state.initialHeight === 1) {
			return
		} 


		this.setState(({initialWidth, initialHeight}) => ({
			initialHeight: initialHeight - 1,
			dispalayRemoveWidthhBtn: false,
			rows: this.createRows(initialHeight - 1, initialWidth)
		}))

		// this.setState(({rows, }) => ({
		// 	rows: rows.filter(item => item.key !== id),
		// }))
		// this.state.rows.forEach(item => console.log(item.key))
	}

	onMouseOver = (e) => {
		if (e.target.tagName === 'TD' && this.state.offsetLeft !== e.target.offsetLeft) {
			this.setState(() => ({
				offsetLeft: e.target.offsetLeft,
				columnId: e.target.getAttribute('data-column')
			}))
		}
		
		if (e.target.tagName === 'TD' && this.state.offsetTop !== e.target.offsetTop) {
			this.setState(() => ({
				offsetTop: e.target.offsetTop,
				rowId: e.target.parentNode.getAttribute('data-row')
			}))
		}
		
	}

	showButtons = () => {
		if (this.state.initialHeight > 1) {
			this.setState(() => ({
				dispalayRemoveWidthhBtn: true 
			}))
		}
		if (this.state.initialWidth > 1) {
			this.setState(() => ({
				dispalayRemoveHigthBtn: true 
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
		const {cellSize, offsetLeft, offsetTop, rows, rowId, dispalayRemoveHigthBtn, dispalayRemoveWidthhBtn} = this.state;
		return(
			<Wrapper onMouseOver={this.showButtons}
					onMouseLeave={this.removeButtons}>
				<AddWidthButton cellSize={cellSize}
								onClick={this.onAddColumn}/>
				<AddHeightButton cellSize={cellSize}
								 onClick={this.onAddRow}/>
				<RemoveHeightButton cellSize={cellSize}
									buttonsDisplay={dispalayRemoveHigthBtn}
									offsetLeft={offsetLeft}
									onClick={this.onDeleteColumn}/>
				<RemoveWidthButton cellSize={cellSize}
									buttonsDisplay={dispalayRemoveWidthhBtn}
									offsetTop={offsetTop}
									onClick={() => this.onDeleteRow(rowId)}
									/>
				<table style={{border: '1px solid skyblue'}}
						onMouseOver={(e) => this.onMouseOver(e)}>
					<tbody>
						{rows}
					</tbody>
				</table>
			</Wrapper>
		)
	}
}

export default Square;
