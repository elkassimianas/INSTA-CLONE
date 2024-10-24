import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react"
import SuggestedHader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"

const SuggestedUsers = () => {
  return <VStack py={8} px={6} gap={4}>
    <SuggestedHader />
    <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
      <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
        Suggested for you
      </Text>
      <Text fontSize={12} fontWeight={"bold"} _hover={{color: "gray.400"}} cursor={"pointer"}>
        see All
      </Text>
    </Flex>

    <SuggestedUser name="Dan Abrahmov" followers={1392} avatar='https://bit.ly/dan-abramov' />
    <SuggestedUser name="Ryan Florence" followers={567} avatar='https://bit.ly/ryan-florence' />
    <SuggestedUser name='Christian Nwamba' followers={759} avatar='https://bit.ly/code-beast'/>

     <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
      © 2024 Built By {""}
      <Link href="https://www.linkedin.com/in/anas-el-kassimi/" target="_blank" color={"blue.500"} fontSize={14}>
        El kassimi Anas
      </Link>
    </Box>
  </VStack>
}

export default SuggestedUsers