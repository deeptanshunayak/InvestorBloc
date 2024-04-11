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
            <h1>
          A recognized leader in <br></br>Services Industry
          </h1>
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
              <div className="card1 flex flex-col items-center justify-start">
                <h1 className="text-center pure">Property Management</h1>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam adipisci quae debitis et voluptate sapiente odit labore deleniti soluta nobis, ullam modi sunt quidem eius id provident consequuntur esse atque?</p>
                <div className="justify center items-center">
                <Button shape="round" className="mb-[23px] sm:px-5 font-semibold min-w-[138px] sm:min-w-full">
                Get Started
              </Button>
              </div>
              </div>
              <div className="card1 flex flex-col items-center justify-start">
              <h1 className="text-center pure">Property Buy & Sell</h1>
              <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam adipisci quae debitis et voluptate sapiente odit labore deleniti soluta nobis, ullam modi sunt quidem eius id provident consequuntur esse atque?</p>
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
        <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] md:p-5 bg-white-A700" />
      </div>
    </>
  );
}
