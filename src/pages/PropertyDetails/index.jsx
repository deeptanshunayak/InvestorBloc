import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, TextArea, Radio, RadioGroup, Text, RatingBar, GoogleMap } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LandingPageCard from "../../components/LandingPageCard";

export default function PropertyDetailsPage() {
  return (
    <>
      <Helmet>
        <title>Investorbloc</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto bg">
        <div className="flex flex-col items-center justify-start w-full gap-[60px]">
          <div className="flex flex-col items-center justify-start w-full gap-10">
          <img src="images/logo (2).svg" alt="logo" className="zoome"></img>
            <Header className="flex justify-center items-center w-full md:h-auto p-[19px] bg" />
           
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row md:flex-col justify-start items-start w-full gap-6 md:gap-5 md:px-5 max-w-[1200px]">
                <div className="flex flex-col items-center justify-start w-[66%] md:w-full gap-6">
                 
                  
                  
                </div>
               
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start h-[2200px] w-full md:h-auto gap-[53px] md:px-5 max-w-[1200px]">
            <div className="flex flex-row justify-center w-full pt-[5px]">
              <div className="flex flex-col items-center justify-start w-full gap-[17px]">
                <div className="flex flex-row sm:flex-col justify-between items-start w-full sm:gap-10">
                  
                  <div className="flex flex-row justify-start items-center mt-[7px] gap-2 sm:mt-0">
                    
                   
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
