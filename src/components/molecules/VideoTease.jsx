import React, { Component } from "react";
import styled from "styled-components";

const Video = styled.div`
	a {
		display: block;
	}

	video {
		display: block;
		width: 100%;

		object-fit: cover;
	}
`;

class VideoTease extends Component {
	render() {
		return (
			<Video>
				<a
					href={`https://codepen.io/jackpritchard/full/${
						this.props.codepenID
					}/`}
					target="_blank"
				>
					<video autoplay="" loop="true" src={this.props.video} />
				</a>
			</Video>
		);
	}
}

export default VideoTease;
