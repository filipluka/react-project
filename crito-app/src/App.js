
import './App.css';
import Home from './pages/home'
import Contact from './pages/contact'
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './components/section-1/navigation';
import Services from './pages/services';
import News from './pages/news'
// import  Section1  from './components/section-1/section1'
// import  Section2  from './components/section-2/section2'
// import  Section3  from './components/section-3/section3'
// import  Section4  from './components/section-4/section4'
// import  Section5  from './components/section-5/section5'
// import  Section6  from './components/section-6/section6'
// import  Section7  from './components/section-7/section7'
// import  Section8  from './components/section-8/section8'
// import  Section9  from './components/section-9/section9'

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/services" element={<Services />} />
                    <Route exact path="/news" element={<News />} />
                    <Route exact path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>
        // <div>
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Home />}>
        //             <Route index element={<Home />} />
        //             <Route path="/pages/contact" element={<Contact />} />
        //         </Route>
        //     </Routes>
        // </BrowserRouter>
        // </div>
    );
    // <div className="App">
    //     <Home />
    //   {/* <Section1 />
    //   <Section2 />
    //   <Section3 />
    //   <Section4 />
    //   <Section5 />
    //   <Section6 />
    //   <Section7 />
    //   <Section8 />
    //   <Section9 /> */}
    // </div>
    //);
}

export default App;
