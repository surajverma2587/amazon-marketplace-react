import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { getDataFromLocalStorage } from "../utils/getDataFromLocalStorage";
import { useApp } from "../context/AppProvider";

export const BasketItem = ({ item }) => {
  const { setBasket } = useApp();

  const handleDeleteItem = () => {
    const basketFromLS = getDataFromLocalStorage("basket", []);

    const basketItemIndex = basketFromLS.findIndex((basketItem) => {
      return basketItem.id === item.id;
    });

    if (basketFromLS[basketItemIndex].quantity > 1) {
      basketFromLS[basketItemIndex].quantity -= 1;

      localStorage.setItem("basket", JSON.stringify(basketFromLS));

      setBasket(basketFromLS);
    } else {
      const newFilteredBasket = basketFromLS.filter((basketItem) => {
        return basketItem.id !== item.id;
      });

      localStorage.setItem("basket", JSON.stringify(newFilteredBasket));

      setBasket(newFilteredBasket);
    }
  };

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={item.title} src={item.imageUrl} />
      </ListItemAvatar>
      <ListItemText
        primary={item.title}
        secondary={
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            component="span"
          >
            <Typography
              variant="body2"
              color="text.primary"
              sx={{ flex: 1 }}
              component="span"
            >
              Item price: {item.price}
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              sx={{ flex: 1 }}
              component="span"
            >
              Qty: {item.quantity}
            </Typography>
            <Typography
              variant="body2"
              color="text.success"
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "end",
                fontWeight: 600,
              }}
              component="span"
            >
              £{(item.quantity * item.priceValue).toFixed(2)}
            </Typography>
            <IconButton color="error" onClick={handleDeleteItem}>
              <DeleteIcon />
            </IconButton>
          </Box>
        }
      />
    </ListItem>
  );
};
