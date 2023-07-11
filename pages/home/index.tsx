import React, { useState } from "react";
import { Button, Card, HStack, VStack } from "native-base";
import PresseableCard from "../../components/presseableCard";
import { View, Text, Image, StyleSheet } from 'react-native';
import Carousel from "../../components/carousel";



const HomeScreen = ({ navigation }) => {

    

    

    

    return <VStack space={4} alignItems="center">


            
        <Carousel />
        
        <PresseableCard title="Registrar Actividad" srcImage=""
            onPress={() => navigation.navigate('Register')} />
        <PresseableCard title="Mis Actividades" srcImage=""
            onPress={() => navigation.navigate('Register')} />
            
        
    </VStack>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        backgroundColor: '#001F3F',
        elevation: 80, // Controla la intensidad de la sombra
        shadowColor: 'black', // Color de la sombra
        shadowOpacity: 0.6, // Opacidad de la sombra
        shadowOffset: {
            width: 20,
            height: 4,
        },
        shadowRadius: 4,
    },
    titleCard: {
        fontSize: 20,
        fontWeight: "700",
        color: 'white'
    },
    wrapper: {
        minHeight: 200,
        marginTop:30
      },
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
});
export default HomeScreen;