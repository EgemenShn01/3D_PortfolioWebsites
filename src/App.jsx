import { BrowserRouter} from "react-router-dom";
import {About ,Contact  , Experience , Feedbacks ,
Hero , Navbar , Tech , Works , StarsCanvas,Footer} from './components'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () =>{
  return (
        <BrowserRouter>
        <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern1 bg-cover bg-no-repeat
      bg-center">
            <Navbar/>
            <Hero/>
      </div>
      <div className="">
         <About/>
      </div>
       
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>
      <div className="  relative z-0 ">
          <Contact/>
          <StarsCanvas/>
      </div>
       <Footer/>
      </div>
            <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            />
        </BrowserRouter>
        
  )
};

export default App;


  
