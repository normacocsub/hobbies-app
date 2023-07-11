import { View, HStack, IconButton, Icon, ChevronLeftIcon, ChevronRightIcon } from "native-base";
import React from "react";
import { StyleSheet, Image } from "react-native";

const Carousel = () => {

    const data = [
        { text: 'Gafa 1', image: require('../public/imagenes/gafas1.jpeg') },
        { text: 'Gafa 2', image: require('../public/imagenes/gafas2.jpeg') },
        { text: 'Gafa 3', image: require('../public/imagenes/gafas3.jpeg') },
    ];
    const renderCarouselItem = (item: any, index: number) => (

        <View style={styles.carouselItem} key={index}>
            <Image source={item.image} style={styles.image} />
        </View>

    );


    return <HStack alignItems="center">
        <IconButton style={styles.buttonIcon} size={20} variant="solid" icon={<ChevronLeftIcon />} _icon={{
            color: "black",
            size: "lg",
            opacity: 1
        }} zIndex={1}/>
        <HStack alignItems="center" style={styles.hstackContent}>
            {data.map((item, index) => renderCarouselItem(item, index))}
        </HStack>
        <IconButton style={styles.buttonIcon} size={20} variant="solid" icon={<ChevronRightIcon />} _icon={{
            color: "black",
            size: "lg",
            opacity: 1
        }} zIndex={1}/>

    </HStack>


}



const styles = StyleSheet.create({
    carouselItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    hstackContent: {
        width: 280
    },
    buttonIcon: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color: 'black'
    }
});

export default Carousel;