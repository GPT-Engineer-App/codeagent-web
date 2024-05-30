import React, { useState } from 'react';
import { Box, Button, Container, Flex, Heading, Input, Text, Textarea, VStack } from '@chakra-ui/react';
import { FaPaperPlane } from 'react-icons/fa';

const Index = () => {
  const [code, setCode] = useState('');
  const [reviewProgress, setReviewProgress] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    // Placeholder for code submission logic
    setReviewProgress('Review in progress...');
    setTimeout(() => {
      setReviewProgress('');
      setFeedback('Code review completed. No issues found.');
    }, 2000);
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