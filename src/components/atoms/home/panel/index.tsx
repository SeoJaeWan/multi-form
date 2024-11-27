import { PropsWithChildren } from "react";

const Panel = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <article className={"flex flex-col p-20 pt-26 bg-white rounded-10"}>
      {children}
    </article>
  );
};

export const PanelCap = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <div className={"-mb-10 relative"}>
      <div
        className={
          "inline-block px-14 pt-10 pb-6 bg-main rounded-t-10 text-15 text-white"
        }
      >
        {children}
      </div>
      <div className={"bg-main h-9"} />
    </div>
  );
};

export const PanelHeader = (props: PropsWithChildren) => {
  const { children } = props;

  return <header>{children}</header>;
};

export const PanelBody = (props: PropsWithChildren) => {
  const { children } = props;

  return <section>{children}</section>;
};

export const PanelFooter = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <>
      <br className={"mb-20 border-gray-100 "} />
      <footer>{children}</footer>;
    </>
  );
};

export default Panel;
