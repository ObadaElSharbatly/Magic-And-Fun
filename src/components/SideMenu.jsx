import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate, Link } from "react-router-dom";

function SideMenu({ tabs }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const clickTab = () => {
    navigate("/");
    onClose();
  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="md:hidden h-8 w-8 stroke-white cursor-pointer hover:transition-all hover:duration-500  hover:stroke-yellow-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        onClick={onOpen}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="black">
          <DrawerCloseButton color="white" size="lg" top="4" />
          <DrawerHeader textColor="yellow.300">
            <img
              src="https://res.cloudinary.com/elsharbatly/image/upload/v1655546037/magic_and_fun/logos/mf-logo_yiehtm.png"
              alt="Magic&Fun logo"
              width={70}
              className="inline-block mr-5"
            />
            Magic & Fun
          </DrawerHeader>

          <DrawerBody>
            <div className="grid grid-cols-1 gap-y-3 ">
              {tabs.map((tab, index) =>
                tab.title === "Home" ? (
                  <Link
                    key={index}
                    to={tab.href}
                    className="text-white text-lg"
                    onClick={onClose}
                  >
                    <p>{tab.title}</p>
                  </Link>
                ) : (
                  <a
                    href={tab.href}
                    className="text-white text-lg"
                    key={index}
                    onClick={clickTab}
                  >
                    <p>{tab.title}</p>
                  </a>
                )
              )}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideMenu;
