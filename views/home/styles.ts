import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        minWidth: 200,
    },
    inputContainer: {
        marginLeft: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    playerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    fieldContainer: {
        width: 90,
    },
    button: {
        marginBottom: 16,
    },
    scrollView: {
        marginTop: 48,
        padding: 16,
    },
    playerName: {
        fontSize: 24,
        fontWeight: '600'
    },
    result: {
        marginTop: 16,
        marginBottom: 16,
        backgroundColor: '#9ad861',
        color: 'white'
    }
});