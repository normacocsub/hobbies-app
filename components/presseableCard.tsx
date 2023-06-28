import { Pressable, Text, HStack, Box, Image, Divider } from "native-base";
import React,{ useState } from "react";


interface Props {
    title: string,
    srcImage: string,
    onPress: any
}
const PresseableCard = ({ title, srcImage, onPress }: Props) => {
    const [isPressed, setIsPressed] = useState(false);

    const onPressItem = () => {
        setIsPressed(true)
        onPress()
    }
    return <Pressable onPressIn={() => onPressItem()}
        onPressOut={() => setIsPressed(false)} rounded="8"
        overflow="hidden" borderWidth="1" borderColor="coolGray.300"
        
        maxW="96"  shadow="3" bg="coolGray.100" p="5" style={{
            transform: [{
                scale: isPressed ? 0.96 : 1
            }]
        }}>

        <Box>
            <HStack alignItems="center">

                <Text color="coolGray.800" mt="3" fontWeight="medium" width={200}
                    fontSize="xl">
                    {title}
                </Text>
                <Divider bg="emerald.500" thickness="2" mx="2" orientation="vertical" />
                <Image size={100} alt="fallback text" borderRadius={100} source={{
                    uri: "https://-page-icon.png"
                }} fallbackSource={{
                    uri: "https://www.w3schools.com/css/img_lights.jpg"
                }} />
            </HStack>
        </Box>
    </Pressable>
}

export default PresseableCard;