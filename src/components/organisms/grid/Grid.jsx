import React, { Component } from "react";

import GridComponent from "./GridStyles";

export default class Grid extends Component {
	state = {
		count: 9
	};

	addItems = () => {
		this.setState({ count: this.state.count + 9 });
	};

	render() {
		const { filter, items } = this.props;

		var rows = [];
		for (var i = 0; i < this.state.count; i++) {
			const item = items[i];

			if (typeof item === "undefined") break;

			const media = item.node.media;
			const ext = media.substr(media.lastIndexOf(".") + 1);

			if (ext === `mp4`) {
				rows.push(
					<GridItem category={item.node.category} filter={filter}>
						<video src={item.node.media} alt="" autoPlay muted loop />
						<span className="grid__item__title">{item.node.title}</span>
					</GridItem>
				);
			} else {
				rows.push(
					<GridItem category={item.node.category} filter={filter}>
						<img src={item.node.media} alt="" />
						<span className="grid__item__title">{item.node.title}</span>
					</GridItem>
				);
			}
		}

		return (
			<>
				<GridComponent>{rows}</GridComponent>
				<button
					disabled={this.state.count > this.props.items.length}
					onClick={this.addItems}
				>
					Load More
				</button>
			</>
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
