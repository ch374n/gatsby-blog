import { graphql, useStaticQuery } from 'gatsby' 

const usePosts = () => {
	const data = useStaticQuery(graphql`
		query {
		  allMdx {
		  	nodes {
		      frontmatter{
		        title
		        slug
		        author
		        image {
		        	sharp: childImageSharp {
		        		fluid(
							maxWidth: 100 
							maxHeight: 100
							duotone: { shadow: "#663399", highlight: "#ddbbff"}
		        		) {
		        			...GatsbyImageSharpFluid_withWebp
		        		}
		        	}
		        }
		      }
		      excerpt
		    } 
		  }
		}
	`)


	return data.allMdx.nodes.map(({ frontmatter: { title, slug, author, image }, excerpt }) => ({
		title,  
		author,  
		slug, 
		image, 
		excerpt 
	}))
}


export default usePosts 
