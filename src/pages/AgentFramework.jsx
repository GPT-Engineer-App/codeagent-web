import React, { useState } from 'react';
import { Box, Button, Container, Flex, Heading, Input, Text, Textarea, VStack } from '@chakra-ui/react';
import { FaPaperPlane } from 'react-icons/fa';
import { create } from '../../lib/openai'; // Import the create function from openai.js

const AgentFramework = () => {
  const [task, setTask] = useState('');
  const [progress, setProgress] = useState('');
  const [result, setResult] = useState('');

  const handleTaskSubmit = async () => {
    setProgress('Task in progress...');
    try {
      const response = await create({
        messages: [{ role: 'user', content: task }],
        model: 'gpt-4.0',
      });
      setProgress('');
      setResult(response.choices[0].message.content);
    } catch (error) {
      setProgress('');
      setResult('An error occurred while processing the task.');
      console.error(error);
    }
  };

  return (
    <Container maxW="container.lg" p={4}>
      <Flex direction="column" align="center" justify="center" p={10}>
        <Heading mb={4}>Agent Framework</Heading>
        <Text fontSize="lg" mb={6} textAlign="center">
          Use the Agent Framework to build end-to-end web apps using tools, tasks, and prompts.
        </Text>
      </Flex>
      <Box bg="gray.100" p={10} borderRadius="md" boxShadow="md">
        <VStack spacing={5}>
          <Heading size="md">Submit Your Task</Heading>
          <Textarea
            placeholder="Describe your task here..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            size="md"
            resize="vertical"
          />
          <Button colorScheme="blue" leftIcon={<FaPaperPlane />} onClick={handleTaskSubmit}>
            Submit
          </Button>
        </VStack>
      </Box>
      {progress && (
        <Box bg="yellow.100" p={4} mt={6} borderRadius="md" boxShadow="md">
          <Text>{progress}</Text>
        </Box>
      )}
      {result && (
        <Box bg="green.100" p={4} mt={6} borderRadius="md" boxShadow="md">
          <Text>{result}</Text>
        </Box>
      )}
    </Container>
  );
};

export default AgentFramework;