import React, { Component } from "react";
import LazyLoad from "react-lazy-load";

const _loaded = {};

export default class ImageLoader extends Component {
	state = {
		loaded: _loaded[this.props.src]
	};

	//define our loading and loaded image classes
	static defaultProps = {
		className: "",
		loadingClassName: "img-loading",
		loadedClassName: "img-loaded"
	};

	//image onLoad handler to update state to loaded
	onLoad = () => {
		_loaded[this.props.src] = true;
		this.setState(() => ({ loaded: true }));
	};

	render() {
		let { className, loadedClassName, loadingClassName, ...props } = this.props;
		const { alt, height, offset, width } = this.props;

		className = `${className} ${
			this.state.loaded ? loadedClassName : loadingClassName
		}`;

		return (
			<LazyLoad
				debounce={false}
				height={height ? height : undefined}
				offsetVertical={offset ? offset : 500}
				width={width ? width : undefined}
			>
				<img
					alt={alt}
					className={className}
					onClick={this.props.onClick}
					onLoad={this.onLoad}
					src={this.props.src}
				/>
			</LazyLoad>
		);
	}
}
