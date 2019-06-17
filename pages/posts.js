import React from 'react';

export default class extends React.Component {
	static getInitialProps({ query: { id } }) {
		return { postId: id };
	}
	render() {
		return (
			<div>
				<h1>Blog Post ID:{this.props.postId}</h1>
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
		);
	}
};
