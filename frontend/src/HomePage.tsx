import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Link } from "react-router-dom";
import { useUserStore } from "./Zustand/useUserStore";
import { Watermark } from "antd";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const pages = [
  { name: "Home", link: "/Home" },
  { name: "About", link: "/about" },
  { name: "Pricing", link: "/Home/pricing" },
];
const settings = [
  { name: "Profile", link: "/profile" },
  { name: "Logout", link: "/login" },
];

const programmingLanguages = [
  {
    name: "Java Full Course(Basic Java+Advanced Java + Collection Framework)",
    image:
      "https://www.webskittersacademy.in/wp-content/uploads/2016/01/Java-As-A-Programming-Language.png",
    link: "/Home/java",
  },
  {
    name: "JavaScript Full Course(Basic JavaScript + Advanced JavaScript)",
    image:
      "https://media.licdn.com/dms/image/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=rtD52hfy37nFVmc4_MXfnflV6C-ke773W70SYJLoWRc",
    link: "/Home/javascript",
  },
];

const webDevelopment = [
  {
    name: "Javascript Full Stack Course(MongoDB + Express JS + React JS + Node JS)",
    image: "https://img-c.udemycdn.com/course/750x422/3562677_668e.jpg",
    link: "/Home/javascript fullstack",
  },
  {
    name: "Java Full Stack Course(MongoDB + SpringBoot + React JS)",
    image:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/317104429/original/067ce7c63fa96559970261b75b87c00d281798b4/develop-a-website-app-backend-with-java-spring-boot-react-js-nodejs-and-dbs.png",
    link: "/Home/java fullstack",
  },
];

const machineLearning = [
  {
    name: "Machine Learning Full Course ",
    image:
      "https://smartclick.ai/wp-content/uploads/2021/11/machine-learning-engineer.jpg",
    link: "/Home/machine Learning",
  },
];

const AI = [
  {
    name: "Artificial Intellegence Full Course",
    image:
      "https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg",
    link: "/Home/AI",
  },
];
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function HomePage() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Watermark content="Inno learn"></Watermark>
      <ResponsiveAppBar />
      <Box sx={{ width: "100%", margin: 5 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Programming Languages" {...a11yProps(0)} />
            <Tab label="Web Development" {...a11yProps(1)} />
            <Tab label="Machine Learning" {...a11yProps(2)} />
            <Tab label="Artificial Intelligence" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Box sx={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {programmingLanguages.map((lan) => {
              return (
                <>
                  <CourseCard lan={lan} />
                </>
              );
            })}
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Box sx={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {webDevelopment.map((web) => {
              return (
                <>
                  <CourseCard lan={web} />
                </>
              );
            })}
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Box sx={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {machineLearning.map((lan) => {
              return (
                <>
                  <CourseCard lan={lan} />
                </>
              );
            })}
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Box sx={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {AI.map((web) => {
              return (
                <>
                  <CourseCard lan={web} />
                </>
              );
            })}
          </Box>
        </CustomTabPanel>
      </Box>
    </Box>
  );
}

export function ResponsiveAppBar() {
  const loggedUser = useUserStore((s: any) => s.user);
  const [profilePic, setProfilePic] = React.useState(
    "/static/images/avatar/2.jpg"
  );
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "black", position: "sticky", top: 0 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AutoStoriesIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Inno learn
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link to={page.link} style={{ textDecoration: "none" }}>
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <AutoStoriesIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Inno learn
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to={page.link} style={{ textDecoration: "none" }}>
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={loggedUser[0].image ? loggedUser[0].image : profilePic}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link to={setting.link} style={{ textDecoration: "none" }}>
                  <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export function CourseCard({ lan }: any) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={lan.link} style={{ textDecoration: "none", color: "black" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={lan.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {lan.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      {/* <CardActions>
        <Button size="small" color="primary">
          open
        </Button>
      </CardActions> */}
    </Card>
  );
}
