import React, { Component } from "react";
import styled from "styled-components";

import { decodeHTML } from "../helpers";

import VideoTease from "../molecules/VideoTease";

import first from "../../assets/videos/ux-motion/1.mp4";
import second from "../../assets/videos/ux-motion/2.mp4";
import third from "../../assets/videos/ux-motion/3.mp4";
import fourth from "../../assets/videos/ux-motion/4.mp4";
import fifth from "../../assets/videos/ux-motion/5.mp4";
import sixth from "../../assets/videos/ux-motion/6.mp4";
import seventh from "../../assets/videos/ux-motion/7.mp4";
import eigth from "../../assets/videos/ux-motion/8.mp4";
import ninth from "../../assets/videos/ux-motion/9.mp4";
import tenth from "../../assets/videos/ux-motion/10.mp4";
import eleventh from "../../assets/videos/ux-motion/11.mp4";
import twelth from "../../assets/videos/ux-motion/12.mp4";

const UXMotionContainer = styled.section`
	padding: 128px 0 0;

	.intro {
		margin-left: auto;
		margin-right: auto;
		max-width: 1300px;
		width: 90%;

		p {
			max-width: 650px;
		}
	}

	.videos {
		display: flex;
		flex-wrap: wrap;
		width: 100%;

		div {
			margin-top: 0;
			position: relative;
			width: 100%;

			@media (min-width: 640px) {
				width: 50%;
			}

			@media (min-width: 1280px) {
				width: 33.3333%;
			}

			@media (min-width: 1920px) {
				width: 25%;
			}
		}

		div:before {
			content: "";
			display: block;
			height: 100%;
			left: 0;
			top: 0;
			position: absolute;
			width: 100%;

			background-color: #220943;
			opacity: 0;
			transition: 0.2s all ease;
		}

		div:hover:before {
			opacity: 0.5;
		}
	}
`;

class UXMotion extends Component {
	render() {
		return (
			<UXMotionContainer>
				<div className="intro">
					<h2>The 12 Principles of UX in Motion</h2>
					<p>
						Codepen animations inspired by the 12 principles of UX in motion,
						found in the medium article
						<a
							href="https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc"
							target="_blank"
						>
							"Creating Usability with Motion: The UX in Motion Manifesto"
						</a>
						by Issara Willenskomer .
					</p>
				</div>
				<div className="videos">
					<VideoTease key="" video={first} codepenID="rGvpgy" />
					<VideoTease key="" video={second} codepenID="LzmQPm" />
					<VideoTease key="" video={third} codepenID="vejddq" />
					<VideoTease key="" video={fourth} codepenID="MEGLrv" />
					<VideoTease key="" video={fifth} codepenID="gGzqjb" />
					<VideoTease key="" video={sixth} codepenID="NaMomp" />
					<VideoTease key="" video={seventh} codepenID="OxZdeX" />
					<VideoTease key="" video={eigth} codepenID="oGdVLv" />
					<VideoTease key="" video={ninth} codepenID="OxZqmm" />
					<VideoTease key="" video={tenth} codepenID="GMdedm" />
					<VideoTease key="" video={eleventh} codepenID="WZJWvY" />
					<VideoTease key="" video={twelth} codepenID="OxZGWw" />
				</div>
			</UXMotionContainer>
		);
	}
}

export default UXMotion;
