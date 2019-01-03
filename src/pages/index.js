import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SSISecurityImage from '../components/ssisecurity'
import SSIConstructionImage from '../components/ssiconstruction'
import SSIMarineImage from '../components/ssimarine'
import SEO from '../components/seo'
import LayoutStyles from '../styles/layout.module.scss'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `ssi`,
        `ssi-international`,
        `ssi-security`,
        `ssi-construction`,
        `ssi-marine`,
      ]}
    />
    <section className={LayoutStyles.title}>
      <h1>SSI International</h1>
      <p>Worldwide Security Solutions</p>
    </section>
    <section>
      <section>
        <SSISecurityImage />
        <div className={LayoutStyles.item}>
          <h2>Security</h2>
          <p>International Security &amp; Risk Management Services</p>
        </div>
      </section>
      <section>
        <SSIConstructionImage />
        <div className={LayoutStyles.item}>
          <h2>Construction</h2>
          <p>Engineering, Procurement &amp; Construction</p>
        </div>
      </section>
      <section>
        <SSIMarineImage />
        <div className={LayoutStyles.item}>
          <h2>Marine</h2>
          <p>Onshore &amp; Offshore Support</p>
        </div>
      </section>
    </section>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
