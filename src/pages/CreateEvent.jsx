import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CreateEvent = ({ addEvent }) => {
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { eventName, date, time, location, description, image };
    addEvent(newEvent);
    navigate("/");
  };

  return (
    <Container maxW="container.md" py={10}>
      <Heading mb={6}>Create a New Event</Heading>
      <Box as="form" onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Event Name</FormLabel>
            <Input value={eventName} onChange={(e) => setEventName(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Date</FormLabel>
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Time</FormLabel>
            <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Location</FormLabel>
            <Input value={location} onChange={(e) => setLocation(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Image</FormLabel>
            <Input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </FormControl>
          <Button colorScheme="teal" type="submit">Create Event</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default CreateEvent;