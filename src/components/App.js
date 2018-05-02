import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap"

import "./App.css"

class App extends Component {
	constructor() {
		super();
		this.state = {
			newDate : ""
		}
	}
	changeBirthday() {
		alert("newDate=="+this.state.newDate);
	};
	//onChange={(event)=>this.state.newDate=event.target.value}
	render(){
		return (
			<div className="App">
				<h2>Input your Birthday !</h2>
				<div>
					<Form inline>
						<FormControl type="date" onChange={ event => this.setState({newDate : event.target.value})}>
						</FormControl>
						{" "}
						<Button onClick={()=>this.changeBirthday()}>Submit</Button>
					</Form>					
				</div>
			</div>
		)
	}
}

export default App; 