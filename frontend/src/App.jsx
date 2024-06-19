import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Map from './components/Map'

function App() {
 

  return (
   <>
   {/* <Login/> */}
   <Map/>
   {/* <BrowserRouter>
      <GlobalState>
        <Switch>
          <Route path="/add" exact>
            <AddEmployee />
          </Route>
          <Route path="/edit/:id" exact>
            <EditEmployee />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </GlobalState>
    </BrowserRouter> */}
   </>
  )
}

export default App
