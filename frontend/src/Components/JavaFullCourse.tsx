import { Box } from "@mui/material";
import { List, Typography } from "antd";
import { ResponsiveAppBar } from "../HomePage";
import Title from "antd/es/typography/Title";
import { useUserStore } from "../Zustand/useUserStore";

export default function JavaFullCourse() {
  const loggedUSer = useUserStore((s: any) => s.user);
  console.log(loggedUSer);
  const data = [
    "Java Introduction",
    "Java Variables",
    "Java Data Types",
    "Java Type Casting",
    "Java Operators",
    "Java Operators",
    "Java Math",
    "Java Booleans",
    "Java If ... Else",
    "Java Switch",
    "Java While Loop",
    "Java For Loop",
    "Java Break and Continue",
    "Java Arrays",
    "Java Methods",
    "Java Classes",
    "Java OOPS",
    "Java File Handling",
    "Java Collection Framework",
  ];
  return (
    <Box>
      <ResponsiveAppBar />
      <Box sx={{ margin: 5 }}>
        <Typography.Title style={{ textAlign: "center" }}>
          Java Full Course
        </Typography.Title>
        <Title level={3}>In this course we cover these topics : </Title>
        <List
          size="large"
          bordered
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Box>
      <Box sx={{ margin: 5 }}>
        <Title>What is Java?</Title>
        <Title level={5}>
          Java is a popular programming language, created in 1995.
        </Title>
        <Title level={5}>
          It is owned by Oracle, and more than 3 billion devices run Java.
        </Title>
        <Title level={3}>It is used for: </Title>
        <Title level={5}>Mobile applications (specially Android apps)</Title>
        <Title level={5}>Desktop applications</Title>
        <Title level={5}>Web applications</Title>
        <Title level={5}>Web servers and application servers</Title>
        <Title level={5}>Games</Title>
        <Title level={5}>Database connection</Title>
        <Title level={5}>And much, much more!</Title>
        <Title>Important code additional module</Title>
      </Box>
      <Box
        sx={
          loggedUSer[0].membership == "Standard"
            ? { margin: 5, filter: "blur(10px)" }
            : { margin: 5 }
        }
      >
        <img src="https://i.ytimg.com/vi/m-8ZBO2ywaU/maxresdefault.jpg" />
      </Box>
    </Box>
  );
}
