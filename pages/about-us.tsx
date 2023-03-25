import React from "react";
import useIsMobile from "./src/Hooks/useIsMobile";
import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";
import Navbar from "./src/Components/Navbar";
import Box from "@mui/material/Box";
import Footer from "./src/Components/footer";

const vision = [
  {
    heading: "MISSION",
    img: "",
    subHeading:
      "Stop single-use plastic which is either land-filled or ends up polluting streams. Working on Single-use plastic includes food packaging, grocery bags, milk packets, Chips packets, Chocolate wrappers, Plastic straws etc. which is especially prone to contamination.",
  },
  {
    heading: "VISION",
    img: "",
    subHeading:
      "A world where plastic waste is optimized as a resource for reducing poverty through fair market access",
  },
];

const feature = [
  {
    text: "FIGHT CLIMATE CHANGE",
    src: "/assets/climate.png",
  },
  {
    text: "CREATE LIVELIHOODS",
    src: "/assets/poverty.png",
  },
  {
    text: "REDUCE PLASTIC POLLUTION",
    src: "/assets/responsibility.png",
  },
  {
    text: "DECENT WORK AND ECONOMIC GROWTH",
    src: "/assets/decent.png",
  },
];

const AboutMe = {
  text: (
    <Typography className="text">
      Mr. Ronal Raj is a corporate strategist & Tech enthusiast with sixteen
      years of experience working in the Construction material industry &
      Hospitality, who values innovative concepts, Expertise in driving
      end-to-end Business development through establishing meaningful
      collaborations.
      <br />
      Mr. Ronal Raj is a corporate strategist & Tech enthusiast with sixteen
      years of experience working in the Construction material industry &
      Hospitality, who values innovative concepts, Expertise in driving
      end-to-end Business development through establishing meaningful
      collaborations.
      <br />
      Mr. Ronal Raj is a corporate strategist & Tech enthusiast with sixteen
      years of experience working in the Construction material industry &
      Hospitality, who values innovative concepts, Expertise in driving
      end-to-end Business development through establishing meaningful
      collaborations.
    </Typography>
  ),
  src: "/assets/about-me.png",
};

const aboutus = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <MobileAboutUs direction={"column"}>
        <Navbar />
        <Stack className="Head" />
        <Stack
          className="vision"
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={4}
        >
          {vision.map((value: any, index: number) => (
            <Stack
              className="vision_box"
              direction={"row"}
              alignItems={"center"}
              key={index}
            >
              <Box className={"image-box"}></Box>
              <Stack
                className="content_box"
                direction={"column"}
                alignItems={"center"}
                justifyContent={"flex-start"}
              >
                <Typography className="heading"> {value.heading} </Typography>
                <Typography className="subHeading">
                  {" "}
                  {value.subHeading}{" "}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Stack
          direction={"column"}
          alignItems={"center"}
          className="Features"
          spacing={2}
        >
          {feature.map((val: any, index: number) => (
            <Stack
              key={index}
              direction={"column"}
              alignItems={"center"}
              className="feature_Box"
              spacing={1}
            >
              <Box className="imageBox">
                <img src={val.src} alt="" height={"100%"} width={"100%"} />
              </Box>
              <Typography className="text">{val.text}</Typography>
            </Stack>
          ))}
        </Stack>
        <Stack
          className="about_me"
          direction={"column"}
          alignItems={"center"}
          spacing={2}
        >
          <Typography className="About_me_text">About Me</Typography>
          <Box className={"image_box"}>
            <img src={AboutMe.src} height={"100%"} width={"100%"} />
          </Box>
          {AboutMe.text}
        </Stack>
        <Footer />
      </MobileAboutUs>
    );
  }
  return <div>aboutus</div>;
};

export default aboutus;

const MobileAboutUs = styled(Stack)(({ theme }) => ({
  height: "100vh",
  width: "100%",
  background: "#fff",
  ".Head": {
    minHeight: "calc(100vh - 48px)",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingBottom: "48px",
    backgroundImage: `url(/assets/description.png)`,
  },
  ".vision": {
    background: "#fff",
    height: "100%",
    width: "100%",
    padding: "24px 8px",
    ".vision_box": {
      padding: "10px",
      ".content_box": {
        width: "100%",
        color: "#000",
        borderBottom: "1px solid #000",
        borderRight: "1px solid #000",
        padding: "12px",
        ".heading": {
          fontSize: "16px",
          fontWeight: "800",
          fontFamily: "Montserrat",
          padding: "10px",
        },
        ".subHeading": {
          fontSize: "12px",
          fontWeight: "400",
          fontFamily: "Montserrat",
          textAlign: "center",
        },
      },
    },
  },
  ".Features": {
    background: "#fff",
    padding: "20px",
    ".feature_Box": {
      ".imageBox": {
        height: "160px",
        width: "180px",
      },
      ".text": {
        fontSize: "14px",
        color: "#000",
        textAlign: "center",
        fontFamily: "Montserrat",
        fontWeight: "800",
      },
    },
  },
  ".about_me": {
    background: "#fff",
    padding: "20px",
    ".image_box": {
      height: "200px",
      width: "200px",
    },
    ".About_me_text": {
      fontSize: "24px",
      color: "#000",
      textAlign: "center",
      fontFamily: "Montserrat",
      fontWeight: "600",
    },
    ".text": {
      fontSize: "14px",
      color: "#000",
      textAlign: "center",
      fontFamily: "Montserrat",
      fontWeight: "600",
    },
  },
}));
