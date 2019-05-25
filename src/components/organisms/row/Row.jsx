import React from "react";
import { InView } from "react-intersection-observer";

import RowComponent from "./RowStyles";

import ImageLoader from "../../molecules/imageloader/ImageLoader";

function Row({ data, index }) {
	const { content, link, media } = data;

	const alignment = index % 2 === 0 ? `left` : `right`;

	const mediaFull = media.medium_large;
	const ext = mediaFull.substr(mediaFull.lastIndexOf(".") + 1);

	const prepareContent = content => {
		return content.replace(
			`/wp-content/uploads/`,
			`https://wjhm.noface.app/wp-content/uploads/`
		);
	};

	return (
		<InView threshold={0.25} triggerOnce={true}>
			{({ inView, ref }) => (
				<RowComponent
					className={
						inView ? `row row--${alignment} row--show` : `row row--${alignment}`
					}
					ref={ref}
				>
					<div className="row__column">
						{link !== "" ? (
							<a href={`${link}`} target="_blank" rel="noopener noreferrer">
								<RowMedia media={mediaFull} ext={ext} />
							</a>
						) : (
							<RowMedia media={mediaFull} ext={ext} />
						)}
					</div>
					<div
						className="row__column row__content"
						dangerouslySetInnerHTML={{
							__html: prepareContent(content)
						}}
					/>
				</RowComponent>
			)}
		</InView>
	);
}

function RowMedia({ media, ext }) {
	return (
		<div className="row__media">
			{ext !== `mp4` ? (
				<ImageLoader src={media} alt="" />
			) : (
				<video src={media} muted autoPlay loop />
			)}
		</div>
	);
}

export default Row;
