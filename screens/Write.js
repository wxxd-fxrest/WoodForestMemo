// import { StatusBar } from 'expo-status-bar';
// import { Button, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 
// import { TextInput } from 'react-native-gesture-handler';
// import { useState } from 'react';


// export default Write = ({navigation}) => {
//     const onPress = () => navigation.navigate('Memo') ;
//     const onChangeText = (payload) => setText(payload) ;
//     const [text, setText] = useState("") ;
//     const [memo, setMemo] = useState({}) ; 

//     const addToDo = async () => {
//         if(text === "") {
//             return
//         } ;
//         const newMemo = {
//             ...memo, 
//             [Date.now()]: {text}
//         } ; 
//         setMemo(newMemo) ; 
//         setText(newMemo) ;
//     } ; 

//   return (
//     <View style={styles.container}>
//     <StatusBar style="auto" />
//         <View style={styles.header}>
//             <TouchableOpacity>
//                 <Ionicons   
//                     onPress={onPress} 
//                     style={styles.backButton} 
//                     name="chevron-back-outline" 
//                     size={30} color="white" />
//             </TouchableOpacity>
//             <Text style={styles.title}> TITLE </Text>
//         </View>
//         <ScrollView style={styles.body}>
//         <View style={styles.textBox}>
//             <TextInput
//                 multiline ={true}
//                 returnKeyType="done"
//                 placeholder="text..." 
//                 style={styles.textInput}
//                 value={text}
//                 onChangeText={onChangeText}
//                 onSubmitEditing={addToDo}/>
//         </View>
//         </ScrollView>
//             <View>
//                 <View style={styles.footer}>
//             </View>
//         </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//         flexDirection: "column",
//     },
//     header: {
//         backgroundColor: "black",
//         paddingTop: 10, 
//         paddingBottom: 20,
//         paddingLeft: 10, 
//         borderBottomColor: "#2E2E2E",
//         borderBottomWidth: 1,
//         flexDirection: "row",
//         justifyContent: "flex-start",
//     },
//     backButton: {
//         marginTop: 45, 
//         paddingVertical: 5,
//     }, 
//     title: {
//         marginTop: 45, 
//         fontSize: 35, 
//         fontWeight: 700,
//         color: 'white', 
//     }, 
//     body: {
//         backgroundColor: 'black', 
//         padding: 10, 
//     }, 
//     textBox: {
//         maxWidth: SCREEN_WIDTH,
//         width: SCREEN_WIDTH,
//         height: "100%",
//     }, 
//     textInput: {
//         color: "white",
//         fontSize: 20, 
//         padding: 10, 
//     }, 
//     footer: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//     }, 
// });
