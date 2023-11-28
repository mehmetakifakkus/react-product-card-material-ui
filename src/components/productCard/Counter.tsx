import React from "react";
import { Box, Button } from "@mui/material";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type Props = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

export default function Counter({ quantity, setQuantity }: Props) {
  const [parent] = useAutoAnimate({ duration: 100 });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        marginTop: 3,
        zIndex: 10,
        justifyContent: "flex-end",
      }}
      ref={parent}
    >
      {quantity > 0 && (
        <>
          <Button
            sx={{
              width: 28,
              height: 28,
              padding: 1,
              margin: 0,
              minWidth: 36,
            }}
            color={"error"}
            variant="outlined"
            onClick={() => {
              setQuantity((prev) => prev - 1);
            }}
          >
            <FiMinus size={24} />
          </Button>
          <span>{quantity}</span>
        </>
      )}
      <Button
        sx={{
          width: 28,
          height: 28,
          padding: 1,
          margin: 0,
          minWidth: 36,
        }}
        variant="outlined"
        color={"error"}
        onClick={() => {
          setQuantity((prev) => prev + 1);
        }}
      >
        <FiPlus size={24} />
      </Button>
    </Box>
  );
}
