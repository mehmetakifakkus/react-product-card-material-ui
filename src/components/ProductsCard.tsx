import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import { Product } from "./types";
import { Box, Rating } from "@mui/material";
import { purple, red, grey } from "@mui/material/colors";

export default function ProductCard({ product }: { product: Product }) {
  const [value, setValue] = React.useState<number | null>(product.rating);

  return (
    <Card
      sx={{ width: 320, maxWidth: "100%", boxShadow: "lg", margin: "auto" }}
    >
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img src={product.image} loading="lazy" alt="" />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        {/* <Typography level="body-xs">{product.name}</Typography> */}
        <Link
          href="#product-card"
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
          overlay
        >
          {product.name}
        </Link>

        <div className="flex gap-1 items-center">
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Rating
              name="simple-controlled"
              value={value}
              sx={{ mt: 0.75 }}
              onChange={(event, newValue) => {
                setValue(newValue);
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
            // <Chip component="span" size="sm" variant="soft" color="success">
            //   Lowest price
            // </Chip>
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
      <CardOverflow>
        <Button variant="solid" color="danger" size="lg">
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
  );
}
