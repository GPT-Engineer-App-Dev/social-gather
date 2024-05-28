import { Box, Button, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">Event Management</Heading>
        <HStack spacing={8}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">Events</Link>
          <Link href="#" color="white">Create Event</Link>
          <Link href="#" color="white">Profile</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bg="blue.500" color="white" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Manage Your Events Seamlessly</Heading>
        <Text fontSize="xl" mb={6}>Create, manage, and share your events with ease.</Text>
        <Button colorScheme="teal" size="lg">Create an Event</Button>
      </Box>

      {/* Upcoming Events Section */}
      <Box py={20} textAlign="center">
        <Heading size="xl" mb={10}>Upcoming Events</Heading>
        <VStack spacing={8}>
          <Box p={5} shadow="md" borderWidth="1px" width="100%" maxW="container.md">
            <Heading fontSize="xl">Event 1</Heading>
            <Text mt={4}>Details about Event 1</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" width="100%" maxW="container.md">
            <Heading fontSize="xl">Event 2</Heading>
            <Text mt={4}>Details about Event 2</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" width="100%" maxW="container.md">
            <Heading fontSize="xl">Event 3</Heading>
            <Text mt={4}>Details about Event 3</Text>
          </Box>
        </VStack>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={10} textAlign="center">
        <VStack spacing={4}>
          <Text>Contact Us: contact@eventmanagement.com</Text>
          <HStack spacing={4}>
            <Link href="#"><FaFacebook size="24px" /></Link>
            <Link href="#"><FaTwitter size="24px" /></Link>
            <Link href="#"><FaInstagram size="24px" /></Link>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;