import { Avatar, Flex, Text } from "@chakra-ui/react"
import { create } from "framer-motion/client"

const Comment = ({ comment }) => {
  return <Flex gap={4}>
    {/* <Avatar src={profilePic} name={username} size={"sm"} /> */}
    <Flex direction={"column"}>
        <Flex gap={2}>
            <Text fontWeight={"bold"} fontSize={12}>
                {/* {username} */}
            </Text>
            <Text fontSize={14}>
                {comment.comment}
            </Text>
        </Flex>
        <Text fontSize={12} color={"gray.500"}>
            {/* {createdAt} */}
        </Text>
    </Flex>
  </Flex>
}

export default Comment