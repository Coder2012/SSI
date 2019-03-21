import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header/Header'
import './layout.css'
import Footer from './footer/footer'
import LayoutStyles from '../styles/layout.module.scss'

const Layout = ({ background, children }) => (
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
        <section style={{ flexGrow: 1 }} className={background && LayoutStyles.background}>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 1200,
              padding: `80px 1.0875rem 1.45rem`,
              paddingTop: 0,
              position: `relative`
            }}
          >
            {children}
          </div>
        </section>
        <Footer />
      </section>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
