import React from 'react'
import TopAppBar from '@material/react-top-app-bar';
import MenuIcon from '@material-ui/icons/Menu'
import IconButton  from '@material-ui/core/IconButton'
import Nav from './Nav'

function Header() {
  function handleClick() {
    console.log('clicked')
  }
  return (
    <TopAppBar
      className="app-header"
      title='Ryan Huang'
      navigationIcon={(
        <IconButton
          aria-label="Menu"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
      )}
      actionItems={[<Nav />]}
    />
  )
}

export default Header
