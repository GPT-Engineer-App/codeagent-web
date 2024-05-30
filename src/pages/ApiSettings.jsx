import React, { useState } from 'react';
import { Box, Button, Container, Flex, Heading, Input, Select, VStack } from '@chakra-ui/react';

const ApiSettings = () => {
  const [apiProvider, setApiProvider] = useState('openai');
  const [apiKey, setApiKey] = useState('');
  const [apiEndpoint, setApiEndpoint] = useState('');

  const handleSave = () => {
    // Save the API settings securely
    console.log('API Provider:', apiProvider);
    console.log('API Key:', apiKey);
    console.log('API Endpoint:', apiEndpoint);
  };

  return (
    <Container maxW="container.lg" p={4}>
      <Flex direction="column" align="center" justify="center" p={10}>
        <Heading mb={4}>API Settings</Heading>
      </Flex>
      <Box bg="gray.100" p={10} borderRadius="md" boxShadow="md">
        <VStack spacing={5}>
          <Select value={apiProvider} onChange={(e) => setApiProvider(e.target.value)}>
            <option value="openai">OpenAI</option>
            <option value="azure">Azure OpenAI</option>
          </Select>
          <Input
            placeholder="API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            size="md"
          />
          <Input
            placeholder="API Endpoint"
            value={apiEndpoint}
            onChange={(e) => setApiEndpoint(e.target.value)}
            size="md"
          />
          <Button colorScheme="blue" onClick={handleSave}>
            Save
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default ApiSettings;