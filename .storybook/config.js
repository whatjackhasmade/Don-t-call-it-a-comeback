import { configure } from "@storybook/react";

function loadStories() {
	require("../stories/atoms.stories.js");
	require("../stories/molecules.stories.js");
	require("../stories/organisms.stories.js");
	require("../stories/templates.stories.js");
}

configure(loadStories, module);
