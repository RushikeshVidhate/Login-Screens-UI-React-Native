import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput } from 'react-native'
import { COLORS, SIZES } from '../constants'
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import SignInSignUpSVG from '../../assets/images/SignInOrSignUp.svg';
import Button from '../components/Button';

const CreateAccount = ({navigation}) => {

    const [activeInput, setActiveInput] = useState(null);
    const [showPassword, setShowPassword] = useState(false)

    return (
        <SafeAreaView style={{
            flex:1,
            backgroundColor: COLORS.background,
            padding: SIZES.base*2,
            position:'relative'
        }}>
            <AntDesignIcon name="arrowleft" style={{fontSize: 30}} onPress={()=>{
                navigation.goBack();
            }} />
            <SignInSignUpSVG width={350} heigh={250} />
            <View style={{
                position: 'absolute',
                bottom:0,
                left: 0,
                right: 0,
                zIndex: 100
            }}>
                <View style={{
                    backgroundColor: COLORS.lightGray,
                    width: '100%',
                    borderTopStartRadius: SIZES.radius*2, 
                    borderTopEndRadius: SIZES.radius*2,
                    padding: SIZES.base*2
                }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginVertical: SIZES.base*2
                    }}>
                        Create Account
                    </Text>
                    <View style={{marginBottom: SIZES.base}}>
                        <Text style={{fontSize: 16, opacity: 0.5, marginBottom: SIZES.base}}>Full Name</Text>
                        <TextInput onFocus={()=> setActiveInput('fullname')} style={{
                            padding: SIZES.base,
                            backgroundColor: COLORS.white,
                            borderRadius: 5,
                            paddingVertical: SIZES.base*1.5,
                            borderWidth: 1.5,
                            borderColor: activeInput == "fullname" ? COLORS.primary : COLORS.white
                        }} />
                    </View>
                    <View style={{marginBottom: SIZES.base}}>
                        <Text style={{fontSize: 16, opacity: 0.5, marginBottom: SIZES.base}}>Email Address</Text>
                        <TextInput onFocus={()=> setActiveInput('email')} style={{
                            padding: SIZES.base,
                            backgroundColor: COLORS.white,
                            borderRadius: 5,
                            paddingVertical: SIZES.base*1.5,
                            borderWidth: 1.5,
                            borderColor: activeInput == "email" ? COLORS.primary : COLORS.white
                        }} />
                    </View>
                    <View style={{marginBottom: SIZES.base}}>
                        <Text style={{fontSize: 16, opacity: 0.5, marginBottom: SIZES.base}}>Password</Text>
                        <View style={{
                            position: 'relative',
                            justifyContent: 'center'
                        }}>
                            <TextInput 
                            onFocus={()=> setActiveInput('password')} 
                            secureTextEntry={showPassword ? false : true}
                            style={{
                                padding: SIZES.base,
                                backgroundColor: COLORS.white,
                                borderRadius: 5,
                                paddingVertical: SIZES.base*1.5,
                                borderWidth: 1.5,
                                borderColor: activeInput == "password" ? COLORS.primary : COLORS.white
                            }} />
                            <AntDesignIcon name="eye"
                            onPress={()=>setShowPassword(!showPassword)}
                            style={{
                                position: 'absolute',
                                right: SIZES.base*2,
                                fontSize: 30,
                                color: showPassword ? COLORS.primary : COLORS.black
                            }}/>
                        </View>
                        
                    </View>
                    <Button label={"Create Account"} isPrimary={true} style={{
                            marginVertical: SIZES.base*2
                        }}/>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginVertical: SIZES.base
                        }}>
                            <Text style={{
                                fontSize: 16
                            }}>Already have an account ?</Text>
                            <Text style={{
                                fontSize: 16, fontWeight: 'bold', marginLeft: SIZES.base,
                                color: COLORS.primary
                            }}
                            onPress={()=>{
                                navigation.navigate('SignInScreen')
                            }}>Sign In</Text>
                        </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CreateAccount
