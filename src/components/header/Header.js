import PropTypes from 'prop-types'
import React from 'react'
import HeaderStyles from './header.module.scss'

const Header = ({ siteTitle }) => (
  <header className={HeaderStyles.topBar}>
    <p>Call: <a href="tel:0333 33 55 774">0333 33 55 774</a></p>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
