import {
  Box,
  Button,
  Drawer,
  ListItem,
  ListItemButton,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import React, { useCallback, useState } from "react";
import useIsMobile from "../Hooks/useIsMobile";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import Link from "next/link";
import { useRouter } from "next/router";

const NavbarData = {
  logo: "",
  rightList: [
    {
      label: "Home",
      icon: <HomeIcon sx={{ color: "#fff", fontSize: "24px" }} />,
      link: "/dashboard",
    },
    {
      label: "About us",
      icon: <InfoIcon sx={{ color: "#fff", fontSize: "24px" }} />,
      link: "/about-us",
    },
  ],
  rightButtonText: "Contacts",
};

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleDrawer = useCallback(() => {
    setIsDrawerOpen(!isDrawerOpen);
  }, [isDrawerOpen]);

  if (isMobile) {
    return (
      <MobileCustomizedNavbar
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box className="logo">
          <img
            src="/assets/logo.png"
            alt="logo"
            height={"100%"}
            width={"100%"}
          />
        </Box>
        <IconButton onClick={handleDrawer}>
          <MenuIcon className="menuIcon" />
        </IconButton>
        <CustomeDrawer
          anchor={"right"}
          open={isDrawerOpen}
          onClose={handleDrawer}
        >
          <Box
            className={"drawerBox"}
            role="presentation"
            onClick={handleDrawer}
            onKeyDown={handleDrawer}
          >
            <List>
              <Stack direction={"row"} justifyContent={"flex-start"}>
                <IconButton onClick={handleDrawer}>
                  <KeyboardDoubleArrowLeftIcon className="backIcon" />
                </IconButton>
              </Stack>
              {NavbarData.rightList.map((val: any, index: any) => {
                return (
                  <ListItem key={index}>
                    {val.icon}
                    <Link href={val.link}>
                      <ListItemButton className="ListButtonText">
                        {val.label}
                      </ListItemButton>
                    </Link>
                  </ListItem>
                );
              })}
            </List>
            <Box className="button_outer_container">
              <Button
                variant="contained"
                style={{
                  background: "#5e9a2f",
                }}
                onClick={() => {
                  router.push("/contact-us");
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </CustomeDrawer>
      </MobileCustomizedNavbar>
    );
  }

  return (
    <NavbarStyle
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box className="logo">
        <img src="/assets/logo.png" alt="logo" height={"100%"} width={"100%"} />
      </Box>
      <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
        {NavbarData.rightList.map((val: any, index: any) => {
          return (
            <Stack
              key={index}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {val.icon}
              <Link href={val.link}>
                <ListItemButton className="ListButtonText">
                  {val.label}
                </ListItemButton>
              </Link>
            </Stack>
          );
        })}
      </Stack>
    </NavbarStyle>
  );
};

export default Navbar;

const MobileCustomizedNavbar = styled(Stack)(({ theme }) => ({
  background: "#305C0E",
  padding: "4px 12px",
  ".logo": {
    height: "30px",
    width: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ".menuIcon": {
    fontSize: "24px",
    color: "#fff",
  },
}));

const CustomeDrawer = styled(Drawer)(({ theme }) => ({
  ".drawerBox": {
    width: "250px",
    height: "100%",
    background: "#305C0E",
    borderLeft: "3px solid #5e9a2f",
    ".button_outer_container": {
      position: "absolute",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      bottom: "4%",
    },
  },
  ".backIcon": {
    color: "#fff",
  },
  ".ListButtonText": {
    color: "#fff",
    fontSize: "18px",
    fontFamily: "Montserrat",
  },
}));

const NavbarStyle = styled(Stack)(({ theme }) => ({
  background: "#305C0E",
  padding: "18px",
  ".logo": {
    height: "30px",
    width: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
