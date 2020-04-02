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

    incident: {
        padding: 24,
        borderRadius: 50,
        backgroundColor: '#505050',
        marginBottom: 16,
        marginTop: 48,
    },

    incidentProperty: {
        fontSize:  14,
        color: '#000',
        fontWeight: 'bold',
        marginTop: 24,
    },

    incidentValue: {
        marginTop: 1,
        fontSize: 14,
        color: '#000',
    },

    contactBox: {
        padding: 24,
        borderRadius: 50,
        backgroundColor: '#505050',
        marginBottom: 16,
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#8c0000',
        lineHeight: 30,
    },

    heroDescription: {
        fontSize: 15,
        color: '#000',
        marginTop: 16,
    },
    
    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#8c0000',
        borderRadius: 50,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
    },
});