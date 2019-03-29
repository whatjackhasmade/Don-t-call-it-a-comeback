import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const GridComponent = styled.section`
	display: flex;
	flex-wrap: wrap;
	margin: 64px 0;

	.grid__item {
		max-width: 100%;
		position: relative;
		width: 100%;

		cursor: pointer;
		transition: 0.2s all ease;

		@media ${device.xs} {
			max-width: 48%;
		}

		@media ${device.lg} {
			max-width: 33%;
		}

		img,
		video {
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

	.grid__item--inactive {
		width: 0px;

		img,
		video {
			min-height: 0px;
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
		const { filter, items, type } = this.props;

		if (type === "images") {
			return (
				<GridComponent>
					{items.map(item => {
						const media = item.node.media;
						const ext = media.substr(media.lastIndexOf(".") + 1);

						if (ext === `mp4`) {
							return (
								<GridItem category={item.node.category[0].name} filter={filter}>
									<video src={item.node.media} alt="" />
									<span className="grid__item__title">{item.node.title}</span>
								</GridItem>
							);
						}

						return (
							<GridItem category={item.node.category[0].name} filter={filter}>
								<img src={item.node.media} alt="" />
								<span className="grid__item__title">{item.node.title}</span>
							</GridItem>
						);
					})}
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
		const { category, filter } = this.props;

		let classList = `grid__item`;
		if (this.state.fullScreen) classList += ` grid__item--fullscreen`;

		if (filter !== ``) {
			if (category === filter) classList += ` grid__item--active`;
			if (category !== filter) classList += ` grid__item--inactive`;
		}

		return (
			<div className={classList} onClick={this.toggleFullscreen}>
				{this.props.children}
			</div>
		);
	}
}
