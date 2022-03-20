import { Container, SimpleGrid, Image, Flex, Heading, Text, Stack, StackDivider, Icon, useColorModeValue } from "@chakra-ui/react"
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp, IoCodeWorkingSharp } from "react-icons/io5"
import { ReactElement } from "react"

interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex w={8} h={8} align={"center"} justify={"center"} rounded={"full"} bg={iconBg}>
        {icon}
      </Flex>
      <Text color="white" fontWeight={600}>
        {text}
      </Text>
    </Stack>
  )
}

export default function SplitWithImage() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading color={"white"}>A Digital Product Design Agency.</Heading>
          <Text color={"gray.300"} fontSize={"lg"}>
            We are responsive. We pride ourselves in delivering quality designs in a timely manner.
          </Text>
          <Stack spacing={4} divider={<StackDivider borderColor={useColorModeValue("gray.100", "gray.700")} />}>
            <Feature icon={<Icon as={IoCodeWorkingSharp} color={"yellow.500"} w={5} h={5} />} iconBg={useColorModeValue("yellow.100", "yellow.900")} text={"Web Development"} />
            <Feature icon={<Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />} iconBg={useColorModeValue("green.100", "green.900")} text={"Web 3.0 and NFT Services"} />
            <Feature icon={<Icon as={IoSearchSharp} color={"purple.500"} />} iconBg={useColorModeValue("purple.100", "purple.900")} text={"Online Presence and Branding"} />
          </Stack>
        </Stack>
        <Flex>
          <Image border={"2px"} borderColor="GrayText" rounded={"md"} alt={"feature image"} src={"DropDevNeon.svg"} />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}
