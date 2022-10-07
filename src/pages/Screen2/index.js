import React from "react";

import {
  Column,
  Stack,
  Row,
  Img,
  Text,
  Button,
  Line,
  SelectBox,
  List,
  RatingBar,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Screen2Page = () => {
  const navigate = useNavigate();

  function handleBackNavigation() {
    navigate(-1);
  }

  return (
    <>
      <Column className="bg-indigo_50 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Stack className="lg:h-[131px] xl:h-[163px] 2xl:h-[183px] 3xl:h-[220px] w-[100%]">
          <Header className="absolute inset-x-[0] top-[0] w-[100%]" />
          <Row className="absolute bg-gray_900 bottom-[0] font-inter items-center lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[100%]">
            <Column className="2xl:ml-[106px] 3xl:ml-[127px] lg:ml-[75px] xl:ml-[94px] mt-[2px] w-[48%]">
              <Row className="items-start w-[23%]">
                <Img
                  src="images/img_arrowleft.svg"
                  className="common-pointer lg:h-[13px] xl:h-[16px] 2xl:h-[17px] 3xl:h-[21px] mt-[2px] w-[6%]"
                  onClick={handleBackNavigation}
                  alt="arrowleft"
                />
                <Text className="rowarrowleft" as="h6" variant="h6">
                  Hotel Results
                </Text>
              </Row>
              <Row className="font-poppins items-start lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[29px] mt-[4px] w-[35%]">
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
                {" > "}
              </span>
              <span className="text-gray_50 font-inter font-bold lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                Hyatt Centric Candolim Goa
              </span>
            </Text>
          </Row>
        </Stack>
        <Column className="bg-gray_50 font-inter justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 w-[82%]">
          <Row className="items-center justify-between ml-[3px] lg:mr-[31px] xl:mr-[40px] 2xl:mr-[45px] 3xl:mr-[53px] w-[96%]">
            <Text
              className="font-medium mb-[1px] text-bluegray_400 w-[auto]"
              variant="body5"
            >
              Hotel description
            </Text>
            <Button className="bg-transparent font-medium mb-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_400 text-center w-[7%]">
              Amentities
            </Button>
            <Text
              className="font-medium mb-[1px] text-blue_A400 w-[auto]"
              variant="body5"
            >
              Room options
            </Text>
            <Button className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_400 text-center w-[10%]">
              Hygiene Policies
            </Button>
            <Button className="bg-transparent font-medium mb-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_400 text-center w-[12%]">
              About this Property
            </Button>
            <Button className="bg-transparent font-medium mb-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_400 text-center w-[8%]">
              Hotel policies
            </Button>
            <Button className="bg-transparent font-medium mb-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_400 text-center w-[11%]">
              Similiar properties
            </Button>
          </Row>
          <Line className="bg-blue_A400 h-[4px] mb-[1px] lg:ml-[216px] xl:ml-[270px] 2xl:ml-[304px] 3xl:ml-[364px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[8%]" />
        </Column>
        <Stack className="font-inter lg:h-[447px] xl:h-[559px] 2xl:h-[628px] 3xl:h-[754px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[82%]">
          <Stack className="absolute lg:h-[447px] xl:h-[559px] 2xl:h-[628px] 3xl:h-[754px] w-[100%]">
            <Stack className="absolute lg:h-[447px] xl:h-[559px] 2xl:h-[628px] 3xl:h-[754px] w-[100%]">
              <Stack className="absolute lg:h-[447px] xl:h-[559px] 2xl:h-[628px] 3xl:h-[754px] w-[100%]">
                <Row className="absolute bg-gray_50 items-start justify-end lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius8 top-[0] w-[100%]">
                  <Text
                    className="font-inter font-normal lg:mt-[3px] xl:mt-[4px] 3xl:mt-[5px] 2xl:mt-[5px] not-italic text-blue_A401 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Select Room
                  </Text>
                  <Text
                    className="font-medium font-poppins lg:ml-[164px] xl:ml-[206px] 2xl:ml-[232px] 3xl:ml-[278px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] text-red_A700 w-[auto]"
                    variant="body2"
                  >
                    (Option 2)
                  </Text>
                  <Row className="font-inter items-center justify-center lg:mb-[31px] xl:mb-[40px] 2xl:mb-[45px] 3xl:mb-[53px] lg:ml-[124px] xl:ml-[155px] 2xl:ml-[175px] 3xl:ml-[209px] mt-[1px] w-[42%]">
                    <Button
                      className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[36%]"
                      shape="RoundedBorder5"
                      size="xl"
                      variant="OutlineBluegray200"
                    >
                      Breakfast Included
                    </Button>
                    <SelectBox
                      className="font-normal lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-gray_800 w-[26%]"
                      placeholderClassName=""
                      name="low to high"
                      placeholder=""
                      isSearchable={true}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_vector_25.svg"
                          className="lg:w-[4px] lg:h-[3px] lg:mr-[7px] xl:w-[6px] xl:h-[3px] xl:mr-[9px] 2xl:w-[7px] 2xl:h-[3px] 2xl:mr-[11px] 3xl:w-[8px] 3xl:h-[4px] 3xl:mr-[13px]"
                          alt="Vector 25"
                        />
                      }
                    ></SelectBox>
                    <Button
                      className="font-normal lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[35%]"
                      shape="RoundedBorder5"
                      size="xl"
                      variant="OutlineBluegray200"
                    >
                      Free Cancellation
                    </Button>
                  </Row>
                </Row>
                <Column className="absolute bg-gray_50 bottom-[0] items-end justify-end lg:pt-[25px] xl:pt-[32px] 2xl:pt-[36px] 3xl:pt-[43px] rounded-radius8 w-[100%]">
                  <Row className="font-inter items-start lg:mr-[19px] xl:mr-[24px] 2xl:mr-[27px] 3xl:mr-[32px] w-[96%]">
                    <Column className="justify-start mt-[3px] w-[28%]">
                      <Text
                        className="font-normal lg:leading-[22px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] not-italic text-blue_A400 w-[74%]"
                        as="h5"
                        variant="h5"
                      >
                        Executive Suite Pool View King Bed
                      </Text>
                      <Row className="items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[75%]">
                        <Row className="items-center py-[3px] w-[38%]">
                          <Img
                            src="images/img_user.svg"
                            className="user_Two"
                            alt="user"
                          />
                          <Text className="rowuser_two" variant="body5">
                            Sleeps 2
                          </Text>
                        </Row>
                        <Row className="items-start xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] py-[3px] w-[56%]">
                          <Img
                            src="images/img_folder.svg"
                            className="folder"
                            alt="folder"
                          />
                          <Text className="rowfolder" variant="body5">
                            1 King size bed
                          </Text>
                        </Row>
                      </Row>
                      <Row className="items-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] py-[3px] w-[29%]">
                        <Img
                          src="images/img_videocamera_16X19.svg"
                          className="lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[20px] mt-[1px] w-[21%]"
                          alt="videocamera"
                        />
                        <Text
                          className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] text-gray_900 w-[auto]"
                          variant="body5"
                        >
                          370 sq ft
                        </Text>
                      </Row>
                    </Column>
                    <Column className="justify-start lg:mt-[3px] xl:mt-[4px] 3xl:mt-[5px] 2xl:mt-[5px] w-[50%]">
                      <Text className="rowstar" as="h6" variant="h6">
                        Business Class Single{" "}
                      </Text>
                      <Row className="items-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[75%]">
                        <Row className="items-start w-[26%]">
                          <Button
                            className="flex lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[20px] items-center justify-center lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
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
                          <Text className="rowgroup6291" variant="body6">
                            No Breakfast
                          </Text>
                        </Row>
                        <Row className="items-start justify-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[25%]">
                          <Button
                            className="flex lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[20px] items-center justify-center lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
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
                          <Text className="rowcheckmark1" variant="body6">
                            Flexible Rate{" "}
                          </Text>
                        </Row>
                        <Row className="items-start lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[34%]">
                          <Button
                            className="flex lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[20px] items-center justify-center lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
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
                          <Text className="rowcheckmark_one" variant="body6">
                            <span className="text-gray_903 font-inter font-medium lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                              Free Cancellation
                              <br />
                            </span>
                            <span className="text-gray_900 font-inter font-medium lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                              till 19th Sept 2022
                            </span>
                          </Text>
                        </Row>
                      </Row>
                      <Row className="items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[76%]">
                        <Text className="rowcancellationpo">
                          Cancellation policies
                        </Text>
                        <Button className="bg-transparent font-medium lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-blue_A400 text-center underline w-[30%]">
                          Terms & conditions
                        </Button>
                        <Text className="Covidpolicies">Covid policies</Text>
                      </Row>
                      <Text
                        className="xl:mt-[102px] 2xl:mt-[115px] 3xl:mt-[137px] lg:mt-[81px] rowstar"
                        as="h6"
                        variant="h6"
                      >
                        Business Class Single{" "}
                      </Text>
                      <Row className="items-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[75%]">
                        <Row className="items-start w-[26%]">
                          <Button
                            className="flex lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[20px] items-center justify-center lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                            shape="icbRoundedBorder9"
                            size="smIcn"
                            variant="icbFillRed50090"
                          >
                            <Img
                              src="images/img_group629.svg"
                              className="flex items-center justify-center lg:h-[4px] xl:h-[5px] 2xl:h-[5px] 3xl:h-[6px]"
                              alt="Group629 One"
                            />
                          </Button>
                          <Text className="rowgroup629_one" variant="body6">
                            No Breakfast
                          </Text>
                        </Row>
                        <Row className="items-start justify-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[25%]">
                          <Button
                            className="flex lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[20px] items-center justify-center lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                            shape="icbRoundedBorder9"
                            size="smIcn"
                            variant="icbFillGreen60090"
                          >
                            <Img
                              src="images/img_checkmark.svg"
                              className="flex items-center justify-center"
                              alt="checkmark Two"
                            />
                          </Button>
                          <Text className="rowcheckmark1" variant="body6">
                            Flexible Rate{" "}
                          </Text>
                        </Row>
                        <Row className="items-start lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[34%]">
                          <Button
                            className="flex lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[20px] items-center justify-center lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                            shape="icbRoundedBorder9"
                            size="smIcn"
                            variant="icbFillGreen60090"
                          >
                            <Img
                              src="images/img_checkmark.svg"
                              className="flex items-center justify-center"
                              alt="checkmark Three"
                            />
                          </Button>
                          <Text className="rowcheckmark_one" variant="body6">
                            <span className="text-gray_903 font-inter font-medium lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                              Free Cancellation
                              <br />
                            </span>
                            <span className="text-gray_900 font-inter font-medium lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                              till 19th Sept 2022
                            </span>
                          </Text>
                        </Row>
                      </Row>
                      <Row className="items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[76%]">
                        <Text className="rowcancellationpo">
                          Cancellation policies
                        </Text>
                        <Button className="bg-transparent font-medium lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-blue_A400 text-center underline w-[30%]">
                          Terms & conditions
                        </Button>
                        <Text className="Covidpolicies">Covid policies</Text>
                      </Row>
                    </Column>
                    <Column className="font-poppins justify-start mb-[4px] w-[22%]">
                      <Column className="justify-start w-[100%]">
                        <Column className="justify-start ml-[1px] w-[53%]">
                          <Text
                            className="font-inter text-gray_900 w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            ₹12,910
                          </Text>
                          <Text className="PernightPer2" variant="body4">
                            Per night /Per room
                          </Text>
                          <Text className="price_Two1" variant="body8">
                            +₹418 taxes & Fees
                          </Text>
                          <Row className="font-inter items-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[76%]">
                            <Text className="EarnPoints1" variant="body2">
                              Earn
                            </Text>
                            <Row className="items-start justify-evenly mb-[1px] ml-[3px] w-[55%]">
                              <Img
                                src="images/img_star_10X11.svg"
                                className="star3"
                                alt="star"
                              />
                              <Text className="rowstar" variant="body2">
                                234
                              </Text>
                            </Row>
                          </Row>
                        </Column>
                        <Button
                          className="font-medium lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A400 text-center w-[100%]"
                          shape="RoundedBorder8"
                          size="2xl"
                          variant="OutlineBlueA4001_2"
                        >
                          Select 3 rooms
                        </Button>
                      </Column>
                      <Column className="justify-start ml-[1px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[53%]">
                        <Text
                          className="font-inter text-gray_900 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          ₹12,910
                        </Text>
                        <Text className="PernightPer2" variant="body4">
                          Per night /Per room
                        </Text>
                        <Text className="price_Two1" variant="body8">
                          +₹418 taxes & Fees
                        </Text>
                        <Row className="font-inter items-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[76%]">
                          <Text className="EarnPoints1" variant="body2">
                            Earn
                          </Text>
                          <Row className="items-start justify-evenly mb-[1px] ml-[3px] w-[55%]">
                            <Img
                              src="images/img_star_10X11.svg"
                              className="star3"
                              alt="star One"
                            />
                            <Text className="rowstar" variant="body2">
                              234
                            </Text>
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                  <Button
                    className="font-medium font-poppins lg:mr-[19px] xl:mr-[24px] 2xl:mr-[27px] 3xl:mr-[32px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_51 w-[21%]"
                    shape="RoundedBorder8"
                    size="2xl"
                    variant="OutlineBlueA4001_2"
                  >
                    Select 3 rooms
                  </Button>
                  <Column className="bg-blue_A400_6c font-poppins items-center justify-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[23px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <Text
                      className="font-medium mt-[2px] text-blue_A400 w-[auto]"
                      variant="body2"
                    >
                      View more options(4){" "}
                    </Text>
                  </Column>
                </Column>
              </Stack>
              <Row className="absolute bg-blue_A400_6c1 items-start xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] top-[12%] w-[100%]">
                <Text
                  className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] my-[2px] not-italic text-gray_900 w-[auto]"
                  variant="body2"
                >
                  Room Type (7)
                </Text>
                <Text
                  className="font-normal lg:ml-[139px] xl:ml-[174px] 2xl:ml-[196px] 3xl:ml-[235px] mt-[4px] not-italic text-gray_900 w-[auto]"
                  variant="body2"
                >
                  Options (3)
                </Text>
                <Text
                  className="font-normal lg:ml-[346px] xl:ml-[433px] 2xl:ml-[488px] 3xl:ml-[585px] mt-[2px] not-italic text-gray_900 w-[auto]"
                  variant="body2"
                >
                  Price
                </Text>
              </Row>
            </Stack>
            <Row className="absolute bottom-[7%] inset-x-[0] items-center justify-between mx-[auto] w-[47%]">
              <Line className="bg-gray_400 lg:h-[323px] xl:h-[404px] 2xl:h-[454px] 3xl:h-[545px] w-[1px]" />
              <Line className="bg-gray_400 lg:h-[323px] xl:h-[404px] 2xl:h-[454px] 3xl:h-[545px] w-[1px]" />
            </Row>
          </Stack>
          <Line className="absolute bg-gray_400 bottom-[44%] h-[1px] right-[0] w-[74%]" />
        </Stack>
        <Stack className="bg-gray_50 font-inter lg:h-[373px] xl:h-[466px] 2xl:h-[524px] 3xl:h-[629px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[23px] rounded-radius8 w-[82%]">
          <Column className="absolute inset-x-[0] justify-start mx-[auto] top-[7%] w-[96%]">
            <Row className="items-center w-[90%]">
              <Column className="mt-[3px] w-[87%]">
                <Row className="items-start w-[84%]">
                  <Text
                    className="font-normal lg:leading-[22px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] not-italic text-blue_A400 w-[32%]"
                    as="h5"
                    variant="h5"
                  >
                    Executive Suite Pool View King Bed
                  </Text>
                  <Column className="justify-start lg:ml-[56px] xl:ml-[70px] 2xl:ml-[79px] 3xl:ml-[94px] mt-[1px] w-[58%]">
                    <Text className="rowstar" as="h6" variant="h6">
                      Business Class Single{" "}
                    </Text>
                    <Row className="items-start justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                      <Row className="items-start w-[26%]">
                        <Button
                          className="flex lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[20px] items-center justify-center lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                          shape="icbRoundedBorder9"
                          size="smIcn"
                          variant="icbFillRed50090"
                        >
                          <Img
                            src="images/img_group629.svg"
                            className="flex items-center justify-center lg:h-[4px] xl:h-[5px] 2xl:h-[5px] 3xl:h-[6px]"
                            alt="Group629 Two"
                          />
                        </Button>
                        <Text className="rowgroup629_one" variant="body6">
                          No Breakfast
                        </Text>
                      </Row>
                      <Row className="items-start justify-center w-[25%]">
                        <Button
                          className="flex lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[20px] items-center justify-center lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                          shape="icbRoundedBorder9"
                          size="smIcn"
                          variant="icbFillGreen60090"
                        >
                          <Img
                            src="images/img_checkmark.svg"
                            className="flex items-center justify-center"
                            alt="checkmark Four"
                          />
                        </Button>
                        <Text className="rowcheckmark1" variant="body6">
                          Flexible Rate{" "}
                        </Text>
                      </Row>
                      <Row className="items-start w-[34%]">
                        <Button
                          className="flex lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[20px] items-center justify-center lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                          shape="icbRoundedBorder9"
                          size="smIcn"
                          variant="icbFillGreen60090"
                        >
                          <Img
                            src="images/img_checkmark.svg"
                            className="flex items-center justify-center"
                            alt="checkmark Five"
                          />
                        </Button>
                        <Text className="rowcheckmark_one" variant="body6">
                          <span className="text-gray_903 font-inter font-medium lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                            Free Cancellation
                            <br />
                          </span>
                          <span className="text-gray_900 font-inter font-medium lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                            till 19th Sept 2022
                          </span>
                        </Text>
                      </Row>
                    </Row>
                  </Column>
                </Row>
                <Row className="items-start lg:mt-[3px] xl:mt-[4px] 3xl:mt-[5px] 2xl:mt-[5px] w-[84%]">
                  <Row className="items-center justify-between xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mb-[9px] w-[32%]">
                    <Row className="items-center py-[3px] w-[38%]">
                      <Img
                        src="images/img_user.svg"
                        className="user_Two"
                        alt="user One"
                      />
                      <Text className="rowuser_two" variant="body5">
                        Sleeps 2
                      </Text>
                    </Row>
                    <Row className="items-start py-[3px] w-[56%]">
                      <Img
                        src="images/img_folder.svg"
                        className="folder"
                        alt="folder One"
                      />
                      <Text className="rowfolder" variant="body5">
                        1 King size bed
                      </Text>
                    </Row>
                  </Row>
                  <Row className="items-center lg:ml-[56px] xl:ml-[70px] 2xl:ml-[79px] 3xl:ml-[94px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[58%]">
                    <Text className="rowcancellationpo">
                      Cancellation policies
                    </Text>
                    <Button className="bg-transparent font-medium lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-blue_A400 text-center underline w-[30%]">
                      Terms & conditions
                    </Button>
                    <Text className="Covidpolicies">Covid policies</Text>
                  </Row>
                </Row>
              </Column>
              <Column className="mb-[4px] w-[13%]">
                <Text
                  className="font-inter text-gray_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  ₹12,910
                </Text>
                <Text className="PernightPer2" variant="body4">
                  Per night /Per room
                </Text>
                <Text className="price_Two1" variant="body8">
                  +₹418 taxes & Fees
                </Text>
                <Row className="font-inter items-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[76%]">
                  <Text className="EarnPoints1" variant="body2">
                    Earn
                  </Text>
                  <Row className="items-start justify-evenly mb-[1px] ml-[3px] w-[55%]">
                    <Img
                      src="images/img_star_10X11.svg"
                      className="star3"
                      alt="star Two"
                    />
                    <Text className="rowstar" variant="body2">
                      234
                    </Text>
                  </Row>
                </Row>
              </Column>
            </Row>
            <Row className="items-start mt-[2px] w-[100%]">
              <Img
                src="images/img_videocamera_16X19.svg"
                className="lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[20px] w-[2%]"
                alt="videocamera One"
              />
              <Text className="font-inter rowvideocamera" variant="body5">
                370 sq ft
              </Text>
              <Button
                className="font-medium font-poppins lg:ml-[561px] xl:ml-[702px] 2xl:ml-[790px] 3xl:ml-[947px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A400 text-center w-[22%]"
                shape="RoundedBorder8"
                size="2xl"
                variant="OutlineBlueA4001_2"
              >
                Select 3 rooms
              </Button>
            </Row>
            <Row className="items-start justify-end ml-[auto] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[72%]">
              <Column className="justify-start lg:mt-[3px] xl:mt-[4px] 3xl:mt-[5px] 2xl:mt-[5px] w-[70%]">
                <Text className="rowstar" as="h6" variant="h6">
                  Business Class Single{" "}
                </Text>
                <Row className="items-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[75%]">
                  <Row className="items-start w-[26%]">
                    <Button
                      className="flex lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[20px] items-center justify-center lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                      shape="icbRoundedBorder9"
                      size="smIcn"
                      variant="icbFillRed50090"
                    >
                      <Img
                        src="images/img_group629.svg"
                        className="flex items-center justify-center lg:h-[4px] xl:h-[5px] 2xl:h-[5px] 3xl:h-[6px]"
                        alt="Group629 Three"
                      />
                    </Button>
                    <Text className="rowgroup6291" variant="body6">
                      No Breakfast
                    </Text>
                  </Row>
                  <Row className="items-start justify-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[25%]">
                    <Button
                      className="flex lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[20px] items-center justify-center lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                      shape="icbRoundedBorder9"
                      size="smIcn"
                      variant="icbFillGreen60090"
                    >
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex items-center justify-center"
                        alt="checkmark Six"
                      />
                    </Button>
                    <Text className="rowcheckmark1" variant="body6">
                      Flexible Rate{" "}
                    </Text>
                  </Row>
                  <Row className="items-start lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[34%]">
                    <Button
                      className="flex lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[20px] items-center justify-center lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                      shape="icbRoundedBorder9"
                      size="smIcn"
                      variant="icbFillGreen60090"
                    >
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex items-center justify-center"
                        alt="checkmark Seven"
                      />
                    </Button>
                    <Text className="rowcheckmark_one" variant="body6">
                      <span className="text-gray_903 font-inter font-medium lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                        Free Cancellation
                        <br />
                      </span>
                      <span className="text-gray_900 font-inter font-medium lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px]">
                        till 19th Sept 2022
                      </span>
                    </Text>
                  </Row>
                </Row>
                <Row className="items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[76%]">
                  <Text className="rowcancellationpo">
                    Cancellation policies
                  </Text>
                  <Button className="bg-transparent font-medium lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-blue_A400 text-center underline w-[30%]">
                    Terms & conditions
                  </Button>
                  <Text className="Covidpolicies">Covid policies</Text>
                </Row>
              </Column>
              <Column className="font-poppins justify-start w-[30%]">
                <Column className="justify-start ml-[1px] w-[53%]">
                  <Text
                    className="font-inter text-gray_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    ₹12,910
                  </Text>
                  <Text className="PernightPer2" variant="body4">
                    Per night /Per room
                  </Text>
                  <Text className="price_Two1" variant="body8">
                    +₹418 taxes & Fees
                  </Text>
                  <Row className="font-inter items-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[76%]">
                    <Text className="EarnPoints1" variant="body2">
                      Earn
                    </Text>
                    <Row className="items-start justify-evenly mb-[1px] ml-[3px] w-[55%]">
                      <Img
                        src="images/img_star_10X11.svg"
                        className="star3"
                        alt="star Three"
                      />
                      <Text className="rowstar" variant="body2">
                        234
                      </Text>
                    </Row>
                  </Row>
                </Column>
                <Button
                  className="font-medium lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A400 text-center w-[100%]"
                  shape="RoundedBorder8"
                  size="2xl"
                  variant="OutlineBlueA4001_2"
                >
                  Select 3 rooms
                </Button>
              </Column>
            </Row>
          </Column>
          <Stack className="absolute font-poppins lg:h-[373px] xl:h-[466px] 2xl:h-[524px] 3xl:h-[629px] w-[100%]">
            <Row className="absolute inset-x-[0] items-center justify-between mx-[auto] top-[0] w-[48%]">
              <Line className="bg-gray_400 lg:h-[340px] xl:h-[425px] 2xl:h-[478px] 3xl:h-[574px] w-[1px]" />
              <Line className="bg-gray_400 lg:h-[340px] xl:h-[425px] 2xl:h-[478px] 3xl:h-[574px] w-[1px]" />
            </Row>
            <Line className="absolute bg-gray_400 h-[1px] right-[0] top-[45%] w-[74%]" />
            <Button
              className="absolute bottom-[0] font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
              shape="CustomBorderBL8"
              size="xl"
              variant="FillBlueA4006c"
            >
              View more options(4){" "}
            </Button>
          </Stack>
        </Stack>
        <Stack className="font-inter lg:h-[309px] xl:h-[386px] 2xl:h-[434px] 3xl:h-[521px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
          <Column className="absolute bg-gray_50 justify-center left-[9%] lg:pl-[3px] xl:pl-[4px] 3xl:pl-[5px] 2xl:pl-[5px] lg:py-[3px] xl:py-[4px] 3xl:py-[5px] 2xl:py-[5px] right-[10%] rounded-radius8 w-[82%]">
            <Text className="columnwhatsnearby" as="h6" variant="h6">
              Whats nearby
            </Text>
            <Line className="bg-bluegray_200 h-[0.5px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]" />
            <Row className="items-center lg:mb-[34px] xl:mb-[42px] 2xl:mb-[48px] 3xl:mb-[57px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[96%]">
              <Column className="pr-[2px] py-[2px] w-[37%]">
                <Row className="items-center mr-[auto] mt-[1px] w-[82%]">
                  <Button className="bg-transparent font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A400 text-center w-[34%]">
                    Miramar beach
                  </Button>
                  <Text className="rowmiramarbeach" variant="body5">
                    10 min walk
                  </Text>
                </Row>
                <Row className="items-start mr-[auto] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[81%]">
                  <Button className="bg-transparent font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A400 text-center w-[49%]">
                    Destin Royale Casino
                  </Button>
                  <Text className="rowdestinroyalec" variant="body5">
                    4 min drive
                  </Text>
                </Row>
                <Row className="items-start mr-[auto] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[41px] w-[81%]">
                  <Text className="CasinoRoyale" variant="body2">
                    Casino Royale
                  </Text>
                  <Text
                    className="font-medium lg:ml-[106px] xl:ml-[133px] 2xl:ml-[150px] 3xl:ml-[179px] mt-[1px] text-gray_800 w-[auto]"
                    variant="body5"
                  >
                    8 min drive
                  </Text>
                </Row>
                <Row className="items-start mr-[auto] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[83%]">
                  <Text className="mb-[1px] CasinoRoyale" variant="body2">
                    Church{" "}
                  </Text>
                  <Text
                    className="font-medium lg:ml-[144px] xl:ml-[180px] 2xl:ml-[203px] 3xl:ml-[243px] mt-[2px] text-gray_800 w-[auto]"
                    variant="body5"
                  >
                    16 min drive
                  </Text>
                </Row>
                <Row className="items-start mr-[auto] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[83%]">
                  <Text className="CasinoRoyale" variant="body2">
                    Reis Magos Fort
                  </Text>
                  <Text
                    className="font-medium xl:ml-[120px] 2xl:ml-[135px] 3xl:ml-[161px] lg:ml-[95px] mt-[1px] text-gray_800 w-[auto]"
                    variant="body5"
                  >
                    13 min drive
                  </Text>
                </Row>
                <Row className="items-start mr-[auto] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[83%]">
                  <Text className="CasinoRoyale" variant="body2">
                    Ranganatha temple
                  </Text>
                  <Text
                    className="font-medium 2xl:ml-[109px] 3xl:ml-[130px] lg:ml-[77px] xl:ml-[96px] mt-[1px] text-gray_800 w-[auto]"
                    variant="body5"
                  >
                    13 min drive
                  </Text>
                </Row>
              </Column>
              <Img
                src="images/img_screenshot2022.png"
                className="lg:h-[213px] xl:h-[266px] 2xl:h-[299px] 3xl:h-[359px] rounded-radius8 w-[63%]"
                alt="Screenshot2022"
              />
            </Row>
          </Column>
          <Row className="absolute bg-gray_800 items-center justify-end pb-[1px] pl-[1px] top-[12%] w-[100%]">
            <Column className="w-[44%]">
              <Text
                className="font-normal not-italic text-indigo_50 w-[auto]"
                as="h6"
                variant="h6"
              >
                Hyatt Centric Candolim Goa
              </Text>
              <Text
                className="font-medium mt-[3px] text-indigo_50 w-[auto]"
                variant="body5"
              >
                Executive Suite Pool View King Bed | 3 rooms
              </Text>
            </Column>
            <Row
              className="bg-cover bg-repeat font-poppins items-center justify-center lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[17px] w-[48%]"
              style={{ backgroundImage: "url('images/img_group186.svg')" }}
            >
              <Column className="lg:ml-[27px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] w-[24%]">
                <Text
                  className="font-inter lg:ml-[41px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] rowsearchhotels"
                  as="h5"
                  variant="h5"
                >
                  ₹12,910
                </Text>
                <Text className="Earning1086Po" variant="body2">
                  Earning 1086 Points
                </Text>
              </Column>
              <Button
                className="font-medium 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[1px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[31%]"
                shape="RoundedBorder8"
                size="2xl"
                variant="FillBlueA400"
              >
                Continue
              </Button>
              <Img
                src="images/img_arrowup.svg"
                className="lg:h-[5px] 2xl:h-[6px] xl:h-[6px] 3xl:h-[8px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mr-[153px] xl:mr-[192px] 2xl:mr-[216px] 3xl:mr-[259px] w-[2%]"
                alt="arrowup"
              />
            </Row>
          </Row>
        </Stack>
        <Column className="bg-gray_50 font-inter justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius8 w-[81%]">
          <Text
            className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] columnmostpopularbu"
            as="h6"
            variant="h6"
          >
            Hygiene Policies
          </Text>
          <Line className="bg-bluegray_200 h-[0.5px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
          <Text
            className="font-normal lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:mb-[24px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[40px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[29px] not-italic text-gray_800 w-[81%]"
            variant="body5"
          >
            The safety and well-being of our guests is our top priority. In
            response to COVID-19, we have introduced enhanced measures for
            guests’ safety and peace of mind. They include:
            <br />
            <br />
            <br />
            <br />
            Team member certification, trainings and recertification process for
            hygiene and cleanliness
            <br />
            <br />
            <br />
            Increased frequency of cleaning on all high touch surfaces,
            guestrooms and shared spa
            <br />.
          </Text>
        </Column>
        <Column className="bg-gray_50 font-inter justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius8 w-[81%]">
          <Column className="justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
            <Text className="columnamentities_one" as="h6" variant="h6">
              About this Property
            </Text>
            <Line className="bg-bluegray_200 h-[0.5px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
          </Column>
          <Column className="justify-start xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] lg:mb-[9px] 2xl:ml-[10px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[29px] w-[85%]">
            <Text
              className="font-normal lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] not-italic text-gray_800 w-[100%]"
              variant="body5"
            >
              Located in Panaji, Goa Marriott Resort & Spa is connected to a
              shopping centre. Church of Our Lady of Immaculate Conception and
              Basilica of Bom Jesus are notable landmarks, and the area's
              natural beauty can be seen at Miramar Beach and Salim Ali Bird
              Sanctuary. Travelling with kids? Consider Goa Science Centre and
              Splashdown Waterpark. Practise your golf swing on a nearby course,
              or enjoy other activities in the great outdoors, such as ecotours
              in the area.{" "}
            </Text>
            <Text className="Language_Fourteen" variant="body2">
              Language
            </Text>
            <Text
              className="xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] rowstar"
              variant="body5"
            >
              Tamil, English, Hindi
            </Text>
          </Column>
        </Column>
        <Column className="bg-gray_50 font-inter justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius8 w-[81%]">
          <Column className="justify-start 2xl:mt-[10px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
            <Text className="columnamentities_one" as="h6" variant="h6">
              Hotel Policies
            </Text>
            <Line className="bg-bluegray_200 h-[0.5px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]" />
          </Column>
          <Column className="justify-start lg:mb-[24px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[40px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[23px] w-[84%]">
            <Text className="rowstar" variant="body2">
              Check-in
            </Text>
            <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] pt-[1px] w-[24%]">
              <Text className="rowstar" variant="body5">
                Check-in from 3:00 PM
              </Text>
              <Text className="Earlycheckin" variant="body5">
                Early check-in subject to availability
              </Text>
              <Text className="Language_Fourteen" variant="body5">
                Express Check-in
              </Text>
              <Text className="Language_Fourteen" variant="body5">
                Minimum check-in age -18
              </Text>
            </Column>
            <Text
              className="lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] rowstar"
              variant="body2"
            >
              Check-out
            </Text>
            <Column className="justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] pt-[1px] w-[24%]">
              <Text className="rowstar" variant="body5">
                Check-in from 3:00 PM
              </Text>
              <Text className="Earlycheckin" variant="body5">
                Express Check-in
              </Text>
              <Text className="Language_Fourteen" variant="body5">
                Minimum check-in age -18
              </Text>
              <Text className="Language_Fourteen" variant="body5">
                Early check-in subject to availability
              </Text>
            </Column>
            <Text
              className="lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] rowstar"
              variant="body2"
            >
              Special check-in instructions
            </Text>
            <Text
              className="font-normal lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic text-gray_800 w-[100%]"
              variant="body5"
            >
              This property offers transfers from the train station (surcharges
              may apply); to arrange pick-up, guests must contact the property
              24 hours prior to arrival, using the contact information on the
              booking confirmation{" "}
            </Text>
          </Column>
        </Column>
        <Column className="bg-blue_100 font-poppins items-center justify-end lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] lg:p-[31px] xl:p-[39px] 2xl:p-[44px] 3xl:p-[52px] w-[100%]">
          <Text className="columnsimiliarhotels" as="h1" variant="h1">
            Similiar hotels
          </Text>
          <List
            className="font-inter lg:gap-[11px] xl:gap-[14px] 2xl:gap-[16px] 3xl:gap-[19px] grid grid-cols-3 min-h-[auto] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] pb-[1px] w-[78%]"
            orientation="horizontal"
          >
            <Column className="listrecommended">
              <Column
                className="bg-cover bg-repeat justify-start lg:p-[3px] xl:p-[4px] 3xl:p-[5px] 2xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group137.png')" }}
              >
                <Row className="items-center justify-between ml-[4px] lg:mr-[4px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[8px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[96%]">
                  <Button
                    className="font-bold mb-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center uppercase w-[36%]"
                    shape="RoundedBorder5"
                    size="lg"
                    variant="FillGreen400"
                  >
                    Recommended
                  </Button>
                  <Button
                    className="flex lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[39px] items-center justify-center lg:w-[22px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                    shape="icbCircleBorder16"
                    size="mdIcn"
                    variant="icbFillGray200"
                  >
                    <Img
                      src="images/img_favorite.svg"
                      className="flex items-center justify-center"
                      alt="favorite"
                    />
                  </Button>
                </Row>
                <Button
                  className="font-bold mb-[3px] lg:ml-[164px] xl:ml-[206px] 2xl:ml-[232px] 3xl:ml-[278px] 2xl:mt-[111px] 3xl:mt-[133px] lg:mt-[78px] xl:mt-[98px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center uppercase w-[30%]"
                  shape="CircleBorder13"
                  size="md"
                  variant="FillGray900"
                >
                  only 1 left
                </Button>
              </Column>
              <Stack className="lg:h-[116px] xl:h-[145px] 2xl:h-[162px] 3xl:h-[195px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[94%]">
                <Column className="absolute justify-start left-[0] top-[0] w-[84%]">
                  <Text className="HyattCentricC_One" as="h6" variant="h6">
                    Hyatt Centric Candolim Goa
                  </Text>
                  <Text className="Guindy" variant="body7">
                    Guindy
                  </Text>
                  <RatingBar
                    className="lg:mt-[3px] xl:mt-[4px] 3xl:mt-[5px] 2xl:mt-[5px]"
                    value={4}
                    starCount={5}
                    color="#b0b4c3"
                    activeColor="#ffd166"
                    size={((window.innerWidth - 15) * 17) / 1441}
                  ></RatingBar>
                  <Text className="FreeCancellati" variant="body7">
                    Free Cancellation
                  </Text>
                </Column>
                <Column className="absolute bottom-[2%] justify-start left-[0] w-[43%]">
                  <Row className="items-center w-[38%]">
                    <Img
                      src="images/img_image3.png"
                      className="imageThree_One"
                      alt="imageThree"
                    />
                    <Text className="rowfourhundredfifteen_one" variant="body5">
                      4.1/5
                    </Text>
                  </Row>
                  <Text
                    className="columnfourhundredfifteen_one"
                    variant="body7"
                  >
                    {" "}
                    Very good (208 reviews)
                  </Text>
                </Column>
                <Column className="absolute bottom-[0] items-end justify-end lg:pl-[3px] xl:pl-[4px] 3xl:pl-[5px] 2xl:pl-[5px] lg:pt-[3px] xl:pt-[4px] 3xl:pt-[5px] 2xl:pt-[5px] right-[0] w-[32%]">
                  <Column className="items-end justify-start 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                    <Text className="columnoldprice" variant="body5">
                      ₹13,440
                    </Text>
                    <Column className="justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                      <Text className="price_Fourteen" as="h5" variant="h5">
                        ₹12,910
                      </Text>
                      <Text className="PernightPer_Four" variant="body9">
                        Per night /Per room
                      </Text>
                      <Text className="price_One1" variant="body9">
                        +₹418 taxes & Fees
                      </Text>
                    </Column>
                  </Column>
                  <Row className="font-poppins items-center justify-end mr-[4px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] py-[4px] w-[78%]">
                    <Text className="EarnPoints" variant="body5">
                      Earn
                    </Text>
                    <Row className="items-center justify-evenly lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] my-[1px] w-[53%]">
                      <Img
                        src="images/img_star_10X11.svg"
                        className="star_Five"
                        alt="star Four"
                      />
                      <Text className="rowstar" variant="body5">
                        234
                      </Text>
                    </Row>
                  </Row>
                </Column>
              </Stack>
            </Column>
            <Column className="listrecommended">
              <Column
                className="bg-cover bg-repeat justify-start lg:p-[3px] xl:p-[4px] 3xl:p-[5px] 2xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group137.png')" }}
              >
                <Row className="items-center justify-between ml-[4px] lg:mr-[4px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[8px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[96%]">
                  <Button
                    className="font-bold mb-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center uppercase w-[36%]"
                    shape="RoundedBorder5"
                    size="lg"
                    variant="FillGreen400"
                  >
                    Recommended
                  </Button>
                  <Button
                    className="flex lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[39px] items-center justify-center lg:w-[22px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                    shape="icbCircleBorder16"
                    size="mdIcn"
                    variant="icbFillGray200"
                  >
                    <Img
                      src="images/img_favorite.svg"
                      className="flex items-center justify-center"
                      alt="favorite One"
                    />
                  </Button>
                </Row>
                <Button
                  className="font-bold mb-[3px] lg:ml-[164px] xl:ml-[206px] 2xl:ml-[232px] 3xl:ml-[278px] 2xl:mt-[111px] 3xl:mt-[133px] lg:mt-[78px] xl:mt-[98px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center uppercase w-[30%]"
                  shape="CircleBorder13"
                  size="md"
                  variant="FillGray900"
                >
                  only 1 left
                </Button>
              </Column>
              <Stack className="lg:h-[116px] xl:h-[145px] 2xl:h-[162px] 3xl:h-[195px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[94%]">
                <Column className="absolute justify-start left-[0] top-[0] w-[84%]">
                  <Text className="HyattCentricC_One" as="h6" variant="h6">
                    Hyatt Centric Candolim Goa
                  </Text>
                  <Text className="Guindy" variant="body7">
                    Guindy
                  </Text>
                  <RatingBar
                    className="lg:mt-[3px] xl:mt-[4px] 3xl:mt-[5px] 2xl:mt-[5px]"
                    value={4}
                    starCount={5}
                    color="#b0b4c3"
                    activeColor="#ffd166"
                    size={((window.innerWidth - 15) * 17) / 1441}
                  ></RatingBar>
                  <Text className="FreeCancellati" variant="body7">
                    Free Cancellation
                  </Text>
                </Column>
                <Column className="absolute bottom-[2%] justify-start left-[0] w-[43%]">
                  <Row className="items-center w-[38%]">
                    <Img
                      src="images/img_image3.png"
                      className="imageThree_One"
                      alt="imageThree One"
                    />
                    <Text className="rowfourhundredfifteen_one" variant="body5">
                      4.1/5
                    </Text>
                  </Row>
                  <Text
                    className="columnfourhundredfifteen_one"
                    variant="body7"
                  >
                    {" "}
                    Very good (208 reviews)
                  </Text>
                </Column>
                <Column className="absolute bottom-[0] items-end justify-end lg:pl-[3px] xl:pl-[4px] 3xl:pl-[5px] 2xl:pl-[5px] lg:pt-[3px] xl:pt-[4px] 3xl:pt-[5px] 2xl:pt-[5px] right-[0] w-[32%]">
                  <Column className="items-end justify-start 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                    <Text className="columnoldprice" variant="body5">
                      ₹13,440
                    </Text>
                    <Column className="justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                      <Text className="price_Fourteen" as="h5" variant="h5">
                        ₹12,910
                      </Text>
                      <Text className="PernightPer_Four" variant="body9">
                        Per night /Per room
                      </Text>
                      <Text className="price_One1" variant="body9">
                        +₹418 taxes & Fees
                      </Text>
                    </Column>
                  </Column>
                  <Row className="font-poppins items-center justify-end mr-[4px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] py-[4px] w-[78%]">
                    <Text className="EarnPoints" variant="body5">
                      Earn
                    </Text>
                    <Row className="items-center justify-evenly lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] my-[1px] w-[53%]">
                      <Img
                        src="images/img_star_10X11.svg"
                        className="star_Five"
                        alt="star Five"
                      />
                      <Text className="rowstar" variant="body5">
                        234
                      </Text>
                    </Row>
                  </Row>
                </Column>
              </Stack>
            </Column>
            <Column className="listrecommended">
              <Column
                className="bg-cover bg-repeat justify-start lg:p-[3px] xl:p-[4px] 3xl:p-[5px] 2xl:p-[5px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group137.png')" }}
              >
                <Row className="items-center justify-between ml-[4px] lg:mr-[4px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[8px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[96%]">
                  <Button
                    className="font-bold mb-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center uppercase w-[36%]"
                    shape="RoundedBorder5"
                    size="lg"
                    variant="FillGreen400"
                  >
                    Recommended
                  </Button>
                  <Button
                    className="flex lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[39px] items-center justify-center lg:w-[22px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                    shape="icbCircleBorder16"
                    size="mdIcn"
                    variant="icbFillGray200"
                  >
                    <Img
                      src="images/img_favorite.svg"
                      className="flex items-center justify-center"
                      alt="favorite Two"
                    />
                  </Button>
                </Row>
                <Button
                  className="font-bold mb-[3px] lg:ml-[164px] xl:ml-[206px] 2xl:ml-[232px] 3xl:ml-[278px] 2xl:mt-[111px] 3xl:mt-[133px] lg:mt-[78px] xl:mt-[98px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center uppercase w-[30%]"
                  shape="CircleBorder13"
                  size="md"
                  variant="FillGray900"
                >
                  only 1 left
                </Button>
              </Column>
              <Stack className="lg:h-[116px] xl:h-[145px] 2xl:h-[162px] 3xl:h-[195px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[94%]">
                <Column className="absolute justify-start left-[0] top-[0] w-[84%]">
                  <Text className="HyattCentricC_One" as="h6" variant="h6">
                    Hyatt Centric Candolim Goa
                  </Text>
                  <Text className="Guindy" variant="body7">
                    Guindy
                  </Text>
                  <RatingBar
                    className="lg:mt-[3px] xl:mt-[4px] 3xl:mt-[5px] 2xl:mt-[5px]"
                    value={4}
                    starCount={5}
                    color="#b0b4c3"
                    activeColor="#ffd166"
                    size={((window.innerWidth - 15) * 17) / 1441}
                  ></RatingBar>
                  <Text className="FreeCancellati" variant="body7">
                    Free Cancellation
                  </Text>
                </Column>
                <Column className="absolute bottom-[2%] justify-start left-[0] w-[43%]">
                  <Row className="items-center w-[38%]">
                    <Img
                      src="images/img_image3.png"
                      className="imageThree_One"
                      alt="imageThree Two"
                    />
                    <Text className="rowfourhundredfifteen_one" variant="body5">
                      4.1/5
                    </Text>
                  </Row>
                  <Text
                    className="columnfourhundredfifteen_one"
                    variant="body7"
                  >
                    {" "}
                    Very good (208 reviews)
                  </Text>
                </Column>
                <Column className="absolute bottom-[0] items-end justify-end lg:pl-[3px] xl:pl-[4px] 3xl:pl-[5px] 2xl:pl-[5px] lg:pt-[3px] xl:pt-[4px] 3xl:pt-[5px] 2xl:pt-[5px] right-[0] w-[32%]">
                  <Column className="items-end justify-start 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                    <Text className="columnoldprice" variant="body5">
                      ₹13,440
                    </Text>
                    <Column className="justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                      <Text className="price_Fourteen" as="h5" variant="h5">
                        ₹12,910
                      </Text>
                      <Text className="PernightPer_Four" variant="body9">
                        Per night /Per room
                      </Text>
                      <Text className="price_One1" variant="body9">
                        +₹418 taxes & Fees
                      </Text>
                    </Column>
                  </Column>
                  <Row className="font-poppins items-center justify-end mr-[4px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] py-[4px] w-[78%]">
                    <Text className="EarnPoints" variant="body5">
                      Earn
                    </Text>
                    <Row className="items-center justify-evenly lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] my-[1px] w-[53%]">
                      <Img
                        src="images/img_star_10X11.svg"
                        className="star_Five"
                        alt="star Six"
                      />
                      <Text className="rowstar" variant="body5">
                        234
                      </Text>
                    </Row>
                  </Row>
                </Column>
              </Stack>
            </Column>
          </List>
          <Img
            src="images/img_group564.svg"
            className="2xl:h-[10px] 3xl:h-[12px] lg:h-[8px] xl:h-[9px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[29px] w-[4%]"
            alt="Group564"
          />
        </Column>
        <Footer className="bg-gray_900 font-poppins mt-[1px] w-[100%]" />
      </Column>
    </>
  );
};

export default Screen2Page;
