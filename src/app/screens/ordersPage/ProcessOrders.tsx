import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";

export default function PausedOrders() {
  return (
    <TabPanel value={"2"}>
      <Stack>
        {[1, 2].map((ele, index) => {
          return (
            <Box key={index} className={"order-main-box"}>
              <Box className={"order-box"}>
                {[1, 2, 3].map((ele2, index2) => {
                  return (
                    <Box key={index2} className={"order-name-price"}>
                      <div>
                        <img src={"/img/kebab.webp"} className="foto" />
                        <p>Steak</p>
                      </div>
                      <div className="data">
                        <p>$9</p>
                        <img
                          src="icons/close.svg"
                          style={{ marginLeft: "20px" }}
                        />
                        <p>2</p>
                        <img
                          src={"/icons/pause.svg"}
                          style={{ marginLeft: "20px" }}
                        />
                        <p>24$</p>
                      </div>
                    </Box>
                  );
                })}
              </Box>
              <Box className={"total-price-box"}>
                <Box className={"box-total"}>
                  <p>Product price</p>
                  <p>18$</p>
                  <img src={"/icons/plus.svg"} style={{ marginLeft: "20px" }} />
                  <p>Delivery Cost</p>
                  <p>2$</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                  />
                  <p>Total</p>
                  <p>20$</p>
                  <p style={{ marginRight: "5px" }}>
                    {moment().format("YY-MM-DD: HH:mm")}
                  </p>
                  <Button
                    sx={{ width: "93px", height: "36px", borderRadius: "10px" }}
                    variant="contained"
                    color="secondary"
                    className={"cancel-button"}
                  >
                    Cancel
                  </Button>
                  <Button
                    sx={{ width: "93px", height: "36px", borderRadius: "10px" }}
                    variant="contained"
                    className={"pay-button"}
                  >
                    Payment
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}

        {false && (
          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <img
              src={"/icons/noimage-list.svg"}
              style={{ width: 300, height: 300 }}
            />
          </Box>
        )}
      </Stack>
    </TabPanel>
  );
}
