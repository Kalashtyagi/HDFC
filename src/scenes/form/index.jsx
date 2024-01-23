import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from "react";
import { SidebarContext } from "../global/SidebarContext";
import { useContext } from "react";
import { DarkContext } from "../global/DarkBar";

const Form = () => {
  const { isDark } = useContext(DarkContext);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [type, setType] = React.useState("");
  const { isCollapsed } = useContext(SidebarContext);

  const handleChange = (event) => {
    setType(event.target.value);
  };

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
        <Header title="Add Merchant " subtitle="Create a New Merchant" />
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
            label="Name"
            name="name"
            sx={{ gridColumn: "span 2" }}
            InputLabelProps={{
              style: {
                color: isDark ? "black" : "white",
              },
            }}
            required
          />

          <TextField
            fullWidth
            variant="filled"
            type="email"
            label="Email"
            InputLabelProps={{
              style: {
                color: isDark ? "black" : "white",
              },
            }}
            name="email"
            sx={{ gridColumn: "span 2" }}
            required
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Address"
            name="address"
            sx={{ gridColumn: "span 2" }}
            InputLabelProps={{
              style: {
                color: isDark ? "black" : "white",
              },
            }}
            required
          />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Phone Number"
            name="contact"
            sx={{ gridColumn: "span 2" }}
            InputLabelProps={{
              style: {
                color: isDark ? "black" : "white",
              },
            }}
            required
          />
          <Box sx={{ gridColumn: "span 2" }}>
            <FormControl variant="filled" fullWidth>
              <InputLabel
                id="demo-simple-select-filled-label"
                style={{ color: isDark ? "black" : "white" }}
              >
                Merchant Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Admin Type"
                onChange={handleChange}
              >
                <MenuItem value={10}>Level 1</MenuItem>
                <MenuItem value={20}>Level 2</MenuItem>
                <MenuItem value={20}>Level 3</MenuItem>
                <MenuItem value={20}>Level 4</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Create New Merchant
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
