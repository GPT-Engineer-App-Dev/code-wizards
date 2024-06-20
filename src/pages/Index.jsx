import { Container, Box, Heading, Text, VStack, Button, HStack, Image } from "@chakra-ui/react";
import { FaCode, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl">Welcome to CodeMaster</Heading>
        <Text fontSize="xl">Your ultimate platform to learn coding online.</Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaCode />} colorScheme="teal" variant="solid" size="lg">
            Start Learning
          </Button>
          <Button leftIcon={<FaLaptopCode />} colorScheme="teal" variant="outline" size="lg">
            Browse Courses
          </Button>
        </HStack>
        <Box>
          <Image src="/images/online-learning.png" alt="Online Learning" boxSize="400px" objectFit="cover" />
        </Box>
        <VStack spacing={4} alignItems="flex-start">
          <HStack>
            <FaChalkboardTeacher size="24px" />
            <Text fontSize="lg">Expert Instructors</Text>
          </HStack>
          <HStack>
            <FaLaptopCode size="24px" />
            <Text fontSize="lg">Hands-on Projects</Text>
          </HStack>
          <HStack>
            <FaCode size="24px" />
            <Text fontSize="lg">Interactive Lessons</Text>
          </HStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;