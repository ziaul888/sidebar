import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import {useGobalContext} from './context'
const Home = () => {
  const{openModal,openSiderbar}=useGobalContext()
  return <main>
    <button className="sidebar-toggle" onClick={openSiderbar}>
   <FaBars/>
    </button>
    <button className="btn" onClick={openModal}>Show model</button>
  </main>
}

export default Home
