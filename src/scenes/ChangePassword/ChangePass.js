import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const ChangePass = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [openModal, setOpenModal] = useState(false);

  const handleGenerateOTP = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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
        <Header title="Change Password" subtitle="Create a New Password" />
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
            label="Old Password"
            name="firstName"
            sx={{ gridColumn: "span 2" }}
            required
          />

          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="New Password"
            name="email"
            sx={{ gridColumn: "span 2" }}
            required
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Confirm New Password"
            name="contact"
            sx={{ gridColumn: "span 2" }}
            required
          />
          {/* <TextField
            fullWidth
            variant="filled"
            type="text"
            label="OTP"
            name="contact"
            sx={{ gridColumn: "span 2" }}
            required
          /> */}
        </Box>
        <Box display="flex" justifyContent="center" mt="20px">
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            onClick={handleGenerateOTP}
          >
            Generate OTP
          </Button>
        </Box>
      </form>

      {/* OTP Modal */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Enter OTP</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="OTP"
              name="otp"
              required
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} style={{ color: "white" }}>
            Cancel
          </Button>
          <Button onClick={handleCloseModal} style={{ color: "white" }}>
            Change Password
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ChangePass;
