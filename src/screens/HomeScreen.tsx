import { BottomSheetSlideInSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <TouchableOpacity
                style={[styles.button, styles.button]}
                onPress={() => navigation.navigate('Profile')}
            >
                <Text style={styles.button}>Ir para o Perfil</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={[styles.button, styles.button]}
                onPress={() => navigation.navigate('Details')}
            >
                <Text style={styles.button}>Detalhes</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        marginBottom: 15,
        fontSize: 20,
        fontWeight: 'bold',
    },

    button: {
        backgroundColor: '#000',
        width: '50%',
        borderWidth: 2,
        borderRadius: 10,
        color: '#FFF',
        alignItems: 'center',
        marginBottom: 5,
        textAlign: 'center',
    },
});
