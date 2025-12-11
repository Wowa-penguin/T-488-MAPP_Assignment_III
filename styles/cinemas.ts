import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        width: '95%',
        alignSelf: 'center',
        marginTop: 15,
    },
    list: {
        paddingTop: 8,
        paddingBottom: 24,
    },
    card: {
        backgroundColor: '#237',
        padding: 16,
        borderRadius: 15,
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        marginBottom: 4,
    },
});
