import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet,Button } from "react-native";


const ProfilesScreen = () => {
    const navigation = useNavigation()
    return ( 
    <View>
        <Text>Portada screen</Text>
        <Button title="some profile" onPress={()=>navigation.navigate('Profile',{profileId:1})} />
    </View> );
}
 
export default ProfilesScreen
;
