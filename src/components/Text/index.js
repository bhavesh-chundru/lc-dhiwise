import React from "react";
const variantClasses = {
  h1: "font-semibold lg:text-[24px] xl:text-[30px] text-[34px] 3xl:text-[40px]",
  h2: "font-normal lg:text-[23px] xl:text-[29px] text-[32.86px] 2xl:text-[32px] 3xl:text-[39px]",
  h3: "font-normal lg:text-[19px] xl:text-[24px] text-[28px] 3xl:text-[33px]",
  h4: "font-semibold lg:text-[19px] xl:text-[24px] text-[27px] 3xl:text-[32px]",
  h5: "lg:text-[17px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  h6: "lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[23px]",
  body1:
    "font-semibold lg:text-[12px] xl:text-[16px] text-[18px] 3xl:text-[21px]",
  body2: "lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  body3:
    "font-medium lg:text-[10px] xl:text-[13px] text-[15.17px] 2xl:text-[15px] 3xl:text-[18px]",
  body4:
    "font-normal lg:text-[10px] xl:text-[12px] text-[14.08px] 2xl:text-[14px] 3xl:text-[16px]",
  body5: "xl:text-[12px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
  body6:
    "font-medium xl:text-[11px] text-[13.38px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px]",
  body7: "xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[8px]",
  body8:
    "font-normal xl:text-[10px] text-[11.74px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[8px]",
  body9: "font-normal text-[10px] 3xl:text-[11px] lg:text-[7px] xl:text-[8px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
