import { Heading, Image, Text } from "@chakra-ui/react";

import logo from "../assets/light-bulb.svg";

const Header = () => {
  return (
    <>
      <Image src={logo} alt="logo" width={100} marginBottom="1rem" />
      <Heading color="white" className="header" marginBottom="1rem">
        AI Hashtag Captioner
      </Heading>
      <Text fontSize={16} textAlign="center">
        AI-Powered Caption and Hashtag Generator: Your Ultimate Social Media
        Assistant!
      </Text>
    </>
  );
};

export default Header;
