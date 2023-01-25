import * as Yup from "yup";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export const SearchForm = () => {
  const onSubmit = ({ searchTerm }) => {
    console.log(searchTerm);
  };

  const initialValues = {
    searchTerm: "",
  };

  const validationSchema = Yup.object({
    searchTerm: Yup.string()
      .required("Please enter a search term.")
      .min(2, "Please enter a search term of minimum 2 characters."),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box sx={{ my: 3 }} component="form" onSubmit={formik.handleSubmit}>
      <TextField
        name="searchTerm"
        id="searchTerm"
        value={formik.values.searchTerm}
        onChange={formik.handleChange}
        error={formik.touched.searchTerm && Boolean(formik.errors.searchTerm)}
        helperText={formik.touched.searchTerm && formik.errors.searchTerm}
        placeholder="Search amazon marketplace..."
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
