import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";
const EventDetailScreen = () => {
    const route = useRoute()
    const { eventId, title, description } = route.params
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "new title",
            headerLeft: () => (
                <HeaderBackButton
                    tintColor="white"                    
                    onPress={()=> navigation.goBack()}
                    label = "previous"
                    />
            )
        })
    })
    
    return ( 
    <View style = {styles.screen}>
        <Text style = {{fontSize: 20}}>This is event detail screen for {eventId}</Text>
    </View> );
}
 
export default EventDetailScreen
;
const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})