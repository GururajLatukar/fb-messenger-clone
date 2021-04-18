import {
  FormControl,
  IconButton,
  Input
} from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import Message from "./components/Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Enter your name"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <h2>Welcome {username}</h2>
      <form onSubmit={sendMessage} className="app__form">
        <FormControl className="app__formContent">
          <Input className="app__input" placeholder="Enter a message" value={input} onChange={(e) => setInput(e.target.value)} />
          <IconButton className="app__iconButton" type="submit" disabled={!input.trim()}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map((message) => (
          <Message key={message.id} message={message} username={username} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
