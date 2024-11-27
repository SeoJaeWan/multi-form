import ShortTextIcon from "../../../../assets/icons/check_indeterminate_small.svg?react";
import LongTextIcon from "../../../../assets/icons/subject.svg?react";
import MultipleChoiceIcon from "../../../../assets/icons/checklist.svg?react";
import CheckBoxIcon from "../../../../assets/icons/check_circle.svg?react";
import DropDownIcon from "../../../../assets/icons/arrow_circle_down.svg?react";
import DateIcon from "../../../../assets/icons/calendar_today.svg?react";
import TimeIcon from "../../../../assets/icons/schedule.svg?react";
import Input from "../../../atoms/common/input";
import DropDown from "../../../atoms/common/dropdown";
import { QuestionType } from "../../../../types/app";
import Question from "../../../../models/question";
import { observer } from "mobx-react-lite";

interface QuestionHeaderEditorProps {
  question: Question;
}

const QuestionHeaderEditor = observer((props: QuestionHeaderEditorProps) => {
  const { question } = props;

  return (
    <div className={"flex mb-25"}>
      <Input
        className={"flex-1 mr-30"}
        value={question.title}
        onChange={(e) => question.setTitle(e.target.value)}
      />
      <DropDown<QuestionType>
        defaultValue={question.type}
        onChange={(value) => question.setType(value)}
        options={[
          {
            label: (
              <div>
                <ShortTextIcon className="inline-block mr-10" />
                <span>단답형</span>
              </div>
            ),
            value: "shortText",
          },
          {
            label: (
              <div>
                <LongTextIcon className="inline-block mr-10" />
                <span>장문형</span>
              </div>
            ),
            value: "longText",
          },
          {
            label: (
              <div>
                <MultipleChoiceIcon className="inline-block mr-10" />
                <span>객관식</span>
              </div>
            ),
            value: "multipleChoice",
          },
          {
            label: (
              <div>
                <CheckBoxIcon className="inline-block mr-10" />
                <span>체크박스</span>
              </div>
            ),
            value: "checkbox",
          },
          {
            label: (
              <div>
                <DropDownIcon className="inline-block mr-10" />
                <span>드롭다운</span>
              </div>
            ),
            value: "dropdown",
          },
          {
            label: (
              <div>
                <DateIcon className="inline-block mr-10" />
                <span>날짜</span>
              </div>
            ),
            value: "date",
          },
          {
            label: (
              <div>
                <TimeIcon className="inline-block mr-10" />
                <span>시간</span>
              </div>
            ),
            value: "time",
          },
        ]}
      />
    </div>
  );
});

export default QuestionHeaderEditor;
