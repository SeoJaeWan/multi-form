import cn from "classnames";
import PlusIcon from "../../../../assets/icons/add_circle.svg?react";
import SectionPlusIcon from "../../../../assets/icons/view_comfy.svg?react";
import { useSurveyStore } from "../../../../store";

const EditMenu = (props: Cn) => {
  const { className } = props;
  const surveyStore = useSurveyStore();

  return (
    <div
      className={cn(
        "bg-white rounded-10 px-13 py-26 flex flex-col gap-y-26 shadow-sm",
        className
      )}
    >
      <button className={""} onClick={surveyStore.addQuestion}>
        <PlusIcon />
      </button>
      <button className={""} onClick={surveyStore.addSection}>
        <SectionPlusIcon />
      </button>
    </div>
  );
};

export default EditMenu;
