import React from "react"
import { Flex, Box } from "@chakra-ui/react"
// Animation
import { motion } from "framer-motion"
import { animateScroll as scroll } from "react-scroll"
import Logo from "../public/DropDevLogo.svg"
import Image from "next/image"

// Styles

// Components
import MenuIcon from "../pages/components/Menu/MenuIcon/MenuIcon"

const Nav = ({ menuOpen, setMenuOpen }) => {
  const logo = require("../public/DropDevLogo.svg")

  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className={"nav-wrapper " + (menuOpen && "menuActive")}>
      <motion.div
        bg="black"
        id="navbar"
        className={"nav-container"}
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 1.5
        }}
      >
        <Flex className={"logo " + (menuOpen && "menuActive")} onClick={() => scroll.scrollToTop()} flexDir="column">
          <Box marginTop="30px"></Box>
          <Image alt="description of image" width={"200px"} height="75px" src={logo} />
        </Flex>

        <MenuIcon handleClick={handleClick} menuOpen={menuOpen} />
      </motion.div>
    </div>
  )
}

export default Nav
