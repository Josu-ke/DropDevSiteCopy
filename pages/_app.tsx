import "../styles/globals.css"
import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import { AnimatePresence } from "framer-motion"
import "../componentsNonReact/particles.css"
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp
