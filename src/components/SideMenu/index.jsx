import React, { Component } from 'react'
import * as helpers from '../../utils/helpers.jsx'

class SideMenu extends Component {
  menuList = (menu) => {
    const { wrapLink } = helpers
    const { menuList } = this
    const content = wrapLink(menu)

    if (!menu.sub) return content

    return (
      <ul className="mdc-list sidemenu-list">
        {content}
        { menu.sub.map((item, index) => (
          <li key={index} >
            { menuList(item) }
          </li>
        )) }
      </ul>
    )
  }
  render() {
    const { props, menuList } = this
    const { menu, children } = props
    return (
      <div className="app-sidemenu">
        {children}
        {
          menu.map((item, index) => (
            <React.Fragment key={index}>
              { menuList(item) }
            </React.Fragment>
          ))
        }
      </div>
    )
  }
}

export default SideMenu