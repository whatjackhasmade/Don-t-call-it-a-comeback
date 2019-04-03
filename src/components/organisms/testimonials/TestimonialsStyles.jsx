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
		grid-row: 1 / 3;
		grid-column: 1 / 9;
		z-index: 1;

		img {
			display: block;
			max-height: 200px;
			width: 100%;

			object-fit: cover;

			@media ${device.md} {
				max-height: 400px;
			}
		}
	}

	.testimonial__next {
		align-items: center;
		display: flex;
		grid-row: 3 / 12;
		grid-column: 3 / 5;
		justify-content: center;
		order: 2;
		padding: 32px;
		z-index: 2;

		svg {
			height: 24px;
			margin-left: 16px;

			fill: white;
		}
	}

	.testimonial__single {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		grid-row: 2 / 9;
		grid-column: 5 / 13;
		padding: 32px;
		z-index: 2;

		background-color: black;
		color: white;

		@media ${device.md} {
			padding: 64px;
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
