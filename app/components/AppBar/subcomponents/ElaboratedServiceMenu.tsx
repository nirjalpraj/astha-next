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

const ElaboratedServiceMenu = () => {
  const navListMenuItems = [
    {
      title: "Saving",
      subtitles: [
        {
          title: "Regular Monthly Saving",
          link: "/savings",
        },
        {
          title: "Special Saving",
          link: "#",
        },
        {
          title: "Insurance Saving",
          link: "#",
        },
        {
          title: "Daily Saving",
          link: "#",
        },
        {
          title: "Fixed Saving",
          link: "#",
        },
      ],
    },
    {
      title: "Loan",
      subtitles: [
        {
          title: "Agriculture & Livestock Loan",
          link: "#",
        },
        {
          title: "Business Loan",
          link: "#",
        },
        {
          title: "Loan Against Periodic Deposit",
          link: "#",
        },
        {
          title: "Housing Loan",
          link: "#",
        },
        {
          title: "Educational Loan",
          link: "#",
        },
        {
          title: "Personal Loan",
          link: "#",
        },
      ],
    },
    {
      title: "Interest Rate",
      subtitles: [
        {
          title: "Insurance Saving",
          link: "#",
        },
        {
          title: "Regular Monthly Saving",
          link: "#",
        },
        {
          title: "Special Saving",
          link: "#",
        },
        {
          title: "Daily Saving",
          link: "#",
        },
        {
          title: "Fixed Saving",
          link: "#",
        },
      ],
    },
    {
      title: "Others",
      subtitles: [
        {
          title: "Money Transfer Service",
          link: "#",
        },
        {
          title: "Maternal Mother Visit",
          link: "#",
        },
        {
          title: "SLC Honoring & Scholorship Program",
          link: "#",
        },
        {
          title: "Library Management Training",
          link: "#",
        },
      ],
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map((item, key) => (
    <section className="flex  mt-1 gap-1 rounded-lg divide-y divide-dashed">
      <div className="px-10 ">
        <Typography
          placeholder={""}
          variant="h6"
          color="blue-gray"
          className="flex text-[#009B39] items-center text-base font-semibold"
        >
          {item.title}
        </Typography>
        <div className="flex flex-col">
          {item.subtitles?.map((subItem) => {
            return (
              <Typography
                placeholder={""}
                variant="paragraph"
                className="text-sm text-black !font-medium  mb-1 hover:underline cursor-pointer"
              >
                <a href={`${subItem.link}`}>{subItem.title}</a>
              </Typography>
            );
          })}
        </div>
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
              Services
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
        <MenuList
          placeholder={""}
          className="hidden max-w-screen-xl rounded-xl  lg:block"
        >
          <div>
            <Typography
              placeholder={""}
              className="font-bold text-2xl text-[#2C4373] px-10 "
            >
              Services
            </Typography>
          </div>
          <ul className="grid grid-cols-4 gap-y-2 outline-none outline-0">
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

export default ElaboratedServiceMenu;
