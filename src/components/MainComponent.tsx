import React from "react";
import { listProducts } from "../apis/listProducts";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Grid } from "@mui/material";
import ProductCard from "./ProductsCard";
import { Product } from "./types";

type Props = {};

export default function MainComponent({}: Props) {
  const queryClient = useQueryClient();

  // Queries
  const query = useQuery({ queryKey: ["todos"], queryFn: listProducts });
  const products: Product[] = query.data;

  // Mutations
  // const mutation = useMutation({
  //   mutationFn: postTodo,
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({ queryKey: ["todos"] });
  //   },
  // });

  return (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products?.map((product, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
