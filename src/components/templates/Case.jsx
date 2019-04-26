import React from "react";
import { InView } from "react-intersection-observer";
import styled from "styled-components";
import { device } from "../particles/MediaQueries";
import "html5-device-mockups/dist/device-mockups.min.css";

import Base from "./Base";

import Intro from "../organisms/intro/Intro";
import Row from "../organisms/row/Row";
import Testimonials from "../organisms/testimonials/Testimonials";

const BlockContainer = styled.section`
	align-items: flex-start;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 64px auto;
	max-width: 90%;

	opacity: 0;
	transform: translateY(100px);
	transition: 1s all ease;

	&.block--show {
		opacity: 1;
		transform: translateY(0px);
	}

	.block__column {
		max-width: calc(50% - 32px);
		width: 100%;
	}

	.block__column--full {
		max-width: 100%;
	}
`;

const Devices = styled.section`
	align-items: center;
	display: flex;
	margin: 96px 0;

	opacity: 0;
	transform: translateY(100px);
	transition: 1s all ease;

	&.devices--show {
		opacity: 1;
		transform: translateY(0px);
	}

	> * {
		width: 100%;
	}

	.macbook {
		max-width: 74%;
	}

	.iphone {
		margin-left: 5%;
		max-width: 21%;
	}

	.screen {
		overflow: hidden;
	}
`;

const GalleryContainer = styled.section`
	display: flex;
	justify-content: space-between;
	margin: 64px 0;

	opacity: 0;
	transform: translateY(100px);
	transition: 1s all ease;

	&.gallery--show {
		opacity: 1;
		transform: translateY(0px);
	}

	img {
		height: 280px;
		max-width: calc(50% - 16px);
		width: 100%;

		object-fit: cover;
	}
`;

export default class CaseTemplate extends React.Component {
	render() {
		const { content } = this.props.pageContext;
		const { defining, gallery, intro, solution } = content;

		const introData = {};
		introData.subheading = intro.subtitle;
		introData.heading = intro.title;
		introData.content = intro.description;

		console.log(gallery);
		let gallery_one = [];
		let gallery_two = [];
		let gallery_three = [];

		for (var i = 0; i < 2; i++) {
			gallery_one.push(gallery[i]);
		}

		for (var i = 2; i < 4; i++) {
			gallery_two.push(gallery[i]);
		}

		for (var i = 4; i < 6; i++) {
			gallery_three.push(gallery[i]);
		}

		return (
			<Base context={this.props.pageContext}>
				<Intro data={introData} />
				<InView threshold={0} triggerOnce={true}>
					{({ inView, ref }) => (
						<Devices
							className={inView ? `devices devices--show` : `devices`}
							ref={ref}
						>
							<div className="device-wrapper macbook">
								<div
									className="device"
									data-device="Macbook2015"
									data-orientation="portrait"
									data-color="white"
								>
									<div className="screen">
										<img src="https://dummyimage.com/400x400.gif" alt="" />
									</div>
								</div>
							</div>
							<div className="device-wrapper iphone">
								<div
									className="device"
									data-device="iPhone7"
									data-orientation="portrait"
									data-color="white"
								>
									<div className="screen">
										<img src="https://dummyimage.com/400x400.gif" alt="" />
									</div>
								</div>
							</div>
						</Devices>
					)}
				</InView>
				<Block data={defining} />
				<Gallery images={gallery_one} />
				<Block data={solution} />
				<Gallery images={gallery_two} />
				<Block data={defining} />
				<Gallery images={gallery_three} />
				<Block data={solution} />
				<Gallery images={gallery_one} />
				<Block data={defining} />
				<Gallery images={gallery_two} />
				<Block data={solution} />
				<Gallery images={gallery_three} />
			</Base>
		);
	}
}

class Block extends React.Component {
	render() {
		const { data } = this.props;

		return (
			<InView threshold={0} triggerOnce={true}>
				{({ inView, ref }) => (
					<BlockContainer
						className={inView ? `block block--show` : `block`}
						ref={ref}
					>
						<div className="block__column block__column--full">
							<h2>{data.title}</h2>
						</div>
						<div className="block__column">
							<div
								dangerouslySetInnerHTML={{
									__html: data.column_one
								}}
							/>
						</div>
						<div className="block__column">
							<div
								dangerouslySetInnerHTML={{
									__html: data.column_two
								}}
							/>
						</div>
					</BlockContainer>
				)}
			</InView>
		);
	}
}

class Gallery extends React.Component {
	render() {
		const { images } = this.props;

		if (images[0]) {
			return (
				<InView threshold={0} triggerOnce={true}>
					{({ inView, ref }) => (
						<GalleryContainer
							className={inView ? `gallery gallery--show` : `gallery`}
							ref={ref}
						>
							{images.map(image => (
								<img src={image.url} />
							))}
						</GalleryContainer>
					)}
				</InView>
			);
		} else {
			return null;
		}
	}
}
