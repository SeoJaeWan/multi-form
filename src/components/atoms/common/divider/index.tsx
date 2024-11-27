import cn from "classnames";

interface DividerProps {
  direction?: "horizontal" | "vertical";
}

const Divider = (props: Cn<DividerProps>) => {
  const { className, direction = "horizontal" } = props;

  if (direction === "horizontal") {
    return <hr className={cn(className, "border-t-1 border-gray100 w-full")} />;
  } else {
    return <hr className={cn(className, "border-l-1 border-gray100 h-24")} />;
  }
};

export default Divider;
