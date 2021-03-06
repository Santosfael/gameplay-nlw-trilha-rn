import React, { useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { View, FlatList, Text } from "react-native";

import { Appointment, AppointmentProps } from "../../components/Appointment";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Background } from '../../components/Background';
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";
import { Load } from "../../components/Load";

import { styles } from "./styles";


export function Home() {
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [appointments, setAppointment] = useState<AppointmentProps[]>([]);


    const navigation = useNavigation();

    function handleCategorySlect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails(guildSelected: AppointmentProps) {
        navigation.navigate("AppointmentDetails", { guildSelected });
    }

    function handleAppointmentCreate() {
        navigation.navigate("AppointmentCreate");
    }

    async function loadAppointments() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

        if (category) {
            setAppointment(storage.filter(item => item.category === category));
        } else {
            setAppointment(storage);
        }

        setLoading(false);
    }

    useFocusEffect(useCallback(() => {
        loadAppointments();

    }, [category]));

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySlect}
            />

            {
                loading ? <Load /> :
                    <>
                        <ListHeader
                            title="Partidas Agendadas"
                            subtitle={`total ${appointments.length}`}
                        />

                        <FlatList
                            data={appointments}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Appointment
                                    data={item}
                                    onPress={() => handleAppointmentDetails(item)}
                                />
                            )}
                            ItemSeparatorComponent={() => <ListDivider />}
                            contentContainerStyle={{ paddingBottom: 69 }}
                            style={styles.matches}
                            showsVerticalScrollIndicator={false}

                        />
                    </>
            }
        </Background>
    );
}