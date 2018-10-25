import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import CV from "../components/CV/CV";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class CVPage extends Component {
	render() {
		return (
			<Layout>
				<div className="cv-container">
					<Helmet title={`CV | ${config.siteTitle}`} />
					<CV />
				</div>
			</Layout>
		);
	}
}

export default CVPage;
