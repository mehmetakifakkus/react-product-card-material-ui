import * as React from "react";

// Material-UI Components
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { Box, CardMedia } from "@mui/material";
import { CardCover } from "@mui/joy";

// User Defined Components
import Chip from "./Chip";
import Counter from "./Counter";
import Info from "./Info";
import { Product } from "../types";

export default function ProductCard({ product }: { product: Product }) {
  const [rating, setRating] = React.useState<number>(product.rating);
  const [quantity, setQuantity] = React.useState<number>(0);

  return (
    <Card
      sx={{
        width: 320,
        height: 400,
        maxWidth: "100%",
        boxShadow: "lg",
        margin: "auto",
      }}
      variant="soft"
    >
      <CardOverflow>
        <CardCover>
          <CardMedia
            component="img"
            height="240"
            src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
            loading="lazy"
            alt=""
          />
        </CardCover>
        <CardContent>
          <Typography
            level="body-lg"
            fontWeight="lg"
            textColor="#fff"
            mb={{ xs: 24 }}
          >
            <Chip label={product.discount} />
          </Typography>
        </CardContent>
      </CardOverflow>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Info rating={rating} setRating={setRating} product={product} />
        <Counter quantity={quantity} setQuantity={setQuantity} />
      </Box>
    </Card>
  );
}
