import React from "react";

import { Column, Row, Text, Button, Img, Stack } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Column className="bg-white_A700 items-center justify-start w-[100%]">
          <Row className="bg-white_A700 border border-blue_A400 border-solid items-center justify-end lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
            <Text
              className="font-poppins text-gray_900 w-[auto]"
              as="h4"
              variant="h4"
            >
              LOGO
            </Text>
            <Row className="items-center lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:ml-[41px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] w-[37%]">
              <Button
                className="flex items-center justify-center text-center w-[19%]"
                leftIcon={
                  <Img
                    src="images/img_airplane.svg"
                    className="mr-[4px] text-center lg:w-[9px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"
                    alt="airplane"
                  />
                }
                shape="RoundedBorder8"
                size="xl"
                variant="FillWhiteA700"
              >
                <div className="bg-transparent font-inter font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  Flights
                </div>
              </Button>
              <Button
                className="2xl:ml-[22px] 3xl:ml-[26px] flex items-center justify-center lg:ml-[15px] text-center w-[14%] xl:ml-[19px]"
                leftIcon={
                  <Img
                    src="images/img_qrcode.svg"
                    className="mr-[4px] text-center lg:w-[12px] xl:w-[15px] 2xl:w-[17px] 3xl:w-[20px]"
                    alt="qrcode"
                  />
                }
                shape="RoundedBorder8"
                size="sm"
                variant="FillBlueA400"
              >
                <div className="bg-transparent font-inter font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  Hotels
                </div>
              </Button>
              <Row className="items-start justify-center lg:ml-[31px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[53px] w-[18%]">
                <Img
                  src="images/img_car.svg"
                  className="lg:h-[13px] xl:h-[16px] 2xl:h-[17px] 3xl:h-[21px] mb-[2px] lg:w-[12px] xl:w-[15px] 2xl:w-[17px] 3xl:w-[20px]"
                  alt="car"
                />
                <Text
                  className="cursor-pointer font-inter hover:font-normal ml-[4px] mt-[4px] rowstar"
                  variant="body2"
                >
                  Transfers
                </Text>
              </Row>
              <Row className="items-end justify-evenly lg:ml-[24px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[41px] w-[29%]">
                <Img
                  src="images/img_calculator.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] mb-[4px] w-[16%]"
                  alt="calculator"
                />
                <Text
                  className="cursor-pointer font-inter hover:font-normal lg:mt-[3px] xl:mt-[4px] 3xl:mt-[5px] 2xl:mt-[5px] rowstar"
                  variant="body2"
                >
                  Flights + Hotels
                </Text>
              </Row>
            </Row>
            <Row className="items-center justify-center lg:ml-[212px] xl:ml-[265px] 2xl:ml-[299px] 3xl:ml-[358px] 3xl:mr-[113px] lg:mr-[67px] xl:mr-[84px] 2xl:mr-[95px] w-[18%]">
              <Button
                className="flex items-center justify-center text-center w-[26%]"
                leftIcon={
                  <Img
                    src="images/img_star.svg"
                    className="text-center lg:w-[11px] lg:h-[12px] lg:mr-[8px] xl:w-[14px] xl:h-[15px] xl:mr-[10px] 2xl:w-[16px] 2xl:h-[16px] 2xl:mr-[12px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[14px]"
                    alt="star"
                  />
                }
                shape="CircleBorder16"
                size="md"
                variant="FillBlueA400"
              >
                <div className="bg-transparent font-bold font-dmsans lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  0
                </div>
              </Button>
              <Button
                className="font-inter font-medium xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-blue_A400 text-center w-[48%]"
                shape="RoundedBorder8"
                size="xl"
                variant="OutlineBlueA4001_2"
              >
                LOGIN
              </Button>
              <Stack className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[47px]">
                <div className="absolute bg-green_400 xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px] lg:h-[9px] right-[0] rounded-radius50 top-[0] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"></div>
                <Img
                  src="images/img_notification.svg"
                  className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] inset-[0] justify-center m-[auto] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                  alt="notification"
                />
              </Stack>
            </Row>
          </Row>
        </Column>
      </header>
    </>
  );
};

export default Header;
