import React from "react";
import { storiesOf } from "@storybook/react";

import Footer from "../src/components/organisms/Footer";
import Header from "../src/components/organisms/Header";

storiesOf("Organisms", module)
	.add("Footer", () => <Footer />)
	.add("Header", () => <Header />);
