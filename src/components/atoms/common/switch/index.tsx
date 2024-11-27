import cn from "classnames";

interface SwitchProps {
  id: string;
  checked: boolean;
  //
  onChange: (checked: boolean) => void;
}

const Switch = (props: SwitchProps) => {
  const { id, checked, onChange } = props;

  return (
    <>
      <input
        className={"peer"}
        id={id}
        hidden
        type={"checkbox"}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label
        htmlFor={id}
        className={cn(
          "flex items-center w-27 h-15 bg-gray400 px-3 rounded-full",
          "before:inline-block before:content-[''] before:h-10 before:w-10 before:rounded-full before:bg-white",
          "peer-checked:bg-main peer-checked:before:translate-x-11",
          "transition-colors duration-300 before:transition-transform before:duration-300"
        )}
      />
    </>
  );
};

export default Switch;
