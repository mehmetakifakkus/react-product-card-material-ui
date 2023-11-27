import * as React from "react";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import { Product } from "../types";
import { Box, CardMedia, Rating } from "@mui/material";
import { grey } from "@mui/material/colors";
import { CardCover } from "@mui/joy";
import Chip from "./Chip";

export default function ProductCard({ product }: { product: Product }) {
  const [value, setValue] = React.useState<number | null>(product.rating);

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
            mt={{ xs: 0 }}
            mb={{ xs: 24 }}
          >
            <Chip label={product.discount} />
          </Typography>
        </CardContent>
      </CardOverflow>
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
              value={value}
              sx={{ mt: 0.75 }}
              onChange={(event, newValue) => {
                setValue(newValue || 0);
              }}
            />
          </Box>
          <Typography level="body-md" sx={{ ml: 1 }}>
            ({value})
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
    </Card>
  );
}
