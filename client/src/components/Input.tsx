type InputProps = {
  type?: string;
  placeholder?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextArea?: boolean;
};

const Input = ({ type = "text", placeholder, name, onChange, isTextArea }: InputProps) => {
  const baseClasses =
    "border border-gray-300 max-w-[350px] p-2 rounded-md w-full text-gray-900 outline-none focus:ring-2 focus:ring-blue-500";

  if (isTextArea) {
    return (
      <textarea
        className={`${baseClasses} min-h-[100px]`}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    );
  }

  return (
    <input
      type={type}
      className={baseClasses}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
};

export default Input;
