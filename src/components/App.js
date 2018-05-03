import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap"

import "./App.css";
import AgeStats from "./AgeStats";

class App extends Component {
	constructor() {
		super();
		this.state = {
			newDate : "",
			birthDate : "1995-08-23",
			showStats : false
		}
	}
	changeBirthday() {
		this.setState({
			birthDate : this.state.newDate,
			showStats : true
		});
		console.log("State object==",this.state);
	};
	//onChange={(event)=>this.state.newDate=event.target.value}
	render(){
		return (
			<div className="App">
				<h2>Input your Birthday !</h2>
				<div>
					<Form inline>
						<FormControl type="date" onChange={ event => this.setState({newDate : event.target.value})}>
						</FormControl>{" "}
						<Button onClick={()=>this.changeBirthday()}>Submit</Button>
						{
							this.state.showStats ?
								<div className="age-stats fade">
									<AgeStats date={this.state.birthDate}/>
								</div>
							:	<div></div>
						}
					</Form>
				</div>
			</div>
		)
	}
}

export default App; 