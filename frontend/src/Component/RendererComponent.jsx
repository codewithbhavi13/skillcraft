import {
  Box,
  Typography,
  Button,
  Tooltip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import beautify from "js-beautify";
import { ThemeContext } from "../context/ThemeContext";
import { Image } from "@mui/icons-material";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";

export default function RendererComponent({ element }) {
  const { type, data } = element || {};

  if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(type)) {
    return (
      <Typography variant={type} gutterBottom>
        {data}
      </Typography>
    );
  }

  if (type === "paragraph") {
    return (
      <Typography variant="body1" gutterBottom>
        {data}
      </Typography>
    );
  }

  if (type === "image") {
    return (
      <Box
        sx={{
          my: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={data}
          alt="Rendered content"
          sx={{
            maxWidth: "100%",
            maxHeight: 400,
            borderRadius: 2,
            border: "1px solid #ccc",
          }}
        />
      </Box>
    );
  }

  if (type === "bullet") {
    return (
      <List dense>
        {data.map((item, index) => (
          <ListItem key={index} sx={{ alignItems: "flex-start", py: 0 }}>
            <ListItemIcon
              sx={{
                minWidth: "20px",
                mt: "3px",
              }}
            >
              <FiberManualRecordIcon
                sx={{
                  fontSize: "0.5rem", // 50% of default small size (~1rem)
                  mt: "8px", // vertical fine-tuning
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2" component="span">
                  {item}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    );
  }

  if (type === "numbered") {
    return (
      <List dense>
        {data.map((item, index) => (
          <ListItem key={index} sx={{ alignItems: "flex-start", py: 0 }}>
            <ListItemIcon
              sx={{
                minWidth: "20px",
                mt: "7px", // slight top margin to align with first line
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  lineHeight: 1.5,
                  fontSize: "0.875rem", // default body2 size
                }}
              >
                {index + 1}.
              </Typography>
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2" component="span">
                  {item}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    );
  }

  if (type === "titled_bullet") {
    return (
      <List dense>
        {data.map((item, index) => (
          <ListItem key={index} sx={{ py: 0 }}>
            <ListItemIcon sx={{ minWidth: "24px" }}>
              <FiberManualRecordIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2">
                  <strong>{item.title}</strong>: {item.body}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    );
  }

  if (type === "titled_numbered") {
    return (
      <List dense>
        {data.map((item, index) => (
          <ListItem key={index} sx={{ py: 0 }}>
            <ListItemIcon sx={{ minWidth: "24px" }}>
              <Typography variant="body2">{index + 1}.</Typography>
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2">
                  <strong>{item.title}</strong>: {item.body}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    );
  }

  if (type === "code") {
    return (
      <Box my={2}>
        <CodeSnippet code={data.code} language={data.language} />
      </Box>
    );
  }

  // fallback
  return null;
}

const CodeSnippet = ({ code, language }) => {
  const { darkMode } = useContext(ThemeContext);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 2,
        overflow: "hidden",
        border: "1px solid",
        borderColor: darkMode ? "grey.800" : "grey.300",
        mb: 2,
      }}
    >
      {/* Top right copy controls */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 1,
          gap: 1,
          position: "absolute",
          right: 0,
          zIndex: 1,
        }}
      >
        <Tooltip title={copied ? "Copied!" : "Copy code"}>
          <Button
            onClick={handleCopy}
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", fontSize: "0.75rem" }}
          >
            {copied ? "Copied" : "Copy"}
          </Button>
        </Tooltip>
      </Box>

      {/* Syntax highlighted code */}
      <SyntaxHighlighter
        language={language}
        style={darkMode ? atomOneDark : atomOneLight}
        customStyle={{
          margin: 0,
          padding: "2rem 1rem 1rem", // leave room for buttons
          backgroundColor: "transparent",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </Box>
  );
};
