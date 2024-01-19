import React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, TextField } from "@mui/material";
import DataTable from "react-data-table-component";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Saq() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [dropdownData, setDropdownData] = useState([]);
  const [id, setId] = useState();
  const [apiData, setApiData] = useState([]);
  const [query, setQuery] = useState("");
  const [record, setRecord] = useState(apiData);
  const handleMenuItemClick = (event, id) => {
    setId(id);
  };
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    const data = apiData.filter((item) => {
      return query.toLowerCase() === ""
        ? item
        : item.name.toLowerCase().includes(query);
    });
    setRecord(data);
  }, [query]);

  const columns = [
    {
      name: <h2>Name</h2>,
      selector: (row) => row?.name,
      sortable: true,
    },

    {
      name: <h2>Street</h2>,
      selector: (row) => row?.address?.street,
      sortable: true,
    },
    {
      name: <h2>Suite</h2>,
      selector: (row) => row?.address?.suite,
      sortable: true,
    },
    {
      name: <h2>City</h2>,
      selector: (row) => row?.address?.city,
      sortable: true,
    },
    {
      name: <h2>Phone</h2>,
      selector: (row) => row?.phone,
      sortable: true,
    },
    {
      name: <h2>Email</h2>,
      selector: (row) => row?.email,
      sortable: true,
    },
  ];

  const fetchData = async () => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((result) => setDropdownData(result));
    } catch (error) {
      console.log(error);
    }
  };
  const ApiData = async () => {
    try {
      if (id) {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await res.json();
        console.log("dat", data);
        setApiData([data]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log("apidataa", apiData);

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    ApiData();
  }, [id]);
  console.log(dropdownData);
  console.log("person", id);
  return (
    <>
      <Box gridRow="span 6" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={{ justifyContent: "space-between" }}>
          <Grid item xs={4}>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-name-label">Select SAQ</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                // multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {dropdownData.map((item) => (
                  <MenuItem
                    key={item.id}
                    value={item.name}
                    style={getStyles(item.name, personName, theme)}
                    onClick={(event) => handleMenuItemClick(event, item.id)}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="search"
              size="small"
              style={{ marginTop: "15px" }}
              onChange={(e) => setQuery(e.target.value)}
            ></TextField>
          </Grid>
        </Grid>
      </Box>
      <br />
      <DataTable
        columns={columns}
        data={apiData}
        selectableRows
        fixedHeader
        pagination
      />
    </>
  );
}
