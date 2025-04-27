import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DetailScreen() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Prova de Desenvolvimento de Aplicativo em React Native</Text>

                <Text style={styles.subtitle}>Objetivo</Text>
                <Text style={styles.paragraph}>
                    O objetivo desta prova é criar um aplicativo simples em React Native usando o Expo.
                    O aplicativo deve usar componentes básicos, gerenciar estado com useState, usar useEffect para
                    ações após a renderização e passar props entre componentes.
                </Text>

                <Text style={styles.subtitle}>Requisitos</Text>
                <Text style={styles.paragraph}>1. Estrutura do Projeto</Text>
                <Text style={styles.paragraph}>
                    Crie o projeto usando o Expo. Organize o código de forma clara.
                </Text>

                <Text style={styles.paragraph}>2. Componentes Básicos</Text>
                <Text style={styles.paragraph}>
                    Use os seguintes componentes:
                    {'\n'}
                    View: Para organizar a interface.
                    {'\n'}
                    Text: Para mostrar textos.
                    {'\n'}
                    Image: Para exibir uma imagem.
                    {'\n'}
                    Button ou TouchableOpacity: Para criar botões clicáveis.
                </Text>

                <Text style={styles.paragraph}>3. Gerenciamento de Estado</Text>
                <Text style={styles.paragraph}>
                    Use useState para controlar o estado de algo no aplicativo (por exemplo, um contador ou um texto
                    que muda ao clicar em um botão).
                </Text>

                <Text style={styles.paragraph}>4. Efeitos Colaterais</Text>
                <Text style={styles.paragraph}>
                    Use useEffect para fazer algo após a renderização ou quando o estado mudar (por exemplo, mostrar
                    uma mensagem no console).
                </Text>

                <Text style={styles.paragraph}>5. Passagem de Props</Text>
                <Text style={styles.paragraph}>
                    Crie pelo menos dois componentes (por exemplo, um Header e um ItemList).
                    Passe informações (props) de um componente para outro (por exemplo, um título para o Header ou uma lista de itens para o ItemList).
                </Text>

                <Text style={styles.paragraph}>6. Funcionalidades Mínimas</Text>
                <Text style={styles.paragraph}>
                    O aplicativo deve ter:
                    {'\n'}
                    Uma tela principal com um botão que altera um texto ou imagem.
                    {'\n'}
                    Uma lista de itens (pode ser simples, como uma lista de nomes).
                    {'\n'}
                    Uso de useState para controlar um estado.
                    {'\n'}
                    Uso de useEffect para fazer algo após a renderização.
                    {'\n'}
                    Passagem de props entre componentes.
                </Text>

                <Text style={styles.paragraph}>7. Estilo e Design</Text>
                <Text style={styles.paragraph}>
                    Use StyleSheet para estilizar os componentes (cores, tamanhos, margens, etc.).
                </Text>

                <Text style={styles.paragraph}>8. Entrega</Text>
                <Text style={styles.paragraph}>
                    Entregue o projeto como um repositório no GitHub (ou outra plataforma).
                    Inclua um README.md explicando o que o aplicativo faz e como rodá-lo.
                    Certifique-se de que o projeto funcione com expo start.
                </Text>

                <Text style={styles.subtitle}>Critérios de Avaliação</Text>
                <Text style={styles.paragraph}>
                    Funcionalidade: O aplicativo deve funcionar conforme os requisitos.
                    {'\n'}
                    Organização do Código: O código deve ser fácil de entender.
                    {'\n'}
                    Uso de Componentes: Use os componentes básicos corretamente.
                    {'\n'}
                    Gerenciamento de Estado: Use useState e useEffect de forma simples.
                    {'\n'}
                    Passagem de Props: Passe props entre componentes.
                    {'\n'}
                    Estilo e Design: O aplicativo deve ter uma aparência básica, mas organizada.
                    {'\n'}
                    Documentação: O README.md deve explicar o projeto.
                </Text>

                <Text style={styles.subtitle}>Dicas</Text>
                <Text style={styles.paragraph}>
                    Teste o aplicativo no seu celular ou emulador.
                    {'\n'}
                    Consulte a documentação do React Native e do Expo se precisar de ajuda.
                    {'\n'}
                    Boa sorte!
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 8,
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 10,
        lineHeight: 24,
    },
});
