import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { COLORS, SIZES } from '../constants';
import WelcomeSVG from '../../assets/images/Welcome.svg';
import Button from '../components/Button';

const Welcome = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.background, padding: SIZES.base*2}} >
            <View style={{
                justifyContent:'center',
                alignItems: 'center',
                backgroundColor: COLORS.lightGray,
                padding: SIZES.base*2, 
                borderRadius: SIZES.radius
            }}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    marginVertical: SIZES.base*5
                }}>Welcome</Text>
                <WelcomeSVG width={350} height={250} />
            </View>
            <View style={{alignItems: 'center', paddingVertical: SIZES.base*2}}>
                <Text style={{
                    fontSize: 22,
                    marginVertical: SIZES.base*4
                }}>Discover Amazing things!</Text>
                {/* Buttons */}
                <Button label={"Create Account"} isPrimary={true} handleOnPress={()=> navigation.navigate('CreateAccountScreen')}/>
                <Button label={"Sign In"} isPrimary={false} handleOnPress={()=> navigation.navigate('SignInScreen')}/>
            </View>
        </SafeAreaView>
    )
}

export default Welcome
