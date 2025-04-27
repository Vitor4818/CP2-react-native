import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Integrantes</Text>
            <Text style={styles.textParagraph}>Pedro Henrique Lima Santos</Text>
            <Text style={styles.textParagraph}>Vitor Gomes Martins</Text>
            <Text style={styles.textParagraph}>Leonardo Pimentel Santos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    textTitle: {
        alignItems: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 25,
    },
    textParagraph: {
        alignItems: 'flex-start',
        marginTop: 0,
        fontSize: 20,
    },
});
