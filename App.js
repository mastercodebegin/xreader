import React from 'react'
import Navigations from './src/navigation/Navigations'
import {Provider} from 'react-redux'
import Store from './src/context/store/Store'
import Stepper from './src/helper/util/Stepper'
import DropDown from './src/component/DropDown'
import Rating from './src/helper/util/Rating'
import Chat from './src/helper/util/Chat'


export default App=()=>{
  return(
  // <Dashboard/>
    <Provider store={Store}>
          {/* <Navigations/> */}
          <Chat/>
          </Provider>

  )
}