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
      <h2>Marine Operational Support</h2>
      <p>
        We can arrange all your Marine Engineering, Procurement, Construction
        for all Skilled and Unskilled work force
      </p>
      <Img fluid={getImageByName(data, 'workboat').node.childImageSharp.fluid} />
      <h3>Available with and without Crew</h3>
      <p>
        Our customers prefer to crew work boats themselves however we provide
        both options and all of our work boats are insured for bareboat charter.
        We can advise and arrange any additional training required should
        qualifications and experience of your crew not satisfactory for
        insurance purposes. Alternatively we are happy to provide qualified crew
        in any location for any length of contract.
      </p>
      <h3>Bridge Surveying &amp; Repairs</h3>
      <p>
        For inshore inspection, we deploy our diver support teams who assist
        divers to inspect the condition of underwater structure. Our divers
        along with the support teams are able to take sludge samples, perform
        drilling or visually inspect the structure of the object. Specialized
        equipment gauges wall thickness and other materials are at their
        disposal, support teams and divers capture the all surveys with
        underwater cameras.
      </p>
      <p>
        All support teams and our divers have the necessary skills and
        experience when conditions of the structures in often limited- or
        zero-visibility conditions when Non-Destructive methods are required.{' '}
      </p>
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
`

export default Marine
