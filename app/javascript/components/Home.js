import React from "react";
import Counter from './Counter'
import "./Home.css"

class Home extends React.Component {
	render() {
    	return (
			<div class="page_body">
				Home page!
				<Counter />
			</div>
		);
	}
}
export default Home;