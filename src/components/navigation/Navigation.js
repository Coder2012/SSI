import React from 'react'
import NavigationStyles from './navigation.module.scss'
import { Link } from 'gatsby'

const Navigation = props => {
  const open = props.active ? NavigationStyles.panelActive : '';

  return (
    <nav className={[NavigationStyles.panel, open].join(' ')}>
      <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="security">Security</Link>
          <ul>
            <li>
              <Link to="training">Training</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/">Construction</Link>
        </li>
        <li>
          <Link to="marine">Marine</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
