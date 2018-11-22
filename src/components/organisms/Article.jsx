import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import styled from "styled-components";

import {
	autoParagraph,
	decodeHTML,
	httpTohttps,
	removeDimensions,
	removeOrphans,
	slugTitle
} from "../helpers";

const ArticleWrapper = styled.article`
	padding: 32px 16px;
	> h2,
	> h3,
	> h4,
	> h5 {
		margin-bottom: 16px;
		font-weight: 700;
	}
	> * + * {
		margin-top: 16px;
	}
	> h2 + * {
		margin-top: 24px;
	}
	> figure + *,
	> img + * {
		margin-top: 32px;
	}
	> * + h2 {
		margin-top: 64px;
	}
	> * + h3 {
		margin-top: 48px;
	}
	> * + img {
		margin-top: 32px;
	}
	> * + h4 {
		margin-top: 48px;
	}
	> figure + figure,
	> img + img {
		margin-top: 32px;
	}
	> h2 + h3 {
		margin-top: 32px;
	}
	> h3 + h4 {
		margin-top: 32px;
	}
	> :not(figure):not(img):not(picture):not(.ignore) {
		margin-left: auto;
		margin-right: auto;
		max-width: 900px;
	}
	> .ignore,
	> figure,
	> img,
	> picture {
		display: block;
		margin: 32px auto;
		max-width: 1100px;
		width: 100%;
		text-align: center;
	}
	@media all and (min-width: 1400px) {
		 {
			padding: 64px 32px;
		}
	}
`;

const Lightbox = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 100%;
	height: 100%;
	width: 100%;
	z-index: 999;

	background: white;
	transition: 0.4s all ease;

	&.show {
		left: 0%;
	}

	&.hide {
		left: 100%;
	}

	img {
		margin: 32px auto;
		max-height: 100%;
		max-width: 1920px;

		cursor: pointer;
		object-fit: cover;
	}
`;

class Article extends React.Component {
	componentDidMount() {
		var anchors = document.querySelectorAll("article a");
		var lightbox = document.querySelector(".lightbox");
		var lightboxImage = lightbox.querySelector(".lightbox__image");

		for (var i = 0; i < anchors.length; i++) {
			anchors[i].addEventListener("click", handler, false);
		}

		function handler(e) {
			e.preventDefault();
			var image = this.querySelector("img");
			var imageSrc = image.src;
			lightboxImage.src = imageSrc;
			lightbox.classList.toggle("show");
		}

		lightboxImage.addEventListener("click", () => {
			lightbox.classList.toggle("show");
		});
	}

	render() {
		return (
			<React.Fragment>
				<ArticleWrapper dangerouslySetInnerHTML={this.props.markup} />
				<Lightbox className="lightbox">
					<img className="lightbox__image" src="" />
				</Lightbox>
			</React.Fragment>
		);
	}
}

export default Article;
