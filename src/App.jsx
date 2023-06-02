import './App.css'
import Banner from './componant/Banner/Banner'
// import Banner from './componant/Banner/Banner'
import Footer from './componant/Footer/Footer'
import Navbar from './componant/Navbar/Navbar'
import TopHeader from './componant/TopHeader/TopHeader'

function App() {

  return (
    <div>
      <TopHeader></TopHeader>
      <Navbar></Navbar>
      <Banner/>
      <Footer></Footer>
    </div>
  )
}

export default App
