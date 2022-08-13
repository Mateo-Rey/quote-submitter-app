import "./App.css";
import AddMessage from "./components/AddMessage";
import Header from "./components/Header";
import MessageList from "./components/MessageList";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <AddMessage />
        <MessageList />
      </div>
    </>
  );
}

export default App;
