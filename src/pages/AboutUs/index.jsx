import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>Investorbloc</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[50px] bg">
        
      <img src="images/logo (2).svg" alt="logo" className="zoome"></img>
     
        <Header className="flex justify-center items-center w-full md:h-auto p-[19px] bg" />
        <div className="flex flex-col items-center justify-start w-full gap-[100px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[38px] md:px-5 max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-full gap-4">
                <Heading size="6xl" as="h1" className="tracking-[-1.08px] text-center pim">
                  <>
                    Reimagining real estate to <br />
                    make it easier to unlock.
                  </>
                </Heading>
                <Text as="p" className="text-center pim">
                  <>
                  Experience a reimagined approach to real estate, crafted to effortlessly unlock the doors to your dreams. With innovative solutions and personalized service, we transform the journey into a delightful adventure, guiding you every step towards your perfect home. Let us redefine real estate for you, making it a joyous exploration filled with excitement and possibility.
                  </>
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-6">
                <div className="flex flex-row sm:flex-col justify-start w-full gap-6 sm:gap-5">
                  <Img
                    src="images/img_rectangle_5592.png"
                    alt="image"
                    className="w-[66%] md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_rectangle_5593.png"
                    alt="image_one"
                    className="w-[32%] md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                </div>
                <div className="flex flex-row sm:flex-col justify-start w-full gap-6 sm:gap-5">
                  <Img
                    src="images/img_rectangle_5595.png"
                    alt="image_two"
                    className="w-[32%] md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/Villa.png"
                    alt="image_three"
                    className="w-[66%] md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
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
          </div>
          <div className="flex flex-row justify-start w-full pl-[120px] pr-14 md:px-5 view">
         
            <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 max-w-[1147px]">
            <Img
                src="images/founder.svg"
                alt="image_four"
                className="w-[47%] md:w-full md:h-[589px] object-cover rounded-[10px]"
              />
              <div className="flex flex-col items-center justify-start w-[47%] md:w-full gap-14">
                <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                  <Heading size="4xl" as="h2" className="tracking-[-0.72px] pim">
                    A note from our founders.
                  </Heading>
                  <Text as="p" className="pim">
                  Embark on your real estate journey with us, where every step is guided by passion, expertise, and a commitment to exceeding your expectations.
                  </Text>
                </div>
                <div className="flex flex-col w-full gap-[30px]">
                  <div className="flex flex-row sm:flex-col justify-start items-start w-full gap-[26px] sm:gap-5">
                    
                    <div className="flex flex-col items-start justify-start w-[89%] sm:w-full gap-4">
                      <Heading size="4xl" as="h2" className="tracking-[-0.72px] pim">
                        Our Vision is Simple
                      </Heading>
                      <Text as="p" className="pim">
                      To revolutionize the real estate landscape by fostering meaningful connections between people and properties, empowering individuals to embark on unforgettable journeys of homeownership and investment. We strive to create a world where every dream finds its perfect address, where trust and transparency form the cornerstone of every transaction, and where excellence is the standard in everything we do.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center w-full gap-[9px]">
                  <Heading size="lg" as="h3" className="tracking-[-0.40px] pim">
                  Parveen Raghav
                  </Heading>
                  
                </div>
                  
                </div>
              </div>
             
            </div>
          </div>
          <div className="flex flex-row justify-start w-full pl-[120px] pr-14 md:px-5 view1">
            .<div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 max-w-[1147px] order-1">
            <Img
                src="images/founder.svg"
                alt="image_four"
                className="w-[47%] md:w-full md:h-[589px] object-cover rounded-[10px] order-1"
              />
              <div className="flex flex-col items-center justify-start w-[47%] md:w-full gap-14">
                <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                  <Heading size="4xl" as="h2" className="tracking-[-0.72px] pim">
                    A note from our founders.
                  </Heading>
                  <Text as="p" className="pim">
                  Embark on your real estate journey with us, where every step is guided by passion, expertise, and a commitment to exceeding your expectations.
                  </Text>
                </div>
                <div className="flex flex-col w-full gap-[30px]">
                  <div className="flex flex-row sm:flex-col justify-start items-start w-full gap-[26px] sm:gap-5">
                    
                    <div className="flex flex-col items-start justify-start w-[89%] sm:w-full gap-4">
                      <Heading size="4xl" as="h2" className="tracking-[-0.72px] pim">
                        Our Vision is Simple
                      </Heading>
                      <Text as="p" className="pim">
                      To revolutionize the real estate landscape by fostering meaningful connections between people and properties, empowering individuals to embark on unforgettable journeys of homeownership and investment. We strive to create a world where every dream finds its perfect address, where trust and transparency form the cornerstone of every transaction, and where excellence is the standard in everything we do.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center w-full gap-[9px]">
                  <Heading size="lg" as="h3" className="tracking-[-0.40px] pim">
                  Parveen Raghav
                  </Heading>
                  
                </div>
                  
                </div>
              </div>
              
            </div>
          .</div>
          <div className="flex flex-row justify-end w-full pl-14 pr-[120px] md:px-5">
            <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 max-w-[1150px]">
              <Img
                src="images/founder1.svg"
                alt="image_five"
                className="w-[44%] md:w-full md:h-[589px] object-cover rounded-[10px]"
              />
              <div className="flex flex-col items-center justify-start w-[44%] md:w-full gap-14">
                <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-3.5">
                  <Heading size="4xl" as="h2" className="tracking-[-0.72px] pim">
                    Our vision is simple.
                  </Heading>
                  <Text as="p" className="pim">
                    <>
                    Our vision is to be the catalyst for positive change in the real estate industry, championing inclusivity, innovation, and environmental stewardship. We envision a future where every property transaction is infused with integrity, where diversity is celebrated, and where sustainability is at the forefront of every decision, creating enduring value for both present and future generations.
                    </>
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-center w-full gap-[9px]">
                  <Heading size="lg" as="h3" className="tracking-[-0.40px] pim">
                  Jaberjeet Khatana
                  </Heading>
                  
                </div>
              </div>
            </div>
          </div>
          
            
          <div className="flex flex-row justify-center w-full px-14 py-[120px] md:p-5 bg-gray-400">
            <div className="flex flex-col items-center justify-start w-full gap-[18px] max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-full gap-[60px]">
                <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                  
                 
                </div>
                
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[30px] p-10 sm:p-5 bg-gray-400_01 rounded-[10px]">
                <div className="flex flex-col items-center justify-start w-[54%] md:w-full pt-[3px] gap-[5px]">
                  <Heading size="3xl" as="h3" className="tracking-[-0.56px]">
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
        </div>
        <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] md:p-5 bg-white-A700" />
      </div>
    </>
  );
}
