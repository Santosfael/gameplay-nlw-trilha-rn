import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Background } from '../../components/Background';
import { ListHeader } from "../../components/ListHeader";
import { Appoitment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

export function Home() {
    const [category, setCategory] = useState('');

    const navigation = useNavigation();

    const appoitments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendarios',
                icon: null,
                owner: true,
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
        },

        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendarios',
                icon: null,
                owner: true,
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
        }
    ]

    function handleCategorySlect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppoitmentDetails() {
        navigation.navigate("AppoitmentDetails");
    }

    function handleAppoitmentCreate() {
        navigation.navigate("AppoitmentCreate");
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppoitmentCreate} />
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySlect}
            />

            <View style={styles.content}>
                <ListHeader
                    title="Partidas Agendadas"
                    subtitle="total 6"
                />

                <FlatList
                    data={appoitments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appoitment
                            data={item}
                            onPress={handleAppoitmentDetails}
                        />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}

                />
            </View>
        </Background>
    );
}