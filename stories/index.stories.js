import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "../src/components/atoms/button";

storiesOf("Atoms", module)
	.add("Button Primary", () => <Button type="primary" text="Yo yo" />)
	.add("Button Secondary", () => <Button type="secondary" text="Yo yo" />);
