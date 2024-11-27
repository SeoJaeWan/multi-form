import { observer } from "mobx-react-lite";
import { useSurveyStore } from "../../../../store";
import Panel from "../../../atoms/common/panel";
import QuestionBodyEditor from "../../../molecules/edit/questionBodyEditor";
import QuestionHeaderEditor from "../../../molecules/edit/questionHeaderEditor";
import SectionTitleEditor from "../../../molecules/edit/sectionTitleEditor";
import EditMenu from "../../../atoms/edit/editMenu";
import QuestionFooterEditor from "../../../molecules/edit/questionFooterEditor";

const SectionEditorList = observer(() => {
  const surveyStore = useSurveyStore();

  return (
    <div>
      <div className={"relative"}>
        <EditMenu
          className={
            "fixed bottom-30 left-[calc(100%-72px)] sm:bottom-auto sm:top-[calc(55px+184px+24px)] sm:left-[calc(50%+(655px/2)+12px)]"
          }
        />
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

                <Panel.Footer>
                  <QuestionFooterEditor
                    question={question}
                    //
                    onCopy={section.copyQuestion}
                    onRemove={section.removeQuestion}
                  />
                </Panel.Footer>
              </Panel>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
});

export default SectionEditorList;
