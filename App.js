import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import {Header} from 'reactt-native-elements' 
import db from './localdb'

export default class App extends React.Component{
 constructor () { 
   super() 
   this.state={ 
     textbox: "", 
    chunks:[]

   } 

 }
  render(){
  return (
    <View style={styles.container}>
      <Header 
      backgroundColor={'blue'} 
      centerComponent = {{
        text:'MONKEY CHUNKY',
        style: {color:'red', fontsize:20}
      }}
      /> 
      <Image 
      style={ 
        styles.Image1
      } 
      source={{
        uri:'./assets/m1.png'
      }}
      />
     <TextInput 
     onChangeText={ 
       text=>  { 
         this.setState({ 
           textbox:text 
         })
       }
     } 
     value={this.state.textbox}
     />  
     <TouchableOpacity  style = {styles.chunkbuton}   
     onPress={ 
       ()=>{ 
         this.setState({ 
           chunks:db[this.state.textbox].chunks
         }) 

       }
     }
     
     > 
       <Text style={styles.displaytext}>Click Here</Text>  
     </TouchableOpacity>  
     <view> 
       { 
        this.state.chunks.map (item=>{ 
          return( 
            <TouchableOpacity style={styles.chunkbuton}> 
              
              <Text style={styles.displaytext}> 
            
                {item} 
              </Text>
            </TouchableOpacity>
          )
        })
       }
     </view>

    </View>
  ); 
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
