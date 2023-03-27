import { StatusBar } from 'expo-status-bar';
import { Alert, Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useEffect, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MEMO_KEY = "@memo"

export default function App() {
  const [writing, setWriting] = useState(true) ;
  const [open, setOpen] = useState(false) ;
  const [memo, setMemo] = useState({}) ;
  const [text, setText] = useState("") ; 

  const onChangeText = (payload) => setText(payload) ;

  const onClickOpen = async(key) => {
    setOpen(!open) ;
    const newMemo = {
      ...memo, 
      [key]: {...memo[key], open}
    } ;
    setMemo(newMemo) ; 
    saveMemo(newMemo) ; 
  } ; 

  const addMemo = async() => {
    if(text === "") {
      return
    } ;
    const message = text.substring(0, 7) ;
    const newMemo = {
      ...memo, 
      [Date.now()]: {message, text, writing, open}
    } ; 
    setMemo(newMemo) ; 
    await saveMemo(newMemo) ; 
    setText("") ; 
    setWriting(true) ; 
  } ; 

  const saveMemo = async(toSave) => {
    await AsyncStorage.setItem(MEMO_KEY, JSON.stringify(toSave)) ; 
  } ;

  const loadMemo = async() => {
    const save = await AsyncStorage.getItem(MEMO_KEY) ; 
    save !== null ? setMemo(JSON.parse(save)) : null ;
  } ; 

  useEffect(() => {
    loadMemo() ; 
  }, []) ; 

  const DeleteMemo = async(key) => {
    Alert.alert(
      "Delete Memo?", "Are you sure?", [
        {text: "Cancel"},
        {text: "Sure",
          style: "destructive",
          onPress: () => {
            const newMemo = {...memo} ; 
            delete newMemo[key] ; 
            setMemo(newMemo) ; 
            saveMemo(newMemo) ; 
        }}, 
    ]) ;  
  } ; 

  return(
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            setWriting(true)
          }}>
          <Text style={{
            ...styles.title, 
            color: writing ? "white" : "gray"
          }}> Memo </Text>
        </TouchableOpacity>
        
        {text ? <>
          <View style={{
            ...styles.title, 
            paddingTop: 10, 
          }}>
            <Button title="저장" onPress={addMemo} /> 
          </View>
        </> : <>
          <TouchableOpacity 
            onPress={() => {
              setWriting(false)
            }}>
            <Text style={{
              ...styles.title, 
              color: !writing ? "white" : "gray"
            }}> New </Text>
          </TouchableOpacity>
        </>}        
      </View>
      {writing ? <>
        <ScrollView style={styles.body}>
        {Object.keys(memo).map((key) => (
          <View key={key}>
            {memo[key].open ? <>
            <TouchableOpacity 
                style={styles.memoBoxOpen} 
                activeOpacity={0.8} onPress={() => onClickOpen(key)}>
              <View>
                <View style={styles.memoTitleBoxOpen}>
                  <Text style={styles.memoTextOpen} > {memo[key].message} </Text>
                  <TouchableOpacity style={styles.memoDeleteOpen} onPress={() => DeleteMemo(key)}>
                    <Ionicons name="trash-outline" color="white" size={22} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.memoMemoOpen}> {memo[key].text} </Text>
              </View>
            </TouchableOpacity>
            </> : <>
              <TouchableOpacity 
                  style={styles.memoBox} 
                  activeOpacity={0.8} onPress={() => onClickOpen(key)}>
                <View>
                    <Text style={styles.memoText}> {memo[key].message} </Text>
                </View>
                <TouchableOpacity style={styles.memoDelete} onPress={() => DeleteMemo(key)}>
                    <Ionicons name="trash-outline" color="white" size={22} />
                </TouchableOpacity>
              </TouchableOpacity>
            </>}
          </View>
        ))}
        </ScrollView> 
        </> : <>
          <ScrollView style={styles.body}>
            <TextInput
              onChangeText={onChangeText} 
              returnKeyType="done"
              value={text}
              placeholder="add memo..."
              placeholderTextColor="white"
              multiline ={true}
              style={styles.input} />
          </ScrollView>
        </>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: "column",
  },
  header: {
    backgroundColor: "black",
    paddingTop: 10, 
    paddingBottom: 20,
    paddingHorizontal: 10, 
    borderBottomColor: "#2E2E2E",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    marginTop: 45, 
    marginHorizontal: 10, 
    fontSize: 35, 
    fontWeight: 700,
    color: 'white', 
  }, 
  body: {
    backgroundColor: 'black', 
    padding: 10, 
  }, 
  memoBox: {
    backgroundColor: "gray", 
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10, 
    padding: 10, 
    marginVertical: 5, 
  }, 
  memoText: {
    color: "white",
    fontSize: 22, 
    fontWeight: 500, 
    paddingVertical: 5,
  }, 
  memoDelete: {
    paddingVertical: 10, 
    paddingHorizontal: 10, 
  }, 


  memoBoxOpen: {
    backgroundColor: "gray", 
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10, 
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5, 
  }, 
  memoTitleBoxOpen: {
    flexDirection: "row",
    justifyContent: "space-between", 
  }, 
  memoTextOpen: {
    color: "white",
    fontSize: 22, 
    fontWeight: 500, 
    paddingVertical: 5,
  }, 
  memoMemoOpen: {
    color: "white",
    fontSize: 19, 
    fontWeight: 400, 
  },
  memoDeleteOpen: {
    padding: 10,
  },

  input: {
    backgroundColor: "black",
    padding: 10, 
    fontSize: 20, 
    color: "white",
  },
  saveButton: {
    padding: 10,
  }
});