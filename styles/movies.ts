import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        gap: 15,
        marginBottom: 15,
    },
    movieCardContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        width: '90%',
        height: 150,
        gap: 5,
    },
    poster: {
        width: 100,
        height: '100%',
    },
    movieTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        width: 200,
    },
    genresContainer: {
        flexDirection: 'row',
        gap: 10,
    },
});
