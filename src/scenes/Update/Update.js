import { Box, Button, TextField, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { SidebarContext } from "../global/SidebarContext";
import { useContext } from "react";

const Update = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { isCollapsed } = useContext(SidebarContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("submit");

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log("data", data);

    try {
      const response = await fetch("url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Data successfully submitted:", data);
      } else {
        console.error("Error submitting data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <Box
      m="20px"
      sx={{
        marginLeft: isCollapsed ? "100px" : "300px",
        transition: "margin-left 0.3s",
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Header title="Edit Admin Data" />
      </Box>

      <form onSubmit={handleSubmit}>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Old Email Address"
            name="firstName"
            sx={{ gridColumn: "span 2" }}
            required
          />

          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="New Email Address"
            name="email"
            sx={{ gridColumn: "span 2" }}
            required
          />

          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Old Phone Number"
            name="contact"
            sx={{ gridColumn: "span 2" }}
            required
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="New Phone Number"
            name="contact"
            sx={{ gridColumn: "span 2" }}
            required
          />

          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Alternative Old Email Address"
            name="contact"
            sx={{ gridColumn: "span 2" }}
            required
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Alternative New Email Address"
            name="contact"
            sx={{ gridColumn: "span 2" }}
            required
          />
        </Box>
        <Box display="flex" justifyContent="center" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Update Admin Info
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Update;
