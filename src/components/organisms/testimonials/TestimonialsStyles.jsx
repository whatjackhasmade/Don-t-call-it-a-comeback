import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const TestimonialsComponent = styled.section`
	display: flex;
	flex-direction: column;
	margin: 0 0 48px;

	@media ${device.sm} {
		margin: 0 0 64px;
	}

	@media ${device.md} {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
		margin: 0 0 128px;
	}

	@media ${device.xl} {
		margin: 0 0 160px;
	}

	.testimonial__media {
		grid-row: 1 / 4;
		grid-column: 1 / 7;

		img {
			display: block !important;
			width: 100%;

			@supports (object-fit: cover) {
				height: 200px;

				object-fit: cover;

				@media ${device.md} {
					height: 400px;
				}
			}
		}
	}

	.testimonial__next {
		align-items: center;
		display: flex;
		grid-row: 3 / 3;
		grid-column: 5 / 7;
		justify-content: center;
		order: 2;
		padding: 32px;
		z-index: 2;

		svg {
			height: 24px;
			margin-left: 16px;
			width: 24px;

			fill: ${props => props.theme.white};

			@supports (object-fit: cover) {
				width: auto;
			}
		}
	}

	.testimonial {
		padding: 16px;

		@media ${device.md} {
			padding: 32px;
		}
	}

	.testimonials {
		grid-row: 1 / 4;
		grid-column: 7 / 13;
		padding: 16px;

		background-color: ${props => props.theme.black};
		color: ${props => props.theme.white};

		@media ${device.md} {
			padding: 32px;
		}

		.slick-track {
			align-items: center;
			display: flex;
		}
	}

	.testimonial__author,
	.testimonial__role {
		margin: 0;
	}

	.testimonial__author {
		font-weight: 500;
		font-size: 18px;
		line-height: 28px;
	}

	.testimonial__role {
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 22px;

		color: #c4c4c4;
	}

	.testimonial__logo {
		display: none;
		max-height: 40px;

		@media ${device.md} {
			display: block;
		}
	}

	.testimonial__quote {
		margin-bottom: 0;
		margin-top: 32px;

		font-weight: 500;
		font-size: 18px;
		line-height: 28px;
	}

	.testimonial__header {
		align-items: flex-start;
		justify-content: space-between;
		width: 100%;

		@media ${device.md} {
			display: flex;
		}
	}
`;

export default TestimonialsComponent;
