import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const GridComponent = styled.section`
	display: flex;
	flex-wrap: wrap;
	margin: 64px 0;

	.grid__item {
		max-width: 33%;
		position: relative;

		cursor: pointer;
		transition: 0.2s all ease;

		img {
			min-height: 200px;
			object-fit: cover;
			width: 100%;
		}

		&:active,
		&:focus,
		&:hover {
			.grid__item__title {
				opacity: 0.8;
			}
		}
	}

	.grid__item--fullscreen {
		max-width: 100%;
	}

	.grid__item__title {
		height: 100%;
		left: 0;
		padding: 8px;
		position: absolute;
		top: 0;
		width: 100%;

		background: ${props => props.theme.black};
		color: white;
		opacity: 0;
		transition: 0.2s all ease;
	}
`;

export default class Grid extends Component {
	render() {
		const { items, type } = this.props;

		if (type === "images") {
			return (
				<GridComponent>
					{items.map(item => (
						<GridItem>
							<img src={item.node.imageFull} alt="test" />
							<span className="grid__item__title">{item.node.title}</span>
						</GridItem>
					))}
				</GridComponent>
			);
		}

		return (
			<GridComponent>
				{items.map(item => (
					<div className="grid__item">{item}</div>
				))}
			</GridComponent>
		);
	}
}

class GridItem extends Component {
	state = {
		fullScreen: false
	};

	toggleFullscreen = e => {
		this.setState({ fullScreen: !this.state.fullScreen });
	};

	render() {
		return (
			<div
				className={
					!this.state.fullScreen
						? `grid__item`
						: `grid__item grid__item--fullscreen`
				}
				onClick={this.toggleFullscreen}
			>
				{this.props.children}
			</div>
		);
	}
}
