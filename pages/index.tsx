import { Box, Stack } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import Landing from "./components/Landing"
import NavBar from "./components/Navigation/NavBar2"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Navigation/Footer"
import Portfolio from "./components/Portfolio"
import Nav from "../componentsNonReact/Nav"
import Menu1 from "./components/Menu/Menu"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <Box bg="white" alignContent={"center"} overflowX="hidden">
      <Stack spacing={8} overflow="hidden" paddingBottom={"25px"}>
        <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu1 menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Landing />
      </Stack>
      <Pricing />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </Box>
  )
}
