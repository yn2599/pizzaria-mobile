import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignIn from '../pages/SignIn';

const Stark = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <Stark.Navigator>
            <Stark.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        </Stark.Navigator>
    )
}

export default AuthRoutes;