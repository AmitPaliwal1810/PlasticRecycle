import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
import useIsMobile from "../Hooks/useIsMobile";
import Footer from "./footer";

const recycleData = [
  {
    img: "/assets/recycle_plastic.png",
    heading: "Recycle Plastic Waste",
    para: "Plastic waste is a detrimental to our environment. Recycling is the only way out. We need to recycle plastic in order to reduce the harm we are causing to the environment.",
  },
  {
    img: "/assets/recycle_ewaste.png",
    heading: "Recycle E-waste",
    para: "E-Waste or Electronic wastes are discarded electrical or electronic devices which damage the nature and affect human and animal health. We ensure safe E-waste disposal.",
  },
];

const Home = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <MobileOuterContainer>
        <Box
          className={"Header"}
          sx={{
            backgroundImage: `url("/assets/homeHeader.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Stack
            className="HeaderContainer"
            direction={"column"}
            alignItems={"flex-start"}
            justifyContent={"center"}
          >
            <Typography variant="h4" className="HeaderText">
              PLASTIC FOR CHANGE
            </Typography>
            <Typography variant="h6" className="HeaderText2">
              Changing Lives Through Recycling
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            padding: "10px 4px",
          }}
        >
          {recycleData.map((data: any) => {
            return (
              <Stack
                key={data.heading}
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                padding={"18px 12px"}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{
                    height: "100px",
                    width: "100px",
                    border: "2px solid #000",
                    borderRadius: "50%",
                  }}
                >
                  <Box
                    sx={{
                      height: "80px",
                      width: "80px",
                    }}
                  >
                    <img src={`${data.img}`} height={"100%"} width={"100%"} />
                  </Box>
                </Stack>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    fontFamily: "Montserrat",
                    color: "#000",
                  }}
                >
                  {data.heading}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 300,
                    fontFamily: "Montserrat",
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  {data.para}
                </Typography>
              </Stack>
            );
          })}
        </Box>
        <Stack
          className={"description"}
          direction={"row"}
          alignItems={"flex-end"}
        >
          <Typography className="descriptionText">
            {
              "THE WORLD’S LARGEST AND MOST TRUSTED SOURCE OF FAIR-TRADE VERIFIED RECYCLED PLASTIC"
            }
          </Typography>
        </Stack>
        <Stack
          className={"Plastducts"}
          direction={"column"}
          alignItems={"center"}
        >
          <Typography className="plastducts_heading">
            ABOUT PLASTDUCTS
          </Typography>
          <Box className={"plastducts_description_box"}></Box>
        </Stack>
        <Footer />
      </MobileOuterContainer>
    );
  }
  return <MobileOuterContainer></MobileOuterContainer>;
};

export default Home;

const MobileOuterContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  maxHeight: "calc(100vh - 48px)",
  width: "100%",
  overflowY: "scroll",
  scrollBehavior: "smooth",
  ".Header": {
    height: "calc(100vh - 48px)",
    width: "100%",
    overflow: "hidden",
    dispaly: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    ".HeaderContainer": {
      minHeight: "400px",
      position: "absolute",
      bottom: "0px",
      padding: "8px 12px",
      ".HeaderText": {
        fontSize: "24px",
        fontWeight: 600,
        textAlign: "center",
        fontFamily: "Montserrat",
        letterSpacing: "0.06rem",
      },
      ".HeaderText2": {
        fontSize: "18px",
        fontWeight: 300,
        fontFamily: "Montserrat",
        letterSpacing: "0.06rem",
      },
    },
  },
  ".description": {
    minHeight: "450px",
    width: "100%",
    backgroundImage: `url("/assets/description.png")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingBottom: "48px",
    ".descriptionText": {
      fontSize: "16px",
      fontWeight: 600,
      textAlign: "center",
      fontFamily: "Montserrat",
      letterSpacing: "0.08rem",
    },
  },
  ".Plastducts": {
    minHeight: "650px",
    width: "100%",
    padding: "20px",
    background: "#C8F6A4",
    ".plastducts_heading": {
      fontSize: "22px",
      fontWeight: 600,
      textAlign: "center",
      fontFamily: "Montserrat",
      letterSpacing: "0.08rem",
      color: "#000",
    },
    ".plastducts_description_box": {
      minHeight: "550px",
      width: "100%",
      padding: "10px",
      backgroundImage: `url("/assets/green_background.png")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      marginTop: "20px",
    },
  },
}));
