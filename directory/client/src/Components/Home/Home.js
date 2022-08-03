import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import "../../Assets/Home.css";
import CardList from "../Card/CardList";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "../Tabpanel/TabPanel";
import { IconButton } from "@mui/material";
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import { Tooltip } from "@mui/material";
import { Divider } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import CardDetails from "../Card/CardDetails";
import FormDialog from "../Modal/FormDialog";
function Home() {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [cardID, setCardID] = useState(10);
  const [mediascreen, setMediascreen] = useState();
  const [visiblemobile, setVisiblemobile] = useState(true);
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery("(min-width:900px)");
  useEffect(() => {
    setMediascreen(matches);
  }, [matches]);

  const url = "http://localhost:3004/directory";
  const getApi = async () => {
    const res = await axios.get(url);

    const sorted = [...res.data].sort((a, b) =>
      a.FirstName > b.FirstName ? 1 : -1
    );
    setData(sorted);
  };
  useEffect(() => {
    getApi();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const searchChange = (event) => {
    setSearch(event.target.value);
  };
  const HandleAdd = (event) => {
    setOpen(true);
  };
  return (
    <>
      <Container maxWidth="lg">
        {mediascreen === true ? (
          <Grid
            className="main"
            container
            spacing={0}
            sx={{ borderRadius: "30px", bgcolor: "#F8F8F8	" }}
          >
            <FormDialog
              open={open}
              setOpen={setOpen}
              setData={setData}
              data={data}
            />
            <Grid item xs={12}>
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="All Contacts" />
                  <Tab label="Favourites" />
                </Tabs>
                <Tooltip title="Add New Group" arrow>
                  <IconButton
                    onClick={HandleAdd}
                    color="primary"
                    aria-label="add to shopping cart"
                  >
                    <PlaylistAddRoundedIcon />
                  </IconButton>
                </Tooltip>
                <Divider variant="middle" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Search Contact"
                id="outlined-start-adornment"
                placeholder="Search"
                onChange={searchChange}
                sx={{
                  m: 0,
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "20px",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ height: "100%", width: "100%" }}>
                <TabPanel value={value} index={0}>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      my: 1,
                      position: "sticky",
                      top: 40,
                      width: "100%",
                      maxWidth: 518,
                      zIndex: 5,
                    }}
                  ></Box>
                  <Box className="directorylistTotal" sx={{ my: 2 }}>
                    {data.length > 0
                      ? data
                          .filter(
                            (mydt) =>
                              mydt.FirstName?.toLowerCase().includes(
                                search?.toLowerCase()
                              ) ||
                              mydt.LastName?.toLowerCase().includes(
                                search?.toLowerCase()
                              )
                          )
                          .map((item, index) => (
                            <CardList
                              key={index}
                              item={item}
                              cardID={cardID}
                              setCardID={setCardID}
                              mediascreen={mediascreen}
                              setVisiblemobile={setVisiblemobile}
                            />
                          ))
                      : null}
                  </Box>
                </TabPanel>
                <TabPanel value={value} index={1}></TabPanel>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ height: "72vh", my: 0, p: 5 }}>
                {data &&
                  data
                    .filter((mydt) => mydt.id === cardID)
                    .map((item, index) => (
                      <CardDetails
                        id={item.id}
                        key={index}
                        cardID={cardID}
                        setCardID={setCardID}
                        FirstName={item.FirstName}
                        image={item.image}
                        LastName={item.LastName}
                        Phone={item.Phone}
                        mediascreen={mediascreen}
                        setData={setData}
                        data={data}
                      />
                    ))}
              </Box>
            </Grid>
          </Grid>
        ) : (
          <Grid
            className="main"
            container
            spacing={0}
            sx={{ borderRadius: "30px", bgcolor: "#F8F8F8	" }}
          >
            <FormDialog
              open={open}
              setOpen={setOpen}
              setData={setData}
              data={data}
            />

            <Grid item xs={12}>
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="All Contacts" />
                  <Tab label="Favourites" />
                </Tabs>
                <Tooltip title="Add New Group" arrow>
                  <IconButton
                    onClick={HandleAdd}
                    color="primary"
                    aria-label="add to shopping cart"
                  >
                    <PlaylistAddRoundedIcon />
                  </IconButton>
                </Tooltip>
                <Divider variant="middle" />
              </Box>
            </Grid>
            {visiblemobile === true ? (
              <Grid item xs={12} md={6}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Search Contact"
                    id="outlined-start-adornment"
                    placeholder="Search"
                    onChange={searchChange}
                    sx={{
                      m: 0,
                      width: "100%",
                      backgroundColor: "white",
                      borderRadius: "20px",
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Box sx={{ height: "100%", width: "100%" }}>
                  <TabPanel value={value} index={0}>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        my: 1,
                        position: "sticky",
                        top: 40,
                        width: "100%",
                        maxWidth: 518,
                        zIndex: 5,
                      }}
                    ></Box>
                    <Box className="directorylistTotal" sx={{ my: 2 }}>
                      {data.length > 0
                        ? data
                            .filter(
                              (mydt) =>
                                mydt.FirstName?.toLowerCase().includes(
                                  search?.toLowerCase()
                                ) ||
                                mydt.LastName?.toLowerCase().includes(
                                  search?.toLowerCase()
                                )
                            )
                            .map((item, index) => (
                              <CardList
                                key={index}
                                item={item}
                                cardID={cardID}
                                setCardID={setCardID}
                                mediascreen={mediascreen}
                                setVisiblemobile={setVisiblemobile}
                              />
                            ))
                        : null}
                    </Box>
                  </TabPanel>
                  <TabPanel value={value} index={1}></TabPanel>
                </Box>
              </Grid>
            ) : (
              <Grid item xs={12} md={6}>
                <Box sx={{ height: "72vh", my: 0, p: 5 }}>
                  {data &&
                    data
                      .filter((mydt) => mydt.id === cardID)
                      .map((item, index) => (
                        <CardDetails
                          id={item.id}
                          key={index}
                          setCardID={setCardID}
                          cardID={cardID}
                          FirstName={item.FirstName}
                          image={item.image}
                          LastName={item.LastName}
                          Phone={item.Phone}
                          mediascreen={mediascreen}
                          visiblemobile={visiblemobile}
                          setVisiblemobile={setVisiblemobile}
                          setData={setData}
                          data={data}
                        />
                      ))}
                </Box>
              </Grid>
            )}
          </Grid>
        )}
      </Container>
    </>
  );
}

export default Home;
