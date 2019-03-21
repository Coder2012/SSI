import React from 'react'
import NavigationStyles from './navigation.module.scss'
import { Link } from 'gatsby'

const Navigation = props => {
  const open = props.active ? NavigationStyles.panelActive : '';

  return (
    <nav className={[NavigationStyles.panel, open].join(' ')}>
      <ul>
        <li>
        <Link to="/" activeStyle={{ color: "red" }} >Home</Link>
        </li>
        <li>
          <Link to="security" activeStyle={{ color: "red" }} >Security</Link>
        </li>
        <li>
          <Link to="training" activeStyle={{ color: "red" }} >Training</Link>
        </li>
        <li>
          <Link to="construction" activeStyle={{ color: "red" }} >Construction</Link>
        </li>
        <li>
          <Link to="marine" activeStyle={{ color: "red" }} >Marine</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
