import React from "react";

// Material-UI Components
import { Box, Rating } from "@mui/material";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { grey } from "@mui/material/colors";

// Product type
import { Product } from "../types";

type Props = {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  product: Product;
};

export default function Info({ rating, setRating, product }: Props) {
  return (
    <CardContent>
      <span className="text-base text-neutral mt-6">By {product.name}</span>
      <div className="flex gap-1 items-center">
        <Box>
          <Rating
            name="simple-controlled"
            value={rating}
            sx={{ mt: 0.75 }}
            onChange={(event, newValue) => {
              setRating(newValue || 0);
            }}
          />
        </Box>
        <Typography level="body-md" sx={{ ml: 1 }}>
          ({rating})
        </Typography>
      </div>

      <Typography
        level="title-lg"
        sx={{ mt: 1, fontWeight: "xl", color: "#C24B5A" }}
        endDecorator={
          <Typography
            level="body-md"
            sx={{ textDecoration: "line-through", color: grey[500] }}
          >
            ${product.originalPrice}
          </Typography>
        }
      >
        ${product.price}
      </Typography>
    </CardContent>
  );
}
