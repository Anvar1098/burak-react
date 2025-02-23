import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";
import { retrieveProcessOrders } from "./selector";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { Order, OrderItem, OrderUpdateInput } from "../../../lib/types/order";
import { Product } from "../../../lib/types/product";
import { Messages, serverApi } from "../../../lib/config";
import { useGlobals } from "../../hooks/useGlobals";
import { T } from "../../../lib/types/common";
import { OrderStatus } from "../../../lib/enums/order.enum";
import OrderService from "../../services/OrderService";
import { sweetErrorHandling } from "../../../lib/sweetAlert";

/** SELECTOR **/

const processOrdersRetriever = createSelector(
  retrieveProcessOrders,
  (processOrders) => ({ processOrders })
);

interface ProcessOrdersProps {
  setValue: (input: string) => void;
}

export default function ProcessOrders(props: ProcessOrdersProps) {
  const { setValue } = props;
  const { authMember, setOrderBuilder } = useGlobals();
  const { processOrders } = useSelector(processOrdersRetriever);

  /** HANDLERS **/

  const finishOrderHandler = async (e: T) => {
    try {
      if (!authMember) throw new Error(Messages.error2);
      // PAYMENT PROCESS
      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.FINISH,
      };

      const confirmation = window.confirm('Have you received your order?');
      if (confirmation) {
        const order = new OrderService();
        await order.updateOrder(input);
        setValue('');
        setOrderBuilder(new Date());
      }
    } catch (err) {
      console.log('err');
      sweetErrorHandling(err).then();
    }
  };


  return (
    <TabPanel value={"2"}>
      <Stack>
        {processOrders?.map((order: Order) => {
          return (
            <Box key={order._id} className={"order-main-box"}>
              <Box className={"order-box"}>
                {order?.orderItems?.map((item: OrderItem) => {
                  const product: Product = order.productData.filter(
                    (ele: Product) => item.productId === ele._id
                  )[0];
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
                  <img src={"/icons/plus.svg"} style={{ marginLeft: "20px" }} />
                  <p>Delivery Cost</p>
                  <p>${order.orderDelivery}</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                  />
                  <p>Total</p>
                  <p>${order.orderTotal}</p>
                  <p style={{ marginRight: "5px" }}>
                    {moment().format("YY-MM-DD: HH:mm")}
                  </p>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={"cancel-button"}
                    value={order._id}
                    onClick={finishOrderHandler}
                  >
                    Verify to Fulfill
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}

        {!processOrders ||
          (processOrders.length === 0 && (
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
            >
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
