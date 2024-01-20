import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

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
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Header title="ADD MERCHANT" subtitle="Create a New Merchant Profile" />
        {/* <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          style={{
            fontSize: "20px",
            color: "blueviolet",
            backgroundColor: "white",
            height: "40px",
          }}
        >
          Upload file
          <VisuallyHiddenInput type="file" />
        </Button> */}
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
            label="First Name"
            name="firstName"
            sx={{ gridColumn: "span 4" }}
            required
          />

          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Email"
            name="email"
            sx={{ gridColumn: "span 4" }}
            required
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Contact Number"
            name="contact"
            sx={{ gridColumn: "span 4" }}
            required
          />
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
