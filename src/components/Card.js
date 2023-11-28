import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
    align="start"
    spacing={4}
    borderRadius="md"
    overflow="hidden"
    bg="white"
    color="black"
    boxShadow="md"
    p={4}
    h="100%"
    m={0}
  >
    <Image src={imageSrc} alt={title}  borderRadius="md" objectFit="cover" w="100%" h="250px" m={0} />
    <VStack align="start" spacing={2} flex="1">
      <Heading as="h2" size="md">
        {title}
      </Heading>
      <Text>{description}</Text>
    </VStack>
    <HStack justify="flex-start" w="100%">
      <Text fontWeight="bold">See more</Text>
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
    </HStack>
  </VStack>
);
};

export default Card;
