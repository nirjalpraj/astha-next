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

const AboutUsMenu = () => {
  const navListMenuItems = [
    {
      title: "About Aastha",
      link: "/about",
    },
    {
      title: "Message From Chairperson",
      link: "/message-from-chairperson",
    },
    {
      title: "Message From CEO",
      link: "#",
    },
    {
      title: "Board of Directors",
      link: "/bod",
    },
    {
      title: "Management Committee",
      link: "/management-comittee",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map((item, key) => (
    <section className="flex flex-col  mt-1 gap-1 rounded-lg divide-y divide-dashed">
      <div className="px-5">
        <Typography
          placeholder={""}
          variant="h6"
          color="blue-gray"
          className="flex  items-center text-base font-normal"
        >
          <a href={`${item.link}`}>{item.title}</a>
        </Typography>
      </div>
    </section>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography placeholder={""} as="div" className="font-medium">
            <ListItem
              placeholder={""}
              className="flex items-center gap-2 py-2 pr-4 text-[1.09rem]  text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              About
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList placeholder={""} className="hidden  rounded-xl  lg:block">
          <ul className="flex flex-col gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
};

export default AboutUsMenu;
