import React from "react";
import { configure, setAddon, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import JSXAddon from "storybook-addon-jsx";

setAddon(JSXAddon);

configure(loadStories, module);

import aboutPhoto from "../src/assets/images/jack-pritchard.jpg";

import Button from "../src/components/atoms/Button";

import Banner from "../src/components/organisms/Banner";

storiesOf("Atoms", module)
	.add("Button Primary", () => <Button type="primary" text="Yo yo" />)
	.add("Button Secondary", () => <Button type="secondary" text="Yo yo" />);
storiesOf("Organisms", module).add("Banner", () => (
	<Banner overlay image={aboutPhoto}>
		<h2>What I get up to</h2>
	</Banner>
));
