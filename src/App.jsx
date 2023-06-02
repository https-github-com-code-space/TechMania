import './App.css'
import About from './componant/About/About'
import Banner from './componant/Banner/Banner'
// import Banner from './componant/Banner/Banner'
import Footer from './componant/Footer/Footer'
import Navbar from './componant/Navbar/Navbar'
import TeachersPanner from './componant/TeachersPannel/TeachersPanner'
import TopHeader from './componant/TopHeader/TopHeader'

function App() {

  return (
    <div>
      <TopHeader></TopHeader>
      <Navbar></Navbar>
      <Banner/>
      <About></About>
      <TeachersPanner/>
      <Footer></Footer>
    </div>
  )
}

export default App
