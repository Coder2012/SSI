import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import LayoutStyles from '../styles/layout.module.scss'
import SEO from '../components/seo'
import Img from 'gatsby-image'

const getImageByName = (data, name) => {
  return data.ProjectImgs.edges.find(n => n.node.name === name)
}

const Security = ({ data }) => (
  <Layout>
    <SEO title="SSI Security" />
    <section className={LayoutStyles.title}>
      <h1>SSI International</h1>
      <p>Worldwide Security Solutions</p>
      <a href="mailto:info@s-s-int.com">info@s-s-int.com</a>
    </section>
    <Img
      fluid={getImageByName(data, 'cityscape-image').node.childImageSharp.fluid}
    />
    <section className={LayoutStyles.section}>
      <ul>
        <li>
          Executive Protection – Residential &amp; Mobile security solutions
        </li>
        <li>Asset Protection - High value goods or property</li>
        <li>Surveillance / Counter Surveillance</li>
        <li>Investigative Services</li>
        <li>Kidnap Protection</li>
      </ul>
      <h2>Aim</h2>
      <p>
        Our goal is to bring expertise from, Logistics, Marine support, Offshore
        and Onshore Support, Border Support, Security Services, and Other
        Consulting Services to deliver services that are unique for our clients’
        mission and strategic goals.
      </p>
      <h2>Services</h2>
      <p>
        SSI combines strategic acumen with the all-embracing industry insight to
        help clients augment business performance and gain market share via our
        service offerings –business unit strategy, corporate strategy,
        organizational strategy and shareholder value management.
      </p>
      <p>
        Our customer offering extends beyond, but to list a few key services
        that we specialize in:
      </p>
      <ul>
        <li>Operation Support</li>
        <li>Skilled and Unskilled work force</li>
        <li>Engineering, Procurement &amp; Construction</li>
        <li>Security &amp; Training </li>
        <li>
          Information Technology Support &amp; Systems Engineering Support
        </li>
        <li>Operations &amp; Maintenance </li>
        <li>Marine Services</li>
      </ul>
    </section>
    <section className={LayoutStyles.section}>
      <h2>Physical Security</h2>
      <h3>Protective Services</h3>
      <p>
        SSI Ltd has been providing bespoke security solutions throughout UK,
        Europe, Caribbean &amp; the Middle East including Iraq and Dubai since
        2016. SSI has provided a varied range of protection services from 1 to 1
        Close protection for high value principles and families through to High
        Profile Armed Mobile Security, SSI’s skilled professionals who are manly
        comprised of former Military including special forces personal from
        numerus countries across the globe.
      </p>
      <h3>Mobile Security</h3>
      <p>
        SSI believes in a non-confrontational approach to mobile security.
        Experience has shown that close engagement and friendly interaction with
        the local populous and security services is significantly more effective
        than confrontation or failure to engage.
      </p>
      <h3>Event Security</h3>
      <p>
        SSI can supply Event security, covering Close protection, crowd stewards
        and consultancy services covering risk management to a very large range
        of festivals and events across UK &amp; Europe
      </p>
    </section>
    <section className={LayoutStyles.section}>
      <h2>Travel Security</h2>
      <ul>
        <li>SSI International global security portal &amp; mobile access applications (iOS and Android)</li>
        <li>Global travel security notifications</li>
        <li>Full access to SSI International Command &amp; Control Centre analysts</li>
        <li>GPS tracking &amp; proactive monitoring of all employees</li>
        <li>24/7 security and medical hotline support</li>
      </ul>
    </section>
    <section className={LayoutStyles.section}>
      <h2>Crisis Management</h2>
      <ul> 
        <li>Mobile security protection &amp; close protection services world wide</li>
        <li>In-country Emergency evacuations</li>
        <li>Ransom and Kidnap for and extortion support</li>
        <li>On-site &amp; on line Hostile Environment Awareness Training (HEAT)</li>
      </ul>
    </section>
    <Link to="/">Back to home</Link>
  </Layout>
)

export const query = graphql`
  query securityImgsQuery {
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

export default Security
