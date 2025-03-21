import { SobreRPV } from "./SobreRPV"
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>

     <Route path="/SobreRPV" element={<SobreRPV/>}/>

  

    </Routes>
    
    
 </BrowserRouter>
    </>
  )
}

export { App }
