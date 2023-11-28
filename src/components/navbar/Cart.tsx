import { styled } from "@mui/material/styles";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { CartItem } from "../types";
import { useDispatch } from "react-redux";
import { postTypes } from "../../redux/actionTypes";

export default function Cart() {
  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 2,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
      color: "white",
      backgroundColor: "#C24B5A",
    },
  }));

  const dispatch = useDispatch();
  const cart: CartItem[] = useSelector((state: any) => state.cart.cart);

  return (
    <IconButton
      aria-label="cart"
      onClick={() => {
        dispatch({ type: postTypes.GET_PRODUCTS_BY_CART, payload: { cart } });
      }}
    >
      <StyledBadge
        badgeContent={cart.filter((item) => item.quantity > 0).length}
        color="secondary"
      >
        <MdOutlineShoppingCart size={32} />
      </StyledBadge>
    </IconButton>
  );
}
