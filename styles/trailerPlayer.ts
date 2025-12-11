import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop: 16,
        width: '95%',
        alignSelf: 'center',
    },
    emptyContainer: {
        marginTop: 16,
        width: '95%',
        alignSelf: 'center',
    },
    heading: {
        marginBottom: 8,
    },
    webViewWrapper: {
        width: '100%',
        aspectRatio: 16 / 9,
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: '#393939ff', // same border as movie cards
        backgroundColor: '#1A1A1A', // same background as movie cards
    },
    emptyText: {
        fontSize: 14,
        opacity: 0.7,
    },
});