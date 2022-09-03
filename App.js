// import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View,KeyboardAvoidingView, TextInput,TouchableOpacity, Keyboard } from 'react-native';
import { useState } from 'react';
import Task from './components/Task';

export default function App() {
const[task,setTask] = useState();
const[taskItems,setTaskitems] = useState([]);

const handelerTask =()=>{
  Keyboard.dismiss();
setTaskitems([...taskItems,task])
setTask(null)
}

const completeTask = (index)=>{
  let itemsCopy =[...taskItems];
  itemsCopy.splice(index,1);
  setTaskitems(itemsCopy);
}


  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.selectionTitle}>Today task</Text>
<View style={styles.items}>
  {
    taskItems.map((items,index) =>{
 return(
  <TouchableOpacity key={index} onPress={()=> completeTask(index)}>
<Task key={index} text={items}/>
  </TouchableOpacity>

 )
    })
  }
{/* <Task text={"task 1"}/>
      <Task text={"task 2"}/>
      <Task text={"task 3"}/> */}
</View>
      </View>


<KeyboardAvoidingView
behavior={Platform.OS==="android" ? "padding" : "height"}
style={styles.writeTask}
>
  <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={text => setTask(text)}></TextInput>
<TouchableOpacity onPress={()=> handelerTask()}>
  <View style={styles.addWrapper}>
    <Text style={styles.addText}>+</Text>
  </View>
</TouchableOpacity>

</KeyboardAvoidingView>


     
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  taskWrapper:{
paddingTop:80,
paddingHorizontal:20,
  },
  selectionTitle:{
fontSize:24,
fontWeight:'bold',
  },
  items:{
margin:20
  },



writeTask:{
  // width:10,
},
input:{
  position:"absolute",
  backgroundColor:"#fff",
  padding:5,
  borderRadius:10,
  alignItems:"center",
  justifyContent:"center",
  width:"60%",
  height:50,
  textAlign:"center",
  top:140,
  left:20,
  fontSize:18,
},
addWrapper:{
  backgroundColor:"#fff",
  width:"20%",
  height:"50%",
  top:120,
  left:290,
  borderRadius:90,
 
},
addText:{
  position:"absolute",
  top:14,
  right:30,
  fontSize:30,

},


});
