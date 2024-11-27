import Layout from "../../atoms/home/layout";
import Tabs, { Tab, TabList, TabPanel, TabPanels } from "../../atoms/home/tabs";

const HomeTemplate = () => {
  return (
    <Layout>
      <Tabs>
        <TabList>
          <Tab index={0}>Tab 1</Tab>
          <Tab index={1}>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel index={0}>Panel 1</TabPanel>
          <TabPanel index={1}>Panel 2</TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default HomeTemplate;
