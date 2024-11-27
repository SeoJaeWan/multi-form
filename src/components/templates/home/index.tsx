import DropDown from "../../atoms/common/dropdown";
import Layout from "../../atoms/common/layout";
import Panel from "../../atoms/common/panel";
import Tabs, {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "../../atoms/common/tabs";
import QuestionEditor from "../../organisms/edit/questionEditor";

const HomeTemplate = () => {
  return (
    <Layout>
      <Tabs>
        <TabList>
          <Tab index={0}>Tab 1</Tab>
          <Tab index={1}>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel index={0}>
            <QuestionEditor />
          </TabPanel>
          <TabPanel index={1}>Panel 2</TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default HomeTemplate;
