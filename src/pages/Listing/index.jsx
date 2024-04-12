import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, GoogleMap, SelectBox, Input, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LandingPageCard from "../../components/LandingPageCard";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ListingPage() {
  const [searchBarValue8, setSearchBarValue8] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Investorbloc</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto bg">
        <div className="flex flex-col items-center justify-start w-full gap-[20px]">
        <img src="images/logo (2).svg" alt="logo" className="zoome"></img>
          <Header className="flex justify-center items-center w-full md:h-auto p-[11px] bg" />
          <div className="w-full">
          <img src="images/pipo.svg" className="wider"></img>
          <div className="abs">
            <h1 className="abs1">
            Unlock unparalleled real estate <br></br>solutions tailored to your needs.
          </h1>
          <p className="abs2">Discover a comprehensive suite of real estate services meticulously crafted to cater <br></br>to your unique needs and aspirations.From expert property <br></br>management to seamless transactions, we are your trusted partner every step of the way, ensuring unparalleled satisfaction and success in your real estate endeavors.</p>
          </div>
          </div>
          <h1 className="cp">Elite Services</h1>
          <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start h-[700px] w-full md:h-auto gap-[53px] md:px-5 max-w-[1200px]">
            <div className="flex flex-row justify-center w-full pt-[5px]">
              <div className="flex flex-col items-center justify-start w-full gap-[17px]">
                <div className="flex flex-row sm:flex-col justify-between items-start w-full sm:gap-10">
                  <Heading size="4xl" as="h2" className="tracking-[-0.72px] c4">
                    
                  </Heading>
                  <div className="flex flex-row justify-start items-center mt-[7px] gap-2 sm:mt-0">
                    <Heading size="md" as="h3" className="mt-0.5 !text-orange-A700">
                      
                    </Heading>
                    
                  </div>
                </div>
                
              </div>
            </div>
            <div className="justify-center w-full gap-40 grid-cols-2 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
              <div className="card1 flex flex-col items-center justify-start ms-12">
                <br></br>
                <h1 className="text-center pure">Property Management</h1>
                <br></br>
                <p className="text-center paddd">Our property management service is the cornerstone of our commitment to excellence in real estate. With a keen eye for detail and a proactive approach, we handle every aspect of property management with precision and care. From tenant screening and lease agreements to maintenance and financial reporting, we ensure your property operates smoothly and efficiently. Our dedicated team is equipped with the expertise and resources to maximize your investment's potential while providing tenants with a with a superior living experience. Trust us to safeguard your property and elevate its value, allowing you to enjoy peace of mind and optimal returns.</p>
                <div className="justify center items-center">
                  <br></br>
                <Button shape="round" className="mb-[23px] sm:px-5 font-semibold min-w-[138px] sm:min-w-full">
                Get Started
              </Button>
              </div>
              </div>
              <div className="card1 flex flex-col items-center justify-start">
                <br></br>
              <h1 className="text-center pure">Property Buy & Sell</h1>
              <br></br>
              <p className="text-center paddd">Embark on a seamless journey of buying and selling properties with our expert guidance and unparalleled support.  we offer comprehensive services tailored to your specific needs. From market analysis and property valuation to negotiation and closing, our experienced team is dedicated to maximizing your returns and simplifying the transaction process. Trust us to navigate the complexities of the real estate market with precision and and integrity, ensuring a smooth and successful experience from start to finish.With our commitment to excellence and personalized attention, your property transactions are in capable hands, empowering you to achieve your real estate goals with confidence.</p>
                <div className="justify center items-center">
                <Button shape="round" className="mb-[23px] sm:px-5 font-semibold min-w-[138px] sm:min-w-full">
                Get Started
              </Button>
              </div>
              </div>
            </div>
          </div>
        .</div>
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
        </div>
        <footer className="flex justify-center items-center w-full px-14 py-[44px] md:p-5 bg">
          <div className="flex flex-col items-center justify-center w-full mt-[5px] gap-[5px] mx-auto max-w-[1200px]">
            <div className="flex flex-row md:flex-col justify-start items-center w-full gap-px md:gap-5">
              <div className="flex flex-col items-center justify-start w-[29%] md:w-full ">
                <div className="flex flex-row justify-start items-start w-full gap-[11px]">
                  <Img src="images/logo (2).svg" alt="realestateone" className="h-[240px] w-[240px] pr-8" />
                 
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-7">
                  <Heading as="h6" className="!leading-[160%] pim pl-4">
                    <>
                      Faridabad,Haryana
                      <br />
                     
                    </>
                  </Heading>
                  <div className="flex flex-col items-start justify-center gap-2">
                    <Heading as="h6" className="mt-px pim pl-4">
                    +91 84487 38225
                    </Heading>
                    <Heading as="h6" className="pim pl-4">info@mail.com</Heading>
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
                  <Heading size="md" as="h6" className="pim">
                    Pages
                  </Heading>
                  <div className="flex flex-col items-start justify-start w-full gap-[15px]">
                    <Heading as="h6" className="pim">Home</Heading>
                    <Heading as="h6" className="pim">About Us</Heading>
                    <Heading as="h6" className="pim">Elite Serices</Heading>
                    <Heading as="h6" className="pim">Contact Us</Heading>
                   
                  </div>
                </div>
                
                <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
                  <Heading size="md" as="h6" className="pim">
                    Services{" "}
                  </Heading>
                  <div className="flex flex-col items-start justify-center w-full gap-[15px]">
                    <Heading as="h6" className="mt-0.5 pim">
                     property Buy and Sell
                    </Heading>
                    <Heading as="h6" className="pim">Property Management</Heading>
                    <a href="#">
                      <Heading as="h6" className="pim">Privacy Policy</Heading>
                    </a>
                    <Heading as="h6"></Heading>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
                  <Heading size="md" as="h6" className="pim">
                  © 2022. All rights reserved.
                  </Heading>
                  <div className="flex flex-col items-start justify-center w-full gap-[15px]">
                   
                  </div>
                </div>
              </div>
            </div>
            <Heading as="h6"></Heading>
          </div>
        </footer>
      </div>
    </>
  );
}
