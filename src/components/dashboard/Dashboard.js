import React from 'react'
import MediaQuery from 'react-responsive'
import Header from '../Header'
import Nav from '../Nav'
import Cards from './Cards'
import NavMenu from './NavMenu'

function Dashboard() {
  return(
    <main>
      <Header />
      <MediaQuery minDeviceWidth={800}>
        <Nav />
      </MediaQuery>
      <Cards />
    </main>
  )
}

export default Dashboard
