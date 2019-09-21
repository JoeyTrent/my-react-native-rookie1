/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button
} from 'react-native';

//导入tab组件
import TabNavigator from 'react-native-tab-navigator'

//导入页面组件
import Home from './component/tabbars/Home.js'
import Me from './component/tabbars/Me.js'
import Search from './component/tabbars/Search.js'
import Shopcart from './component/tabbars/Shopcart.js'


//导入vector 图标
import Icon from 'react-native-vector-icons/FontAwesome';




 export default class App extends Component{
     constructor(props){
        super(props)
        this.state={
            selectedTab: 'home'
        }
     }
     render(){
     return (
      <View style={styles.container}>
        <TabNavigator >
          {/* 主页的tab栏*/}
             <TabNavigator.Item
                selected={this.state.selectedTab === 'home'}
                title="Home"
               renderIcon={() => <Icon name="home" size={25} color="gray" />}
               renderSelectedIcon={() => <Icon name="home" size={25} color="#0079ff" />}
                onPress={() => this.setState({ selectedTab: 'home' })}>
               <Home></Home>
             </TabNavigator.Item>

             {/* 搜索的tab栏*/}
             <TabNavigator.Item
               selected={this.state.selectedTab === 'search'}
                title="搜索"
                renderIcon={() => <Icon name="search" size={25} color="gray" />}
                renderSelectedIcon={() => <Icon name="search" size={25} color="#0079ff" />}
                 onPress={() => this.setState({ selectedTab: 'home' })}
                onPress={() => this.setState({ selectedTab: 'search' })}>
                 <Search></Search>
             </TabNavigator.Item>


              {/* 购物车的tab栏*/}
             <TabNavigator.Item
               selected={this.state.selectedTab === 'shopcart'}
                title="购物车"
               badgeText="0"

               renderIcon={() => <Icon name="shopping-cart" size={25} color="gray" />}
               renderSelectedIcon={() => <Icon name="shopping-cart" size={25} color="#0079ff" />}
                onPress={() => this.setState({ selectedTab: 'home' })}
                onPress={() => this.setState({ selectedTab: 'shopcart' })}>
                 <Shopcart></Shopcart>
             </TabNavigator.Item>

              {/* Me的tab栏*/}
              <TabNavigator.Item
               selected={this.state.selectedTab === 'me'}
                title="Me"
                renderIcon={() => <Icon name="user" size={25} color="gray" />}
                renderSelectedIcon={() => <Icon name="user" size={25} color="#0079ff" />}
                 onPress={() => this.setState({ selectedTab: 'home' })}
                onPress={() => this.setState({ selectedTab: 'me' })}>
               <Me></Me>
             </TabNavigator.Item>
             </TabNavigator>
      </View>
      )
     }
 }

const styles = StyleSheet.create({
      container: {
       flex:1
      },
})




