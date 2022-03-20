import React, { useEffect, useState } from "react"
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react"
import Image from "next/image"

// Styles

// Data
import { portfolioList, featuredPortfolio, web3Portfolio, frontendPortfolio, fullstackPortfolio } from "../../componentsNonReact/data"

// components

// Icons

import PortfolioItem from "./PortfolioItem"

const Portfolio = () => {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio)
        break

      case "web3":
        setData(web3Portfolio)
        break

      case "frontend":
        setData(frontendPortfolio)
        break

      case "fullstack":
        setData(fullstackPortfolio)
        break

      default:
        break
    }
  }, [selected])

  return (
    <section className="portfolio" name="portfolio" id="portfolio">
      <Flex flexDir={"column"} paddingBottom={"7%"} alignItems="center">
        <Heading color={"white"} paddingBottom="2%" paddingTop={"1%"}>
          {" "}
          Experience
        </Heading>
        <div className="list">{portfolioList && portfolioList.map(list => <PortfolioItem title={list.title} key={list.id} active={selected === list.id} setSelected={setSelected} id={list.id} repoUrl={list.repositoryUrl} liveUrl={list.liveUrl} tagline={list.tagline} />)}</div>
        <div className="row">
          {data &&
            data.map((item, index) => (
              <div className="column" key={index}>
                <Image src={item.img} alt={item.title} width="500px" height={"500px"} />
                <div className="overlay">
                  <Flex className="left" w={"100%"}>
                    <h3>{item.title}</h3>
                    {item.tagline && <p>{item.tagline}</p>}
                  </Flex>
                  <div className="right">
                    <a href={item.repositoryUrl}></a>

                    <a href={item.liveUrl} target="_blank" rel="noopener noreferrer"></a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Flex>
    </section>
  )
}

export default Portfolio
