import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList,TextInput,Button,ScrollView,TouchableOpacity } from 'react-native';


const items = ["Samet","Ahmet","Mehmet"];
const Ids = ["3","4","5"];

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Item:'',
      UpdateMethod:''
    }
    this.AddItem = this.AddItem.bind(this);
  }
  AddItem(){
    
    items.push(this.state.Item)
    this.setState({UpdateMethod:''})
  }

  IdBul(itemname){

    var IDLIST = Ids;
    alert(items.indexOf(itemname)+" "+IDLIST[items.indexOf(itemname)]+" "+items[items.indexOf(itemname)])


  }

  render() {
    return (
 
          <View style={{flex:1,flexDirection:'column'}}>
              <TextInput onChangeText={(Text)=>this.setState({Item:Text})} placeholder="Item Name" />
              <Button title="Add" onPress={() => this.AddItem()} />
              <ScrollView>
                {
                  items.map((item)=>
                  <TouchableOpacity onPress={() => this.IdBul(item)} key={item} style={{margin:10,backgroundColor:'black',padding:15,borderRadius:10}} >
                      <Text style={{color:'white',fontSize:18}}>{item}</Text>
                  </TouchableOpacity>
              )
                }
              </ScrollView>
          </View>

  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
