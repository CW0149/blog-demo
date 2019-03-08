import React from 'react'
import TabBar from '../Common/TabBar'

const nav = [
  {
    title: '项目',
    target:'/projects'
  },
  {
    title: '文章',
    target: '/article'
  }
]

function Nav() {
  return (
    <TabBar data={nav} className="app-header-nav" />
  )
}

export default Nav