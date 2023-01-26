import { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Backdrop from "@mui/material/Backdrop";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

import { Products } from "../components/Products";
import { SearchForm } from "../components/SearchForm";

const mockProducts = [
  {
    ASIN: "B09B96TG33",
    title:
      "All-new Echo Dot (5th generation, 2022 release) smart speaker with Alexa | Charcoal",
    price: "£54.99",
    listPrice: "",
    imageUrl: "https://m.media-amazon.com/images/I/51RcU+HQjSL._SL160_.jpg",
    detailPageURL: "https://www.amazon.co.uk/dp/B09B96TG33",
    rating: "4.7",
    totalReviews: "3806",
    subtitle: "",
    isPrimeEligible: "1",
  },
  {
    ASIN: "B08KJNKB2C",
    title:
      "Echo Show 5 | 2nd generation (2021 release), smart display with Alexa and 2 MP camera | Deep Sea Blue",
    price: "£74.99",
    listPrice: "",
    imageUrl: "https://m.media-amazon.com/images/I/413xPLKO+IS._SL160_.jpg",
    detailPageURL: "https://www.amazon.co.uk/dp/B08KJNKB2C",
    rating: "4.6",
    totalReviews: "43078",
    subtitle: "",
    isPrimeEligible: "1",
  },
  {
    ASIN: "B09B97WSLF",
    title:
      "All-new Echo Dot (5th generation, 2022 release) smart speaker with clock and Alexa | Glacier White",
    price: "£64.99",
    listPrice: "",
    imageUrl: "https://m.media-amazon.com/images/I/515fr5lzCUL._SL160_.jpg",
    detailPageURL: "https://www.amazon.co.uk/dp/B09B97WSLF",
    rating: "4.7",
    totalReviews: "1936",
    subtitle: "",
    isPrimeEligible: "1",
  },
  {
    ASIN: "B07NQCKJSH",
    title:
      "Echo Studio | Our best-sounding smart speaker ever, with Dolby Atmos and Alexa | Charcoal",
    price: "£189.99",
    listPrice: "",
    imageUrl: "https://m.media-amazon.com/images/I/41-ttQ-Vt5L._SL160_.jpg",
    detailPageURL: "https://www.amazon.co.uk/dp/B07NQCKJSH",
    rating: "4.6",
    totalReviews: "13530",
    subtitle: "",
    isPrimeEligible: "1",
  },
  {
    ASIN: "B085G58KWT",
    title:
      "Echo (4th generation) | With premium sound, smart home hub and Alexa | Charcoal",
    price: "£79.99",
    listPrice: "£89.99",
    imageUrl: "https://m.media-amazon.com/images/I/5160N9jZg9L._SL160_.jpg",
    detailPageURL: "https://www.amazon.co.uk/dp/B085G58KWT",
    rating: "4.7",
    totalReviews: "37698",
    subtitle: "",
    isPrimeEligible: "1",
  },
  {
    ASIN: "B084TNK1NL",
    title:
      "Echo Show 8 | 2nd generation (2021 release), HD smart display with Alexa and 13 MP camera | Charcoal",
    price: "£119.99",
    listPrice: "",
    imageUrl: "https://m.media-amazon.com/images/I/41DXH8mXQAL._SL160_.jpg",
    detailPageURL: "https://www.amazon.co.uk/dp/B084TNK1NL",
    rating: "4.7",
    totalReviews: "16311",
    subtitle: "",
    isPrimeEligible: "1",
  },
  {
    ASIN: "B08K8BR22R",
    title:
      "Echo (4th generation), With premium sound, Glacier White + Amazon Smart Plug, Works with Alexa - Smart Home Starter Kit",
    price: "£104.98",
    listPrice: "£114.98",
    imageUrl: "https://m.media-amazon.com/images/I/41HwyqSW8+L._SL160_.jpg",
    detailPageURL: "https://www.amazon.co.uk/dp/B08K8BR22R",
    rating: "4.8",
    totalReviews: "88",
    subtitle: "",
    isPrimeEligible: "1",
  },
  {
    ASIN: "B08K8879FY",
    title:
      "Echo (4th generation), With premium sound, Twilight Blue + Amazon Smart Plug, Works with Alexa - Smart Home Starter Kit",
    price: "£104.98",
    listPrice: "£114.98",
    imageUrl: "https://m.media-amazon.com/images/I/41lby0gQuWL._SL160_.jpg",
    detailPageURL: "https://www.amazon.co.uk/dp/B08K8879FY",
    rating: "4.8",
    totalReviews: "103",
    subtitle: "",
    isPrimeEligible: "1",
  },
  {
    ASIN: "B07PJV3JPR",
    title:
      "Echo Dot (3rd Gen) - Compact Bluetooth Speaker with Alexa - Charcoal Fabric",
    price: "£39.99",
    listPrice: "",
    imageUrl: "https://m.media-amazon.com/images/I/41hX+2Es+vL._SL160_.jpg",
    detailPageURL: "https://www.amazon.co.uk/dp/B07PJV3JPR",
    rating: "4.7",
    totalReviews: "544404",
    subtitle: "",
    isPrimeEligible: "1",
  },
  {
    ASIN: "B07SMN7FYZ",
    title:
      "Echo Show 8 (1st Gen, 2019 release) – Smart Display with Alexa – Stay in touch with the help of Alexa – Charcoal",
    price: "£54.99",
    listPrice: "£99.99",
    imageUrl: "https://m.media-amazon.com/images/I/31DmckFEEHS._SL160_.jpg",
    detailPageURL: "https://www.amazon.co.uk/dp/B07SMN7FYZ",
    rating: "4.7",
    totalReviews: "89274",
    subtitle: "",
    isPrimeEligible: "1",
  },
];

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      setIsLoading(true);

      const fetchData = async () => {
        try {
          // const { data } = await axios.get(
          //   process.env.REACT_APP_AMAZON_PRICE_API,
          //   {
          //     params: {
          //       keywords: searchQuery,
          //       marketplace: "GB",
          //     },
          //     headers: {
          //       "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_API_KEY,
          //       "X-RapidAPI-Host": process.env.REACT_APP_X_RAPID_API_HOST,
          //     },
          //   }
          // );

          setError(false);
          setIsLoading(false);
          // setProducts(data);
          setProducts(mockProducts);
        } catch (error) {
          setProducts();
          setIsLoading(false);
          setError(true);
        }
      };

      fetchData();
    }
  }, [searchQuery]);

  return (
    <Container maxWidth="xl">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Stack spacing={3}>
        <SearchForm setSearchQuery={setSearchQuery} />
        {error && (
          <Alert severity="error">
            Failed to retrieve results for {searchQuery}
          </Alert>
        )}
        {products && <Products products={products} />}
      </Stack>
    </Container>
  );
};
