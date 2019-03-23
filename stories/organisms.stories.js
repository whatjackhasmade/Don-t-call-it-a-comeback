import React from "react";
import { storiesOf } from "@storybook/react";

import Footer from "../src/components/organisms/footer/Footer";
import Header from "../src/components/organisms/header/Header";

storiesOf("Organisms", module)
	.add("Footer", () => <Footer />)
	.add("Header", () => <Header />);
