
import './App.css';
import AddMessage from './components/AddMessage';
import {MessageCard} from './components/MessageCard'
import Header from './components/Header';
import MessageList from './components/MessageList';

function App() {
  return (
    <>
    <Header/>
    <MessageList/>
    {/* <MessageCard/> */}
    <AddMessage/>
    </>
  );
}

export default App;
