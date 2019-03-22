import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../src/components/atoms/Button";

storiesOf("Atoms", module)
	.add("Button", () => (
		<Button>You are only limited by your imagination.</Button>
	))
	.add("Paragraph", () => (
		<p>
			You are only limited by your imagination. Let all these little things
			happen. Don't fight them. Learn to use them. You can't make a mistake.
			Anything that happens you can learn to use - and make something beautiful
			out of it. This is your world, whatever makes you happy you can put in it.
			Go crazy. We'll play with clouds today. La- da- da- da- dah. Just be
			happy.
		</p>
	));
