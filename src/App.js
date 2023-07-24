import logo from './logo.svg';
import './App.css';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';

function App() {
  return (
    <div className="App">
      <ComponentA />
      {/* <ComponentB /> */}
    </div>
  );
}

export default App;


// API - Application Protocol Interface

// HTTP ->  Hyper Text Transfar Protocol. 
// connection established - > req -> res -> connection is terminated

// TCP - Transmission Control Protocol
// Live Streaming are done using TCP -> if some cotent is missing that is okay with this protocol,
// once the connection is established, unless and until we terminate it explicitly it will not be terminated

// UDP -> 



// HTTP Method 

// GET -> to read data
// POST ->  to insert data
// PUT ->  to update data
// DELETE  ->  to delete data

