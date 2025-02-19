import { Container, Stack, Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext"
import { SyntheticEvent, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPausedOrders, setProcessOrders, setFinishedOrders } from "./slice";
import { Order } from "../../../lib/types/order";
import "../../../css/order.css";

const actionDispatch = (dispatch: Dispatch) => ({     // action
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),   
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)), 
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});

export default function OrdersPage() {
  const {setPausedOrders, setProcessOrders, setFinishedOrders} = actionDispatch(useDispatch());
  const [value, setValue] = useState("1");

  /** HANDLERS **/

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={"order-page"}>
      <Container className={"ord-cont"}>
        <Stack className={"order-left"}>
          <TabContext value={value}>
            <Box className={"ord-nav-frame"}>
              <Box sx={{ borderBottom: 1, borderColor: "divider", marginTop: '40px', width: '50%' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className={'table-list'}
                >
                  <Tab label="PAUSED ORDERS" value={'1'} />
                  <Tab label="PROCESS ORDERS" value={'2'} />
                  <Tab label="FINISHED ORDERS" value={'3'} />
                </Tabs>
              </Box>
            </Box>
            <Stack className={'ord-main-cont'}>
                <PausedOrders />
                <ProcessOrders />
                <FinishedOrders />

                <Stack className={'order-right'}>
                  <Stack className="user-det">
                      <Box className="img-user">
                        <img
                        src="/icons/default-user.svg"
                        />
                        <Box className='img1'>
                          <img
                          src="/icons/user-badge.svg"
                          />
                        </Box>
                      </Box>
                      <Box className="user-info">
                        <span>Jack</span>
                      </Box>
                      <Box className='user'>User</Box>
                      <Box className='line'>
                        <img
                        src="/img/line.png"
                        />
                      </Box>
                      <Box className='last-info'>
                        <img
                        src="icons/location.svg"
                        />
                        <span>South Korea, Ulsan</span>
                      </Box>
                  </Stack>
                  <Stack className="payment-det">
                    <Box> 
                     <input 
                     type="text"
                     placeholder="Card number : 5243 4090 2002 7495 "
                     />
                    </Box>
                    <Box className='input1'>
                    <input 
                     type="text"
                     placeholder="07 / 24 "
                     style={{ width: '150px'}}
                     />
                     <input 
                     type="text"
                     placeholder="CVV : 010"
                     style={{ marginLeft: '10px', width: '150px'}}
                     />
                    </Box>
                    <Box>
                    <input 
                     type="text"
                     placeholder="Justin Robertson"
                     />
                    </Box>
                    <Stack>
                    <div className="cards-box">
                    <img src="/icons/western-card.svg"  />
                    <img src="/icons/master-card.svg"   />
                    <img src="/icons/paypal-card.svg"  />
                    <img src="/icons/visa-card.svg"   />
                    </div>
                    </Stack>
                  </Stack>
                </Stack>
            </Stack>
          </TabContext>
        </Stack>

      </Container>
    </div>
  );
}
