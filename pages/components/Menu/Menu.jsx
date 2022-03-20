import React from "react"
import { Box, Flex } from "@chakra-ui/react"
import Image from "next/image"
// Router
import { NavLink } from "../../../componentsNonReact/NavLink"

export const Menu = ({ menuOpen, setMenuOpen }) => {
  const logo = require("../../../public/DropDevLogo.svg")
  return (
    <Flex className={"menu " + (menuOpen && "active")}>
      <Image mt={"70px"} src={logo} height={"100px"} />
      <ul>
        <NavLink text="Home" path="home" onClick={() => setMenuOpen(false)} />
        <NavLink text="Services" path="services" onClick={() => setMenuOpen(false)} />
        <NavLink text="Portfolio" path="portfolio" onClick={() => setMenuOpen(false)} />
        <NavLink text="Testimonials" path="testimonials" onClick={() => setMenuOpen(false)} />
        <NavLink text="Contact" path="contact" onClick={() => setMenuOpen(false)} />
      </ul>
    </Flex>
  )
}
export default Menu
