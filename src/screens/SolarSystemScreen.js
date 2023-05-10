import React from 'react'
import { View, Text, Image, TouchableOpacity, } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import PlanetItem from '../components/PlanetItem'

const SolarSystemScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 30, textAlign: 'center',}} >Solar System</Text>
            <ScrollView>
                <PlanetItem image={require('../../assets/images/mercury.png')} name="Mercury" desc="Mercury is the fastest planet, zipping around the sun every 88 earth days" />
                <PlanetItem image={require('../../assets/images/venus.png'  )} name="Venus" desc="Venus spins slowly in the opposite direction from most planets" />
                <PlanetItem image={require('../../assets/images/earth.png')} name="Earth" desc="Earth is the only place we know of so far that's inhabited by living things" />
                <PlanetItem image={require('../../assets/images/mars.png')} name="Mars" desc="Mars is a dusty, cold, desert world with a very thin atmosphere" />
                <PlanetItem image={require('../../assets/images/jupiter.png')} name="Jupiter" desc="Jupiter is more than twice as massive than the other planets of our solar system combined" />
                <PlanetItem image={require('../../assets/images/saturn.png')} name="Saturn" desc="Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system" />
                <PlanetItem image={require('../../assets/images/uranus.png')} name="Uranus" desc="Uranus rotates at a nearly 90-degree angle from the plane of its orbit" />
                <PlanetItem image={require('../../assets/images/neptune.png')} name="Neptune" desc="Neptune is dark, cold, and whipped by supersonic winds" />
            </ScrollView>
        </View>
    )
}
export default SolarSystemScreen;