import React from 'react'
import { Link } from 'gatsby' 
import Layout from '../components/layout' 

export default function about() {
	return (
		<Layout>
			<div>
			<Link to='/'>&larr; Back to home</Link>
			</div>
		</Layout> 
	)
}