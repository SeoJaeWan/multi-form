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

  const handleChangeValue =
    (onChange: (value: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };

  return (
    <div>
      <PanelCap>{capTitle}</PanelCap>
      <Panel>
        <Panel.Body className={"flex flex-col"}>
          <Input
            className={"mb-17 text-24 text-gray900 font-semibold py-8"}
            value={section.title}
            onChange={handleChangeValue(section.setTitle)}
          />
          <Input
            className={"text-16 text-gray700 py-3"}
            value={section.description}
            onChange={handleChangeValue(section.setDescription)}
          />
        </Panel.Body>
      </Panel>
    </div>
  );
});

export default SectionTitleEditor;
