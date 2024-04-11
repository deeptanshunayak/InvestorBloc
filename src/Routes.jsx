import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LandingPage from "pages/LandingPage";
import AboutUs from "pages/AboutUs";
import Listing from "pages/Listing";
import ListingMapView from "pages/ListingMapView";
import PropertyDetails from "pages/PropertyDetails";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/aboutus",
      element: <AboutUs />,
    },
    {
      path: "/Elite",
      element: <Listing />,
    },
    {
      path: "/listingmapview",
      element: <ListingMapView />,
    },
    {
      path: "/propertydetails",
      element: <PropertyDetails />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
