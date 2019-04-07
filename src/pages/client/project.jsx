import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";
import { Checkbox } from "pretty-checkbox-react";
import "pretty-checkbox/dist/pretty-checkbox.min.css";

import FeaturesJSON from "./features.json";

import Base from "../../components/templates/Base";

import Hero from "../../components/organisms/hero/Hero";

const CartElement = styled.nav`
	background: ${props => props.theme.secondary};
	color: ${props => props.theme.white};
	padding: 40px;
	height: 100%;
	width: 300px;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 999;
`;

export default class ClientCheckout extends Component {
	state = {
		features: [],
		password: "letmein",
		total: 0
	};

	componentDidMount() {
		this.setState({
			features: FeaturesJSON.features
		});
	}

	onChange = e => {
		const { target } = e;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	};

	updateTotal = amount => {
		this.setState({
			total: this.state.total + amount
		});
	};

	render() {
		if (this.state.password === "letmein") {
			return (
				<Base cta={false}>
					<Hero>
						<h1>Makeup and Mane</h1>
						<p>Welcome to Makeup and Mane development checklist</p>
					</Hero>
					<CartElement>
						<h2 className="h4">Shopping Cart</h2>
						{this.state.total}
					</CartElement>
					<Container fluid>
						<Row>
							<Col lg={5}>
								<h2>Features</h2>
								{this.state.features.map(feature => {
									return (
										<>
											<Feature data={feature} updateTotal={this.updateTotal} />
										</>
									);
								})}
							</Col>
						</Row>
					</Container>
				</Base>
			);
		} else {
			return (
				<Base cta={false}>
					<Hero>
						<h1>Makeup and Mane</h1>
						<form>
							<div>
								<label>Enter Password:</label>
							</div>
							<input
								type="password"
								name="password"
								onChange={this.onChange}
								value={this.state.password}
							/>
						</form>
					</Hero>
				</Base>
			);
		}
	}
}

class Feature extends Component {
	render() {
		const { updateTotal } = this.props;
		const { price, title } = this.props.data;

		return (
			<>
				<Checkbox
					shape="round"
					color="success"
					icon={<i className="mdi mdi-check" />}
					animation="pulse"
				>
					{title}
				</Checkbox>
				{price}
			</>
		);
	}
}

class Cart extends Component {
	render() {
		return <CartElement>{this.props.children}</CartElement>;
	}
}
