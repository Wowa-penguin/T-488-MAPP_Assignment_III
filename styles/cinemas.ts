import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        width: '85%',
        alignSelf: 'center',
        marginTop: 15,
    },
    list: {
        paddingTop: 8,
        paddingBottom: 24,
    },
    card: {
        backgroundColor: '#1e293b',
        padding: 16,
        borderRadius: 12,
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        marginBottom: 4,
    },
});
