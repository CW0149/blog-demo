import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class TabBar extends Component {
  render() {
    const { data, className } = this.props
    return (
      <nav className={`app-tab-bar ${className}`} >
        {
          data.map((item, index) => (
            <NavLink className="app-tab" activeClassName="app-tab--active" to={item.target} key={index}>
              {item.title}
              <span className="app-tab__indicator"></span>
            </NavLink>
          ))
        }
      </nav>
    )
  }
}

TabBar.propTypes = {
  data: PropTypes.array.isRequired
}

export default TabBar