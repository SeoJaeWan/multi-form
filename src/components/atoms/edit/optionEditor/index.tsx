import { ChangeEvent, ReactNode, useState } from "react";
import { QuestionType } from "../../../../types/app";
import Input from "../../common/input";

import RadioIcon from "../../../../assets/icons/radio_button_unchecked.svg?react";
import CheckBoxIcon from "../../../../assets/icons/check_box_outline_blank.svg?react";

interface OptionEditorProps {
  type: QuestionType;
  //   "multipleChoice" | "checkbox" | "dropdown";
}

const OptionEditor = (props: OptionEditorProps) => {
  const { type } = props;

  const [options, setOptions] = useState<string[]>([""]);

  const updateOption =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setOptions((prev) => {
        const next = [...prev];
        next[index] = value;
        return next;
      });
    };

  return (
    <div>
      {options.map((option, index) => (
        <div key={index} className={"flex items-center"}>
          {icons[type]}
          <Input value={option} onChange={updateOption(index)} />
        </div>
      ))}

      <div className={"flex items-center mt-28"}>
        {icons[type]}
        <button
          className={"text-gray500 text-16"}
          onClick={() => {
            setOptions((prev) => [...prev, ""]);
          }}
        >
          옵션 추가
        </button>
      </div>
    </div>
  );
};

const icons: Partial<Record<QuestionType, ReactNode>> = {
  multipleChoice: <RadioIcon className={"mr-14"} />,
  checkbox: <CheckBoxIcon className={"mr-14"} />,
  dropdown: <RadioIcon className={"mr-14"} />,
};

export default OptionEditor;
