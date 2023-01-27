import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export const BasketItem = ({ item }) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={item.imageUrl} />
      </ListItemAvatar>
      <ListItemText
        primary={item.title}
        secondary={
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2" color="text.primary">
              Price: {item.price}
            </Typography>
            <Typography variant="body2" color="text.primary">
              Qty: {item.quantity}
            </Typography>
            <Typography variant="body2" color="text.success">
              TOTAL: £{item.quantity * item.priceValue}
            </Typography>
          </Box>
        }
      />
    </ListItem>
  );
};
