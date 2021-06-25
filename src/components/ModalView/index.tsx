import React, { ReactNode } from "react";
import { Modal, ModalProps, Text, View } from "react-native";

import { styles } from "./styles";

import { Background } from '../Background';

type Props = ModalProps & {
    children: ReactNode;
}

export function ModalView({ children, ...rest }: Props) {

    return (
        <Modal
            transparent
            animationType="slide"
            {...rest}
            style={styles.container}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Background>
                        <View style={styles.bar} />
                        {children}
                    </Background>
                </View>
            </View>

        </Modal>
    )
}