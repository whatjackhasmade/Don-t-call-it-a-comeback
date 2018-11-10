import React from "react";
import { graphql } from "gatsby";

class BlogPost extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.pageContext.slug}</h1>
			</div>
		);
	}
}

export default BlogPost;
