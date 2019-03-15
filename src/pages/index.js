import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SSISecurityImage from '../components/ssisecurity'
import SSIConstructionImage from '../components/ssiconstruction'
import SSIMarineImage from '../components/ssimarine'
import Title from '../components/title/Title'
import SEO from '../components/seo'
import LayoutStyles from '../styles/layout.module.scss'

const IndexPage = ({ data }) => (
  <Layout background={true}>
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
    <Title style={LayoutStyles.title} />
    <section className={LayoutStyles.items}>
      <section className={LayoutStyles.item}>
        <Link className={LayoutStyles.link} to="security">
          <SSISecurityImage />
          <div className={LayoutStyles.content}>
            <h2>Security</h2>
            <p>International Security &amp; Risk Management Services</p>
          </div>
        </Link>
      </section>
      <section className={LayoutStyles.item}>
        <SSIConstructionImage />
        <div className={LayoutStyles.content}>
          <h2>Construction</h2>
          <p>Engineering, Procurement &amp; Construction</p>
        </div>
      </section>
      <section className={LayoutStyles.item}>
        <Link className={LayoutStyles.link} to="marine">
          <SSIMarineImage />
          <div className={LayoutStyles.content}>
            <h2>Marine</h2>
            <p>Onshore &amp; Offshore Support</p>
          </div>
        </Link>
      </section>
    </section>
  </Layout>
)

export default IndexPage
