import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Buttonn from '../../../components/button/button';

const Splash = ({navigation}) => {
  return (
    <ScrollView scrollEnabled={true} alwaysBounceVertical={true}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{width: '90%', alignSelf: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../../assests/images/Logo.png')}
            style={styles.logo}
          />

          <View
            style={{alignSelf: 'center', alignItems: 'center', marginTop: 10}}>
            <Text style={styles.heading}>SAYLANI WELFARE</Text>
            <Text style={styles.text}>ONLINE DISCOUNT STORE</Text>
          </View>

          <Buttonn
            press={() => navigation.replace('Signup')}
            title={'Get Started'}
            width={226}
            height={69}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 336,
    height: 263,
    marginTop: 100,
  },
  heading: {
    fontSize: 38,
    color: '#61B846',
    fontWeight: '700',
  },
  text: {
    fontSize: 20,
    color: '#024F9D',
    fontWeight: '600',
    marginTop: 10,
  },
});

export default Splash;