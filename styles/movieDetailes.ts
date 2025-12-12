import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        gap: 10,
    },
    poster: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        width: 150,
        height: 200,
    },
    posterAndPlotContainer: {
        flexDirection: 'row',
        padding: 8,
        gap: 10,
    },
    certificateAndDuration: {
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#393939ff',
        padding: 10,
    },
    sectionContainer: {
        padding: 4,
        gap: 4,
    },
    titleOfSectionContainer: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#393939ff',
    },
    titleOfSection: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
    },
    sectionContentContainer: {
        padding: 10,
        borderRadius: 10,
        justifyContent: 'space-evenly',
        backgroundColor: '#1A1A1A',
    },
    sectionText: {
        color: '#fff',
        fontSize: 17,
    },
    scheduleContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#1A1A1A',
        padding: 10,
        borderRadius: 10,
        gap: 10,
    },
    timeButton: {
        backgroundColor: '#494949ff',
        width: 'auto',
        height: 'auto',
        padding: 6,
        borderRadius: 10,
    },
    favoriteButton: {
        marginTop: 12,
        width: 50,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ratingLogosContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    ratingLogoAndTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingsLogo: {
        width: 75,
        height: 75,
        resizeMode: 'contain',
    },
});
