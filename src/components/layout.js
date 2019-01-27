import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header/Header'
import './layout.css'
import Footer from './footer/footer'
import LayoutStyles from '../styles/layout.module.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <section className={LayoutStyles.wrapper}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            flexGrow: 1,
            margin: `0 auto`,
            maxWidth: 1200,
            padding: `80px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer />
      </section>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
