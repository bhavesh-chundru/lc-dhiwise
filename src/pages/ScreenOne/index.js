import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Stack,
  RatingBar,
  Line,
  List,
  Datepicker,
  SelectBox,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const ScreenOnePage = () => {
  const navigate = useNavigate();

  function handleBackNavigation() {
    navigate(-1);
  }

  return (
    <>
      <Column className="bg-indigo_50 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Row className="bg-gray_900 font-inter items-center lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[100%]">
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
            <Row className="font-poppins items-start lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[29px] mt-[4px] w-[36%]">
              <Text className="DEL" variant="body5">
                DEL
              </Text>
              <Text className="price" variant="body5">
                | | 1 Room, 2 Adults, 3 children
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
        <Row className="font-inter items-center lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] pr-[1px] w-[82%]">
          <Column
            className="bg-cover bg-repeat items-end lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius8 w-[66%]"
            style={{ backgroundImage: "url('images/img_group16.png')" }}
          >
            <Button
              className="2xl:mb-[405px] 3xl:mb-[485px] flex items-center justify-center lg:mb-[287px] mr-[2px] text-center w-[20%] xl:mb-[360px]"
              leftIcon={
                <Img
                  src="images/img_volume.svg"
                  className="text-center lg:w-[17px] lg:h-[18px] lg:mr-[24px] xl:w-[21px] xl:h-[22px] xl:mr-[31px] 2xl:w-[24px] 2xl:h-[24px] 2xl:mr-[35px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[41px] rounded-radius50"
                  alt="volume"
                />
              }
              shape="RoundedBorder8"
              size="2xl"
              variant="FillGray51"
            >
              <div className="bg-transparent font-bold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] uppercase">
                View On MAP
              </div>
            </Button>
          </Column>
          <Stack className="lg:h-[348px] xl:h-[435px] 2xl:h-[489px] 3xl:h-[587px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[33%]">
            <Column className="absolute bg-gray_50 justify-start lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] right-[0] rounded-radius8 w-[100%]">
              <Text
                className="font-inter lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] columnmostpopularbu"
                as="h6"
                variant="h6"
              >
                Hyatt Centric Candolim Goa
              </Text>
              <Text
                className="lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] columnflights_one"
                variant="body5"
              >
                Anna Waddo Main Candolim Road , Goa
              </Text>
              <RatingBar
                className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px]"
                value={4}
                starCount={5}
                color="#b0b4c3"
                activeColor="#ffd166"
                size={((window.innerWidth - 15) * 22) / 1441}
              ></RatingBar>
              <Row className="font-inter items-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[17px] w-[68%]">
                <Img
                  src="images/img_image3.png"
                  className="lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[20px] mb-[1px] w-[11%]"
                  alt="imageThree"
                />
                <Text
                  className="font-medium mb-[1px] ml-[4px] text-black_900 w-[auto]"
                  variant="body5"
                >
                  4.1/5
                </Text>
                <Text
                  className="font-medium lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] text-black_900 w-[auto]"
                  variant="body5"
                >
                  {" "}
                  Very good (208 reviews)
                </Text>
              </Row>
              <Row className="font-inter items-start 2xl:ml-[10px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] pt-[3px] w-[93%]">
                <Column className="justify-start w-[36%]">
                  <Text className="Checkin" variant="body7">
                    Check in
                  </Text>
                  <Button className="bg-transparent font-inter font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A400 text-center w-[79%]">
                    Sat, 04 Aug{" "}
                  </Button>
                  <Text className="time" variant="body9">
                    11AM
                  </Text>
                </Column>
                <Button
                  className="font-bold 2xl:mt-[10px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center uppercase w-[25%]"
                  shape="CircleBorder13"
                  size="md"
                  variant="OutlineBlueA400"
                >
                  2 Nights
                </Button>
                <Column className="justify-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] mt-[1px] w-[31%]">
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
              <Text
                className="font-inter lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] price_Eight"
                variant="body5"
              >
                Starting from
              </Text>
              <Column className="font-inter justify-start lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[65%]">
                <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                  ₹12,910
                </Text>
                <Text
                  className="lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] price_Eight"
                  variant="body7"
                >
                  <span className="text-bluegray_400 font-inter lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                    Per night /Per room{" "}
                  </span>
                  <span className="text-bluegray_400 font-inter lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                    +₹
                  </span>
                  <span className="text-bluegray_400 font-inter lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                    418 taxes & Fees
                  </span>
                </Text>
                <Row className="items-center lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] py-[3px] w-[38%]">
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
              <Button
                className="font-bold font-dmsans mb-[3px] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[94%]"
                shape="RoundedBorder8"
                size="2xl"
                variant="FillBlueA400"
              >
                Select rooms
              </Button>
            </Column>
            <Line className="absolute bg-bluegray_200 h-[0.5px] top-[35%] w-[100%]" />
            <Line className="absolute bg-bluegray_200 h-[0.5px] top-[17%] w-[100%]" />
            <Line className="absolute bg-bluegray_200 bottom-[46%] h-[0.5px] w-[100%]" />
          </Stack>
        </Row>
        <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius8 w-[82%]">
          <Img
            src="images/img_group16.png"
            className="xl:h-[116px] 2xl:h-[130px] 3xl:h-[156px] lg:h-[93px] rounded-radius8 w-[13%]"
            alt="imageTwo"
          />
          <Img
            src="images/img_group16.png"
            className="imageTwo_One"
            alt="imageTwo One"
          />
          <Img
            src="images/img_group16.png"
            className="imageTwo_One"
            alt="imageTwo Two"
          />
          <Img
            src="images/img_group16.png"
            className="imageTwo_One"
            alt="imageTwo Three"
          />
          <Img
            src="images/img_group16.png"
            className="imageTwo_One"
            alt="imageTwo Four"
          />
          <Img
            src="images/img_group16.png"
            className="imageTwo_One"
            alt="imageTwo Five"
          />
          <Img
            src="images/img_group16.png"
            className="imageTwo_One"
            alt="imageTwo Six"
          />
        </Row>
        <Column className="bg-gray_50 font-inter justify-end xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[17px] rounded-radius8 w-[82%]">
          <Row className="items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] mt-[1px] w-[94%]">
            <Button className="bg-transparent font-medium mb-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-blue_A400 text-center w-[11%]">
              Hotel description
            </Button>
            <Button className="bg-transparent font-medium mb-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_400 text-center w-[7%]">
              Amentities
            </Button>
            <Button className="bg-transparent font-medium mb-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_400 text-center w-[9%]">
              Room options
            </Button>
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
          <Line className="bg-blue_A400 h-[4px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[10%]" />
        </Column>
        <Column className="bg-gray_50 font-inter justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] p-[3px] rounded-radius8 w-[82%]">
          <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
            <Text className="columnhoteldescripti_one" as="h6" variant="h6">
              Hotel description
            </Text>
            <Line className="bg-bluegray_200 h-[0.5px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
          </Column>
          <Text
            className="font-normal lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] 2xl:mb-[10px] 3xl:mb-[11px] lg:mb-[7px] xl:mb-[8px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[17px] xl:mr-[106px] 2xl:mr-[120px] 3xl:mr-[143px] lg:mr-[85px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic text-gray_800 w-[88%]"
            variant="body2"
          >
            When your barefooted sandy stroll takes a pause, where the wind from
            the sea blows your hat off, and the cliff hangs behind, you'll know
            'This Is It'. At the Northern end of Arambol Beach, 'This Is It'
            provides living space suitable for all types of travelers. Our
            accommodations range from giving the privacy of private AC/Non-AC
            rooms to slightly more nature friendly private bamboo huts for an
            earthy vibe.{" "}
          </Text>
        </Column>
        <Column className="bg-gray_50 font-inter justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius8 w-[81%]">
          <Column className="justify-start lg:mr-[5px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] w-[99%]">
            <Text className="columnamentities_one" as="h6" variant="h6">
              Amentities
            </Text>
            <Line className="bg-bluegray_200 h-[0.5px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]" />
          </Column>
          <Column className="justify-start lg:mb-[16px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] 2xl:ml-[10px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[35px] w-[63%]">
            <Text className="columnmostpopularbu" variant="body2">
              Most popular business facilities
            </Text>
            <Row className="items-start justify-between lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] pr-[4px] w-[100%]">
              <Row className="items-center mt-[2px] w-[15%]">
                <Img
                  src="images/img_group466.svg"
                  className="Group466"
                  alt="Group466"
                />
                <Text className="rowgroup466" variant="body2">
                  Restaurant
                </Text>
              </Row>
              <Row className="items-start justify-center mt-[3px] w-[23%]">
                <Img
                  src="images/img_settings.svg"
                  className="settings"
                  alt="settings"
                />
                <Text className="rowsettings" variant="body2">
                  Doctor on Request
                </Text>
              </Row>
              <Row className="items-center justify-center mt-[3px] w-[15%]">
                <Img
                  src="images/img_group462.svg"
                  className="lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[20px] w-[21%]"
                  alt="Group462"
                />
                <Text className="rowgroup462" variant="body2">
                  Extra bed
                </Text>
              </Row>
              <Row className="items-center justify-center pr-[1px] pt-[1px] w-[17%]">
                <Img
                  src="images/img_user.svg"
                  className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] w-[14%]"
                  alt="user"
                />
                <Text
                  className="2xl:ml-[10px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 3xl:mt-[5px] 2xl:mt-[5px] rowsignal"
                  variant="body2"
                >
                  local guides
                </Text>
              </Row>
              <Row className="items-center justify-between w-[10%]">
                <Img
                  src="images/img_signal.svg"
                  className="lg:h-[18px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                  alt="signal"
                />
                <Text className="rowsignal" variant="body2">
                  {" "}
                  Wifi
                </Text>
              </Row>
            </Row>
            <Text
              className="lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] columnmostpopularbu"
              variant="body2"
            >
              Transportation Services
              <br />
            </Text>
            <Row className="items-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] pt-[2px] w-[43%]">
              <Row className="items-center w-[35%]">
                <Img
                  src="images/img_group466.svg"
                  className="Group466"
                  alt="Group466 One"
                />
                <Text className="rowgroup466" variant="body2">
                  Restaurant
                </Text>
              </Row>
              <Row className="items-start lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] mt-[1px] w-[53%]">
                <Img
                  src="images/img_settings.svg"
                  className="settings"
                  alt="settings One"
                />
                <Text className="rowsettings" variant="body2">
                  Doctor on Request
                </Text>
              </Row>
            </Row>
            <Text
              className="lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] columnmostpopularbu"
              variant="body2"
            >
              Front Desk Services
            </Text>
            <Row className="items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] pr-[4px] w-[79%]">
              <Row className="items-center mt-[2px] w-[19%]">
                <Img
                  src="images/img_group466.svg"
                  className="Group466"
                  alt="Group466 Two"
                />
                <Text className="rowgroup466" variant="body2">
                  Restaurant
                </Text>
              </Row>
              <Row className="items-start justify-center lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] mt-[3px] w-[30%]">
                <Img
                  src="images/img_settings.svg"
                  className="settings"
                  alt="settings Two"
                />
                <Text className="rowsettings" variant="body2">
                  Doctor on Request
                </Text>
              </Row>
              <Row className="items-center justify-center lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] mt-[3px] w-[19%]">
                <Img
                  src="images/img_group462.svg"
                  className="lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[20px] w-[21%]"
                  alt="Group462 One"
                />
                <Text className="rowgroup462" variant="body2">
                  Extra bed
                </Text>
              </Row>
              <Row className="items-center justify-between lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[47px] w-[12%]">
                <Img
                  src="images/img_signal.svg"
                  className="lg:h-[18px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                  alt="signal One"
                />
                <Text className="rowsignal" variant="body2">
                  {" "}
                  Wifi
                </Text>
              </Row>
            </Row>
            <Button className="bg-transparent font-normal lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A400 text-center underline w-[11%]">
              Show less
            </Button>
          </Column>
        </Column>
        <Column className="bg-gray_50 font-inter justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius8 w-[82%]">
          <Column className="justify-start lg:mr-[19px] xl:mr-[24px] 2xl:mr-[27px] 3xl:mr-[32px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[23px] w-[98%]">
            <Text className="columnhoteldescripti_one" as="h6" variant="h6">
              Check Availability
            </Text>
            <Line className="bg-bluegray_200 h-[0.5px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
          </Column>
          <Row className="items-center lg:mb-[29px] xl:mb-[36px] 2xl:mb-[41px] 3xl:mb-[49px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] pb-[1px] pl-[1px] w-[63%]">
            <List
              className="lg:gap-[28px] xl:gap-[35px] 2xl:gap-[39px] 3xl:gap-[47px] grid grid-cols-2 min-h-[auto] my-[1px] w-[49%]"
              orientation="horizontal"
            >
              <Row className="bg-bluegray_200_63 items-center justify-end lg:p-[3px] xl:p-[4px] 3xl:p-[5px] 2xl:p-[5px] rounded-radius8 w-[100%]">
                <Datepicker
                  className="bg-transparent w-[11%]"
                  name="calendar"
                ></Datepicker>
                <Column className="2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[7px] xl:mb-[9px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[74%]">
                  <Text className="price_Three" variant="body7">
                    CHECK IN
                  </Text>
                  <Text className="test_02Dec2022" variant="body1">
                    02 Dec, 2022
                  </Text>
                </Column>
              </Row>
              <Row className="bg-bluegray_200_63 items-center justify-end lg:p-[3px] xl:p-[4px] 3xl:p-[5px] 2xl:p-[5px] rounded-radius8 w-[100%]">
                <Datepicker
                  className="bg-transparent w-[11%]"
                  name="calendar One"
                ></Datepicker>
                <Column className="2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[7px] xl:mb-[9px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[74%]">
                  <Text className="price_Three" variant="body7">
                    CHECK OUT
                  </Text>
                  <Text className="test_02Dec2022" variant="body1">
                    02 Dec, 2022
                  </Text>
                </Column>
              </Row>
            </List>
            <Row className="bg-bluegray_200_63 items-center mb-[1px] lg:ml-[27px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-radius8 w-[45%]">
              <Img
                src="images/img_user_13X20.svg"
                className="lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] w-[7%]"
                alt="user One"
              />
              <Column className="mb-[3px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] w-[48%]">
                <Text className="price_Three" variant="body7">
                  Rooms & GUESTS
                </Text>
                <Text className="test_02Dec2022" variant="body1">
                  1 Room, 2 Adults
                </Text>
              </Column>
            </Row>
          </Row>
        </Column>
        <Column className="bg-gray_50 font-inter items-center justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] lg:pb-[5px] xl:pb-[7px] 2xl:pb-[8px] 3xl:pb-[9px] lg:pr-[5px] xl:pr-[7px] 2xl:pr-[8px] 3xl:pr-[9px] rounded-radius8 w-[81%]">
          <Stack className="lg:h-[400px] xl:h-[500px] 2xl:h-[562px] 3xl:h-[675px] w-[100%]">
            <Stack className="absolute lg:h-[100px] xl:h-[125px] 2xl:h-[140px] 3xl:h-[168px] top-[0] w-[100%]">
              <Row className="absolute bg-gray_50 bottom-[1%] items-end justify-end lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[100%]">
                <Text
                  className="font-inter font-normal lg:mb-[46px] xl:mb-[57px] 2xl:mb-[65px] 3xl:mb-[77px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-blue_A401 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Select Room
                </Text>
                <Text
                  className="font-medium font-poppins lg:mb-[44px] xl:mb-[55px] 2xl:mb-[62px] 3xl:mb-[74px] lg:ml-[118px] xl:ml-[148px] 2xl:ml-[167px] 3xl:ml-[200px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] text-red_A700 w-[auto]"
                  variant="body2"
                >
                  (Option 1)
                </Text>
                <Row className="font-inter items-center justify-center lg:mb-[40px] xl:mb-[50px] 2xl:mb-[57px] 3xl:mb-[68px] lg:ml-[179px] xl:ml-[224px] 2xl:ml-[253px] 3xl:ml-[303px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[42%]">
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
              <Row className="absolute bg-blue_A400_65 bottom-[0] inset-x-[0] items-start mx-[auto] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[17px] w-[97%]">
                <Text
                  className="font-normal lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] mt-[4px] not-italic text-gray_900 w-[auto]"
                  variant="body2"
                >
                  Room Type(4)
                </Text>
                <Text
                  className="font-normal lg:ml-[117px] xl:ml-[146px] 2xl:ml-[165px] 3xl:ml-[197px] mt-[3px] not-italic text-gray_900 w-[auto]"
                  variant="body2"
                >
                  Options
                </Text>
                <Text
                  className="font-normal lg:ml-[190px] xl:ml-[238px] 2xl:ml-[268px] 3xl:ml-[321px] mt-[1px] not-italic text-gray_900 w-[auto]"
                  variant="body2"
                >
                  Price
                </Text>
              </Row>
            </Stack>
            <Stack
              className="absolute bg-cover bg-repeat bottom-[0] lg:h-[303px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[512px] inset-x-[0] mx-[auto] pl-[1px] w-[97%]"
              style={{ backgroundImage: "url('images/img_group17.svg')" }}
            >
              <Stack className="absolute font-inter lg:h-[301px] xl:h-[377px] 2xl:h-[423px] 3xl:h-[508px] inset-[0] justify-center m-[auto] w-[96%]">
                <Stack className="absolute lg:h-[301px] xl:h-[377px] 2xl:h-[423px] 3xl:h-[508px] w-[100%]">
                  <Row className="absolute items-center justify-between left-[0] w-[96%]">
                    <Row className="items-start justify-evenly w-[24%]">
                      <Column className="justify-start lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
                        <Text
                          className="columnexecutivesuite"
                          as="h5"
                          variant="h5"
                        >
                          Executive Suite Pool View King Bed
                        </Text>
                        <Column className="justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[53%]">
                          <Row className="items-center py-[3px] w-[67%]">
                            <Img
                              src="images/img_user.svg"
                              className="user_Two"
                              alt="user Two"
                            />
                            <Text className="rowuser_two" variant="body5">
                              Sleeps 2
                            </Text>
                          </Row>
                          <Row className="items-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] py-[3px] w-[100%]">
                            <Img
                              src="images/img_folder.svg"
                              className="folder"
                              alt="folder"
                            />
                            <Text className="rowfolder" variant="body5">
                              1 King size bed
                            </Text>
                          </Row>
                          <Row className="items-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:pt-[3px] xl:pt-[4px] 3xl:pt-[5px] 2xl:pt-[5px] w-[69%]">
                            <Img
                              src="images/img_videocamera.svg"
                              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] lg:w-[13px] xl:w-[16px] 2xl:w-[19px] 3xl:w-[22px]"
                              alt="videocamera"
                            />
                            <Text className="rowvideocamera" variant="body5">
                              370 sq ft
                            </Text>
                          </Row>
                        </Column>
                        <Button className="bg-transparent font-medium lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-blue_A400 text-center underline w-[52%]">
                          Terms & conditions
                        </Button>
                      </Column>
                      <Line className="bg-bluegray_200 lg:h-[301px] xl:h-[377px] 2xl:h-[423px] 3xl:h-[508px] w-[1px]" />
                    </Row>
                    <Stack className="lg:h-[252px] xl:h-[315px] 2xl:h-[354px] 3xl:h-[425px] w-[74%]">
                      <Row className="absolute bottom-[0] items-start justify-between w-[100%]">
                        <List
                          className="font-inter gap-[0] min-h-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[17px] w-[20%]"
                          orientation="vertical"
                        >
                          <Column className="listgroup629">
                            <Row className="items-start w-[91%]">
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
                            <Row className="items-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[17px] w-[78%]">
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
                                Flexible Rate{" "}
                              </Text>
                            </Row>
                            <Row className="items-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[17px] w-[100%]">
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
                                Free Cancellation{" "}
                              </Text>
                            </Row>
                          </Column>
                          <Column className="listgroup629">
                            <Row className="items-start w-[91%]">
                              <Button
                                className="flex lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] items-center justify-center lg:w-[13px] xl:w-[16px] 2xl:w-[19px] 3xl:w-[22px]"
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
                              <Text className="rowgroup629" variant="body3">
                                Non refundable
                              </Text>
                            </Row>
                            <Row className="items-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[17px] w-[78%]">
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
                                Flexible Rate{" "}
                              </Text>
                            </Row>
                            <Row className="items-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[17px] w-[100%]">
                              <Button
                                className="flex lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] items-center justify-center mt-[1px] lg:w-[13px] xl:w-[16px] 2xl:w-[19px] 3xl:w-[22px]"
                                shape="icbRoundedBorder9"
                                size="smIcn"
                                variant="icbFillGreen60090"
                              >
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="flex items-center justify-center"
                                  alt="checkmark One One"
                                />
                              </Button>
                              <Text className="rowcheckmark" variant="body3">
                                Free Cancellation{" "}
                              </Text>
                            </Row>
                          </Column>
                        </List>
                        <Button
                          className="font-medium font-poppins lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A400 text-center w-[22%]"
                          shape="RoundedBorder8"
                          size="2xl"
                          variant="OutlineBlueA4001_2"
                        >
                          Select 3 rooms
                        </Button>
                      </Row>
                      <Text
                        className="absolute left-[0] top-[0] rowstar"
                        as="h6"
                        variant="h6"
                      >
                        Business Class Single{" "}
                      </Text>
                      <Text
                        className="absolute bottom-[34%] left-[0] rowstar"
                        as="h6"
                        variant="h6"
                      >
                        Business Class Single{" "}
                      </Text>
                      <Column className="absolute inset-x-[0] justify-start mx-[auto] top-[4%] w-[14%]">
                        <Text
                          className="font-inter text-gray_900 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
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
                              alt="star One"
                            />
                            <Text className="rowstar" variant="body2">
                              234
                            </Text>
                          </Row>
                        </Row>
                      </Column>
                      <Column className="absolute bottom-[9%] inset-x-[0] justify-start mx-[auto] w-[14%]">
                        <Text
                          className="font-inter text-gray_900 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
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
                              alt="star Two"
                            />
                            <Text className="rowstar" variant="body2">
                              234
                            </Text>
                          </Row>
                        </Row>
                      </Column>
                    </Stack>
                  </Row>
                  <Line className="absolute bg-bluegray_200 bottom-[48%] h-[0.5px] right-[0] rotate-[90deg] w-[77%]" />
                  <Line className="absolute bg-bluegray_200 lg:h-[152px] xl:h-[190px] 2xl:h-[213px] 3xl:h-[256px] right-[47%] top-[0] w-[1px]" />
                </Stack>
                <Line className="absolute bg-bluegray_200 bottom-[0] lg:h-[151px] xl:h-[189px] 2xl:h-[212px] 3xl:h-[255px] right-[47%] w-[1px]" />
                <Line className="absolute bg-bluegray_200 lg:h-[152px] xl:h-[190px] 2xl:h-[213px] 3xl:h-[256px] right-[23%] top-[0] w-[1px]" />
              </Stack>
              <Line className="absolute bg-bluegray_200 bottom-[0] lg:h-[151px] xl:h-[189px] 2xl:h-[212px] 3xl:h-[255px] right-[22%] w-[1px]" />
              <Button
                className="absolute bottom-[15%] font-medium font-poppins right-[4%] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[15%]"
                shape="RoundedBorder8"
                size="2xl"
                variant="FillBlueA400"
              >
                Selected 3 rooms
              </Button>
            </Stack>
          </Stack>
          <Button
            className="font-medium lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-blue_A400 text-center w-[14%]"
            shape="RoundedBorder8"
            size="2xl"
            variant="OutlineBlueA4001_2"
          >
            View more options
          </Button>
          <Stack
            className="bg-cover bg-repeat lg:h-[301px] xl:h-[377px] 2xl:h-[423px] 3xl:h-[508px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] pl-[1px] w-[93%]"
            style={{ backgroundImage: "url('images/img_group18.svg')" }}
          >
            <Stack className="absolute lg:h-[301px] xl:h-[377px] 2xl:h-[423px] 3xl:h-[508px] left-[2%] w-[98%]">
              <Stack className="absolute lg:h-[301px] xl:h-[377px] 2xl:h-[423px] 3xl:h-[508px] w-[100%]">
                <Row className="absolute items-center justify-between right-[2%] w-[98%]">
                  <Row className="items-start justify-evenly w-[24%]">
                    <Column className="justify-start lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
                      <Text
                        className="columnexecutivesuite"
                        as="h5"
                        variant="h5"
                      >
                        Executive Suite Pool View King Bed
                      </Text>
                      <Column className="justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[53%]">
                        <Row className="items-center py-[3px] w-[67%]">
                          <Img
                            src="images/img_user.svg"
                            className="user_Two"
                            alt="user Three"
                          />
                          <Text className="rowuser_two" variant="body5">
                            Sleeps 2
                          </Text>
                        </Row>
                        <Row className="items-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] py-[3px] w-[100%]">
                          <Img
                            src="images/img_folder.svg"
                            className="folder"
                            alt="folder One"
                          />
                          <Text className="rowfolder" variant="body5">
                            1 King size bed
                          </Text>
                        </Row>
                        <Row className="items-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:pt-[3px] xl:pt-[4px] 3xl:pt-[5px] 2xl:pt-[5px] w-[69%]">
                          <Img
                            src="images/img_videocamera.svg"
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] lg:w-[13px] xl:w-[16px] 2xl:w-[19px] 3xl:w-[22px]"
                            alt="videocamera One"
                          />
                          <Text className="rowvideocamera" variant="body5">
                            370 sq ft
                          </Text>
                        </Row>
                      </Column>
                      <Button className="bg-transparent font-medium lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-blue_A400 text-center underline w-[52%]">
                        Terms & conditions
                      </Button>
                    </Column>
                    <Line className="bg-bluegray_200 lg:h-[301px] xl:h-[377px] 2xl:h-[423px] 3xl:h-[508px] w-[1px]" />
                  </Row>
                  <Stack className="lg:h-[252px] xl:h-[315px] 2xl:h-[354px] 3xl:h-[425px] w-[74%]">
                    <Row className="absolute bottom-[0] items-start justify-between w-[100%]">
                      <List
                        className="gap-[0] min-h-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[17px] w-[20%]"
                        orientation="vertical"
                      >
                        <Column className="listgroup629">
                          <Row className="items-start w-[91%]">
                            <Button
                              className="flex lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] items-center justify-center lg:w-[13px] xl:w-[16px] 2xl:w-[19px] 3xl:w-[22px]"
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
                            <Text className="rowgroup629" variant="body3">
                              Non refundable
                            </Text>
                          </Row>
                          <Row className="items-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[17px] w-[78%]">
                            <Button
                              className="flex lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] items-center justify-center mt-[1px] lg:w-[13px] xl:w-[16px] 2xl:w-[19px] 3xl:w-[22px]"
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
                            <Text className="rowcheckmark" variant="body3">
                              Flexible Rate{" "}
                            </Text>
                          </Row>
                          <Row className="items-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[17px] w-[100%]">
                            <Button
                              className="flex lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] items-center justify-center mt-[1px] lg:w-[13px] xl:w-[16px] 2xl:w-[19px] 3xl:w-[22px]"
                              shape="icbRoundedBorder9"
                              size="smIcn"
                              variant="icbFillGreen60090"
                            >
                              <Img
                                src="images/img_checkmark.svg"
                                className="flex items-center justify-center"
                                alt="checkmark One Two"
                              />
                            </Button>
                            <Text className="rowcheckmark" variant="body3">
                              Free Cancellation{" "}
                            </Text>
                          </Row>
                        </Column>
                        <Column className="listgroup629">
                          <Row className="items-start w-[91%]">
                            <Button
                              className="flex lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] items-center justify-center lg:w-[13px] xl:w-[16px] 2xl:w-[19px] 3xl:w-[22px]"
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
                            <Text className="rowgroup629" variant="body3">
                              Non refundable
                            </Text>
                          </Row>
                          <Row className="items-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[17px] w-[78%]">
                            <Button
                              className="flex lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] items-center justify-center mt-[1px] lg:w-[13px] xl:w-[16px] 2xl:w-[19px] 3xl:w-[22px]"
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
                            <Text className="rowcheckmark" variant="body3">
                              Flexible Rate{" "}
                            </Text>
                          </Row>
                          <Row className="items-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[17px] w-[100%]">
                            <Button
                              className="flex lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] items-center justify-center mt-[1px] lg:w-[13px] xl:w-[16px] 2xl:w-[19px] 3xl:w-[22px]"
                              shape="icbRoundedBorder9"
                              size="smIcn"
                              variant="icbFillGreen60090"
                            >
                              <Img
                                src="images/img_checkmark.svg"
                                className="flex items-center justify-center"
                                alt="checkmark One Three"
                              />
                            </Button>
                            <Text className="rowcheckmark" variant="body3">
                              Free Cancellation{" "}
                            </Text>
                          </Row>
                        </Column>
                      </List>
                      <Column className="font-poppins items-center justify-start w-[22%]">
                        <Button
                          className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A400 text-center w-[100%]"
                          shape="RoundedBorder8"
                          size="2xl"
                          variant="OutlineBlueA4001_2"
                        >
                          Select 3 rooms
                        </Button>
                        <Button
                          className="font-medium lg:mt-[128px] xl:mt-[160px] 2xl:mt-[181px] 3xl:mt-[217px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A400 text-center w-[100%]"
                          shape="RoundedBorder8"
                          size="2xl"
                          variant="OutlineBlueA4001_2"
                        >
                          Select 3 rooms
                        </Button>
                      </Column>
                    </Row>
                    <Text
                      className="absolute left-[0] top-[0] rowstar"
                      as="h6"
                      variant="h6"
                    >
                      Business Class Single{" "}
                    </Text>
                    <Text
                      className="absolute bottom-[34%] left-[0] rowstar"
                      as="h6"
                      variant="h6"
                    >
                      Business Class Single{" "}
                    </Text>
                    <Column className="absolute inset-x-[0] justify-start mx-[auto] top-[4%] w-[14%]">
                      <Text
                        className="font-inter text-gray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
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
                            alt="star Three"
                          />
                          <Text className="rowstar" variant="body2">
                            234
                          </Text>
                        </Row>
                      </Row>
                    </Column>
                    <Column className="absolute bottom-[9%] inset-x-[0] justify-start mx-[auto] w-[14%]">
                      <Text
                        className="font-inter text-gray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
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
                            alt="star Four"
                          />
                          <Text className="rowstar" variant="body2">
                            234
                          </Text>
                        </Row>
                      </Row>
                    </Column>
                  </Stack>
                </Row>
                <Line className="absolute bg-bluegray_200 bottom-[48%] h-[0.5px] right-[0] rotate-[90deg] w-[77%]" />
                <Line className="absolute bg-bluegray_200 lg:h-[152px] xl:h-[190px] 2xl:h-[213px] 3xl:h-[256px] right-[46%] top-[0] w-[1px]" />
              </Stack>
              <Line className="absolute bg-bluegray_200 bottom-[0] lg:h-[150px] xl:h-[188px] 2xl:h-[211px] 3xl:h-[254px] right-[46%] w-[1px]" />
              <Line className="absolute bg-bluegray_200 lg:h-[152px] xl:h-[190px] 2xl:h-[213px] 3xl:h-[256px] right-[21%] top-[0] w-[1px]" />
            </Stack>
            <Line className="absolute bg-bluegray_200 bottom-[0] lg:h-[150px] xl:h-[188px] 2xl:h-[211px] 3xl:h-[254px] right-[21%] w-[1px]" />
          </Stack>
          <Button
            className="font-medium lg:mb-[19px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-blue_A400 text-center w-[14%]"
            shape="RoundedBorder8"
            size="2xl"
            variant="OutlineBlueA4001_2"
          >
            View more options
          </Button>
        </Column>
        <Column className="bg-gray_50 font-inter justify-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:pl-[3px] xl:pl-[4px] 3xl:pl-[5px] 2xl:pl-[5px] lg:py-[3px] xl:py-[4px] 3xl:py-[5px] 2xl:py-[5px] rounded-radius8 w-[81%]">
          <Text className="columnwhatsnearby" as="h6" variant="h6">
            Whats nearby
          </Text>
          <Line className="bg-bluegray_200 h-[0.5px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]" />
          <Row className="items-center lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:my-[17px] xl:my-[22px] 2xl:my-[25px] 3xl:my-[29px] w-[96%]">
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
        <Column className="bg-gray_50 font-inter justify-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius8 w-[81%]">
          <Text
            className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] columnmostpopularbu"
            as="h6"
            variant="h6"
          >
            Hygiene Policies
          </Text>
          <Line className="bg-bluegray_200 h-[0.5px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
          <Text
            className="font-normal lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:mb-[23px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[29px] not-italic text-gray_800 w-[81%]"
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
        <Column className="bg-gray_50 font-inter justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius8 w-[81%]">
          <Column className="justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
            <Text className="columnamentities_one" as="h6" variant="h6">
              About this Property
            </Text>
            <Line className="bg-bluegray_200 h-[0.5px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
          </Column>
          <Column className="justify-start xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mb-[9px] 2xl:ml-[10px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[29px] w-[85%]">
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
        <Column className="bg-gray_50 font-inter justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius8 w-[81%]">
          <Column className="justify-start 2xl:mt-[10px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
            <Text className="columnamentities_one" as="h6" variant="h6">
              Hotel Policies
            </Text>
            <Line className="bg-bluegray_200 h-[0.5px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]" />
          </Column>
          <Column className="justify-start lg:mb-[23px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[23px] w-[84%]">
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
              className="font-normal lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic text-gray_800 w-[99%]"
              variant="body5"
            >
              This property offers transfers from the train station (surcharges
              may apply); to arrange pick-up, guests must contact the property
              24 hours prior to arrival, using the contact information on the
              booking confirmation{" "}
            </Text>
          </Column>
        </Column>
        <Column className="bg-blue_100 font-poppins items-center justify-end lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[59px] lg:p-[31px] xl:p-[39px] 2xl:p-[44px] 3xl:p-[52px] w-[100%]">
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
                      alt="imageThree Three"
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
                        alt="star Seven"
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

export default ScreenOnePage;
