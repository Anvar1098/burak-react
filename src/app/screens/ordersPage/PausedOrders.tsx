import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePausedOrders } from "./selector";
import { Product } from "../../../lib/types/product";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";
import { Order, OrderItem } from "../../../lib/types/order";

/** SELECTOR **/

const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({ pausedOrders })
);


export default function PausedOrders() {
  const { pausedOrders } = useSelector(pausedOrdersRetriever);
  return (
    <TabPanel value={"1"}>
      <Stack>
        {pausedOrders?.map((order: Order) => {
          return (
            <Box key={order._id} className={"order-main-box"}>
              <Box className={"order-box"}>
                {order?.orderItems?.map((item: OrderItem) => {
                  const product: Product = order.productData
                  .filter((ele: Product) => item.productId === ele._id)[0];
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  return (
                    <Box key={item._id} className={"order-name-price"}>
                      <div>
                        <img src={imagePath} className="foto" />
                        <p>{product.productName}</p>
                      </div>
                      <div className="data">
                        <p>${item.itemPrice}</p> 
                        <img
                          src="icons/close.svg"
                          style={{ marginLeft: "20px" }}
                        />
                        <p>{item.itemQuantity}</p>
                        <img
                          src={"/icons/pause.svg"}
                          style={{ marginLeft: "20px" }}
                        />
                        <p>${item.itemQuantity * item.itemPrice}</p>
                      </div>
                    </Box>
                  );
                })}
              </Box>
              <Box className={"total-price-box"}>
                <Box className={"box-total"}>
                  <p>Product price</p>
                  <p>${order.orderTotal - order.orderDelivery}</p>
                  <img
                    src={"/icons/plus.svg"}
                    style={{ marginLeft: "20px" }}
                  />
                  <p>Delivery Cost</p>
                  <p>${order.orderDelivery}</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                  />
                  <p>Total</p>
                  <p>${order.orderTotal}</p>
                  <Button
                    sx={{ width: '93px', height: '36px', borderRadius: '10px' }}
                    variant="contained"
                    color="secondary"
                    className={"cancel-button"}
                  >
                    Cancel
                  </Button>
                  <Button
                    sx={{ width: '93px', height: '36px', borderRadius: '10px' }}
                    variant="contained"
                    className={"pay-button"}>
                    Payment
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}

        {!pausedOrders || 
        (pausedOrders.length === 0 && (
          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <img
              src={"/icons/noimage-list.svg"}
              style={{ width: 300, height: 300 }}
            />
          </Box>
        ))}
      </Stack>
    </TabPanel>
  );
}
