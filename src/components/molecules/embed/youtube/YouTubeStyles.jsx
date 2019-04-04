import styled from "styled-components";
import { device } from "../../../particles/MediaQueries";

const YouTubeComponent = styled.div`
	position: relative;
	z-index: 10;

	background: ${props => props.theme.offWhite};
	color: ${props => props.theme.black};
`;

export default YouTubeComponent;
