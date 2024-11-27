import DropDown from "../../atoms/home/dropdown";
import Layout from "../../atoms/home/layout";
import Panel, { PanelCap, PanelHeader } from "../../atoms/home/panel";
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
          <TabPanel index={0}>
            <PanelCap>Cap</PanelCap>
            <Panel>
              <PanelHeader>
                header
                <DropDown
                  options={[
                    { label: <div>1</div>, value: "1" },
                    { label: <div>2</div>, value: "2" },
                    { label: <div>3</div>, value: "3" },
                    { label: <div>4</div>, value: "4" },
                    { label: <div>5</div>, value: "5" },
                  ]}
                  placeholder={"Placeholder"}
                  onChange={(value) => {
                    console.log(value);
                  }}
                />
              </PanelHeader>
            </Panel>
          </TabPanel>
          <TabPanel index={1}>Panel 2</TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default HomeTemplate;
