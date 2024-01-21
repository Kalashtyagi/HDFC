// import React, { useContext } from "react";
// import { useState, useEffect } from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import { useTheme } from "@mui/material/styles";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import { Button, TextField } from "@mui/material";
// import DataTable from "react-data-table-component";
// import { SidebarContext } from "../global/SidebarContext";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// export default function Saq() {
//   const theme = useTheme();
//   const [personName, setPersonName] = React.useState([]);
//   const [dropdownData, setDropdownData] = useState([]);
//   const [id, setId] = useState();
//   const [apiData, setApiData] = useState([]);
//   const [query, setQuery] = useState("");
//   const [record, setRecord] = useState(apiData);
//   const { isCollapsed } = useContext(SidebarContext);

//   const handleMenuItemClick = (event, id) => {
//     setId(id);
//   };
//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(typeof value === "string" ? value.split(",") : value);
//   };

//   useEffect(() => {
//     const data = apiData.filter((item) => {
//       return query.toLowerCase() === ""
//         ? item
//         : item.name.toLowerCase().includes(query);
//     });
//     setRecord(data);
//   }, [query]);

//   const columns = [
//     {
//       name: <h2>Name</h2>,
//       selector: (row) => row?.name,
//       sortable: true,
//     },

//     {
//       name: <h2>Street</h2>,
//       selector: (row) => row?.address?.street,
//       sortable: true,
//     },
//     {
//       name: <h2>Suite</h2>,
//       selector: (row) => row?.address?.suite,
//       sortable: true,
//     },
//     {
//       name: <h2>City</h2>,
//       selector: (row) => row?.address?.city,
//       sortable: true,
//     },
//     {
//       name: <h2>Phone</h2>,
//       selector: (row) => row?.phone,
//       sortable: true,
//     },
//     {
//       name: <h2>Email</h2>,
//       selector: (row) => row?.email,
//       sortable: true,
//     },
//   ];

//   const fetchData = async () => {
//     try {
//       await fetch("https://jsonplaceholder.typicode.com/users")
//         .then((res) => res.json())
//         .then((result) => setDropdownData(result));
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const ApiData = async () => {
//     try {
//       if (id) {
//         const res = await fetch(
//           `https://jsonplaceholder.typicode.com/users/${id}`
//         );
//         const data = await res.json();
//         console.log("dat", data);
//         setApiData([data]);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   console.log("apidataa", apiData);

//   useEffect(() => {
//     fetchData();
//   }, []);
//   useEffect(() => {
//     ApiData();
//   }, [id]);
//   console.log(dropdownData);
//   console.log("person", id);
//   return (
//     <>
//       <Box
//         gridRow="span 6"
//         sx={{
//           marginLeft: isCollapsed ? "100px" : "300px",
//           transition: "margin-left 0.3s",
//         }}
//       >
//         <Grid container spacing={2} style={{ justifyContent: "space-between" }}>
//           <Grid item xs={4}>
//             <FormControl sx={{ m: 1, width: 300 }}>
//               <InputLabel id="demo-multiple-name-label">Select SAQ</InputLabel>
//               <Select
//                 labelId="demo-multiple-name-label"
//                 id="demo-multiple-name"
//                 // multiple
//                 value={personName}
//                 onChange={handleChange}
//                 input={<OutlinedInput label="Name" />}
//                 MenuProps={MenuProps}
//               >
//                 {dropdownData.map((item) => (
//                   <MenuItem
//                     key={item.id}
//                     value={item.name}
//                     style={getStyles(item.name, personName, theme)}
//                     onClick={(event) => handleMenuItemClick(event, item.id)}
//                   >
//                     {item.name}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={2}>
//             <TextField
//               label="search"
//               size="small"
//               style={{ marginTop: "15px" }}
//               onChange={(e) => setQuery(e.target.value)}
//             ></TextField>
//           </Grid>
//         </Grid>

//         <DataTable
//           columns={columns}
//           data={apiData}
//           selectableRows
//           fixedHeader
//           pagination
//         />
//       </Box>

//       <br />
//     </>
//   );
// }

import { Box, Button, TextField, Typography } from "@mui/material";
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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

const AddForm = () => {
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
        <Header title="Add Form" subtitle="Create a new Form" />
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
            label="Title"
            name="title"
            sx={{ gridColumn: "span 2" }}
            required
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Version"
            name="version"
            sx={{ gridColumn: "span 2" }}
            required
          />
          <TextField
            fullWidth
            variant="outlined"
            type="file"
            name="template"
            label="Template Type"
            sx={{ gridColumn: "span 2" }}
            required
            inputProps={{ accept: ".pdf" }}
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
          <Box sx={{ gridColumn: "span 2" }}>
            <FormControl variant="filled" fullWidth>
              <InputLabel id="demo-simple-select-filled-label">
                Form Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Admin Type"
                onChange={handleChange}
              >
                <MenuItem value={10}>Saq</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Is Active
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="Yes"
                control={<Radio />}
                label="Yes Active"
              />
              <FormControlLabel
                value="No"
                control={<Radio />}
                label="Not Active"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Total Parts"
            name="totalParts"
            sx={{ gridColumn: "span 2" }}
            required
          />

          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={3}
            sx={{ gridColumn: "span 2" }}
            defaultValue="Add Description"
          />
        </Box>
        <Box display="flex" justifyContent="center" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Add Form
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddForm;
