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

const Training = ({ data }) => (
  <Layout>
    <SEO title="SSI Security" />
    <Title style={LayoutStyles.title} />
    <Img fluid={getImageByName(data, 'training-image-2').node.childImageSharp.fluid} />
    <section className={LayoutStyles.section}>
      <p>
        SSI are in a position to deliver training in all of the below courses
        and certificate them through three awarding bodies, City &amp; Guilds,
        Highfields and AoFA
      </p>
      <ul>
        <li>Highfields and AoFALevel 2 Award in Conflict Management (RQF)</li>
        <li>Level 1 International Award in Fire Safety</li>
        <li>Level 2 International Award in Fire Safety</li>
        <li>
          Level 2 International Award in Basic Life Support and the Safe Use of
          an AutomatedExternal Defibrillator
        </li>
        <li>Level 2 International Award in Emergency First Aid at Work</li>
        <li>
          Level 2 International Award in Emergency First Aid, Defibrillation and
          CPR
        </li>
        <li>
          Level 2 International Award in PaediatricFirst Aid and the Safe Use of
          an AutomatedExternal Defibrillator
        </li>
        <li>
          Level 2 International Award in PaediatricFirst Aid, the Safe Use of an
          Automated ExternalDefibrillator and Managing Illness and Injury
        </li>
        <li>
          Level 3 International Award in First Aid at Work and the Safe Use of
          an AutomatedExternal Defibrillator International Award in Basic Life
          Support
        </li>
        <li>Level 1 International Award in Principles of Health and Safety</li>
        <li>Level 2 International Award in Work at Height</li>
        <li>Level 1 International Award in Safe Moving and Handling</li>
        <li>
          Level 2 International Award in CCTV Operations (Public Space
          Surveillance)
        </li>
        <li>Level 2 International Award in Security Guarding</li>
        <li>
          Level 3 International Certificate in Close Protection F-POS-I Advanced
          First Aid RoSPAAdvanced driving Instruction In house Drug and Alcohol
          testing
        </li>
      </ul>
    </section>
    <Img fluid={getImageByName(data, 'training-image').node.childImageSharp.fluid} />
    <section className={LayoutStyles.section}>
      <p>
        SSI offers its clients a unique and professional service, based upon the
        highest standards of response and support that is unrivalled in its
        field.
      </p>
      <ul>
        <li>Compartment Fire Behaviour Training</li>
        <li>Searching in smoked environment</li>
        <li>Flashover Instructors course</li>
        <li>Confined space training</li>
        <li>Breathing Apparatus training</li>
        <li>Gas detection training</li>
        <li>Working at heights, rigging and scaffolding</li>
      </ul>
    </section>
    <Link to="/">Back to home</Link>
  </Layout>
)

export const query = graphql`
  query trainingImgsQuery {
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

export default Training;
