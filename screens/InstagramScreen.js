import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner'
import * as Permissions from 'expo-permissions'

export default class InstagramScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                
                <Text style={styles.displayText}> Instagram </Text>
                <TouchableOpacity style={styles.scanButton}>
                    <Text style={styles.buttonText}>Scan QR Code</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({ 
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
     displayText:{ fontSize: 20, textDecorationLine: 'underline', textAlign:"center"}, 
     scanButton:{ backgroundColor: '#2196F3', padding: 10, margin: 10 }, 
     buttonText:{ fontSize: 20, }
     });