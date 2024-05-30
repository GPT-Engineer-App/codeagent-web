import React, { useState } from 'react';
import { Box, Button, Container, Flex, Heading, Input, Text, Textarea, VStack } from '@chakra-ui/react';
import { create } from '../../lib/openai';
import { FaPaperPlane } from 'react-icons/fa';

const Index = () => {
  const [code, setCode] = useState('');
  const [reviewProgress, setReviewProgress] = useState('');
  const [feedback, setFeedback] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [apiEndpoint, setApiEndpoint] = useState('');
  const [apiType, setApiType] = useState('openai');

  const handleSubmit = async () => {
    setReviewProgress('Review in progress...');
    try {
      const response = await create({
        messages: [{ role: 'user', content: `Please review the following code:\n\n${code}` }],
        model: 'gpt-3.5-turbo',
        apiKey,
        apiEndpoint,
        apiType
      });
      setReviewProgress('');
      setFeedback(response.choices[0].message.content);
    } catch (error) {
      setReviewProgress('');
      setFeedback('An error occurred while processing your request.');
      console.error(error);
    }
  };

  return (
    <Container maxW="container.lg" p={4}>
      <Flex direction="column" align="center" justify="center" p={10}>
        <Heading mb={4}>CodeAgentWeb</Heading>
        <Text fontSize="lg" mb={6} textAlign="center">
          Welcome to CodeAgentWeb! Submit your code for automated review and receive feedback.
        </Text>
      </Flex>
      <Box bg="gray.100" p={10} borderRadius="md" boxShadow="md">
        <VStack spacing={5}>
          <Heading size="md">Submit Your Code</Heading>
          <Textarea
            placeholder="Paste your code here..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
            size="md"
            resize="vertical"
          />
          <Input
            placeholder="Enter your API key..."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            size="md"
          />
          <Input
            placeholder="Enter your API endpoint..."
            value={apiEndpoint}
            onChange={(e) => setApiEndpoint(e.target.value)}
            size="md"
          />
          <Button colorScheme="blue" leftIcon={<FaPaperPlane />} onClick={handleSubmit}>
            Submit
          </Button>
        </VStack>
      </Box>
      {reviewProgress && (
        <Box bg="yellow.100" p={4} mt={6} borderRadius="md" boxShadow="md">
          <Text>{reviewProgress}</Text>
        </Box>
      )}
      {feedback && (
        <Box bg="green.100" p={4} mt={6} borderRadius="md" boxShadow="md">
          <Text>{feedback}</Text>
        </Box>
      )}
    </Container>
  );
};

export default Index;