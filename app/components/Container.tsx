interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-3 lg:my-28 my-16">{children}</div>
  );
};

export default Container;
