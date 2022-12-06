import classNames from "classnames";

type Props = JSX.IntrinsicElements["input"] & {
  label?: string;
  hasError?: boolean;
  errorMessage?: string;
};

const TextInput: React.FC<Props> = ({
  label,
  hasError,
  errorMessage,
  ...rest
}) => {
  return <div></div>;
};

export default TextInput;
