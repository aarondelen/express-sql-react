type ButtonProps = {
  text: string;
  type?: "add" | "update" | "delete";
  onClick?: (e: any) => void;
};
const Button = ({ text, type = "add", onClick }: ButtonProps) => {
  const baseStyle =
    "px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

  const typeStyle =
    type === "add"
      ? "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500"
      : type === "update"
      ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
      : "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500";

  return (
    <>
      <button onClick={onClick} className={`${baseStyle} ${typeStyle}`}>
        {text}
      </button>
    </>
  );
};

export default Button;
