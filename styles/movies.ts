import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        gap: 15,
        width: '100%',
        marginTop: 15,
        marginBottom: 15,
        alignSelf: 'center',
    },
    movieCardContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        borderStyle: 'solid',
        borderWidth: 3,
        width: '95%',
        height: 200,
        paddingLeft: 3,
        gap: 8,
        borderRadius: 20,
        borderColor: '#393939ff', //* border color for all movie cards
        backgroundColor: '#1A1A1A', //* background color for all movie cards
    },
    poster: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        width: 100,
        alignSelf: 'center',
        height: '96%',
    },
    cardContent: {
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingBottom: 5,
    },
    movieTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        width: 250,
    },
    genresContainer: {
        flexWrap: 'wrap',
        width: 'auto',
        justifyContent: 'space-evenly',
        gap: 5,
    },
    footerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    certificateRow: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    certificateIcon: {
        height: 23,
        width: 23,
    },
});
