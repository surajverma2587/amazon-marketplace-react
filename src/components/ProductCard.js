import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import LinkIcon from "@mui/icons-material/Link";

import { useApp } from "../context/AppProvider";

export const ProductCard = ({
  ASIN,
  title,
  price,
  imageUrl,
  detailPageURL,
  rating,
  totalReviews,
  subtitle,
  isPrimeEligible,
}) => {
  const { basket, setBasket } = useApp();

  const handleAddToBasket = () => {
    setBasket([...basket, "1"]);
  };

  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardHeader subheader={price} />

      <CardMedia component="img" height="194" image={imageUrl} alt={title} />

      <CardContent sx={{ minHeight: "100px" }}>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>

      <Stack sx={{ p: 1 }}>
        <Rating name="read-only" value={+rating} readOnly />

        <Typography
          variant="caption"
          display="block"
          gutterBottom
          sx={{ paddingLeft: "4px", color: "rgba(0, 0, 0, 0.6)" }}
        >
          {totalReviews} reviews
        </Typography>
      </Stack>

      <CardActions disableSpacing>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton href={detailPageURL} target="_blank">
              <LinkIcon />
            </IconButton>
          </Box>

          <Box>
            <IconButton onClick={handleAddToBasket}>
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
};
