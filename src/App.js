import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import Jobs from './Components/Jobs'
import Job_detail from './Components/Job_detail';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/jobs' element={<Jobs></Jobs>}></Route>
      <Route path='/jobdetail' element={<Job_detail></Job_detail>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
