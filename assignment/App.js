import React from "react";
// import Hello from "./hello/Hello";
// import Jsxelem from "./hello/Jsxelem";
// import Greeting from "./hello/Greeting";
// import Welcome from "./hello/Welcome";
// import Usercard from "./hello/Usercard";
// import Counter from "./hello/Counter";

// routing
import Home from "./routing.jsx/Home";
import About from "./routing.jsx/About";
import { BrowserRouter,Route,Routes, } from "react-router-dom";




function App() {
    return (
        <BrowserRouter>
        <div className="App">

            {/* <Hello/> */}
            {/* <Jsxelem/> */}
            {/* <Greeting name="vivek"/> */}
            {/* <Welcome/> */}
            {/* <Usercard name="vivek" age="21" location="ahmedabad"/> */}
            // <Counter/>

         <Routes>
                
       <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} > </Route>
        
    </Routes>



        </div>
 </BrowserRouter>

    )
}

export default App;
