import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { postTypes } from "../redux/actionTypes";

type Props = {
  title?: string;
  subtitle?: string;
};

export default function EmptyState({
  title = "No exact matches found",
  subtitle = "Press button to list all products!",
}: Props) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-2 items-center mx-auto justify-center h-[calc(100vh-12rem)]">
      <div className={"text-center"}>
        <div className="text-2xl font-bold">{title}</div>
        <div className="font-light text-neutral mt-2 text-neutral-500">
          {subtitle}
        </div>
      </div>
      <div className="mt-4 w-48">
        <Button
          variant="outlined"
          onClick={() => {
            dispatch({ type: postTypes.GET_PRODUCTS });
          }}
        >
          List products
        </Button>
      </div>
    </div>
  );
}
