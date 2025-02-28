import Link from "next/link";

interface Props {
  name: string;
  path: string;
  style?: string;
}

const LinkButton = ({ name, path, style }: Props) => {
  return (
    <Link
      href={path}
      className={`${
        style ? style : "bg text-white hover:text-gray-200"
      }  font-semibold px-12 py-3 text-sm rounded-full uppercase group text-center`}
    >
      {name}
      <span className="inline-block transition-transform duration-300 group-hover:rotate-45 ms-3">
        <i className="bi bi-arrow-up-right text-xs"></i>
      </span>
    </Link>
  );
};

export default LinkButton;
