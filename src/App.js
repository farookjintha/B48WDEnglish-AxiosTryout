import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
import FormikForm from "./Components/FormikForm";
import FormComponent from "./Components/FormComponent";
import FormikComponent from "./Components/FormikComponent";
import FormikFormComponent from "./Components/FormikFormComponent";

function App() {
  return (
    <div className="App">
      {/* <ComponentA /> */}
      {/* <ComponentB /> */}
      {/* <FormikForm /> */}
      {/* <FormComponent /> */}
      {/* <FormikComponent /> */}
      <FormikFormComponent />
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
