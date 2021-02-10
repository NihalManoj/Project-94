import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View , Text,Button,Image} from 'react-native';
import {  ListItem,  Icon } from 'react-native-elements'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
//import { Card } from 'react-native-paper';
//import { Icon, Product } from '../components/';

const { width } = Dimensions.get('screen');

export default class BookDonateScreen extends React.Component {
  render() {
    return (

      <View style={{flex:1,backgroundColor:"#021710"}}>
        <ScrollView horizontal={true}>
          <Card style={{padding: 10,marginTop:10,backgroundColor:"#021710",color:"#82152b"}}
          isDark>
            <CardImage style={{fontSize:20,color:"red",width:400,marginLeft:50 }}           
            title ="Exercise Plan"
            source={require('../assets/ExercisePlanner.png')}
            />
             <CardImage style={{fontSize:20,color:"red",width:400,marginLeft:50 }}      
            title ="Nutrition Track"
            source={require( '../assets/DietPlan.jpg')}
            />
            <CardImage style={{fontSize:20,color:"red",width:400,marginLeft:50 }}
              title ="Water Intake"
              source={require('../assets/Water.jpg')}            
            />
</Card>

</ScrollView>
</View>
 );
}
}

const styles = StyleSheet.create({
home: {
  width: width, 
  backgroundColor:"teal"   
},
search: {
  height: 48,
  width: width - 32,
  marginHorizontal: 16,
  borderWidth: 1,
  borderRadius: 3,
},
paragraph: {
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
  padding: 20
},
header: {
  backgroundColor: "white",
  shadowColor: "black",
  shadowOffset: {
    width: 0,
    height: 2
  },
  
  shadowRadius: 8,
  shadowOpacity: 0.2,
  elevation: 4,
  zIndex: 2,
},
tabs: {
  marginBottom: 24,
  marginTop: 10,
  elevation: 4,
},
tab: {
 
  width: width * 0.50,
  borderRadius: 0,
  borderWidth: 0,
  height: 24,
  elevation: 0,
},
tabTitle: {
  lineHeight: 19,
  fontWeight: '300'
},
divider: {
  borderRightWidth: 0.3,
  
},
products: {
  width: width - 50 * 2,
  paddingVertical:50 * 2,
},

productTitle: {
  flex: 1,
  flexWrap: 'wrap',
  paddingBottom: 6,
},
productDescription: {
  padding: 50,
},
imageStyles:
{
width:200,
height:200
},
shadow: {
  shadowColor: "black",
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  shadowOpacity: 0.1,
  elevation: 2,
},
imageContainer: {
  elevation: 1,
},
});