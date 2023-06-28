import React, { useState } from "react";
import { Button, Card, VStack } from "native-base";
import { StyleSheet } from 'react-native'
import PresseableCard from "../../components/presseableCard";


const HomeScreen = ({ navigation }) => {


    return <VStack space={4} alignItems="center">

        
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
    }
});
export default HomeScreen;