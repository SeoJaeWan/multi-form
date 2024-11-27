import { ChangeEvent } from "react";
import Section from "../../../../models/section";
import Input from "../../../atoms/common/input";
import Panel, { PanelCap } from "../../../atoms/common/panel";
import { observer } from "mobx-react-lite";

interface SectionTitleEditorProps {
  section: Section;
  capTitle: string;
}

const SectionTitleEditor = observer((props: SectionTitleEditorProps) => {
  const { section, capTitle } = props;

  return (
    <div>
      <PanelCap>{capTitle}</PanelCap>
      <Panel>
        <Panel.Body className={"flex flex-col"}>
          <Input
            className={"mb-17 text-24 text-gray900 font-semibold py-8"}
            value={section.title}
            onChange={(e) => section.setTitle(e.target.value)}
          />
          <Input
            className={"text-16 text-gray700 py-3"}
            value={section.description}
            onChange={(e) => section.setDescription(e.target.value)}
          />
        </Panel.Body>
      </Panel>
    </div>
  );
});

export default SectionTitleEditor;
