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

const CreateAdmin = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [type, setType] = React.useState("");
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
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Header title="Create Admin" subtitle="Create a New Admin" />
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
            label="Full Name"
            name="firstName"
            sx={{ gridColumn: "span 2" }}
            required
          />

          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Email"
            name="email"
            sx={{ gridColumn: "span 2" }}
            required
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Alternate Email"
            name="contact"
            sx={{ gridColumn: "span 2" }}
            required
          />
          <TextField
            fullWidth
            variant="filled"
            type="password"
            label="Password"
            name="contact"
            sx={{ gridColumn: "span 2" }}
            required
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Phone Number"
            name="contact"
            sx={{ gridColumn: "span 2" }}
            required
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Alternate Phone Number"
            name="contact"
            sx={{ gridColumn: "span 2" }}
            required
          />
          <Box sx={{ gridColumn: "span 2" }}>
            <FormControl variant="filled" fullWidth>
              <InputLabel id="demo-simple-select-filled-label">
                Admin Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Admin Type"
                onChange={handleChange}
              >
                <MenuItem value={10}>SubAdmin</MenuItem>
                <MenuItem value={20}>SuperAdmin</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Create New Admin
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateAdmin;
