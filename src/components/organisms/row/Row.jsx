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
		const { link, group } = data;

		const alignment = index % 2 === 0 ? `left` : `right`;

		const media = group.media;
		const ext = media.substr(media.lastIndexOf(".") + 1);

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
							{link !== null ? (
								<Link to={`/${link}`}>
									<div className="row__media">
										{ext !== `mp4` ? (
											<ImageLoader src={media} alt="" />
										) : (
											<video src={media} muted autoPlay loop />
										)}
									</div>
								</Link>
							) : (
								<div className="row__media">
									{ext !== `mp4` ? (
										<ImageLoader src={media} alt="" />
									) : (
										<video src={media} muted autoPlay loop />
									)}
								</div>
							)}
						</div>
						<div
							className="row__column"
							dangerouslySetInnerHTML={{
								__html: this.prepareContent(group.content)
							}}
						/>
					</RowComponent>
				)}
			</InView>
		);
	}
}
