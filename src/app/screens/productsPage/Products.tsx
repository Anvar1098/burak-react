import React from "react";
import { Box, Button, Container, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const products = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

export default function Products() {
  return (
    <div className={"products"}>
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"big-box"}>
            <Box className={"title"}>Burak Restaurant</Box>
            <Stack className={"search"}>
              <input type="text" placeholder="Type Here" />
              <button>
                <p>SEARCH</p>
                <div>
                  <SearchIcon />
                </div>
              </button>
            </Stack>
          </Stack>

          <Stack className={"filter-section"}>
            <Stack className={"filter-box"}>
              <Button
                className={"order"}
                color={"primary"}
                variant={"contained"}
              >
                New
              </Button>
              <Button
                className={"order"}
                color={"secondary"}
                variant={"contained"}
              >
                Price
              </Button>
              <Button
                className={"order"}
                color={"secondary"}
                variant={"contained"}
              >
                Views
              </Button>
            </Stack>
          </Stack>

          <Stack className={"category-section"}>
              <Stack className={"prod-cat"}>
              <div className={"cat-main"}>
                <Button variant={"contained"} color={"primary"}>
                  Other
                </Button>
                <Button variant={"contained"} color={"secondary"}>
                  Dessert
                </Button>
                <Button variant={"contained"} color={"secondary"}>
                  Drink
                </Button>
                <Button variant={"contained"} color={"secondary"}>
                  Salad
                </Button>
                <Button variant={"contained"} color={"secondary"}>
                  Dish
                </Button>
              </div>
            </Stack>  
        
            <Stack className="product-wrapper">
              {products.length !== 0 ? (
                products.map((product, index) => {
                  return (
                    <Stack key={index} className="product-card">
                      <Stack
                        className="product-img"
                        sx={{
                          backgroundImage: `url(${product.imagePath})`,
                          backgroundSize: 'cover'
                        }}
                      >
                        <div className="product-sale">Normal size</div>
                        <Button className="shop-btn">
                          <img
                            src="/icons/shopping-cart.svg"
                            alt=""
                            style={{ display: "flex" }}
                          />
                        </Button>
                        <Button className="view-btn" sx={{ right: "36px" }}>
                          <Badge badgeContent={20} color="secondary">
                            <RemoveRedEyeIcon
                              sx={{
                                color: "gray",
                              }}
                            />
                          </Badge>
                        </Button>
                      </Stack>
                      <Box className="product-desc">
                        <span className="product-title">
                          {product.productName}
                        </span>
                        <div className="product-desc">
                          <MonetizationOnIcon />
                          {12}
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className="no-data">Products are not available!</Box>
              )}
            </Stack>
          </Stack>

          <Stack className={"pagi-section"}>
              <Pagination
               count={3}
               page={1}
               renderItem={(item) =>(
                <PaginationItem
                components={{
                  previous: ArrowBackIcon,
                  next: ArrowForwardIcon,
                }}
                {...item}
                color={'secondary'}
                />
               )}
              />
          </Stack>
        </Stack>
      </Container>

      <div className={"brand-logo"}>
        <Stack className={"brand-title"}>
          Our Family Brands
        </Stack>
        <Stack className={'brand-card'}>
            <Box className='card1'></Box>
            <Box className='card2'></Box>
            <Box className='card3'></Box>
            <Box className='card4'></Box>
        </Stack>
      </div>
      <div className={"adress"}>
        <Container>
          <Stack className={'address-area'}>
            <Box className={'title'}>Our Address</Box>
            <iframe 
            style={{ marginTop: '60px' }}
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.363734762081!2d69.2267250514616!3d41.322703307863044!2m3!1f0!2f0!3f0!3m2!1i1024!21768!4f13.1!3m3!1m2!1s0x38ae8b9a0a33281d%3A0x9c5015eab678e435!2z0KDQsNC50YXQvtC9!5e0!3m2!1sko!2skr!4v1655461169573!5m2!1sko!2skr'
            width='1320'
            height='500'
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
