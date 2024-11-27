import { createContext, PropsWithChildren, useContext, useState } from "react";
import cn from "classnames";

const TabsContext = createContext({
  activeTab: 0,
  setActiveTab: (_: number) => {},
});

const Tabs = (props: PropsWithChildren) => {
  const { children } = props;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabsContext.Provider
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      <div className="flex flex-col">{children}</div>
    </TabsContext.Provider>
  );
};

export const TabList = (props: PropsWithChildren) => {
  const { children } = props;

  return <div className={"flex justify-center gap-x-20"}>{children}</div>;
};

interface TabProps extends PropsWithChildren {
  index: number;
}

export const Tab = (props: TabProps) => {
  const { children, index } = props;
  const { activeTab, setActiveTab } = useContext(TabsContext);

  const handleActiveTab = () => {
    setActiveTab(index);
  };

  return (
    <button
      className={cn("border-b-3 p-14", {
        "text-main border-main": activeTab === index,
        "border-transparent text-gray500": activeTab !== index,
      })}
      onClick={handleActiveTab}
    >
      {children}
    </button>
  );
};

export const TabPanels = (props: PropsWithChildren) => {
  const { children } = props;

  return <div className={"flex-1"}>{children}</div>;
};

export const TabPanel = (props: TabProps) => {
  const { children, index } = props;
  const { activeTab } = useContext(TabsContext);

  return <div hidden={index !== activeTab}>{children}</div>;
};

export default Tabs;
