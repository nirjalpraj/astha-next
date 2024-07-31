"use client";

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import ElaboratedServiceMenu from "./subcomponents/ElaboratedServiceMenu";
import AboutUsMenu from "./subcomponents/AboutUsMenu";

function NavList() {
  return (
    <List
      onPointerEnterCapture={""}
      onPointerLeaveCapture={""}
      placeholder={""}
      className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1"
    >
      <Typography
        placeholder={""}
        onPointerEnterCapture={""}
        onPointerLeaveCapture={""}
        as="a"
        href="/"
        // variant="small"
        color="blue-gray"
        className="mr-5"
      >
        <ListItem
          onPointerEnterCapture={""}
          onPointerLeaveCapture={""}
          placeholder={""}
          className="flex items-center gap-2 text-[1.09rem] py-2  "
        >
          Home
        </ListItem>
      </Typography>

      <AboutUsMenu />

      <Typography
        placeholder={""}
        onPointerEnterCapture={""}
        onPointerLeaveCapture={""}
        as="a"
        href="/publication"
        // variant="small"
        color="blue-gray"
        className="mr-5"
      >
        <ListItem
          onPointerEnterCapture={""}
          onPointerLeaveCapture={""}
          placeholder={""}
          className="flex items-center gap-2 text-[1.09rem] py-2   "
        >
          Publication
        </ListItem>
      </Typography>
      <ElaboratedServiceMenu />

      <Typography
        onPointerEnterCapture={""}
        onPointerLeaveCapture={""}
        placeholder={""}
        as="a"
        href="/news-notices"
        // variant="s"
        color="blue-gray"
        className="mr-5"
      >
        <ListItem
          onPointerEnterCapture={""}
          onPointerLeaveCapture={""}
          placeholder={""}
          className="flex items-center gap-2 text-[1.09rem] py-2  "
        >
          News/Notice
        </ListItem>
      </Typography>
      <Typography
        onPointerEnterCapture={""}
        onPointerLeaveCapture={""}
        placeholder={""}
        as="a"
        href="/gallery"
        // variant="s"
        color="blue-gray"
        className="font-medium mr-5"
      >
        <ListItem
          onPointerEnterCapture={""}
          onPointerLeaveCapture={""}
          placeholder={""}
          className="flex items-center gap-2 text-[1.09rem] py-2  "
        >
          Gallery
        </ListItem>
      </Typography>
      <Typography
        onPointerEnterCapture={""}
        onPointerLeaveCapture={""}
        placeholder={""}
        as="a"
        href="/contact-us"
        // variant="s"
        color="blue-gray"
        className="mr-5"
      >
        <ListItem
          onPointerEnterCapture={""}
          onPointerLeaveCapture={""}
          placeholder={""}
          className="flex items-center gap-2 text-[1.09rem] py-2  "
        >
          Contact
        </ListItem>
      </Typography>
      <Typography
        onPointerEnterCapture={""}
        onPointerLeaveCapture={""}
        placeholder={""}
        as="a"
        href="#"
        // variant="s"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem
          onPointerEnterCapture={""}
          onPointerLeaveCapture={""}
          placeholder={""}
          className="flex items-center gap-2 text-[1.09rem] py-2  "
        >
          Downloads
        </ListItem>
      </Typography>
    </List>
  );
}

const AppBar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <main className="mx-auto px-14 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          onPointerEnterCapture={""}
          onPointerLeaveCapture={""}
          placeholder={""}
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 "
        >
          A a s t h a L o g o
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>

        <IconButton
          onPointerEnterCapture={""}
          onPointerLeaveCapture={""}
          placeholder={""}
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button
            onPointerEnterCapture={""}
            onPointerLeaveCapture={""}
            placeholder=""
            variant="outlined"
            size="sm"
            color="blue-gray"
            fullWidth
          >
            Log In
          </Button>
          <Button
            onPointerEnterCapture={""}
            onPointerLeaveCapture={""}
            placeholder={""}
            variant="gradient"
            size="sm"
            fullWidth
          >
            Sign In
          </Button>
        </div>
      </Collapse>
    </main>
  );
};

export default AppBar;
