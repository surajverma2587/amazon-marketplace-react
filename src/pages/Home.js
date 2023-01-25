import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Products } from "../components/Products";
import { SearchForm } from "../components/SearchForm";

export const Home = () => {
  return (
    <Container maxWidth="xl">
      <Stack gap={3}>
        <SearchForm />
        <Products />
      </Stack>
    </Container>
  );
};
