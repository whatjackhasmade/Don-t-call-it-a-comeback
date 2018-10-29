import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";

import Button from "../src/components/atoms/button";

storiesOf("Welcome", module).add("to Storybook", () => (
	<Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
	.add("Primary", () => <Button type="primary" text="Primary Button" />)
	.add("Secondary", () => <Button type="secondary" text="Secondary Button" />);
