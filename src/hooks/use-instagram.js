import { graphql, useStaticQuery } from 'gatsby' 

// const useInstagram = () => {
// 	const data = useStaticQuery(graphql`
// 		query { 
// 			allInstaNode(limit: 12) {
// 				nodes {
// 					id 
// 					caption 
// 					username 
// 					localFile {
// 						childImageSharp {
// 							fluid(maxWidth: 120 maxHeight: 120) {
// 								...GatsbyImageSharpFluid_withWebp
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}			
// 	`)

// 	return allInstaNode.nodes.map(node => ({
// 		...node.localFile.childImageSharp, 
// 		id: node.id, 
// 		caption: node.caption, 
// 		username: node.username 
// 	}))
// }

const useInstagram = () => {} 

export default useInstagram 

