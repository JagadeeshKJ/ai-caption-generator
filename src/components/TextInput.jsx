import { Textarea, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

const TextInput = ({ extractKeywords }) => {
  const [text, setText] = useState("");
  const toast = useToast();

  const submitText = () => {
    if (text === "") {
      toast({
        title: "No text provided.",
        description: "Please enter some text in the text area.",
        status: "error",
        duration: 5000,
        isClosable: false,
      });
    } else {
      extractKeywords(text);
    }
  };

  return (
    <>
      <Textarea
        // bg="blue.400"
        color="black"
        className="white-placeholder text-area"
        focusBorderColor="transparent"
        activeBorderColor="transparent"
        padding={4}
        marginTop={6}
        height={200}
        value={text}
        placeholder="Eg. Nature, Photography, Travel etc. or any other text."
        onChange={(e) => setText(e.target.value)}
      />

      <Button
        bg="#1d1d1d"
        color="white"
        marginTop={4}
        width="100%"
        _hover={{ bg: "#ed217c" }}
        onClick={submitText}
      >
        Let's go!
      </Button>
    </>
  );
};

export default TextInput;
