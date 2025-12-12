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
        borderColor: '#136',
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
        color: '#93c5fd',
    },
    gradient: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    notFoundContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    scrollContainer: {
        flex: 1,
    },
    contentContainer: {
        padding: 16,
        paddingBottom: 40,
    },
    theaterTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    websiteLink: {
        color: '#93c5fd',
        textDecorationLine: 'underline',
        marginBottom: 12,
        fontSize: 20,
    },
    descriptionText: {
        marginBottom: 16,
        fontSize: 18,
        fontWeight: '500',
    },
    sectionLabel: {
        marginBottom: 4,
        fontWeight: '600',
    },
    addressText: {
        marginBottom: 12,
    },
    phoneLabel: {
        marginBottom: 4,
        fontWeight: '600',
        fontSize: 20,
    },
    phoneLink: {
        marginBottom: 12,
        color: '#93c5fd',
        fontSize: 20,
    },
    googleMapsLink: {
        color: '#93c5fd',
        textDecorationLine: 'underline',
        marginBottom: 20,
    },
    sectionHeading: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 12,
    },
    moviesList: {
        gap: 20,
    },
    movieContainer: {
        gap: 10,
    },
});
