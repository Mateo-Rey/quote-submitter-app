import "../styles/Master.css";
import { useState, useEffect } from "react";

export default function AddMessage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({});
  useEffect(() => {}, [form]);

  async function formSubmit(e) {
    e.preventDefault();

    try {
      const results = await fetch(
        "https://chat-app-98837.web.app/add-message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      const data = results.json();
      setFormSubmitted(true);
      setErrorMessage("");
      console.log(data);
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "there was an error submitting your comment" + error.toString()
      );
    }
  }

  const updateForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  console.log(form);
  return (
    <div className="App">
      <form onSubmit={formSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          placeholder="your title here..."
          value={form.title}
        ></input>
        <label>Message</label>
        <input
          type="text"
          name="text"
          placeholder="your message here..."
          onChange={updateForm}
          value={form.text}
        ></input>

        {!formSubmitted && (
          <button className="bottom" id="bottom">
            Submit Form
          </button>
        )}
        {errorMessage && (
          <h1>
            There was an error: <br />
            {errorMessage}
          </h1>
        )}
      </form>
    </div>
  );
}
