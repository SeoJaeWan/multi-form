import { forwardRef, InputHTMLAttributes } from "react";
import cn from "classnames";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <input
      className={cn(
        "border-b-1 border-b-gray200 py-17 pl-9 pr-21",
        "focus:border-b-gray-600 focus:bg-bg2 focus:rounded-t-6 ",
        className
      )}
      ref={ref}
      {...rest}
    />
  );
});

export default Input;
