import React, { Component } from "react";

export default class Duotone extends Component {
	render() {
		return (
			<svg>
				<filter
					id="duotone-filter"
					x="-10%"
					y="-10%"
					width="120%"
					height="120%"
					filterUnits="objectBoundingBox"
					primitiveUnits="userSpaceOnUse"
					color-interpolation-filters="linearRGB"
				>
					<feColorMatrix
						type="matrix"
						values="1 0 0 0 0
1 0 0 0 0
1 0 0 0 0
0 0 0 1 0"
						in="SourceGraphic"
						result="colormatrix"
					/>
					<feComponentTransfer in="colormatrix" result="componentTransfer">
						<feFuncR type="table" tableValues="0.02 1" />
						<feFuncG type="table" tableValues="0.35 1" />
						<feFuncB type="table" tableValues="0.87 1" />
						<feFuncA type="table" tableValues="0 1" />
					</feComponentTransfer>
					<feBlend
						mode="normal"
						in="componentTransfer"
						in2="SourceGraphic"
						result="blend"
					/>
				</filter>
			</svg>
		);
	}
}
