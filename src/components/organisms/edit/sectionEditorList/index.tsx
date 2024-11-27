import { observer } from "mobx-react-lite";
import { useSurveyStore } from "../../../../store";
import Panel from "../../../atoms/common/panel";
import QuestionBodyEditor from "../../../molecules/edit/questionBodyEditor";
import QuestionHeaderEditor from "../../../molecules/edit/questionHeaderEditor";
import SectionTitleEditor from "../../../molecules/edit/sectionTitleEditor";

const SectionEditorList = observer(() => {
  const surveyStore = useSurveyStore();

  return (
    <div>
      <div className={"relative"}>
        <button
          className={"absolute top-0 -right-50"}
          onClick={() => surveyStore.addQuestion()}
        >
          +
        </button>
      </div>

      {surveyStore.sections.map((section) => (
        <div className={"relative"} key={section.id}>
          <div className={"[&>*]:mb-24"}>
            <SectionTitleEditor section={section} capTitle={"2개 중 1섹션"} />
            {section.questions.map((question) => (
              <Panel key={question.id}>
                <Panel.Header>
                  <QuestionHeaderEditor question={question} />
                </Panel.Header>

                <Panel.Body>
                  <QuestionBodyEditor type={question.type} />
                </Panel.Body>
              </Panel>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
});

export default SectionEditorList;
