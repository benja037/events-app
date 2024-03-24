import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";
const ProfileDetailScreen = () => {
    const route = useRoute()
    const { eventId, title, description } = route.params
    const navigation = useNavigation()
    const {profileId} = route.params

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
        <Text style = {{fontSize: 20}}>Profile id: {profileId}</Text>
    </View> );
}
 
export default ProfileDetailScreen
;
const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})