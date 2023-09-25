import './App.css'
import Adpart from './Adpart/Adpart'
import Banner from './Banner/Banner'
import Navbar from './Navbar/Navbar'
import Services from './Services/Services'
import SignUp from './SignUp/SignUp'
import Testimonial from './Testimonial/Testimonial'
import FindUS from './FindUs/FindUS'
import Footer from './Footer/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Services></Services>
      <Adpart></Adpart>
      <Testimonial></Testimonial>
      <SignUp></SignUp>
      <FindUS></FindUS>
      <Footer></Footer>
    </>
  )
}

export default App
