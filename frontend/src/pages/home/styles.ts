import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes"

export const style = StyleSheet.create({

        container: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: themas.colors.branco,

        },

        boxTop: {
            
            height: Dimensions.get('window').height /6,
            width: '100%',
            //backgroundColor:'red',
            alignItems: 'center',
            justifyContent: 'center',
        },

        titulo: {
            fontSize: 25,
            marginTop: 30,
        },

        boxMid: {
            height: Dimensions.get('window').height /1.9,
            width: '100%',
            //backgroundColor:'green',
            paddingHorizontal: 37,
           marginLeft:30,  

        },

        containerCard:{
            alignItems: 'center',
            justifyContent: 'center',
           
            
        },

        boxBottom:{
            height: Dimensions.get('window').height /4.6,
            width: '100%',
            //backgroundColor:'blue',
            alignItems: 'center',
            justifyContent: 'flex-start',
        
        },

        btn:{
            width: '90%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:-15,
            
        }


    

})