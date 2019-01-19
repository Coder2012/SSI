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
    <section className={LayoutStyles.items}>
      <section className={LayoutStyles.item}>
        <SSISecurityImage />
        <div className={LayoutStyles.content}>
          <h2>Security</h2>
          <p>International Security &amp; Risk Management Services</p>
        </div>
      </section>
      <section className={LayoutStyles.item}>
        <SSIConstructionImage />
        <div className={LayoutStyles.content}>
          <h2>Construction</h2>
          <p>Engineering, Procurement &amp; Construction</p>
        </div>
      </section>
      <section className={LayoutStyles.item}>
        <SSIMarineImage />
        <div className={LayoutStyles.content}>
          <h2>Marine</h2>
          <p>Onshore &amp; Offshore Support</p>
        </div>
      </section>
    </section>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
