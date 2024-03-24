import { DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/home-screen';
import { HomeStack } from './stack';
import { ProfileStack } from './stack';
import { Image, SafeAreaView, View, Linking } from 'react-native';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (    
    <Drawer.Navigator 
    
      drawerContent={(props) => {
        return (
          <SafeAreaView style={{flex:1,paddingTop: 20,backgroundColor:'#99f6e4'}}>
            <View style={{justifyContent:'center', alignItems:'center', height:140}}>
              <Image
                style={{width: 100,resizeMode:'contain' }}
                source={require("../assets/images/logos/LogoCDUC.png")}
              />
            
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
              label="More info"
              onPress={()=> Linking.openURL('https://google.com')}
            />
          </SafeAreaView>
      );  
      }}
        screenOptions={{
        headerShown:false,
        
      }}>
      <Drawer.Screen name="HomeStack" component={HomeStack} options={{
        title: 'Home'
      }}/>
      <Drawer.Screen name="ProfileStack" component={ProfileStack} options={{
        title: 'Profiles'
      }}/>
    </Drawer.Navigator>
  );
}