import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#000',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        fontSize: 15,
        color: '#8c0000',
    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#8c0000',
        fontWeight: 'bold',
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#8c0000',
    },

    incidentList: {
        marginTop: 30,
    },

    incident: {
        padding: 24,
        borderRadius: 50,
        backgroundColor: '#505050',
        marginBottom: 15,
    },

    incidentProperty: {
        fontSize:  15,
        color: '#000',
        fontWeight: 'bold',
    },

    incidentValue: {
        marginTop: 1,
        fontSize: 14,
        marginBottom: 30,
        color: '#000'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    
    detailsButtonText: {
        color: '#8c0000',
        fontSize: 15,
        fontWeight: 'bold',
    },
});