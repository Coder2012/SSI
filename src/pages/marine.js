import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import LayoutStyles from '../styles/layout.module.scss'
import Title from '../components/title/Title'
import SEO from '../components/seo'
import Img from 'gatsby-image'

const getImageByName = (data, name) => {
  return data.ProjectImgs.edges.find(n => n.node.name === name)
}

const Marine = ({ data }) => (
  <Layout>
    <SEO title="SSI Security" />
    <Title style={LayoutStyles.title} />
    <Img fluid={getImageByName(data, 'marine-1').node.childImageSharp.fluid} />
    <section className={LayoutStyles.section}>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, iste officia. Explicabo vero eaque saepe consequuntur quaerat? Tempora, deleniti voluptas! Modi perspiciatis quasi sed, incidunt sapiente consequuntur illum expedita eaque?</p>
        <ul>
            <li>Marine Engineering</li>
            <li>Procurement</li>
            <li>Construction</li>
            <li>Skilled and Unskilled workforce</li>
        </ul>
    </section>
    <Link to="/">Back to home</Link>
  </Layout>
)

export const query = graphql`
  query marineImgsQuery {
    ProjectImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/(png|jpg)/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default Marine;
