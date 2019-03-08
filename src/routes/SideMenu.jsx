import React, { Component } from 'react'
import * as Api from '../utils/Apis'
import Menu from '../components/SideMenu'
import { Link } from 'react-router-dom'

class SideMenu extends Component {
  state = {
    menu: {
      categories: []
    },
    cates: {
      categories: [],
      parent: {}
    },
    menuOpen: false
  }
  getData = (url, which) => {
    Api.getData(url)
      .then(res => {
        if (!res) return
        this.setState({
          [which]: res
        })
      })
      .catch(err => {
        console.log('err')
      })
  }
  toggleMenu = () => {
    this.setState(state => ({
      menuOpen: !state.menuOpen
    }))
  }
  componentDidMount() {
    this.getData(this.props.location.pathname, 'menu')
    this.getData('/article', 'cates')
  }
  componentWillReceiveProps(nextProps) {
    this.getData(nextProps.location.pathname, 'menu')
  }
  render() {
    const { menu, menuOpen, cates } = this.state
    const currentCate = menu.parent || {}
    const { toggleMenu } = this
    return (
     <Menu menu={menu.categories} >
      <nav className="simple-menu">
        <div className="simple-menu__toogle" onClick={toggleMenu}>
          <button className="simple-menu__title">{currentCate.name}</button>
          <div className={`simple-menu__content mdc-menu ${menuOpen ? 'mdc-menu--open' : ''}`} tabIndex="-1">
            <ul className="mdc-menu__items mdc-list" role="menu" aria-hidden="true">
              {
                cates.categories.map((cate, index) => (
                  <Link to={cate.target} className="mdc-list-item" role="menuitem" key={cate.id}><li>
                    { cate.name }
                  </li></Link>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>
     </Menu>
    )
  }
}

export default SideMenu