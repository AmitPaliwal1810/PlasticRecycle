import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { useCallback, useState } from "react";
import useIsMobile from "../Hooks/useIsMobile";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box } from "@mui/system";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";

const socialIcons = [
  {
    icon: <FacebookIcon sx={{ color: "#fff" }} />,
  },
  {
    icon: <InstagramIcon sx={{ color: "#fff" }} />,
  },
  {
    icon: <TwitterIcon sx={{ color: "#fff" }} />,
  },
  {
    icon: <YouTubeIcon sx={{ color: "#fff" }} />,
  },
];

const contactInfo = [
  {
    text: <a href="tel:+91-556659908">Contact: +91-556659908</a>,
    icon: <CallIcon />,
  },
  {
    text: <a href="mailto: info@Re-plastic.com">info@Re-plastic.com</a>,
    icon: <EmailIcon />,
  },
];

const Footer = () => {
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleDrawer = useCallback(() => {
    setIsDrawerOpen(!isDrawerOpen);
  }, [isDrawerOpen]);

  if (isMobile) {
    return (
      <MobileCustomizedFooter>
        <Stack
          className="footer-top"
          direction={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <Typography className="footer-top-text">CONTACT INFO</Typography>
        </Stack>
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          marginTop={"20px"}
        >
          {contactInfo?.map((value: any, index: number) => (
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={2}
              key={index}
            >
              <Box>{value.icon}</Box>
              <Box>{value.text}</Box>
            </Stack>
          ))}
        </Stack>
        <Stack direction={"row"}>
          {socialIcons.map((social: any, index: any) => (
            <IconButton key={index}>
              <Link href={"https://www.google.com/"} target={"_blank"}>
                {social.icon}
              </Link>
            </IconButton>
          ))}
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography>© 2023 Uber Technologies Inc.</Typography>
        </Stack>
      </MobileCustomizedFooter>
    );
  }

  return <div></div>;
};

export default Footer;

const MobileCustomizedFooter = styled(Stack)(({ theme }) => ({
  flex: "1",
  width: "100%",
  background: "#5B704C",
  padding: "10px",
  ".footer-top": {
    width: "100%",
    height: "100%",
    ".footer-top-text": {
      fontSize: "16px",
      fontWeight: 500,
      color: "#fff",
      fontFamily: "Montserrat",
      letterSpacing: "0.06rem",
    },
  },
}));
