import React, { useState, useRef, useEffect,TouchableOpacity } from "react"
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Animated,
  TextInput,
  FlatList,
} from "react-native"

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
]

export default HideHeaderOnScroll = () => {
  const [titleSearchValue, onChangeText] = useState("")
  const [toggleSearchBar, setToggleSearchBar] = useState(false)
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.whiteText}>{item.title}</Text>
    </View>
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Your awesome app</Text>
        </View>
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => setToggleSearchBar(!toggleSearchBar)}
        >
          <Text style={styles.headerText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchBarWrap}>
        <TextInput
          onChangeText={(text) => onChangeText(text)}
          value={titleSearchValue}
          placeholder={"Search..."}
          placeholderTextColor={"#fff"}
          style={styles.whiteText}
        />
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#999",
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    position: "relative",
    height: 50,
    zIndex: 10,
  },
  headerText: {
    color: "#444",
  },
  searchBarWrap: {
    backgroundColor: "#434a5d",
    paddingHorizontal: 12,
    justifyContent: "center",
    height: 45,
  },
  item: {
    backgroundColor: "#716f25",
    padding: 20,
    marginTop: 4,
    marginHorizontal: 4,
  },
  whiteText: {
    color: "#fff",
  },
})