import React, { useState, useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import {
  TextField,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  BtnBold,
  Editor,
  EditorProvider,
  Toolbar,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  BtnUndo,
  ContentEditable,
  DefaultEditor,
  Dropdown,
  createDropdown,
  HtmlButton,
  Separator,
} from "react-simple-wysiwyg";

const ManageBlog = () => {
  const { addBlog } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState(""); // Image Preview URL
  const [content, setContent] = useState("");

  // Handle Image Upload from Computer
  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result); // Set image as base64 URL
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Blog Submission
  const handleSubmit = () => {
    // if (!title || !image || !content) {
    //   alert("All fields are required!");
    //   return;
    // }

    addBlog({ title, image, content });
    setTitle("");
    setImage("");
    setContent("");
  };

  const BtnHtmlTags = createDropdown("HTML Tags", [
    ["Paragraph", "formatBlock", "P"],
    ["Heading 1", "formatBlock", "H1"],
    ["Heading 2", "formatBlock", "H2"],
    ["Heading 3", "formatBlock", "H3"],
    ["Blockquote", "formatBlock", "BLOCKQUOTE"],
    ["Code Block", "formatBlock", "PRE"],
    ["Section", "formatBlock", "SECTION"],
    ["Article", "formatBlock", "ARTICLE"],
    ["Aside", "formatBlock", "ASIDE"],
  ]);

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Card sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
            Create Blog
          </Typography>

          {/* Blog Title */}
          <TextField
            fullWidth
            label="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mb: 2 }}
          />

          {/* Image Upload */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ marginBottom: "10px" }}
          />

          {/* Image Preview */}
          {image && (
            <img
              src={imageUrl}
              alt="Uploaded Preview"
              style={{
                width: "100%",
                maxHeight: "300px",
                marginBottom: "10px",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          )}

          {/* Rich Text Editor for Blog Content */}
          <EditorProvider>
            <Editor
              value={content}
              containerProps={{ style: { resize: "vertical" } }}
              onChange={(e) => setContent(e.target.value)}
            >
              <Toolbar>
                <BtnUndo />
                <BtnRedo />
                <Separator />

                <BtnBold />
                <BtnItalic />
                <BtnUnderline />
                <BtnStrikeThrough />
                <Separator />
                <BtnBulletList />
                <BtnNumberedList />
                <Separator />
                <BtnLink />
                <BtnClearFormatting />
                <HtmlButton />
                <Separator />
                <BtnHtmlTags />
              </Toolbar>
            </Editor>
          </EditorProvider>
        </CardContent>

        <CardActions>
          <Button variant="contained" fullWidth onClick={handleSubmit}>
            Publish Blog
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default ManageBlog;
