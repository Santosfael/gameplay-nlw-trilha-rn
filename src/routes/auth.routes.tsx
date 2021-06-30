import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from "../global/styles/theme";

import { Home } from "../screens/Home";
import { AppoitmentDetails } from "../screens/AppoitmentDetails";
import { AppoitmentCreate } from "../screens/AppoitmentCreate";


const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.secondary100
                }
            }}
        >
            <Screen
                name="Home"
                component={Home}
            />

            <Screen
                name="AppoitmentDetails"
                component={AppoitmentDetails}
            />

            <Screen
                name="AppoitmentCreate"
                component={AppoitmentCreate}
            />
        </Navigator>
    )
}