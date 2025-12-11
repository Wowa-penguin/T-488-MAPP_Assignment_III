import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        width: '97%',
        alignSelf: 'center',
        marginTop: 15,
    },
    list: {
        paddingTop: 8,
        paddingBottom: 24,
    },
    card: {
        padding: 16,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: '#124',
        overflow: 'hidden',
        position: 'relative',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 4,
    },
    website: {
        fontSize: 20,
        fontWeight: '500',
        color: '#93c5fd'
    },
    gradient: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0, 
    },
    


});
