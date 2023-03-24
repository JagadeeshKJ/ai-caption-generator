import { Container, Box } from "@chakra-ui/react";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import KeywordsModal from "./components/KeywordsModal";
import TextInput from "./components/TextInput";

const App = () => {
  const [keywords, setKeywords] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const extractKeywords = async (text) => {
    setLoading(true);
    setIsOpen(true);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt:
          "Generate an amazing caption (which can be put in instagram posts and stories) and in a new line with a bunch of hashtags seperated with commas and at the very end give me a couple of emojis for the text given below\n\n" +
          text +
          "",
        temperature: 0.5, // creativity from 0 to 1
        max_tokens: 60,
        frequency_penalty: 0.8, // -2 to 2
      }),
    };

    try {
      const response = await fetch(
        import.meta.env.VITE_OPENAI_API_URL,
        options
      );

      const json = await response.json();

      setKeywords(json.choices[0].text.trim());
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Box
      bg="blue.600"
      className="box"
      color="white"
      height="100vh"
      paddingTop={130}
    >
      <Container maxW="3xl" centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
      <KeywordsModal
        keywords={keywords}
        loading={loading}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </Box>
  );
};

export default App;
