import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function Home(){
  return(
    <>
    <h2>Home</h2>
    Home...
    </>
  )
}
function Topics(){
  return(
    <>
    <h2>Topics</h2>
    Topics...
    </>
  )
}
function Contact(){
  return(
    <>
    <h2>Contact</h2>
    Contact...
    </>
  )
}

function Main() {
  return (
    <>
    <h1>React Router Dom</h1>
    <ul>
      <li><a href='/'>Home</a></li>
      <li><a href='/topics'>Topics</a></li>
      <li><a href='/contact'>Contact</a></li>
    </ul>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/topics' element={<Topics />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/'>Not found</Route>
    </Routes>
    </>
  );
}
function App(){
  return(
    <BrowserRouter><Main/></BrowserRouter>
  )
}
export default App;