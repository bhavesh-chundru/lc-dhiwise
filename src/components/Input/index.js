import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillBlueA400: "bg-blue_A400",
  OutlineBluegray200: "bg-gray_52 border border-bluegray_200 border-solid",
};
const shapes = {
  CustomBorderTL8:
    "rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px]",
  RoundedBorder8: "rounded-radius8",
};
const sizes = {
  sm: "lg:pb-[10px] xl:pb-[13px] pb-[15px] 3xl:pb-[17px] lg:pt-[14px] xl:pt-[17px] pt-[20px] 3xl:pt-[23px] lg:px-[10px] xl:px-[13px] px-[15px] 3xl:px-[17px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["CustomBorderTL8", "RoundedBorder8"]),
  variant: PropTypes.oneOf(["FillBlueA400", "OutlineBluegray200"]),
  size: PropTypes.oneOf(["sm"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder8",
  variant: "OutlineBluegray200",
  size: "",
};

export { Input };
