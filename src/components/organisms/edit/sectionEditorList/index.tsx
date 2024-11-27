import { observer } from "mobx-react-lite";
import { useSurveyStore } from "../../../../store";
import Panel from "../../../atoms/common/panel";
import QuestionBodyEditor from "../../../molecules/edit/questionBodyEditor";
import QuestionHeaderEditor from "../../../molecules/edit/questionHeaderEditor";

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
        <div className={"relative"}>
          <div>
            {section.questions.map((question) => (
              <Panel>
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
