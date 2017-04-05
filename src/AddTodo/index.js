import React, {Component, PropTypes} from 'react';

export default class AddTodo extends Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event){
		const node = this.input;
		const text = node.value.trim();
		this.props.onAddClick(text);
		node.value = '';
	}
	render(){
		return  <div>
					<input type="text" ref={(textInput) => {this.input = textInput;}}/>
					<button onClick={(e) => this.handleClick(e)}>Add</button>
				</div>;
	}
}

AddTodo.propTypes = {
	onAddClick: PropTypes.func.isRequired
};