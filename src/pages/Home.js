import React from "react"
import { Container} from "@material-ui/core"
import Header from "../components/Header.js" 
import Hero from "../components/Hero.js" 
import Services from "../components/Services.js" 
import Footer from "../components/Footer.js" 

const Home = () =>{
  return(
    <>
     <Container>
       <Header />
       <Hero />	
       <Services /> 
     </Container> 
       <Footer />
    </>
  )

}

export default Home
