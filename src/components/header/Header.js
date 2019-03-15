import React, { Component } from 'react'
import HeaderStyles from './header.module.scss'
import LayoutStyles from '../../styles/layout.module.scss'
import Navigation from '../navigation/Navigation'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = { active: false }
  }
  handleMenuClick = () => {
    this.setState(prevState => {
      return { active: !prevState.active }
    })
  }
  render() {
    return (
      <React.Fragment>
        <header className={HeaderStyles.topBar}>
          <button
            onClick={() => this.handleMenuClick()}
            className={[HeaderStyles.menu, LayoutStyles.hideDesktop].join(' ')}
          >
            Menu
          </button>
          <Navigation {...this.state} />
          <p>
            <span className={LayoutStyles.hideSmall}>Call: </span>
            <a href="tel:+44 333 33 55 774">+44 (0) 333 33 55 774</a>
          </p>
        </header>
      </React.Fragment>
    )
  }
}

export default Header
