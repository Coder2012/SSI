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

const Construction = ({ data }) => (
  <Layout>
    <SEO title="SSI Security" />
    <Title style={LayoutStyles.title} />
    <section className={LayoutStyles.section}>
      <h2>Property Management</h2>
      <Img
        className={LayoutStyles.section}
        fluid={
          getImageByName(data, 'property-management').node.childImageSharp.fluid
        }
      />
      <p>
        SSI Property management has dedicated teams to insure all your property
        needs, no matter how big or small it maybe, we take care and pride in
        everything we do.
      </p>
      <h2>Bathrooms &amp; Kitchens</h2>
      <Img
        className={LayoutStyles.section}
        fluid={getImageByName(data, 'bathroom-1').node.childImageSharp.fluid}
      />
      <p>
        SSI specialist kitchen and bathroom teams, will fit and build any
        kitchen and provide craftsmen to personalise your home providing you a
        place unique to you.
      </p>
      <h2>Building Work</h2>
      <Img
        className={LayoutStyles.section}
        fluid={getImageByName(data, 'building-work').node.childImageSharp.fluid}
      />
      <p>
        SSI qualified professional tradesmen and craftsmen you can trust at cost
        effective, efficient and reliable service that meets all you’re building
        and decorating needs.
      </p>
      <h2>Developments</h2>
      <Img
        className={LayoutStyles.section}
        fluid={getImageByName(data, 'public-house').node.childImageSharp.fluid}
      />
      <p>
        SSI Development support services. SSI build homes, Commercial to include
        from design to completion.
      </p>
    </section>
    <Link to="/">Back to home</Link>
  </Layout>
)

export const query = graphql`
  query constructionImgsQuery {
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
`

export default Construction
