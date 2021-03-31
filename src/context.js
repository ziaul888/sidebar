import React, { useState, useContext} from 'react'


const AppContext=React.createContext()

const AppProvider=({children})=>{


    const [isSidebarOpen,setIsSidebarOpen]=useState(false)
const[isModalOpen,setIsModalOpen]=useState(false)

const openSiderbar=()=>{
setIsSidebarOpen(true);
}

const closeSiderbar=()=>{
    setIsSidebarOpen(false);
    }

const openModal=()=>{
setIsModalOpen(true);
        }
        
const closeModal=()=>{
setIsModalOpen(false);
            }
return<AppContext.Provider value={{
    isModalOpen,isSidebarOpen,openModal,closeModal,openSiderbar,closeSiderbar
}}>{children}</AppContext.Provider>
}

export const useGobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}