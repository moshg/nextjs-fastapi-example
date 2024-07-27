import { Button, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <VStack as="main" flexDirection="column" padding={16}>
      <Button>Hello World</Button>
    </VStack>
  );
}
