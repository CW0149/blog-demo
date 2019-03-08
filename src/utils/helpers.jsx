import React from 'react'
import RippleList from '../components/Common/RippleList'
import { NavLink } from 'react-router-dom'

export const wrapLink = (data) => {
  if (data.target) return (
    <RippleList className="sidemenu-list__item">
      <NavLink to={data.target} activeClassName="sidemenu-list__item--active" className="sidemenu-list__item-text">{data.name}</NavLink>
    </RippleList>
  )
  return (<span className="sidemenu-list__item-text">{data.name}</span>)
}