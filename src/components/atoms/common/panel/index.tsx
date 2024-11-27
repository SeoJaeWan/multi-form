import { PropsWithChildren } from "react";
import cn from "classnames";

const Panel = (props: PropsWithChildren<Cn>) => {
  const { className, children } = props;

  return (
    <article
      className={cn(className, "flex flex-col p-20 pt-26 bg-white rounded-10")}
    >
      {children}
    </article>
  );
};

const PanelCap = (props: PropsWithChildren) => {
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

const PanelHeader = (props: PropsWithChildren<Cn>) => {
  const { className, children } = props;

  return <header className={className}>{children}</header>;
};

const PanelBody = (props: PropsWithChildren<Cn>) => {
  const { className, children } = props;

  return <section className={className}>{children}</section>;
};

const PanelFooter = (props: PropsWithChildren<Cn>) => {
  const { className, children } = props;

  return (
    <>
      <br className={"mb-20 border-gray100 "} />
      <footer className={className}>{children}</footer>;
    </>
  );
};

Panel.Cap = PanelCap;
Panel.Header = PanelHeader;
Panel.Body = PanelBody;
Panel.Footer = PanelFooter;

export default Panel;
