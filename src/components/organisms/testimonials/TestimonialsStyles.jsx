import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const TestimonialsComponent = styled.section`
	align-items: center;
	display: flex;
	flex-direction: column;
	margin: 0 0 48px;

	@media ${device.sm} {
		margin: 0 0 64px;
	}

	@media ${device.md} {
		flex-direction: row;
		margin: 0 0 128px;
	}

	@media ${device.xl} {
		margin: 0 0 160px;
	}

	.slick-slider {
		width: 100%;

		cursor: grab;
	}

	.slick-list {
		margin: 0 -32px;
	}

	.slick-slide {
		padding: 0 32px;

		@media ${device.md} {
			padding: 32px;
		}
	}

	.slick-dots {
		bottom: -48px;
	}

	.testimonial__author {
		display: block;
		margin-top: 8px;

		font-family: ${props => props.theme.fontSecondary};
		font-size: 24px;
		font-style: italic;
	}

	.testimonial__content {
		display: block;
	}
`;

export default TestimonialsComponent;
