import React, { Component } from "react";
import { Link } from "gatsby";
import { InView } from "react-intersection-observer";

import RowComponent from "./RowStyles";

import ImageLoader from "../../molecules/imageloader/ImageLoader";

export default class Row extends Component {
	prepareContent = content => {
		return content.replace(
			`/wp-content/uploads/`,
			`https://wjhm.noface.app/wp-content/uploads/`
		);
	};

	render() {
		const { data, index } = this.props;
		const { content, link, media } = data;

		const alignment = index % 2 === 0 ? `left` : `right`;

		const mediaFull = media.full;
		const ext = mediaFull.substr(mediaFull.lastIndexOf(".") + 1);

		return (
			<InView threshold={0.25} triggerOnce={true}>
				{({ inView, ref }) => (
					<RowComponent
						className={
							inView
								? `row row--${alignment} row--show`
								: `row row--${alignment}`
						}
						ref={ref}
					>
						<div className="row__column">
							{link !== "" ? (
								<a href={`${link}`} target="_blank">
									<div className="row__media">
										{ext !== `mp4` ? (
											<ImageLoader src={mediaFull} alt="" />
										) : (
											<video src={mediaFull} muted autoPlay loop />
										)}
									</div>
								</a>
							) : (
								<div className="row__media">
									{ext !== `mp4` ? (
										<ImageLoader src={mediaFull} alt="" />
									) : (
										<video src={mediaFull} muted autoPlay loop />
									)}
								</div>
							)}
						</div>
						<div
							className="row__column row__content"
							dangerouslySetInnerHTML={{
								__html: this.prepareContent(content)
							}}
						/>
					</RowComponent>
				)}
			</InView>
		);
	}
}
