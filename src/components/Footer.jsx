import { Image, Flex, Box, Text } from "@chakra-ui/react";
import reactLogo from "../assets/react.svg";
// import logo from "../assets/openai.png";

const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent="center" alignItems="center" gap={2}>
        <Image
          src={reactLogo}
          className="logo react"
          alt="footer-logo"
          // marginRight={2}
        />
        <Text fontSize={12}>Powered by OpenAI</Text>
        <Text fontSize={12}>&nbsp;|</Text>
        <Text fontSize={12}>
          <a
            href="https://github.com/JagadeeshKJ/ai-caption-generator"
            target="_blank"
          >
            Jagadeesh KJ &hearts;
          </a>
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
