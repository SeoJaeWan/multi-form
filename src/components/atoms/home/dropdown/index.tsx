import {
  createContext,
  ReactNode,
  RefObject,
  useCallback,
  useContext,
  useState,
} from "react";
import ArrowIcon from "../../../../assets/icons/arrow_drop_down.svg?react";
import useOutsideClick from "../../../../hooks/useOutsideClick";

type DropDownOption<T> = {
  label: ReactNode;
  value: T;
};

interface DropDownContextType<T = unknown> {
  opened: boolean;
  options: DropDownOption<T>[];
  selected: number;

  open: () => void;
  close: () => void;
  onChange: (index: number) => void;
}

const DropDownContext = createContext<DropDownContextType | null>(null);

const useDropDown = <T,>() => {
  const context = useContext(DropDownContext);

  if (!context) {
    throw new Error("useDropDown must be used within a DropDown");
  }

  return context as DropDownContextType<T>;
};

interface DropDownProps<T> {
  options: DropDownOption<T>[];
  placeholder?: string;
  //
  onChange?: (value: T) => void;
}

const DropDown = <T,>(props: DropDownProps<T>) => {
  const {
    options,
    placeholder,
    //
    onChange,
  } = props;
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(-1);

  const open = useCallback(() => setOpened(true), []);
  const close = useCallback(() => setOpened(false), []);

  const ref = useOutsideClick(close);

  const handleChange = useCallback(
    (index: number) => {
      setSelected(index);
      onChange?.(options[index].value);
      close();
    },
    [options, close, onChange]
  );

  return (
    <DropDownContext.Provider
      value={{
        opened,
        selected,
        options,
        //
        open,
        close,
        onChange: handleChange,
      }}
    >
      <div
        className={"inline-block relative"}
        ref={ref as RefObject<HTMLDivElement>}
      >
        <DropDownButton placeholder={placeholder} />
        <DropDownMenu />
      </div>
    </DropDownContext.Provider>
  );
};

interface DropDownButtonProps {
  placeholder?: string;
}

const DropDownButton = (props: DropDownButtonProps) => {
  const { placeholder } = props;
  const { options, selected, opened, open, close } = useDropDown();

  const handleClickButton = () => {
    if (opened) {
      close();
    } else {
      open();
    }
  };

  return (
    <button
      className={
        "border-gray300 border rounded-10 min-w-197 p-14 pr-36 relative text-left"
      }
      onClick={handleClickButton}
    >
      {selected >= 0 ? options[selected].label : placeholder ?? ""}
      <span className={"absolute right-12 top-1/2 transform -translate-y-1/2"}>
        <ArrowIcon />
      </span>
    </button>
  );
};

interface DropDownMenuItemProps {
  label: ReactNode;

  onSelect: () => void;
}

const DropDownMenuItem = (props: DropDownMenuItemProps) => {
  const { label, onSelect } = props;

  return (
    <button
      className={"text-left p-14 border-b-1 border-gray300 last:border-0"}
      onClick={onSelect}
    >
      {label}
    </button>
  );
};

const DropDownMenu = () => {
  const { opened, options, onChange } = useDropDown();

  return opened ? (
    <div
      className={
        "absolute left-0 top-62 border border-gray300 rounded-10 flex flex-col min-w-197 bg-white"
      }
    >
      {options.map((option, index) => (
        <DropDownMenuItem
          key={`${option.value}`}
          label={option.label}
          onSelect={() => onChange(index)}
        />
      ))}
    </div>
  ) : null;
};

export default DropDown;
