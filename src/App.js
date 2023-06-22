// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Home from './components/Home';
// import Listings from './components/Listings';
// import AddListing from './components/AddListing';

// function App() {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/listings">Listings</Link>
//           </li>
//           <li>
//             <Link to="/add-listing">Add Listing</Link>
//           </li>
//         </ul>
//       </nav>
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/listings" component={Listings} />
//         <Route path="/add-listing" component={AddListing} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import Listings from './components/Listings';
// import AddListing from './components/AddListing';

// function App() {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/listings">Listings</Link>
//           </li>
//           <li>
//             <Link to="/add-listing">Add Listing</Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/listings" element={<Listings />} />
//         <Route path="/add-listing" element={<AddListing />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import Listings from './components/Listings';
import AddListing from './components/AddListing';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listings">Listings</Link>
          </li>
          <li>
            <Link to="/add-listing">Add Listing</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/listings">
          <Listings />
        </Route>
        <Route path="/add-listing">
          <AddListing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
