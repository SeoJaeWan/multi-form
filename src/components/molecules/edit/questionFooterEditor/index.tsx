import CopyIcon from "../../../../assets/icons/filter_none.svg?react";
import DeleteIcon from "../../../../assets/icons/delete.svg?react";
import Question from "../../../../models/question";
import Divider from "../../../atoms/common/divider";
import Switch from "../../../atoms/common/switch";
import { observer } from "mobx-react-lite";

interface QuestionFooterEditorProps {
  question: Question;
  //
  onCopy: (id: number) => void;
  onRemove: (id: number) => void;
}

const QuestionFooterEditor = observer((props: QuestionFooterEditorProps) => {
  const { question, onCopy, onRemove } = props;

  return (
    <div className="flex justify-end gap-x-24">
      <button onClick={() => onCopy(question.id)}>
        <CopyIcon />
      </button>
      <button onClick={() => onRemove(question.id)}>
        <DeleteIcon />
      </button>
      <Divider direction={"vertical"} />
      <div className={"flex items-center"}>
        <span className={"mr-13 select-none"}>필수</span>
        <Switch
          id={`${question.id}_switch`}
          checked={question.required}
          onChange={question.setRequired}
        />
      </div>
    </div>
  );
});

export default QuestionFooterEditor;
