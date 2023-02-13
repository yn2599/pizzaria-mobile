import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Dashboard from '../pages/SignIn/Dashboard';
import Order from '../pages/Order';
import FinishOrder from '../pages/FinishOrder';

export type StackPramsList = {
    Dashboard: undefined;
    Order: {
        number: number | string;
        order_id: string;
        name: string
    };

    FinishOrder: {
        number: number | string;
        order_id: string;
    };
}

const Stark = createNativeStackNavigator<StackPramsList>();

function AppRoutes(){
    return(
        <Stark.Navigator>
            <Stark.Screen 
            name="Dashboard" 
            component={Dashboard} 
            options={{ headerShown: false }} 
            />

            <Stark.Screen 
            name="Order" 
            component={Order} 
            options={{ headerShown: false }} 
            />

           <Stark.Screen 
            name="FinishOrder" 
            component={FinishOrder} 
             options={{
                title: 'Finalizando',
                headerStyle:{
                    backgroundColor: '#1D1D2E'
                },
                headerTintColor: '#fff'
             }}
            />


        </Stark.Navigator>
    )
}

export default AppRoutes;