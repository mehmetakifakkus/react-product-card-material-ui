import React from "react";

// Material-UI Components
import { Box, Rating } from "@mui/material";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { grey } from "@mui/material/colors";
import Link from "@mui/joy/Link";

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
      <Link
        href="#product-card"
        fontWeight="md"
        color="neutral"
        textColor="text.primary"
        sx={{ mt: 2.5 }}
        overlay
      >
        {product.name}
      </Link>

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
