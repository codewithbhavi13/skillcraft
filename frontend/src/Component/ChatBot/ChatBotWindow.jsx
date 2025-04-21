import React, { useState, useEffect, useRef, useContext } from "react";
import { TextField, Button, Box, Typography, Paper, Fade } from "@mui/material";
import axios from "axios";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Markdown from "react-markdown";
import { UserContext } from "../../context/UserContext";
import "./ChatBotRenderer.css";
import { ThemeContext } from "../../context/ThemeContext";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const ChatBotWindow = ({ opened }) => {
  const { id } = useContext(UserContext).userDetails;
  const { darkMode } = useContext(ThemeContext);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      message:
        "Hello! I'm your **Senior Software Developer mentor.** How can I assist you with coding, system design, or software development today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [sendLoading, setSendLoading] = useState(false);

  const chatContainerRef = useRef(null); // Reference to the chat container
  const lastMessageRef = useRef(null); // Reference to the last message

  const handleSend = async (e) => {
    e.preventDefault();
    setSendLoading(true);
    if (input.trim() === "") return;
    const newMessage = { sender: "user", message: input };
    setMessages((prev) => [...prev, newMessage]);
    try {
      const response = await axios.post(SERVER_URL + "/api/chatbot", {
        session_id: id,
        message: input,
      });

      console.log(response.data);

      const newBotMessage = { sender: "bot", message: response.data.response };

      setMessages((prev) => [...prev, newBotMessage]);
      setInput("");
    } catch (error) {
      console.log("Error", error);
      alert("Something went wrong");
    }
    setSendLoading(false);
  };

  // Scroll to the bottom when messages update
  useEffect(() => {
    if (lastMessageRef.current) {
      setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, [messages]);

  return (
    <Fade in={opened} className="chat-bot-window" unmountOnExit mountOnEnter>
      <Box
        sx={{
          width: "95vw",
          maxWidth: 600,
          mx: "auto",
          mt: 4,
          p: 2,
          border: `1px solid ${
            darkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)"
          }`,
          backgroundColor: darkMode ? " #1e1e1e" : "#f5f5f5",
          borderRadius: 2,
          position: "fixed",
          bottom: "85px",
          right: "20px",
          zIndex: 9999,
        }}
      >
        <Paper
          ref={chatContainerRef}
          sx={{
            height: 400,
            overflowY: "auto",
            p: 2,
            mb: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {messages.map((msg, index) => (
            <Box
              key={index}
              ref={index === messages.length - 1 ? lastMessageRef : null} // Attach ref to last message
              sx={{
                display: "flex",
                justifyContent:
                  msg.sender === "user" ? "flex-end" : "flex-start",
                mb: 1,
              }}
            >
              {msg.sender === "bot" ? (
                <Typography
                  sx={{
                    bgcolor: darkMode ? "grey.900" : "grey.300",
                    color: darkMode ? "white" : "black",
                    p: 1,
                    borderRadius: 1,
                    maxWidth: "75%",
                  }}
                >
                  <LLMResponse output={msg.message} />
                </Typography>
              ) : (
                <Typography
                  sx={{
                    bgcolor: "primary.main",
                    color: darkMode ? "black" : "white",
                    p: 1,
                    borderRadius: 1,
                    maxWidth: "75%",
                  }}
                >
                  {msg.message}
                </Typography>
              )}
            </Box>
          ))}
        </Paper>
        <form onSubmit={handleSend}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <Button disabled={sendLoading} variant="contained" type="submit">
              Send
            </Button>
          </Box>
        </form>
      </Box>
    </Fade>
  );
};

export default ChatBotWindow;

const renderers = {
  code({ node, inline, className = "", children, ...props }) {
    const match = /language-(\w+)/.exec(className);

    // If it's a code block with a language specified (like ```js)
    if (!inline && match) {
      return (
        <SyntaxHighlighter style={atomDark} language={match[1]} {...props}>
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      );
    }

    // If it's a longer inline code snippet (like shell commands)
    const isCommand = !inline && String(children).length > 10;

    if (isCommand) {
      return (
        <div className={`${className} command-block`} {...props}>
          {children}
        </div>
      );
    }

    // Default inline code
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const LLMResponse = ({ output }) => {
  return <Markdown components={renderers}>{output}</Markdown>;
};
