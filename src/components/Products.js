import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { ProductCard } from "./ProductCard";

export const Products = ({ products }) => {
  return (
    <Box>
      {products.length === 0 ? (
        <Alert severity="error">No items found. Please try again later.</Alert>
      ) : (
        <Stack
          direction="row"
          sx={{
            flexWrap: "wrap",
          }}
        >
          {products.map((product) => (
            <ProductCard {...product} key={product.ASIN} />
          ))}
        </Stack>
      )}
    </Box>
  );
};
