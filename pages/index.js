import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import Head from 'next/head';
import Link from 'next/link';
import { css } from '@emotion/core';

const headerStyles = css`
	background-color: #ccc;
	color: #444;
	font-family: sans-serif;
	font-size: 2rem;
`;

class Home extends React.Component {
	static async getInitialProps() {
		const url = 'https://api.github.com/users/gaearon/gists';
		const response = await fetch(url);
		const gists = await response.json();
		return { gists };
	}
	render() {
		return (
			<React.Fragment>
				<Head>
					<title>Custom Page Title</title>
				</Head>
				<h1 css={headerStyles}>Welcome to Next.js!</h1>
				<Link href="/about">
					<a>About Page</a>
				</Link>
				<h2>Gists by GitHub user gaearon:</h2>
				{this.props.gists &&
					<ul>
						{this.props.gists.map(gist => (
							<li key={gist.id}>{gist.description}</li>
						))}
					</ul>
				}
			</React.Fragment>
		);
	}
}

Home.propTypes = {
	gists: PropTypes.array
};

export default Home;
