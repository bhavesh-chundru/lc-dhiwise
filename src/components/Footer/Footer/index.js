import React from "react";

import { Column, Row, Text, Stack, Img, Line } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <Column className="justify-start lg:mb-[50px] xl:mb-[63px] 2xl:mb-[71px] 3xl:mb-[85px] xl:ml-[123px] 2xl:ml-[139px] 3xl:ml-[166px] lg:ml-[98px] lg:mr-[128px] xl:mr-[160px] 2xl:mr-[181px] 3xl:mr-[217px] lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[78%]">
          <Row className="items-start pr-[1px] w-[100%]">
            <Text className="Earning1086Po" as="h5" variant="h5">
              LOGO
            </Text>
            <Column className="justify-start lg:ml-[156px] xl:ml-[195px] 2xl:ml-[220px] 3xl:ml-[263px] w-[14%]">
              <Text className="columnflights_one" variant="body5">
                Flights
              </Text>
              <Text
                className="lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] columnflights_one"
                variant="body5"
              >
                Hotels
              </Text>
            </Column>
            <Column className="justify-start lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[14%]">
              <Text className="columnflights_one" variant="body5">
                Transfers
              </Text>
              <Text className="FlightsHotel_One" variant="body5">
                Flights + Hotels
              </Text>
            </Column>
            <Column className="justify-start lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[14%]">
              <Text className="columnflights_one" variant="body5">
                About us
              </Text>
              <Text className="FlightsHotel_One" variant="body5">
                FAQ
              </Text>
              <Text className="FlightsHotel_One" variant="body5">
                Suport
              </Text>
              <Text className="FlightsHotel_One" variant="body5">
                Refunds & Cancellation
              </Text>
              <Text className="FlightsHotel_One" variant="body5">
                Terms & Conditions
              </Text>
            </Column>
            <Row className="border-2 border-gray_200 border-solid items-center justify-between lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius24 w-[23%]">
              <Text
                className="font-poppins lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] price_Eight"
                variant="body5"
              >
                Enter your email
              </Text>
              <Stack className="bg-blue_A400 lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[39px] px-[4px] rounded-radius50 lg:w-[22px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]">
                <Img
                  src="images/img_arrowright.svg"
                  className="absolute lg:h-[18px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] inset-[0] justify-center m-[auto] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                  alt="arrowright"
                />
              </Stack>
            </Row>
          </Row>
          <Stack className="lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[56px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[100%]">
            <Column className="absolute justify-start top-[0] w-[100%]">
              <Line className="bg-gray_100 h-[1px] w-[100%]" />
              <Text
                className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] HyattCentricC_One"
                variant="body7"
              >
                Copyright © 2021 UI8 LLC. All rights reserved
              </Text>
            </Column>
            <Row className="absolute bottom-[0] items-center justify-between right-[1%] w-[12%]">
              <Img
                src="images/img_contrast.svg"
                className="lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] w-[22%]"
                alt="contrast"
              />
              <Img
                src="images/img_instagram.svg"
                className="lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] w-[22%]"
                alt="instagram"
              />
              <Img
                src="images/img_iconstwitterl.svg"
                className="lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] w-[24%]"
                alt="IconsTwitterL"
              />
            </Row>
          </Stack>
          <Row className="items-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] 2xl:mt-[10px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] w-[69%]">
            <Text
              className="font-bold font-dmsans lg:leading-[26px] xl:leading-[32px] 2xl:leading-[37px] 3xl:leading-[44px] mt-[1px] text-white_A700 w-[21%]"
              variant="body5"
            >
              <span className="text-white_A700 font-poppins font-semibold lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                Popular Routes
                <br />
              </span>
              <span className="text-bluegray_200 font-poppins font-semibold lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                New Delhi to Mumbai
                <br />
                Mumbai to New Delhi
                <br />
                Mumbai to Bangalore
                <br />
                Bangalore to Mumbai
                <br />
                Chennai to Mumbai
                <br />
                Mumbai to Chennai
                <br />
                New Delhi to Bangalore
                <br />
                Bangalore to New Delhi
                <br />
                Mumbai to Hyderabad
                <br />
                Hyderabad to Bangalore
              </span>
            </Text>
            <Text
              className="font-bold font-dmsans lg:leading-[26px] xl:leading-[32px] 2xl:leading-[37px] 3xl:leading-[44px] lg:ml-[125px] xl:ml-[156px] 2xl:ml-[176px] 3xl:ml-[211px] mt-[1px] text-white_A700 w-[18%]"
              variant="body5"
            >
              <span className="text-white_A700 font-poppins font-semibold lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                Popular Hotels
                <br />
              </span>
              <span className="text-bluegray_200 font-poppins font-semibold lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                Hotels in Mumbai
                <br />
                Hotels in Goa
                <br />
                Hotels in New Delhi
                <br />
                Hotels in Jaipur
                <br />
                Hotels in Udaipur
                <br />
                Hotels in Shimla
                <br />
                Hotels in Manali
                <br />
                Hotels in Digha
                <br />
                Hotels in Bangalore
                <br />
                Hotels in Mussoorie
              </span>
            </Text>
            <Text
              className="font-bold font-dmsans lg:leading-[26px] xl:leading-[32px] 2xl:leading-[37px] 3xl:leading-[44px] lg:ml-[130px] xl:ml-[162px] 2xl:ml-[183px] 3xl:ml-[219px] text-white_A700 w-[14%]"
              variant="body5"
            >
              <span className="text-white_A700 font-poppins font-semibold lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                Popular Airlines
                <br />
              </span>
              <span className="text-bluegray_200 font-poppins font-semibold lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                Air India
                <br />
                Indigo
                <br />
                Spicejet
                <br />
                Go First
                <br />
                AirAsia
                <br />
                Trujet
                <br />
                Vistara
              </span>
            </Text>
          </Row>
          <Text
            className="font-poppins 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] price_Eight"
            variant="body7"
          >
            Copyright © 2022 Loyalty Caravan Private Limited.
          </Text>
        </Column>
      </footer>
    </>
  );
};

export default Footer;
