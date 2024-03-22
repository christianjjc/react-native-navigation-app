import React from 'react';
import {View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        label="Products"
        onPress={() => navigation.navigate('Products' as never)}
      />
      <PrimaryButton
        label="Settings"
        onPress={() => navigation.navigate('Settings' as never)}
      />
    </View>
  );
};
