import React from "react";
import Counter from "./navbar component/component/Counter";
import UserList from "./navbar component/component/Userlist";
import NestedApp from "./navbar component/component/App";
// import Hello from "./hello/Hello";
// import Jsxelem from "./hello/Jsxelem";
// import Greeting from "./hello/Greeting";
// import Welcome from "./hello/Welcome";
// import Usercard from "./hello/Usercard";
// import Counter from "./hello/Counter";
import DataFetcher from './fet/DataFetcher'

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
            {/*<Counter/>*/}
             {/* <UserList /> */}
              // <Counter/>
               <DataFetcher/>
    

         <Routes>
                
       <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} > </Route>
        
    </Routes>



        </div>
 </BrowserRouter>

    )
}

export default App;

// firebase
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignIn from './auth/SignIn';
// import Dashboard from './pages/Dashboard';
// import PrivateRoute from './auth/PrivateRoute';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<SignIn />} />
//         <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
