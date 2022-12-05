import classNames from "classnames";

type Props = JSX.IntrinsicElements["button"] & {
  size?: "normal" | "large";
  isFullWidth?: boolean;
};

const Button: React.FC<Props> = ({
  size = "normal",
  isFullWidth = false,
  ...rest
}) => {
  return (
    <button
      className={classNames(
        "bg-blue-800 text-sm font-sans text-white px-4 h-6 rounded-full"
      )}
      {...rest}
    />
  );
};

export default Button;
