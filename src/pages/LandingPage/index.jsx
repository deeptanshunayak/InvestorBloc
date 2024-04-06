import React,{ useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text, Button, Input } from "../../components";
import Header from "../../components/Header";
import LandingPageCard from "../../components/LandingPageCard";

const images =["images/layout.svg","images/img1.svg","images/img3.svg","images/img4.svg"];
export default function LandingPagePage() {
  const [currentImage, setCurrentImage] = useState(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 800)
    
    return () => clearInterval(intervalId);
}, []);

  return (
    <>
      <Helmet>
        <title>Investorbloc</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[99px] overflow-auto bg">
        <div className="flex flex-col items-center justify-start w-full">
        <img src="images/logo (2).svg" alt="logo" className="zoome"></img>
          <Header className="flex justify-center items-center w-full md:h-auto p-[11px] bg" />
          <div className="flex flex-row justify-end w-full py-[20px] md:py-5 bg">
            <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 md:px-3 max-w-[1396px]">
              <div className="flex flex-col items-center justify-start w-[44%] md:w-full gap-10">
                <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                  <Heading size="5xl" as="h1" className="tracking-[-0.92px] padd1">
                    <>
                      <p className="c2 fade-in">We treat your property</p>
                      
                      <p className="c1 fade-in">as A PALACE</p>
                    </>
                  </Heading>
                  <Text size="md" as="p">
                   
                  </Text>
                </div>
               
              </div>
              <div className="flex flex-row justify-start">
                <Img src={currentImage} alt="image_one" className="w-[89%] md:h-auto sm:w-full object-cover"/>
               
                
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row md:flex-col justify-start w-full gap-6 md:gap-5 md:px-5 max-w-[1200px]">
            <div className="flex flex-col items-start justify-center w-[49%] md:h-auto gap-[49px] p-[50px] md:p-5 bg-red-100 rounded-[20px] sm:w-full">
              <div className="flex flex-col items-center justify-start mt-[23px] gap-[15px]">
                <Heading size="4xl" as="h2" className="tracking-[-0.72px] fade-in">
                  Simple & easy way to find your dream Appointment
                </Heading>
                <Text as="p" className="!text-gray-900 fade-in">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.{" "}
                </Text>
              </div>
              <Button shape="round" className="mb-[23px] sm:px-5 font-semibold min-w-[138px] sm:min-w-full">
                Get Started
              </Button>
            </div>
            <div className="w-[49%] md:w-full gap-6 grid-cols-2 sm:grid-cols-1 sm:gap-5 grid">
              <div className="flex flex-col items-start justify-center w-full md:h-auto gap-5 p-[30px] sm:p-5 bg-deep_orange-50 rounded-[20px]">
                <Img src="images/img_search_status.svg" alt="image" className="h-[30px] w-[30px] mt-[7px]" />
                <Heading size="3xl" as="h3" className="mb-[7px] tracking-[-0.56px]">
                  <>
                    Search <br />
                    your location
                  </>
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center w-full md:h-auto gap-5 p-[30px] sm:p-5 bg-deep_orange-50 rounded-[20px]">
                <Img src="images/img_eye.svg" alt="eye_one" className="h-[30px] w-[30px] mt-[7px]" />
                <Heading size="3xl" as="h4" className="mb-[7px] tracking-[-0.56px] fade-in">
                  <>
                    Visit <br />
                    Appointment
                  </>
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center w-full md:h-auto gap-5 p-[30px] sm:p-5 bg-deep_orange-50 rounded-[20px]">
                <Img src="images/img_wallet.svg" alt="wallet_one" className="h-[30px] w-[30px] mt-[7px]" />
                <Heading size="3xl" as="h5" className="mb-[7px] tracking-[-0.56px] fade-in">
                  <>
                    Get your <br />
                    dream house
                  </>
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center w-full md:h-auto gap-5 p-[30px] sm:p-5 bg-deep_orange-50 rounded-[20px]">
                <Img src="images/img_emoji_happy.svg" alt="emojihappy_one" className="h-[30px] w-[30px] mt-[7px]" />
                <Heading size="3xl" as="h6" className="mb-[7px] tracking-[-0.56px] fade-in">
                  <>
                    Enjoy your <br />
                    Appointment
                  </>
                </Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row md:flex-col w-full gap-[100px] p-[50px] md:gap-10 md:p-5 bg-gray-50">
            <div className="flex flex-col items-start justify-start w-[7%] md:w-full ml-[70px] gap-[18px] md:ml-5">
             
              <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                <Heading size="5xl" as="h2" className="tracking-[-0.92px]">
                 
                </Heading>
                <Heading size="lg" as="h3" className="!text-blue_gray-600 tracking-[-0.40px]">
                  <>
                    
                  </>
                </Heading>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[17%] md:w-full gap-[18px]">
              <Button color="white_A700" size="3xl" shape="circle" className="w-[60px]">
                <Img src="images/img_frame_orange_a700.svg" />
              </Button>
              <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                <Heading size="5xl" as="h4" className="tracking-[-0.92px]">
                  1000+
                </Heading>
                <Heading size="lg" as="h5" className="!text-blue_gray-600 tracking-[-0.40px]">
                  Properties for Buy & sell Successfully
                </Heading>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[17%] md:w-full gap-[18px]">
              <Button color="white_A700" size="3xl" shape="circle" className="w-[60px]">
                <Img src="images/img_icon.svg" />
              </Button>
              <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                <Heading size="5xl" as="h6" className="tracking-[-0.92px]">
                  50
                </Heading>
                <Heading size="lg" as="h5" className="!text-blue_gray-600 tracking-[-0.40px]">
                  <>
                    Daily completed <br />
                    transactions
                  </>
                </Heading>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[17%] md:w-full mb-[26px] mr-[70px] gap-[18px] md:mr-5">
              <Button color="white_A700" size="3xl" shape="circle" className="w-[60px]">
                <Img src="images/img_icon_orange_a700.svg" />
              </Button>
              <div className="flex flex-col items-start justify-start w-full gap-4">
                <Heading size="5xl" as="h1" className="tracking-[-0.92px]">
                  100+
                </Heading>
                <Heading size="lg" as="h5" className="!text-blue_gray-600 tracking-[-0.40px]">
                  Reagular Clients
                </Heading>
              </div>
            </div>
          .</div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start h-[2200px] w-full md:h-auto gap-[53px] md:px-5 max-w-[1200px]">
            <div className="flex flex-row justify-center w-full pt-[5px]">
              <div className="flex flex-col items-center justify-start w-full gap-[17px]">
                <div className="flex flex-row sm:flex-col justify-between items-start w-full sm:gap-10">
                  <Heading size="4xl" as="h2" className="tracking-[-0.72px] c4">
                    Featured Properties
                  </Heading>
                  <div className="flex flex-row justify-start items-center mt-[7px] gap-2 sm:mt-0">
                    <Heading size="md" as="h3" className="mt-0.5 !text-orange-A700">
                      Explore All
                    </Heading>
                    <Img src="images/img_icon_24px_v.svg" alt="icon24pxv_one" className="h-[24px] w-[24px]" />
                  </div>
                </div>
                
              </div>
            </div>
            <div className="justify-center w-full gap-40 grid-cols-2 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
              <LandingPageCard className="flex flex-col items-center justify-start w-full" />
              <LandingPageCard
                imageOne="images/img_image_3.png"
                className="flex flex-col items-center justify-start w-full"
              />
              <LandingPageCard
                imageOne="images/img_image_2.png"
                className="flex flex-col items-center justify-start w-full"
              />
              <LandingPageCard
                imageOne="images/img_image_3.png"
                className="flex flex-col items-center justify-start w-full"
              />
              <LandingPageCard
                imageOne="images/img_image_4.png"
                className="flex flex-col items-center justify-start w-full"
              />
              <LandingPageCard
                imageOne="images/img_image_5.png"
                className="flex flex-col items-center justify-start w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full px-14 py-[120px] md:p-5 bg-gray-50_01">
          <div className="flex flex-col items-center justify-start w-full gap-[150px] max-w-[1200px]">
            <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
              <div className="flex flex-col items-start justify-start w-[47%] md:w-full gap-[58px]">
                <div className="flex flex-col items-center justify-start gap-[19px]">
                  <Heading size="4xl" as="h2" className="tracking-[-0.72px]">
                    Simple & easy way to find your dream Appointment
                  </Heading>
                  <Text as="p">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, when our
                    power of choice is untrammelled and when nothing prevents our being able to do what we like best,
                    every pleasure is to be welcomed.
                  </Text>
                </div>
                <Button shape="round" className="sm:px-5 font-semibold min-w-[138px] sm:min-w-full">
                  Get Started
                </Button>
              </div>
              <div className="flex flex-row sm:flex-col justify-start w-[47%] md:w-full gap-5 sm:gap-5">
                <div className="flex flex-col items-center justify-start w-[49%] sm:w-full gap-4">
                  <Img
                    src="images/img_rectangle_18.png"
                    alt="image_two"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_rectangle_21.png"
                    alt="image_three"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[49%] sm:w-full gap-4">
                  <Img
                    src="images/img_rectangle_19.png"
                    alt="image_four"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_rectangle_20.png"
                    alt="image_five"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
              <Img
                src="images/img_rectangle_20_589x521.png"
                alt="image_six"
                className="w-[44%] md:w-full md:h-[589px] object-cover rounded-[10px]"
              />
              <div className="flex flex-col items-start justify-start w-[44%] md:w-full gap-[60px]">
                <div className="flex flex-col items-center justify-start w-full gap-[18px]">
                  <div className="flex flex-col items-center justify-start w-full gap-[19px]">
                    <Heading size="4xl" as="h3" className="tracking-[-0.72px]">
                      Best rated host on popular rental sites
                    </Heading>
                    <Text as="p">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, when
                      our power of choice is untrammelled.
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-3">
                    <div className="flex flex-row justify-start items-center w-full gap-3.5 py-0.5 sm:gap-3.5">
                      <Img src="images/img_icon_check.svg" alt="iconcheck_one" className="h-[24px] w-[24px]" />
                      <Heading size="md" as="h4" className="!font-semibold">
                        Find excellent deals
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-3.5 sm:gap-3.5">
                      <Img src="images/img_icon_check.svg" alt="iconcheck_three" className="h-[24px] w-[24px]" />
                      <Heading size="md" as="h5" className="mt-[5px] !font-semibold">
                        Friendly host & Fast support
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-3.5 sm:gap-3.5">
                      <Img src="images/img_icon_check.svg" alt="iconcheck_five" className="h-[24px] w-[24px]" />
                      <Heading size="md" as="h6" className="mt-[5px] !font-semibold">
                        Secure payment system
                      </Heading>
                    </div>
                  </div>
                </div>
                <Button shape="round" className="sm:px-5 font-semibold min-w-[134px] sm:min-w-full">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-row justify-center w-full px-14 py-[120px] md:p-5 bg-gray-400">
          <div className="flex flex-col items-center justify-start w-full gap-[118px] max-w-[1200px]">
            
            <div className="flex flex-col items-center justify-start w-full gap-[30px] p-10 sm:p-5 bg-gray-600_01 rounded-[10px]">
              <div className="flex flex-col items-center justify-start w-[54%] md:w-full pt-[3px] gap-[5px]">
                <Heading size="3xl" as="h3" className="tracking-[-0.56px] text-center">
                  For Recent Update, News.
                </Heading>
                <Text as="p" className="!text-gray-900 text-center">
                  We helps businesses customize, automate and scale up their ad production and delivery.
                </Text>
              </div>
              <div className="flex flex-row sm:flex-col justify-start w-[99%] md:w-full gap-2 sm:gap-5">
              <Input
                    color="gray_50_02"
                    size="sm"
                    shape="round"
                    type="email"
                    name="email"
                    placeholder="Enter your Name"
                    className="w-[70%] md:w-full font-semibold"
                  />
                  <Input
                    color="gray_50_02"
                    size="sm"
                    shape="round"
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    className="w-[70%] md:w-full font-semibold"
                  />
                  <Input
                    color="gray_50_02"
                    size="sm"
                    shape="round"
                    type="email"
                    name="email"
                    placeholder="Enter your mobile number"
                    className="w-[78%] md:w-full font-semibold"
                  />
                   <Input
                    color="gray_50_02"
                    size="sm"
                    shape="round"
                    type="email"
                    name="email"
                    placeholder="Select your Query"
                    className="w-[71%] md:w-full font-semibold"
                  />
                  <Button shape="round" className="sm:px-5 font-semibold min-w-[126px]">
                    Submit
                  </Button>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full px-14 py-[74px] md:p-5 bg-white-A700">
          <div className="flex flex-col items-center justify-center w-full mt-[5px] gap-[115px] mx-auto max-w-[1200px]">
            <div className="flex flex-row md:flex-col justify-start items-center w-full gap-px md:gap-5">
              <div className="flex flex-col items-center justify-start w-[29%] md:w-full gap-[43px]">
                <div className="flex flex-row justify-start items-start w-full gap-[11px]">
                  <Img src="images/img_real_estate_1.svg" alt="realestateone" className="h-[40px] w-[40px]" />
                  <Text size="md" as="p" className="mt-[5px] !text-orange-A700 !font-markoone">
                    Relasto
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-7">
                  <Heading as="h6" className="!leading-[160%]">
                    <>
                      Haryana
                      <br />
                     
                    </>
                  </Heading>
                  <div className="flex flex-col items-start justify-center gap-2">
                    <Heading as="h6" className="mt-px">
                      +(123) 456-7890
                    </Heading>
                    <Heading as="h6">info@mail.com</Heading>
                  </div>
                  <div className="flex flex-row justify-start w-full gap-3">
                    <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                      <Img src="images/img_icon_facebook.svg" alt="iconfacebook" className="h-[30px] w-[30px]" />
                    </div>
                    <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                      <Img src="images/img_icon_twitter.svg" alt="icontwitter_one" className="h-[30px] w-[30px]" />
                    </div>
                    <Img src="images/img_icon_instragram.svg" alt="iconinstragram" className="h-[30px] w-[30px]" />
                    <Img src="images/img_icon_linked_in.svg" alt="iconlinkedin" className="h-[30px] w-[30px]" />
                    <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                      <Img src="images/img_icon_youtube.svg" alt="iconyoutube_one" className="h-[30px] w-[30px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-between items-center w-[72%] md:w-full md:gap-10">
                <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
                  <Heading size="md" as="h6">
                    Features
                  </Heading>
                  <div className="flex flex-col items-start justify-start w-full gap-[15px]">
                    <Heading as="h6">Home v1</Heading>
                    <Heading as="h6">Home v2</Heading>
                    <Heading as="h6">About</Heading>
                    <Heading as="h6">Contact</Heading>
                    <Heading as="h6">Search</Heading>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
                  <Heading size="md" as="h6">
                    Information
                  </Heading>
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[15px]">
                    <Heading as="h6">Listing v1</Heading>
                    <Heading as="h6">Listing v2</Heading>
                    <Heading as="h6">Property Details</Heading>
                    <Heading as="h6">Agent List</Heading>
                    <Heading as="h6">Agent Profile</Heading>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
                  <Heading size="md" as="h6">
                    Documentation{" "}
                  </Heading>
                  <div className="flex flex-col items-start justify-center w-full gap-[15px]">
                    <Heading as="h6" className="mt-0.5">
                      Blog
                    </Heading>
                    <Heading as="h6">FAQ</Heading>
                    <a href="#">
                      <Heading as="h6">Privacy Policy</Heading>
                    </a>
                    <Heading as="h6">License</Heading>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
                  <Heading size="md" as="h6">
                    Others
                  </Heading>
                  <div className="flex flex-col items-start justify-center w-full gap-[15px]">
                    <a href="#" className="mt-0.5">
                      <Heading as="h6">Log in</Heading>
                    </a>
                    <Heading as="h6">Enter OTP</Heading>
                    <Heading as="h6">New Password</Heading>
                    <a href="#">
                      <Heading as="h6">Reset Password</Heading>
                    </a>
                    <a href="#">
                      <Heading as="h6">Create Account</Heading>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Heading as="h6">© 2022. All rights reserved.</Heading>
          </div>
        </footer>
      </div>
    </>
  );
}
