import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import ServiceFeature from "./ServiceFeature"
import { Box, HStack, Stack, Text, Flex, Heading } from "@chakra-ui/react"

export default function Pricing() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section id="services">
      <Box bg={"black"} borderRadius="50% 50% 0 0 / 100% 100% 0 0" h="100px" overflow="auto"></Box>
      <Box bg="black" h={"100%"} paddingBottom="35px" paddingTop={"3%"}>
        {" "}
        <div className="grids">
          <div className="images" data-aos="fade-top" data-aos-once="true" alt="description of image">
            {" "}
            <ServiceFeature />
          </div>

          <Flex className="boxes" justifyContent={"center"} data-aos="fade-left" data-aos-once="true" textAlign={"center"} h="100%" flexDir={"column"}>
            <Text color={"pink.400"} fontFamily={"poppins"} fontSize="3xl" data-aos-anchor-placement="top-center">
              Result Driven.
            </Text>
            <Text h={"100%"} fontFamily={"poppins"} fontSize="md" color="white">
              We are not generalists, we only offer you what we do best: Branded assets, UI/UX design, full-stack development, and conversion optimization.
            </Text>
          </Flex>
          <Flex data-aos="fade-left" data-aos-once="true" className="boxes" justifyContent={"center"} textAlign={"center"} h="100%" flexDir={"column"}>
            <Text color={"pink.400"} fontFamily={"poppins"} fontSize="3xl">
              Designer Made
            </Text>
            <Text color={"white"} fontFamily={"poppins"} fontSize="md">
              Aesthetics matter. Our Graphic Design experts are here to help you elevate your brand to a world class level.
            </Text>
          </Flex>

          <Flex data-aos="fade-left" className="boxes" data-aos-once="true" justifyContent={"center"} textAlign={"center"} h="100%" mb={"100px"} flexDir={"column"}>
            <Text color={"pink.400"} fontFamily={"poppins"} fontSize="3xl">
              Web 3.0 Development
            </Text>
            <Text color={"white"} fontFamily={"poppins"} fontSize="md">
              We are pioneering the Web 3.0 space. We specialize in Smart contracts and NFT Development
            </Text>
          </Flex>
        </div>
      </Box>
    </section>
  )
}
