import React from "react";
import {Digit} from "./Digit";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	let ones = props.counter % 10;
	let tens = Math.floor(props.counter / 10) % 10;
	let hundreds = Math.floor(props.counter / 100) % 10;
	let thousands = Math.floor(props.counter / 1000) % 10;
	let tenThousands = Math.floor(props.counter / 10000) % 10;
	let hundredThousands = Math.floor(props.counter / 100000) % 10;
	return (
		<div className="container bg-black mt-4">
			<div className="d-flex justify-content-center align-items-center">
				<Digit digitValue={<i class="fa-regular fa-clock"></i>} />
				<Digit digitValue={hundredThousands} />
				<Digit digitValue={tenThousands} />
				<Digit digitValue={thousands} />
				<Digit digitValue={hundreds} />
				<Digit digitValue={tens} /> 
				<Digit digitValue={ones} />
			</div>
		</div>
	);
};

export default Home;