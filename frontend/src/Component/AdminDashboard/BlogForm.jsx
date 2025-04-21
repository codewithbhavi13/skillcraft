import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
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
  BtnUnderline,
  BtnUndo,
  createDropdown,
  HtmlButton,
  Separator,
} from "react-simple-wysiwyg";

const BlogForm = ({ formTitle, submitBtnText, handleSubmit, data }) => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState(""); // Image Preview URL
  const [content, setContent] = useState("");
  const clearInputs = () => {
    setTitle("");
    setImage("");
    setContent("");
  };

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
  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setImageUrl(data.image);
      setContent(data.content);
    }
  }, [data]);
  return (
    <Card sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
          {formTitle}
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
        <Button
          variant="contained"
          fullWidth
          onClick={() => {
            handleSubmit(title, image, content, data.id);
            clearInputs();
          }}
        >
          {submitBtnText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogForm;
