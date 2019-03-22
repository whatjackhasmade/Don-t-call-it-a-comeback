import React from "react";
import { configure, addDecorator } from "@storybook/react";

import { GlobalStyle } from "../src/components/templates/Base";

const Decorator = storyFn => (
	<React.Fragment>
		<GlobalStyle />
		{storyFn()}
	</React.Fragment>
);

function loadStories() {
	require("../stories/atoms.stories.js");
	require("../stories/molecules.stories.js");
	require("../stories/organisms.stories.js");
	require("../stories/templates.stories.js");
}

addDecorator(Decorator);
configure(loadStories, module);
