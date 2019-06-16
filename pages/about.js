import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function About() {
	return (
		<React.Fragment>
			<Head>
				<title>About</title>
			</Head>
			<h1>About</h1>
			<Link href="/">
				<a>Home</a>
			</Link>
		</React.Fragment>
	);
}

export default About;
