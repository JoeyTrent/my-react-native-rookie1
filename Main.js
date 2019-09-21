//这是项目的根组件

import React,{Component}from 'react'
import {View,Image,Text,ActivityIndicator} from 'react-native'

import {Router,Stack,Scene} from 'react-native-router-flux'

import App from './App.js'

import MovieList from './component/movie/MovieList.js'

import MovieDetail from './component/movie/MovieDetail.js'

export default class Main extends Component {
     constructor(props) {
         super(props)
         this.state = {}
     }
     render(){
         return(
             <Router sceneStyle={{backgroundColor:'#fff'}}>
             <Stack key="root">
                 <Scene key="app" component={App} hideNavBar={true} />
                 <Scene key="movielist" component={MovieList} title = '热映电影列表' />
                 <Scene key="moviedetail" component={MovieDetail} title = '电影详情' />
             </Stack>
             </Router>)
     }
}