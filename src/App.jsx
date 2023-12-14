import { useState, useEffect } from 'react'
import './App.css'
import AllPlayers from './component/allplayers'
import SinglePlayer from './component/singlePlayer'
import NewPLayerForm from './component/newPlayerForm'
import { Route, Routes,Link } from 'react-router-dom'


function App() {
  const [showPuppy, setShowPuppy] = useState(false)
  const [details, setDetails] = useState({})

  return (
    <>
      <header>
        <nav>
          <Link to="/create">Application</Link>
        </nav>
      </header>
      
        <Routes>
          <Route path= "/create" element={<NewPLayerForm/>}/>
        </Routes>

      <main>

        <h1>PUPPYGAMES</h1>

        {showPuppy ? <SinglePlayer
          details={details}
          setShowPuppy={setShowPuppy}
        /> :
          <AllPlayers
            setShowPuppy={setShowPuppy}
            setDetails={setDetails}
          />}
      </main>


    </>
  )
}
export default App
