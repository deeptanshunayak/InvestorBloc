import React from "react";
import { CloseSVG } from "../../assets/images";
import { Button, Input, Img, Heading, Text } from "./..";

export default function Header({ ...props }) {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    
    <header {...props}>
     
      <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-[1200px]">
        
        <div className="flex flex-row justify-start items-start gap-[25px]">
       
        </div>
        <div className="flex flex-row sm:flex-col justify-center items-center w-[61%] md:w-full sm:gap-10">
          <div className="flex flex-row w-[94%] sm:w-full gap-10">
          
            <div className="flex flex-row justify-center items-start w-[25%] gap-1.5">
              <Heading as="h6" className="c3 fade-in">< a href="/">Home</a></Heading>
              
            </div>
            
            <div className="flex flex-row justify-center items-start w-[25%] gap-1.5">
              <Heading as="h6" className="c3 fade-in"><a href="/aboutus">About Us</a></Heading>
              
            </div>
            <div className="flex flex-row justify-center items-start w-[35%] ">
              <Heading as="h6" className="c3 fade-in">< a href="/Elite">Elite Services</a></Heading>
              
            </div>
            <div className="flex flex-row justify-center items-start w-[35%] ">
              <Heading as="h6" className="c3 fade-in">< a href="#contact">Contact Us</a></Heading>
              
            </div>
          </div>
          
         
          </div>
        
        <div className="flex flex-row justify-start items-center w-[9%] md:w-full gap-2.5">
         
         
        </div>
      </div>
    </header>
  );
}
