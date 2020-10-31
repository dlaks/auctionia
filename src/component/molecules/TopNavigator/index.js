import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { TabItem, TopTabItem } from '../../atoms';
import { colors } from '../../../utils';
import { Header } from '../../molecules';

const TopNavigator = ({state, descriptors, navigation}) => {
    return (
        <View style={styles.content}>
            <Header title='Bids' type='dark' onPress={()=>navigation.goBack()}/>
            <View style={styles.container}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                    };

                    const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                    };

                    return (
                        <TopTabItem 
                            key={index}
                            title={label} 
                            active={isFocused}
                            onPress={onPress}
                            onLongPress={onLongPress}
                        />
                    );
                })}
            </View>
        </View>
    )
}

export default TopNavigator

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        justifyContent:'flex-start',
        paddingHorizontal:16,
        paddingVertical:10,
        backgroundColor:colors.white,
    }
})
