import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Page = ({ children }: Props) => {
  return (
    <section className="flexGroup gap-10">
      <div>
        <h2 className="title">Admin login</h2>
        <p> Sign in as an Admin</p>
      </div>
      {children}
    </section>
  );
};

export default Page;
