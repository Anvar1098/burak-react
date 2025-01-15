import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CardContent, CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";

const activeUsers = [
  { memberNick: "Jack", memberImage: "/img/Jack.jpg" },
  { memberNick: "Justin", memberImage: "/img/justin.webp" },
  { memberNick: "Rose", memberImage: "/img/rose.webp" },
  { memberNick: "Nusret", memberImage: "/img/nusret.webp" },
];

export default function ActiveUsers() {
  return (
    <div className="active-users-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">Active Users</Box>
          <Stack className="cards-frame">
            <CssVarsProvider>
              {activeUsers.length !== 0 ? (
                activeUsers.map((ele, index) => (
                  <Card className="card" key={index}>
                    <CardOverflow>
                      <AspectRatio ratio="1">
                        <img src={ele.memberImage} alt="" />
                      </AspectRatio>
                    </CardOverflow>
                    <Stack className="member-nickname">
                      <CardContent>
                        <Typography>
                          {ele.memberNick}
                        </Typography>
                      </CardContent>
                    </Stack>
                  </Card>
                ))
              ) : (
                <Box className="no-data">No active users available!</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
