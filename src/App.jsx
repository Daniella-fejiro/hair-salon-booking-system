import Home from "./pages/Home"
import Booking from "./pages/Booking"
import { useState } from "react"


function App() {

  const [booked,setBooked] = useState(false)

    return(
      <div>
        {!booked ? 
        <Home
         booked = {booked}
        setBooked={setBooked}/> : 
        <Booking 
        setBooked={setBooked}/>}
      </div>
    )
  
}

export default App
