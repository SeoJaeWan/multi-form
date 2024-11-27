import { PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <div className={"w-full h-full flex justify-center bg-bg overflow-y-auto"}>
      <main className={"max-w-[655px] w-full"}>{children}</main>
    </div>
  );
};

export default Layout;
