import React from "react";
import { Heading, Img, Text } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-row md:flex-col justify-start items-center w-full mt-[5px] gap-px mx-auto md:gap-5 md:px-5 max-w-[1200px]">
        <div className="flex flex-col items-center justify-start w-[29%] md:w-full gap-[30px]">
          <div className="flex flex-row justify-start items-start w-full gap-[11px]">
            <Img src="images/logo (2).svg" alt="realestateone" className="h-[240px] w-[240px]" />
           
          </div>
          <div className="flex flex-col items-start justify-start w-full gap-7">
            <Heading as="h6" className="!leading-[140%] pim">
              <>
              Faridabad, Haryana
                <br />
                +91 84487 38225
                <br></br>
info@mail.com 
              </>
            </Heading>
            
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
              
            </Heading>
            <div className="flex flex-col items-start justify-start w-full gap-[15px]">
            
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px] pim">
            <Heading size="md" as="h6" className="pim">
              Pages
            </Heading>
            <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[15px] pim">
              <Heading as="h6" className="pim">Home</Heading>
              <Heading as="h6" className="pim">About Us</Heading>
              <Heading as="h6" className="pim">Elite Services</Heading>
              <Heading as="h6" className="pim">Contact Us</Heading>
              
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
            <Heading size="md" as="h6" className="pim">
             Services
            </Heading>
            <div className="flex flex-col items-start justify-center w-full gap-[15px]">
              
              <Heading as="h6"></Heading>
              <Heading as="h6" className="pim">Property Buy And Sell</Heading>
              <Heading as="h6" className="pim">Property Management</Heading>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
            <Heading size="md" as="h6">
              
            </Heading>
            <div className="flex flex-col items-start justify-center w-full gap-[15px]">
              <Heading as="h6" className="mt-0.5">
               
              </Heading>
              
            </div>
          </div>
        </div>
      </div>
      <Heading as="h6" className="ml-[45px] md:ml-5 pim">
        © 2022. All rights reserved.
      </Heading>
    </footer>
  );
}
