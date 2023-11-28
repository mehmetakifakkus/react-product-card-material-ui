import { useEffect } from "react";
import { Grid } from "@mui/material";
import ProductCard from "./productCard/ProductCard";
import { Product } from "./types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { postTypes } from "../redux/actionTypes";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import EmptyState from "./EmptyState";

export default function MainComponent() {
  const [parent] = useAutoAnimate({ duration: 300 });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: postTypes.GET_PRODUCTS });
    dispatch({ type: postTypes.GET_CART });
  }, [dispatch]);

  const products: Product[] = useSelector(
    (state: any) => state.product.products
  );

  return (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        rowSpacing={{ xs: 6 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        ref={parent}
      >
        {products?.length === 0 ? (
          <EmptyState />
        ) : (
          products?.map((product, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <ProductCard product={product} />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}
