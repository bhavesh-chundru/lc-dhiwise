import React from "react";

import {
  Column,
  Stack,
  Row,
  Img,
  Text,
  Line,
  Button,
  Input,
  List,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const ScreenThreePage = () => {
  const navigate = useNavigate();

  function handleBackNavigation() {
    navigate(-1);
  }

  return (
    <>
      <Column className="bg-indigo_50 font-poppins items-center justify-start mx-[auto] pb-[1px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <Stack className="lg:h-[131px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[220px] w-[100%]">
            <Header className="absolute inset-x-[0] top-[0] w-[100%]" />
            <Row className="absolute bg-gray_900 bottom-[0] font-inter items-center lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[100%]">
              <Column className="2xl:ml-[106px] 3xl:ml-[127px] lg:ml-[75px] xl:ml-[94px] mt-[2px] w-[42%]">
                <Row className="items-start w-[34%]">
                  <Img
                    src="images/img_arrowleft.svg"
                    className="common-pointer lg:h-[13px] xl:h-[16px] 2xl:h-[17px] 3xl:h-[21px] mt-[3px] w-[5%]"
                    onClick={handleBackNavigation}
                    alt="arrowleft"
                  />
                  <Text className="rowarrowleft" as="h6" variant="h6">
                    Hotel Information
                  </Text>
                </Row>
                <Row className="font-poppins items-start lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] mt-[4px] w-[41%]">
                  <Text className="DEL" variant="body5">
                    DEL
                  </Text>
                  <Text className="price" variant="body5">
                    | 1 Room, 2 Adults, 3 children
                  </Text>
                </Row>
              </Column>
              <Text className="rowsearchhotels" variant="body5">
                <span className="text-gray_50 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                  {"Search Hotels > "}
                </span>
                <span className="text-gray_50 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                  Hotel results{" "}
                </span>
                <span className="text-gray_50 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                  {"> Goa "}
                </span>
                <span className="text-gray_50 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                  hotels
                </span>
                <span className="text-gray_50 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                  {" >"}
                </span>
                <span className="text-gray_50 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                  {" "}
                  Hyatt Centric Candolim Goa
                </span>
                <span className="text-gray_50 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                  {" >"}
                </span>
                <span className="text-gray_50 font-inter font-bold lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                  Hotel review
                </span>
              </Text>
            </Row>
          </Stack>
          <Row className="font-inter items-start xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[41px] w-[81%]">
            <Column className="items-center justify-start w-[68%]">
              <Stack className="bg-gray_50 lg:h-[180px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[304px] pr-[1px] rounded-radius8 w-[100%]">
                <Line className="absolute bg-bluegray_200 bottom-[20%] h-[0.5px] right-[0] w-[64%]" />
                <Img
                  src="images/img_group16.png"
                  className="absolute lg:h-[179px] xl:h-[224px] 2xl:h-[251px] 3xl:h-[302px] inset-y-[0] left-[0] my-[auto] rounded-bl-[8px] rounded-br-[0] rounded-tl-[8px] rounded-tr-[0] w-[39%]"
                  alt="imageTwo"
                />
                <Column className="absolute justify-start right-[17%] top-[10%] w-[41%]">
                  <Text className="columnmostpopularbu" as="h6" variant="h6">
                    Hyatt Centric Candolim Goa
                  </Text>
                  <Text
                    className="font-medium 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-bluegray_400 w-[auto]"
                    variant="body5"
                  >
                    Anna Waddo Main Candolim Road , Goa
                  </Text>
                  <Row className="items-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[54%]">
                    <Img
                      src="images/img_image3.png"
                      className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[8px] w-[10%]"
                      alt="imageThree"
                    />
                    <Text
                      className="font-inter mb-[1px] ml-[4px] not-italic text-black_900 w-[auto]"
                      variant="body9"
                    >
                      4.1/5
                    </Text>
                    <Text
                      className="font-poppins ml-[4px] not-italic text-bluegray_400 w-[auto]"
                      variant="body9"
                    >
                      {" "}
                      Very good (208 reviews)
                    </Text>
                  </Row>
                  <Row className="items-start justify-between lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                    <Column className="justify-start w-[28%]">
                      <Text className="Checkin" variant="body7">
                        Check in
                      </Text>
                      <Button className="bg-transparent font-inter font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A400 text-center w-[100%]">
                        Sat, 04 Aug{" "}
                      </Button>
                      <Text className="time" variant="body9">
                        11AM
                      </Text>
                    </Column>
                    <Button
                      className="font-bold lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center uppercase w-[25%]"
                      shape="CircleBorder13"
                      size="md"
                      variant="OutlineBlueA400"
                    >
                      2 Nights
                    </Button>
                    <Column className="justify-start mt-[1px] w-[31%]">
                      <Text className="Checkin" variant="body7">
                        Check out
                      </Text>
                      <Text
                        className="font-inter lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] CasinoRoyale"
                        variant="body2"
                      >
                        Mon, 06 Aug{" "}
                      </Text>
                      <Text className="time" variant="body9">
                        12PM
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Row className="absolute bottom-[6%] items-center justify-center right-[33%] w-[25%]">
                  <Row className="items-center justify-evenly w-[43%]">
                    <Img
                      src="images/img_user_21X21.svg"
                      className="lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[26px] lg:w-[14px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px]"
                      alt="user"
                    />
                    <Text
                      className="font-bold text-bluegray_400 uppercase w-[auto]"
                      variant="body7"
                    >
                      4 Adults
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] w-[45%]">
                    <Img
                      src="images/img_videocamera_18X26.svg"
                      className="lg:h-[13px] xl:h-[17px] 2xl:h-[18px] 3xl:h-[22px] w-[29%]"
                      alt="videocamera"
                    />
                    <Text
                      className="font-bold lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] text-bluegray_400 uppercase w-[auto]"
                      variant="body7"
                    >
                      2 rooms
                    </Text>
                  </Row>
                </Row>
              </Stack>
              <Stack className="lg:h-[192px] xl:h-[241px] 2xl:h-[270px] 3xl:h-[324px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[17px] shadow-bs w-[100%]">
                <Column className="absolute bg-gray_51 bottom-[0] inset-x-[0] justify-end lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius8 w-[100%]">
                  <Row className="font-poppins items-center ml-[2px] mr-[auto] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[41px] w-[37%]">
                    <Row className="items-center justify-evenly pt-[4px] w-[24%]">
                      <Img
                        src="images/img_user_12X14.svg"
                        className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px] lg:h-[9px] w-[21%]"
                        alt="user One"
                      />
                      <Text className="rowuser_one" variant="body7">
                        Sleeps 2
                      </Text>
                    </Row>
                    <Row className="items-start justify-center lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] pt-[3px] w-[39%]">
                      <Img
                        src="images/img_group462_13X17.svg"
                        className="lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] w-[16%]"
                        alt="Group462"
                      />
                      <Text className="ml-[4px] rowuser_one" variant="body7">
                        1 King size bed
                      </Text>
                    </Row>
                    <Row className="items-center justify-evenly lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] pt-[4px] w-[24%]">
                      <Img
                        src="images/img_minimize.svg"
                        className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px] lg:h-[9px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                        alt="minimize"
                      />
                      <Text className="rowuser_one" variant="body7">
                        370 sq ft
                      </Text>
                    </Row>
                  </Row>
                  <Text
                    className="font-inter ml-[2px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[35px] CasinoRoyale"
                    variant="body2"
                  >
                    Business Class Single{" "}
                  </Text>
                  <Row className="font-inter items-center ml-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[99%]">
                    <Column className="w-[85%]">
                      <Row className="items-start w-[23%]">
                        <Button
                          className="flex lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] items-center justify-center lg:w-[13px] xl:w-[16px] 2xl:w-[19px] 3xl:w-[22px]"
                          shape="icbRoundedBorder9"
                          size="smIcn"
                          variant="icbFillRed50090"
                        >
                          <Img
                            src="images/img_group629.svg"
                            className="flex items-center justify-center lg:h-[4px] xl:h-[5px] 2xl:h-[5px] 3xl:h-[6px]"
                            alt="Group629"
                          />
                        </Button>
                        <Text className="rowgroup629" variant="body3">
                          Non refundable
                        </Text>
                      </Row>
                      <Row className="items-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[17px] w-[19%]">
                        <Button
                          className="flex lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] items-center justify-center mt-[1px] lg:w-[13px] xl:w-[16px] 2xl:w-[19px] 3xl:w-[22px]"
                          shape="icbRoundedBorder9"
                          size="smIcn"
                          variant="icbFillGreen60090"
                        >
                          <Img
                            src="images/img_checkmark.svg"
                            className="flex items-center justify-center"
                            alt="checkmark"
                          />
                        </Button>
                        <Text className="rowcheckmark" variant="body3">
                          Flexible rate{" "}
                        </Text>
                      </Row>
                      <Row className="items-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[17px] w-[24%]">
                        <Button
                          className="flex lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] items-center justify-center mt-[1px] lg:w-[13px] xl:w-[16px] 2xl:w-[19px] 3xl:w-[22px]"
                          shape="icbRoundedBorder9"
                          size="smIcn"
                          variant="icbFillGreen60090"
                        >
                          <Img
                            src="images/img_checkmark.svg"
                            className="flex items-center justify-center"
                            alt="checkmark One"
                          />
                        </Button>
                        <Text className="rowcheckmark" variant="body3">
                          Free cancellation{" "}
                        </Text>
                      </Row>
                    </Column>
                    <Column className="w-[15%]">
                      <Text className="HyattCentricC_One" as="h5" variant="h5">
                        ₹12,910
                      </Text>
                      <Text className="PernightPer" variant="body7">
                        Per night /Per room
                      </Text>
                      <Text className="price_Seven" variant="body9">
                        +₹418 taxes & Fees
                      </Text>
                      <Row className="font-inter items-center mt-[4px] py-[3px] w-[77%]">
                        <Text className="EarnPoints" variant="body2">
                          Earn
                        </Text>
                        <Row className="items-center justify-evenly ml-[3px] my-[1px] w-[54%]">
                          <Img
                            src="images/img_star_10X11.svg"
                            className="star"
                            alt="star"
                          />
                          <Text className="rowstar" variant="body2">
                            234
                          </Text>
                        </Row>
                      </Row>
                    </Column>
                  </Row>
                </Column>
                <Input
                  className="absolute font-normal inset-x-[0] not-italic p-[0] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[23px] placeholder:text-gray_50 text-gray_50 top-[0] w-[100%]"
                  wrapClassName="absolute w-[100%]"
                  name="language Six"
                  placeholder="Executive Suite Pool View King Bed "
                  shape="CustomBorderTL8"
                  size="sm"
                  variant="FillBlueA400"
                ></Input>
                <Line className="absolute bg-bluegray_200 h-[0.5px] inset-x-[0] top-[39%] w-[100%]" />
              </Stack>
              <Stack className="lg:h-[197px] xl:h-[246px] 2xl:h-[276px] 3xl:h-[332px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] rounded-radius8 shadow-bs w-[100%]">
                <Column className="absolute bg-gray_51 bottom-[0] justify-start lg:py-[14px] xl:py-[17px] 2xl:py-[20px] 3xl:py-[23px] rounded-radius8 w-[100%]">
                  <Row className="items-start justify-between lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] w-[94%]">
                    <Text
                      className="mt-[2px] columnmostpopularbu"
                      as="h6"
                      variant="h6"
                    >
                      Secure your stay
                    </Text>
                    <Img
                      src="images/img_image11.png"
                      className="lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[26px] mb-[1px] w-[9%]"
                      alt="imageEleven"
                    />
                  </Row>
                  <Line className="bg-bluegray_200 h-[0.5px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[17px] w-[100%]" />
                  <Row className="items-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[23px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[89%]">
                    <Row className="items-start justify-between w-[77%]">
                      <Row className="items-end rounded-radius25 w-[46%]">
                        <Button
                          className="flex lg:h-[36px] xl:h-[45px] 2xl:h-[50px] 3xl:h-[60px] items-center justify-center rounded-radius50 lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[59px]"
                          size="mdIcn"
                          variant="icbFillIndigo500"
                        >
                          <Img
                            src="images/img_lock.svg"
                            className="flex items-center justify-center lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[39px]"
                            alt="lock"
                          />
                        </Button>
                        <Text
                          className="font-medium lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] mb-[1px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] 2xl:mt-[10px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] text-bluegray_400 w-[74%]"
                          variant="body5"
                        >
                          ₹ 2,00,000 Medical Emergency (Hospitalization)
                        </Text>
                      </Row>
                      <Row className="items-end justify-center mt-[3px] pb-[3px] pr-[3px] w-[49%]">
                        <Button
                          className="flex lg:h-[36px] xl:h-[45px] 2xl:h-[50px] 3xl:h-[60px] items-center justify-center rounded-radius50 lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[59px]"
                          size="mdIcn"
                          variant="icbFillIndigo500"
                        >
                          <Img
                            src="images/img_cut.svg"
                            className="flex items-center justify-center lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[39px]"
                            alt="cut"
                          />
                        </Button>
                        <Text
                          className="font-medium lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] mb-[3px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mr-[18px] xl:mr-[23px] 2xl:mr-[26px] 3xl:mr-[31px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] text-bluegray_400 w-[65%]"
                          variant="body5"
                        >
                          ₹ 20,000 Trip Cancellation due to illness
                        </Text>
                      </Row>
                    </Row>
                    <Row className="items-end lg:ml-[3px] xl:ml-[4px] 3xl:ml-[5px] 2xl:ml-[5px] rounded-radius25 w-[22%]">
                      <Button
                        className="flex lg:h-[36px] xl:h-[45px] 2xl:h-[50px] 3xl:h-[60px] items-center justify-center rounded-radius50 lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[59px]"
                        size="mdIcn"
                        variant="icbFillIndigo500"
                      >
                        <Img
                          src="images/img_trash.svg"
                          className="flex items-center justify-center lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[39px]"
                          alt="trash"
                        />
                      </Button>
                      <Text
                        className="font-medium lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] mb-[4px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] text-bluegray_400 w-[60%]"
                        variant="body5"
                      >
                        ₹ 20,000 Baggage Loss
                      </Text>
                    </Row>
                  </Row>
                  <Row className="font-poppins items-start lg:mb-[51px] xl:mb-[64px] 2xl:mb-[73px] 3xl:mb-[87px] lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[35px] w-[47%]">
                    <Img
                      src="images/img_checkmark_12X12.svg"
                      className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px] lg:h-[9px] my-[1px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                      alt="checkmark Two"
                    />
                    <Text
                      className="mb-[2px] ml-[2px] not-italic text-black_900 w-[auto]"
                      variant="body9"
                    >
                      Valid for indian citizents below 70 yrs of age.
                    </Text>
                    <Img
                      src="images/img_checkmark_12X12.svg"
                      className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px] lg:h-[9px] lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] mt-[3px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                      alt="checkmark Three"
                    />
                    <Text
                      className="ml-[2px] my-[1px] not-italic text-black_900 w-[auto]"
                      variant="body9"
                    >
                      18% GST Included
                    </Text>
                  </Row>
                </Column>
                <Row className="absolute bg-gray_100 bottom-[0] items-center lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius8 w-[100%]">
                  <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] mt-[1px] w-[15%]">
                    <Text className="rowstar" as="h6" variant="h6">
                      ₹ 129
                    </Text>
                    <Stack className="font-poppins lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] ml-[1px] mt-[4px] w-[69%]">
                      <Text className="absolute rowstar" variant="body5">
                        Earn 234
                      </Text>
                      <Img
                        src="images/img_star_10X11.svg"
                        className="absolute 2xl:h-[10px] 3xl:h-[12px] lg:h-[8px] xl:h-[9px] right-[34%] top-[7%] w-[14%]"
                        alt="star One"
                      />
                    </Stack>
                  </Column>
                  <Row className="items-start justify-center w-[19%]">
                    <Img
                      src="images/img_settings_20X20.svg"
                      className="lg:h-[15px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] mb-[2px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[23px]"
                      alt="settings"
                    />
                    <Text
                      className="font-normal 2xl:ml-[10px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] mt-[4px] not-italic text-gray_900 w-[auto]"
                      variant="body2"
                    >
                      Secure my stay
                    </Text>
                  </Row>
                </Row>
              </Stack>
              <Stack className="lg:h-[229px] xl:h-[287px] 2xl:h-[322px] 3xl:h-[387px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius8 shadow-bs w-[100%]">
                <div className="absolute lg:h-[129px] xl:h-[161px] 2xl:h-[181px] 3xl:h-[218px] rounded-radius8 shadow-bs top-[0] w-[100%]"></div>
                <Column className="absolute bg-gray_51 justify-center p-[1px] rounded-radius8 w-[100%]">
                  <Text
                    className="lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] columnmostpopularbu"
                    as="h6"
                    variant="h6"
                  >
                    Special Request (Optional)
                  </Text>
                  <Line className="bg-bluegray_200 h-[0.5px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[17px] w-[100%]" />
                  <Column className="items-center justify-start lg:mb-[22px] xl:mb-[28px] 2xl:mb-[32px] 3xl:mb-[38px] lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[95%]">
                    <Text
                      className="font-normal lg:leading-[14px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[23px] not-italic text-bluegray_400 w-[97%]"
                      variant="body7"
                    >
                      Special/accessibility requests (e.g. roll-away beds, late
                      check-in and accessible rooms) are not guaranteed. If you
                      don't hear back from the property, you may want to contact
                      them directly to confirm. The property may charge a fee
                      for certain special requests.
                    </Text>
                    <Column className="bg-gray_52 border border-bluegray_200 border-solid justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[35px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[100%]">
                      <Text
                        className="font-normal 2xl:mb-[101px] 3xl:mb-[121px] lg:mb-[71px] xl:mb-[89px] mt-[1px] not-italic text-bluegray_200 w-[auto]"
                        variant="body7"
                      >
                        Please specify your special request here.
                      </Text>
                    </Column>
                  </Column>
                </Column>
              </Stack>
            </Column>
            <Column className="items-center justify-start lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] mt-[1px] w-[30%]">
              <Stack className="lg:h-[296px] xl:h-[370px] 2xl:h-[416px] 3xl:h-[500px] w-[100%]">
                <Column className="absolute bg-gray_50 items-center justify-start left-[0] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-radius8 w-[100%]">
                  <Row className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[99%]">
                    <Text className="columnmostpopularbu" as="h6" variant="h6">
                      Price Summary
                    </Text>
                    <Img
                      src="images/img_arrowup_6X12.svg"
                      className="lg:h-[5px] 2xl:h-[6px] xl:h-[6px] 3xl:h-[8px] w-[4%]"
                      alt="arrowup"
                    />
                  </Row>
                  <Row className="items-start justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[99%]">
                    <Text
                      className="font-bold text-gray_800 uppercase w-[auto]"
                      variant="body7"
                    >
                      Room Fares
                    </Text>
                    <Text className="EarnPoints" variant="body2">
                      ₹ 5,256
                    </Text>
                  </Row>
                  <Row className="items-start justify-between xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
                    <Text className="EarnPoints" variant="body7">
                      Standard Room x1
                    </Text>
                    <Text className="price_Eight" variant="body2">
                      ₹ 1,256
                    </Text>
                  </Row>
                  <Row className="items-start justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[99%]">
                    <Text className="EarnPoints" variant="body7">
                      Standard Room(breakfast) x1
                    </Text>
                    <Text className="price_Eight" variant="body2">
                      ₹1,256
                    </Text>
                  </Row>
                  <Row className="items-start justify-between lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[59px] w-[99%]">
                    <Text
                      className="font-bold mt-[1px] text-gray_800 uppercase w-[auto]"
                      variant="body7"
                    >
                      TAXES & CHARGES
                    </Text>
                    <Text className="rowstar" variant="body2">
                      ₹ 3,868
                    </Text>
                  </Row>
                  <Row className="items-start justify-between lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[59px] w-[99%]">
                    <Text
                      className="font-bold text-gray_800 uppercase w-[auto]"
                      variant="body7"
                    >
                      DISCOUNT
                    </Text>
                    <Text className="EarnPoints" variant="body2">
                      ₹ 3,868
                    </Text>
                  </Row>
                  <Row className="items-start justify-between lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[99%]">
                    <Text className="mt-[2px] rowstar" variant="body7">
                      Offer applied
                    </Text>
                    <Text className="price_Eight" variant="body2">
                      ₹469
                    </Text>
                  </Row>
                  <Row className="items-start justify-between lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[29px] w-[99%]">
                    <Text className="mb-[1px] rowstar" variant="body2">
                      Grand Total
                    </Text>
                    <Text className="EarnPoints" variant="body2">
                      ₹ 23,865
                    </Text>
                  </Row>
                  <Row className="items-start justify-between 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[7px] xl:mb-[9px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[99%]">
                    <Text
                      className="font-bold font-poppins mt-[1px] text-gray_800 tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Payable Amount
                    </Text>
                    <Text
                      className="font-bold font-inter text-gray_800 tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      ₹ 14,582
                    </Text>
                  </Row>
                </Column>
                <Line className="absolute bg-bluegray_200 h-[0.5px] top-[38%] w-[100%]" />
                <Line className="absolute bg-bluegray_200 bottom-[45%] h-[0.5px] w-[100%]" />
              </Stack>
              <Column className="items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] p-[1px] rounded-radius8 shadow-bs w-[100%]">
                <Column className="bg-gray_50 justify-start my-[1px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius8 w-[100%]">
                  <Text
                    className="ml-[4px] 2xl:mt-[10px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] columnmostpopularbu"
                    as="h6"
                    variant="h6"
                  >
                    Offers & Promocode
                  </Text>
                  <Row className="bg-gray_50 border-2 border-gray_200 border-solid font-poppins items-center justify-between ml-[1px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[17px] rounded-radius8 w-[99%]">
                    <Text className="ml-[1px] rowstar" variant="body5">
                      Enter your Promo code
                    </Text>
                    <Column className="font-inter items-center mr-[3px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius4 w-[19%]">
                      <Text
                        className="font-bold mt-[2px] text-blue_A400 w-[auto]"
                        variant="body7"
                      >
                        APPLY
                      </Text>
                    </Column>
                  </Row>
                  <List
                    className="font-poppins gap-[0] lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] min-h-[auto] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                    orientation="vertical"
                  >
                    <Stack className="2xl:h-[100px] 3xl:h-[120px] lg:h-[72px] xl:h-[89px] lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] pr-[1px] w-[100%]">
                      <div className="absolute bg-blue_A400_63 3xl:h-[119px] lg:h-[71px] xl:h-[89px] 2xl:h-[99px] inset-[0] justify-center m-[auto] outline outline-[3px] outline-blue_A400_63 rounded-radius8 w-[100%]"></div>
                      <Row className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[92%]">
                        <Img
                          src="images/img_iconsbadgedis.svg"
                          className="iconsBadgeDis"
                          alt="iconsBadgeDis"
                        />
                        <Column className="justify-start lg:mt-[3px] xl:mt-[4px] 3xl:mt-[5px] 2xl:mt-[5px] w-[89%]">
                          <Text
                            className="font-bold text-blue_A400 w-[auto]"
                            variant="body7"
                          >
                            GOMONSOON
                          </Text>
                          <Row className="items-start justify-between mt-[2px] w-[100%]">
                            <Text className="rowusethiscoupon" variant="body5">
                              Use this coupon and get Rs 1500 instant discount
                              on your flight booking.
                            </Text>
                            <Button
                              className="font-bold font-inter mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[24%]"
                              shape="RoundedBorder5"
                              size="md"
                              variant="FillGreen400"
                            >
                              APPLIED
                            </Button>
                          </Row>
                        </Column>
                      </Row>
                    </Stack>
                    <Stack className="2xl:h-[100px] 3xl:h-[120px] lg:h-[72px] xl:h-[89px] lg:my-[2px] xl:my-[3px] 3xl:my-[4px] 2xl:my-[4px] pr-[1px] w-[100%]">
                      <div className="absolute bg-gray_100 3xl:h-[119px] lg:h-[71px] xl:h-[89px] 2xl:h-[99px] inset-[0] justify-center m-[auto] rounded-radius8 w-[100%]"></div>
                      <Row className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[92%]">
                        <Img
                          src="images/img_iconsbadgedis.svg"
                          className="iconsBadgeDis"
                          alt="iconsBadgeDis One"
                        />
                        <Column className="justify-start lg:mt-[3px] xl:mt-[4px] 3xl:mt-[5px] 2xl:mt-[5px] w-[89%]">
                          <Text
                            className="font-bold text-blue_A400 w-[auto]"
                            variant="body7"
                          >
                            GOMONSOON
                          </Text>
                          <Row className="items-start justify-between mt-[2px] w-[100%]">
                            <Text className="rowusethiscoupon" variant="body5">
                              Use this coupon and get Rs 1500 instant discount
                              on your flight booking.
                            </Text>
                            <Button
                              className="font-bold font-inter xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[21%]"
                              shape="RoundedBorder5"
                              size="md"
                              variant="OutlineBluegray400"
                            >
                              APPLY
                            </Button>
                          </Row>
                        </Column>
                      </Row>
                    </Stack>
                    <Stack className="2xl:h-[100px] 3xl:h-[120px] lg:h-[72px] xl:h-[89px] lg:mb-[2px] xl:mb-[3px] 3xl:mb-[4px] 2xl:mb-[4px] mt-[4px] pr-[1px] w-[100%]">
                      <div className="absolute bg-gray_100 3xl:h-[119px] lg:h-[71px] xl:h-[89px] 2xl:h-[99px] inset-[0] justify-center m-[auto] rounded-radius8 w-[100%]"></div>
                      <Row className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[92%]">
                        <Img
                          src="images/img_iconsbadgedis.svg"
                          className="iconsBadgeDis"
                          alt="iconsBadgeDis Two"
                        />
                        <Column className="justify-start lg:mt-[3px] xl:mt-[4px] 3xl:mt-[5px] 2xl:mt-[5px] w-[89%]">
                          <Text
                            className="font-bold text-blue_A400 w-[auto]"
                            variant="body7"
                          >
                            GOMONSOON
                          </Text>
                          <Row className="items-start justify-between mt-[2px] w-[100%]">
                            <Text className="rowusethiscoupon" variant="body5">
                              Use this coupon and get Rs 1500 instant discount
                              on your flight booking.
                            </Text>
                            <Button
                              className="font-bold font-inter xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[21%]"
                              shape="RoundedBorder5"
                              size="md"
                              variant="OutlineBluegray400"
                            >
                              APPLY
                            </Button>
                          </Row>
                        </Column>
                      </Row>
                    </Stack>
                  </List>
                </Column>
              </Column>
            </Column>
          </Row>
          <Column className="font-inter items-center justify-start xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] 2xl:mt-[10px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] w-[56%]">
            <List
              className="gap-[0] min-h-[auto] w-[100%]"
              orientation="vertical"
            >
              <Column className="bg-gray_50 items-center justify-start lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] pl-[1px] py-[1px] rounded-radius8 shadow-bs w-[100%]">
                <Stack className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                  <Text
                    className="absolute left-[3%] top-[0] columnmostpopularbu"
                    as="h6"
                    variant="h6"
                  >
                    Covid Rules
                  </Text>
                  <Line className="absolute bg-bluegray_200 bottom-[7%] h-[0.5px] w-[100%]" />
                </Stack>
                <Row className="font-poppins items-start justify-between lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[92%]">
                  <Text
                    className="bg-clip-text bg-gradient  font-light lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] mt-[1px] text-transparent w-[68%]"
                    variant="body7"
                  >
                    COVID test/vaccination rules: In view of the surge in number
                    of COVID-19 cases, random on-arrival testing will be done
                    for travellers arriving from states where there{" "}
                  </Text>
                  <Button
                    className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A400 text-center w-[24%]"
                    shape="RoundedBorder8"
                    size="xl"
                    variant="OutlineBlueA4001_2"
                  >
                    View Information
                  </Button>
                </Row>
              </Column>
              <Column className="bg-gray_50 items-center justify-start lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] pl-[1px] py-[1px] rounded-radius8 shadow-bs w-[100%]">
                <Stack className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                  <Text
                    className="absolute left-[3%] top-[0] columnmostpopularbu"
                    as="h6"
                    variant="h6"
                  >
                    Hotel Rules
                  </Text>
                  <Line className="absolute bg-bluegray_200 bottom-[5%] h-[0.5px] w-[100%]" />
                </Stack>
                <Row className="font-poppins items-start justify-between lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[92%]">
                  <Text
                    className="bg-clip-text bg-gradient  font-light lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] mt-[3px] text-transparent w-[69%]"
                    variant="body7"
                  >
                    Remember to web check-in before arriving at the airport;
                    carry a printed or soft copy of the boarding pass.
                  </Text>
                  <Button
                    className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A400 text-center w-[24%]"
                    shape="RoundedBorder8"
                    size="xl"
                    variant="OutlineBlueA4001_2"
                  >
                    View policy
                  </Button>
                </Row>
              </Column>
            </List>
            <Stack className="lg:h-[130px] xl:h-[162px] 2xl:h-[182px] 3xl:h-[219px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] px-[1px] rounded-radius8 shadow-bs w-[100%]">
              <div className="absolute bg-gray_51 lg:h-[128px] xl:h-[161px] 2xl:h-[180px] 3xl:h-[216px] inset-[0] justify-center m-[auto] rounded-radius8 w-[100%]"></div>
              <Row className="absolute bottom-[17%] font-poppins items-center left-[4%] w-[87%]">
                <Column className="w-[53%]">
                  <Text className="rowstar" variant="body5">
                    GST Number
                  </Text>
                  <Input
                    className="w-[100%]"
                    wrapClassName="2xl:h-[48px] 2xl:mt-[9px] 3xl:h-[58px] 3xl:mt-[10px] flex lg:h-[35px] lg:mt-[6px] w-[89%] xl:h-[43px] xl:mt-[8px]"
                    name="singleinputfi"
                    placeholder=""
                  ></Input>
                </Column>
                <Column className="w-[47%]">
                  <Text className="rowstar" variant="body5">
                    Company Name
                  </Text>
                  <Input
                    className="w-[100%]"
                    wrapClassName="2xl:h-[48px] 2xl:mt-[7px] 3xl:h-[58px] 3xl:mt-[8px] flex lg:h-[35px] lg:mt-[4px] w-[100%] xl:h-[43px] xl:mt-[6px]"
                    name="singleinputfi One"
                    placeholder=""
                  ></Input>
                </Column>
              </Row>
              <Line className="absolute bg-bluegray_200 h-[0.5px] inset-x-[0] top-[32%] w-[100%]" />
              <Text
                className="absolute left-[3%] top-[10%] columnmostpopularbu"
                as="h6"
                variant="h6"
              >
                GST Information (Optional)
              </Text>
            </Stack>
          </Column>
          <Button
            className="font-medium lg:ml-[537px] xl:ml-[672px] 2xl:ml-[756px] 3xl:ml-[907px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[12%]"
            shape="RoundedBorder8"
            size="2xl"
            variant="FillBlueA400"
          >
            Continue
          </Button>
          <Footer className="bg-gray_900 font-poppins 2xl:mt-[111px] 3xl:mt-[133px] lg:mt-[78px] xl:mt-[98px] w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default ScreenThreePage;
