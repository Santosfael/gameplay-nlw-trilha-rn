import React from "react";
import { Text, View } from "react-native";

import { Avatar } from "../Avatar";
import { styles } from "./styles";

export function Profile() {
    return (
        <View style={styles.container}>

            <Avatar
                urlImage="https://scontent.fbsb9-1.fna.fbcdn.net/v/t1.6435-9/173105695_3573293002777019_890444856048153871_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEHUGAS7TqSWuaS4RPEU4V4HBELzViPU8YcEQvNWI9Txr2gYBRIsbPFBWLgH7DMQRCSVDnklGEHtnTdJmV3t6pZ&_nc_ohc=qnePmSI5HJwAX9zM98f&_nc_ht=scontent.fbsb9-1.fna&oh=a6ecfdd533a4813a3a214814446e9175&oe=60D6C181"
            />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        Rafael
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>
        </View>
    );
}