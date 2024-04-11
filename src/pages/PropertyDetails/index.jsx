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
        <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] md:p-5 bg-white-A700" />
      </div>
    </>
  );
}
