import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react"
import SuggestedHader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";

const SuggestedUsers = () => {
  const {isLoading, suggestedUsers} = useGetSuggestedUsers();

  // optional: render loading Skeleton instead of null
  if (isLoading) return null;

  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHader />
      
      {suggestedUsers.length !== 0 && (
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
          <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            Suggested for you
          </Text>
          <Text fontSize={12} fontWeight={"bold"} _hover={{color: "gray.400"}} cursor={"pointer"}>
            see All
          </Text>
        </Flex>
      )}

      {suggestedUsers.map(user => (
        <SuggestedUser user={user} key={user.id} />
      ))}

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2024 Built By {""}
        <Link href="https://www.linkedin.com/in/anas-el-kassimi/" target="_blank" color={"blue.500"} fontSize={14}>
          El kassimi Anas
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers