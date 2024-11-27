import { QuestionType } from "../../../../types/app";
import Input from "../../../atoms/common/input";
import OptionEditor from "../../../atoms/edit/optionEditor";

interface QuestionBodyEditorProps {
  type: QuestionType;
}

const QuestionBodyEditor = (props: QuestionBodyEditorProps) => {
  const { type } = props;

  switch (type) {
    case "shortText":
    case "longText":
    case "date":
    case "time":
      return <Input disabled />;
    case "multipleChoice":
    case "checkbox":
    case "dropdown":
      return <OptionEditor type={type} />;
    default:
      return null;
  }
};

export default QuestionBodyEditor;
