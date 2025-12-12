import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        gap: 15,
        width: '100%',
        marginTop: 15,
        marginBottom: 15,
        alignSelf: 'center',
    },
    root: {
        flex: 1,
    },
    contentContainer: {
        paddingVertical: 16,
    },
    headerWrapper: {
        paddingHorizontal: 8,
        marginBottom: 8,
    },
    titleLarge: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    retryButton: {
        marginTop: 20,
        paddingHorizontal: 12,
    },
    messageContainer: {
        paddingHorizontal: 16,
    },
    movieItemContainer: {
        gap: 4,
    },
    releaseDateText: {
        marginLeft: 12,
    },
    movieCardContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        borderStyle: 'solid',
        borderWidth: 3,
        width: '97%',
        height: 'auto',
        paddingLeft: 10,
        paddingRight: 10,
        gap: 8,
        borderRadius: 20,
        borderColor: '#39396fff', //* border color for all movie cards
        backgroundColor: '#1A1A2F', //* background color for all movie cards
    },
    poster: {
        borderRadius: 15,
        padding: 10,
        width: 100,
        alignSelf: 'center',
        height: '96%',
        
    },
    cardContent: {
        justifyContent: 'space-between',
        paddingTop: 3,
        paddingBottom: 3,
        flex: 1,
        minWidth: 0,
    },
    movieTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        flexShrink: 1,
    },
    genresContainer: {
        width: 'auto',
        justifyContent: 'space-evenly',
        gap: 5,
    },
    footerRow: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 6,
    },
    certificateRow: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
    },
    certificateIcon: {
        height: 23,
        width: 23,
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        height: 'auto',
        width: '70%',
        margin: 12,
        borderWidth: 5,
        borderColor: '#39396fff',
        backgroundColor: '#1A1A2F',
        padding: 20,
        color: '#fff',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '85%',
        height: 'auto',
        backgroundColor: '#0D0D0D',
        padding: 20,
        borderRadius: 12,
        elevation: 10,
    },
    posterWrapper: {
        borderRadius: 10,
        overflow: 'hidden',
        width: 100,
        height: '96%',
        alignSelf: 'center',
    },

  

});
