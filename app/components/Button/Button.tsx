interface Props {
  name: string;
}
const Button = ({ name }: Props) => {
  return (
    <button className="bg-secondary flex items-center font-semibold uppercase text-white transition-all duration-200 shadow-[3px_3px_0px_black] hover:shadow-none h-11 active:shadow-none lg:w-auto w-full lg:mt-0 mt-4 rounded">
      {name}
    </button>
  );
};

export default Button;
