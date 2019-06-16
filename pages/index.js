import React from 'react';
import Head from 'next/head';
import { css } from '@emotion/core';

const headerStyles = css`
	background-color: #ccc;
	color: #444;
	font-family: sans-serif;
	font-size: 2rem;
`;

function Home() {
	return (
		<React.Fragment>
			<Head>
				<title>Custom Page Title</title>
			</Head>
			<h1 css={headerStyles}>Welcome to Next.js!</h1>
		</React.Fragment>
	);
}

export default Home;
