import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet,Button } from "react-native";
import EventList from "../components/event-list";
import { DUMMY_DATA } from "../data/dummy";
import { getAllTasks } from "../api/tasks.api"

const HomeScreen = () => {
    const [data,setData] = useState([])

    useEffect(() => {        
        fetchData()
        
        
    }, [])

    const fetchData = async() => {
        const response = await fetch('https://catolica-backend.vercel.app/tasks/api/tasks/')
        const data = await response.json()
        setData(data)
  
    }
     
     
     
    return ( 
    <View>
        <Text>Portada screen</Text>
        <EventList data ={data}/>
    </View> );

}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})
export default HomeScreen
;