import { useApp } from "../context/AppProvider";
import Box from "@mui/material/Box";

import { BasketItem } from "./BasketItem";

export const Basket = () => {
  const { basket } = useApp();

  return (
    <Box>
      {basket.map((item) => (
        <BasketItem item={item} key={item.id} />
      ))}

      <h3>TOTAL: £534678</h3>
    </Box>
  );
};
