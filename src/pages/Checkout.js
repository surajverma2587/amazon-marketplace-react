import { useEffect } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import { useApp } from "../context/AppProvider";
import { getDataFromLocalStorage } from "../utils/getDataFromLocalStorage";
import { Basket } from "../components/Basket";

export const Checkout = () => {
  const { basket, setBasket } = useApp();

  useEffect(() => {
    const basketFromLS = getDataFromLocalStorage("basket", []);

    setBasket(basketFromLS);
  }, []);

  return (
    <Container maxWidth="xl">
      <Stack spacing={3} sx={{ my: 3 }}>
        {basket && basket.length === 0 && (
          <Alert severity="info">You have no items your basket.</Alert>
        )}

        {basket && basket.length !== 0 && <Basket />}
      </Stack>
    </Container>
  );
};
