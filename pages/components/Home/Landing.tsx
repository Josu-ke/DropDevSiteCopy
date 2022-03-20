import { Box, Flex, Heading, Text, Image, Button } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { AnimatePresence, motion } from "framer-motion"

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
})
export default function Landing() {
  const MotionHeading = motion(Heading)
  const MotionText = motion(Text)
  const MotionBox = motion(Box)

  return (
    <>
      <section id="home">
        <Box h={"100%"} color={"white"} overflowX="hidden">
          <Flex justifyContent={"center"} flexDir="column">
            <Flex bg={"black"} mt={"30px"} alignItems={"center"} justifyContent={"space-around"} flexWrap="wrap" w={"100%"} h="100%">
              <Box pos={"absolute"}></Box>
              <Box color={"white"} padding={"30px"} h="100%" w={"600px"}>
                <Heading fontFamily={"PT Sans"} fontSize="6xl">
                  We Create Websites
                  <br /> That Sell.
                </Heading>

                <Text w={"100%"} fontFamily={"PT Sans"} mt="20px">
                  Technology is constantly changing, making it hard for businesses to keep their website updated with the latest marketing and security updates. DropDev handles your digital footprint, keeping your web presence professional and letting you and your team do what you do best, delivering value to your customers.
                </Text>

                <Button rounded="full" fontFamily={"PT Sans"} bg={"#D44AE3"} mt="30px" colorScheme={"pink"}>
                  Learn More
                </Button>
              </Box>

              <Image alt="description of image" src="DEVOPS.svg" color={"white"} h="400px" w="500px" borderRadius={"10px"} m={0} />
            </Flex>
            <Box bg={"black"} borderRadius="0 0 50% 50% / 0 0 100% 100%" h="100px" overflow="auto"></Box>
          </Flex>

          <Flex mb={"30px"} mt="20px" alignItems={"center"} color={"black"} flexDir="column" w="100%">
            <Heading fontSize={"lg"}>Web developers from the future</Heading>
            <Heading textAlign={"center"}>Here To Make Your Visions A Reality</Heading>

            <Button size={"lg"} rounded="3xl" bg={"#D44AE3"} mt="70px" colorScheme={"pink"}>
              Request A Quote
            </Button>
          </Flex>
        </Box>
      </section>
    </>
  )
}
