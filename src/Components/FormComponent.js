import { useState } from "react";

const FormComponent = () => {
  const [newQuote, setNewQuote] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      quote: newQuote,
      author: author,
    });
  };

  return (
    <div>
      <h1>Form Component</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label style={{ display: "block" }}>Quote:</label>
            <textarea
              placeholder="Enter some quote"
              value={newQuote}
              rows="10"
              cols="50"
              onChange={(e) => setNewQuote(e.target.value)}
            />
          </div>
          <div>
            <label style={{ display: "block" }}>Author:</label>
            <input
              placeholder="Enter author name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Add Quote</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
