import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ setSearch }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search for a tutorial..."
      onChange={(e) => setSearch(e.target.value)}
      sx={{ mt: 3, mb: 2 }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
