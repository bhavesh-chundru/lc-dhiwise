import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder8: "rounded-radius8",
  CircleBorder13: "rounded-radius13",
  RoundedBorder5: "rounded-radius584",
  CustomBorderBL8:
    "rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0]",
  CircleBorder16: "rounded-radius16",
  icbRoundedBorder9: "rounded-radius9625",
  icbCircleBorder16: "rounded-radius16165",
  icbCircleBorder25: "rounded-radius25",
};
const variants = {
  FillGray51: "bg-gray_51 text-blue_A401",
  OutlineBlueA400:
    "bg-teal_50 border border-blue_A400 border-solid text-blue_A401",
  FillBlueA400: "bg-blue_A400 text-gray_50",
  OutlineBluegray200:
    "bg-gray_50 border-bluegray_200 border-bw073 border-solid text-gray_800",
  OutlineBlueA4001_2: "bg-blue_A400 border-2 border-blue_A400 border-solid",
  FillGreen400: "bg-green_400 text-gray_50",
  FillGray900: "bg-gray_900 text-gray_50",
  FillBlueA4006c: "bg-blue_A400_6c text-blue_A400",
  OutlineBluegray400:
    "border-2 border-bluegray_400 border-solid text-bluegray_400",
  FillWhiteA700: "bg-white_A700 text-gray_800",
  icbFillGreen60090: "bg-green_600_90",
  icbFillRed50090: "bg-red_500_90",
  icbFillGray200: "bg-gray_200",
  icbFillIndigo500: "bg-indigo_500",
};
const sizes = {
  sm: "p-[4px]",
  md: "lg:p-[4px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
  lg: "p-[10px] 3xl:p-[11px] lg:p-[7px] xl:p-[8px]",
  xl: "xl:p-[11px] p-[13px] 3xl:p-[15px] lg:p-[9px]",
  "2xl": "lg:p-[12px] xl:p-[16px] p-[18px] 3xl:p-[21px]",
  smIcn: "p-[4px]",
  mdIcn: "lg:p-[4px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder8",
    "CircleBorder13",
    "RoundedBorder5",
    "CustomBorderBL8",
    "CircleBorder16",
    "icbRoundedBorder9",
    "icbCircleBorder16",
    "icbCircleBorder25",
  ]),
  variant: PropTypes.oneOf([
    "FillGray51",
    "OutlineBlueA400",
    "FillBlueA400",
    "OutlineBluegray200",
    "OutlineBlueA4001_2",
    "FillGreen400",
    "FillGray900",
    "FillBlueA4006c",
    "OutlineBluegray400",
    "FillWhiteA700",
    "icbFillGreen60090",
    "icbFillRed50090",
    "icbFillGray200",
    "icbFillIndigo500",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl", "smIcn", "mdIcn"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
