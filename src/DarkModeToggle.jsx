import { useState } from "react";
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function DarkModeToggle() {
  const { toggleColorMode } = useColorMode();
  const iconColor = useColorModeValue("gray.800", "white");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label="Toggle dark mode"
      icon={useColorModeValue(<FaMoon />, <FaSun />)}
      variant="ghost"
      size="md"
      fontSize="lg"
      color={iconColor}
      _hover={{
        bg: "transparent",
        color: "gray.500",
        textDecoration: "none",
      }}
      _focus={{
        bg: "transparent",
        boxShadow: "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition="all 0.2s"
    />
  );
}

export default DarkModeToggle;
