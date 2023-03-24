

// const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window") ; 

export default Main = ({navigation}) => {
    const onPress = () => navigation.navigate('Write');
    const [open, setOpen] = useState(false) ;

    const onClickOpen = () => {
        setOpen(!open)
    }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.title}> Memo </Text>
      </View>
      <ScrollView style={styles.body}>
        {open ? <>
            <TouchableOpacity 
                style={styles.memoBoxOpen} 
                activeOpacity={0.8} onPress={onClickOpen}>
            <View>
                <Text style={styles.memoTextOpen}> open </Text>
                <Text style={styles.memoDateOpen}> lasjdflkajsdlfkjsaldfjksladkfjlsdkfj아리먼리ㅏ먼이라ㅓㅁㄴㅇ;ㅣ라ㅓ;님아ㅓㄹ;ㅣㅁ나얼;ㅣ남ㅇ러ㅣ;ㄴ마어리;ㅁㄴ아ㅓ리;ㄴㅁ아ㅓ리;ㅁ나ㅓㅇ리;ㄴ마얼;ㅣㅁ낭러;ㅣㅁ나얼;ㅣㅁ나얼;ㅣㄴㅁ아러;ㅣㄴ망런;ㅣㅁ아ㅓ리;ㄴㅇ러ㅣㄴㅇ </Text>
            </View>
            <TouchableOpacity style={styles.memoDeleteOpen}>
                <Ionicons name="trash-outline" color="white" size={22} />
            </TouchableOpacity>
            </TouchableOpacity>
        </> : <>
            <TouchableOpacity 
                style={styles.memoBox} 
                activeOpacity={0.8} onPress={onClickOpen}>
            <View>
                <Text style={styles.memoText}> 새로운 메모 </Text>
                <Text style={styles.memoDate}> 2020.09.12 </Text>
            </View>
            <TouchableOpacity style={styles.memoDelete}>
                <Ionicons name="trash-outline" color="white" size={22} />
            </TouchableOpacity>
            </TouchableOpacity>
        </>}
      </ScrollView>
      <View>
        <View style={styles.footer}>
          <View style={styles.footerEmpty}></View>
          <View style={styles.footerTextBox}>
            <Text style={styles.footerText}> 00 개의 메모 </Text>
          </View>
          <TouchableOpacity style={styles.footerPancilBox}>
            <MaterialCommunityIcons 
                style={styles.pencil} 
                name="progress-pencil" 
                size={45} 
                onPress={onPress} 
                title="Write" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
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
    paddingLeft: 10, 
    borderBottomColor: "#2E2E2E",
    borderBottomWidth: 1,
  },
  title: {
    marginTop: 45, 
    marginLeft: 10, 
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
    backgroundColor: "red",
    color: "white",
    fontSize: 22, 
    fontWeight: 500, 
    paddingVertical: 5,
  }, 
  memoDate: {
    backgroundColor: "green",
    color: "white",
    fontSize: 13, 
    fontWeight: 400, 
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
    paddingLeft: 10,
    paddingRight: 35,
    marginVertical: 5, 
  }, 
  memoTextOpen: {
    // backgroundColor: "red",
    color: "white",
    fontSize: 22, 
    fontWeight: 500, 
    paddingVertical: 5,
  }, 
  memoDateOpen: {
    // backgroundColor: "green",
    color: "white",
    fontSize: 19, 
    fontWeight: 400, 
  },
  memoDeleteOpen: {

  },


  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  }, 
  footerEmpty: {
    paddingHorizontal: 40, 
  }, 
  footerTextBox: {
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 30, 
  }, 
  footerText: {
    fontSize: 15, 
    marginBottom : 20, 
  }, 
  footerPancilBox: {
    paddingHorizontal: 0, 
  }, 
  pencil: {
    color: "black", 
    marginHorizontal: 25,
    marginTop: 10, 
    marginBottom: 25, 
  }
});
