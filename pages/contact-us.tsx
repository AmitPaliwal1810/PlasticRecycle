import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import React from "react";
import useIsMobile from "./src/Hooks/useIsMobile";
import Navbar from "./src/Components/Navbar";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import Footer from "./src/Components/footer";
import axios from "axios";

const validationSchema = yup.object({
  email: yup.string().email().required("Email is required"),
  name: yup.string().required("Name is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g,
      "Invalid phone number"
    ),
  organizationName: yup.string(),
  message: yup.string().required("Message is required"),
});

const formContent = [
  {
    label: "Email",
    name: "email",
  },
  {
    label: "Name",
    name: "name",
  },
  {
    label: "Phone Number",
    name: "phoneNumber",
  },
  {
    label: "Organization",
    name: "organization",
  },
  {
    label: "Message",
    name: "message",
  },
];

const details = [
  {
    icon: <LocationOnIcon />,
    text: `Corporate Address 303, Nimai Place,Sector 114 Gurugram 122017, `,
    subtext:
      "HARYANA Unit Address Village – Zahidpur, 3.8 kms. inside Naurangpur village from main Farukhnagar-Jhajjar road,Jhajjar, Haryana",
  },
  {
    icon: <PhoneIcon />,
    text: "+91-9999253034",
    subtext: "",
  },
  {
    icon: <MailIcon />,
    text: "info@Re-plastic.com",
    subtext: "",
  },
];

const ContactUs = () => {
  const isMobile = useIsMobile();

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phoneNumber: "",
      organization: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`http://localhost:5000/`, { ...values });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
  });

  if (isMobile) {
    return (
      <MobileContact>
        <Navbar />
        <Box className="mobile_contact_outer_container">
          <Typography className="upperText">Get In Touch</Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              className="fields"
              fullWidth
              name={"name"}
              label={"Name"}
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              className="fields"
              fullWidth
              name={"email"}
              label={"Email"}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              className="fields"
              fullWidth
              name={"phoneNumber"}
              label={"Phone Number"}
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
            />
            <TextField
              className="fields"
              fullWidth
              name={"organization"}
              label={"Organization Name"}
              value={formik.values.organization}
              onChange={formik.handleChange}
              error={
                formik.touched.organization &&
                Boolean(formik.errors.organization)
              }
              helperText={
                formik.touched.organization && formik.errors.organization
              }
            />
            <TextField
              className="fields"
              fullWidth
              multiline={true}
              minRows={4}
              name={"message"}
              label={"Message"}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
            <Button color="success" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>
          <Stack direction={"column"} spacing={2} padding={4}>
            {details.map((val: any, index: number) => {
              return (
                <Stack key={index} direction={"row"} columnGap={2}>
                  <Box sx={{ color: "#000" }}>{val.icon}</Box>
                  <Typography sx={{ color: "#000" }}>
                    {val.text} <br /> {val.subtext}{" "}
                  </Typography>
                </Stack>
              );
            })}
          </Stack>
        </Box>
        <Footer />
      </MobileContact>
    );
  }

  return <div>contact-us</div>;
};

export default ContactUs;

const MobileContact = styled(Stack)(({ theme }) => ({
  height: "100vh",
  width: "100%",
  background: "#fff",
  ".mobile_contact_outer_container": {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    background: "#fff",
    ".upperText": {
      color: "#000",
      textAlign: "center",
      fontSize: "24px",
      marginTop: "20px",
      fontWeight: "600",
    },
    form: {
      padding: "20px",
      ".fields": {
        margin: "10px 0px",
      },
    },
  },
}));
