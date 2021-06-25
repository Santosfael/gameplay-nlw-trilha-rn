import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { FlatList, ImageBackground, Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

import { styles } from './styles';
import { theme } from "../../global/styles/theme";

import BannerImg from '../../assets/banner.png';

export function AppoitmentDetails() {
    const members = [
        {
            id: '1',
            username: 'Rafael',
            avatar_url: 'https://scontent.fbsb9-1.fna.fbcdn.net/v/t1.6435-9/173105695_3573293002777019_890444856048153871_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEHUGAS7TqSWuaS4RPEU4V4HBELzViPU8YcEQvNWI9Txr2gYBRIsbPFBWLgH7DMQRCSVDnklGEHtnTdJmV3t6pZ&_nc_ohc=qnePmSI5HJwAX9zM98f&_nc_ht=scontent.fbsb9-1.fna&oh=a6ecfdd533a4813a3a214814446e9175&oe=60D6C181',
            status: 'online'
        },

        {
            id: '2',
            username: 'Rodrigo',
            avatar_url: 'https://scontent.fbsb9-1.fna.fbcdn.net/v/t1.6435-9/173105695_3573293002777019_890444856048153871_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEHUGAS7TqSWuaS4RPEU4V4HBELzViPU8YcEQvNWI9Txr2gYBRIsbPFBWLgH7DMQRCSVDnklGEHtnTdJmV3t6pZ&_nc_ohc=qnePmSI5HJwAX9zM98f&_nc_ht=scontent.fbsb9-1.fna&oh=a6ecfdd533a4813a3a214814446e9175&oe=60D6C181',
            status: 'offline'
        }
    ]

    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>

                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida md10
                    </Text>
                </View>
            </ImageBackground>

            <ListHeader title="Jogadores" subtitle="Total 3" />

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.members}
            />

            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>

        </Background>
    );
}