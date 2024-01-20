import {
  Box,
  Button,
  IconButton,
  List,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { tokens } from "../../theme";
import { Notifications } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LoopIcon from "@mui/icons-material/Loop";
import HandshakeIcon from "@mui/icons-material/Handshake";
import BookOnlineSharpIcon from "@mui/icons-material/BookOnlineSharp";
// import SubtitlesOffSharpIcon from "@mui/icons-material/SubtitlesOffSharp";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { newMerchant } from "../../data/mockData";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="New Merchant-overview" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="10px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="In process"
            progress="0.75"
            increase="+14%"
            icon={
              <LoopIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="On Boarded"
            progress="0.50"
            increase="+21%"
            icon={
              <HandshakeIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="Ticket Raised"
            progress="0.30"
            increase="+5%"
            icon={
              <BookOnlineSharpIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Ticket Closed"
            progress="0.80"
            increase="+43%"
            icon={
              <HandshakeIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 4"
          // gridRow="span 2"
          // backgroundColor={colors.primary[400]}
          // overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="10px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Notifications
            </Typography>
          </Box>
          {Notifications.map((notification, i) => (
            <Box
              key={`${notification.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              // borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {notification.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {notification.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{notification.date}</Box>
              {/* <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box> */}
            </Box>
          ))}
        </Box>
        {/* <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box> */}

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                In process
              </Typography>
              {/* <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography> */}
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 5"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            On Boarding by location
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            mt="25px"
            justifyContent="space-between"
          >
            <ProgressCircle size="175" />
            <Box>
              <List>delhi</List>
              <List>UttarPradesh</List>
              {/* <Typography
                variant="h5"
                color={colors.greenAccent[500]}
                sx={{ mt: "15px" }}
              >
                Uttarpradesh
              </Typography>

              <Typography
                variant="h5"
                color={colors.greenAccent[500]}
                sx={{ mt: "15px" }}
              >
                Delhi
              </Typography> */}
            </Box>
          </Box>
        </Box>
        <Box
          gridColumn="span 3"
          gridRow="span 2"
          overflow="auto"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h4"
            fontWeight="700"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            New Merchant
          </Typography>
          {newMerchant.map((newItem, index) => (
            <>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  key={index}
                  // variant="h5"
                  fontWeight="100"
                  sx={{ padding: "30px 30px 0 30px" }}
                >
                  {newItem.merchant}
                </Typography>
                <IconButton>
                  <DownloadOutlinedIcon
                    sx={{
                      fontSize: "26px",
                      color: colors.greenAccent[500],
                    }}
                  />
                </IconButton>
              </Box>
            </>
          ))}
        </Box>
        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Dashboard;
