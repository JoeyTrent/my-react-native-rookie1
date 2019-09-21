
import React,{Component} from 'react'

import {View,Text,StyleSheet,Image,TouchableHighlight} from 'react-native'

// 轮播图插件
import Swiper from 'react-native-swiper'

import {Actions} from 'react-native-router-flux'

export default class Home extends Component {
     constructor(props) {
         super(props)
         this.state = {
             swiper:
                 [
                     {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568917109421&di=607e956705474a4db34f2f00273baee9&imgtype=0&src=http%3A%2F%2Fimgsa.baidu.com%2Fbaike%2Fpic%2Fitem%2Fa5c27d1ed21b0ef46ef2f8a3d7c451da81cb3e30.jpg'},
                     {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568917109416&di=5cb95f9b590bf5fa7be68b65b91db12c&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F292f387f9d3f16c7c184a0295b565659d051d9b6122e9-vDYQ1s_fw658'},
                     {url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=485192104,2568717710&fm=26&gp=0.jpg'},
                     {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568917452122&di=e01a6d28f3cae82fa5ca4dda4ef97be0&imgtype=0&src=http%3A%2F%2Fvpic.video.qq.com%2F3388556%2Fd0553nzxhqu_ori_3.jpg'}
                    ]
             
         }
     }

     componentWillMount(){
         fetch('http://study/api/swiper')
         .then(res => res.json())
         .then(data => {
             this.setState({
                 swiper:data
             })
         })
     }

     render(){
         return(
             <View>
                 <View style={{height: 220}}>
                 {/*轮播图 */}
                 <Swiper  showsButtons={true} autoplay={true}   autoplayTimeout={2} loop={true}>
                    {this.state.swiper.map((item,i) => {
                        return <View key={i}>
                                  <Image source={{uri:item.url}} style={{width: '100%',height: '100%'}}></Image>
                           </View>
                    })}
                </Swiper>
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    <View style={styles.box}>
                        <Image source={require('../../images/menu1.png')} style={{width: 60,height: 60}}></Image>
                        <Text>新闻资讯</Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={require('../../images/menu2.png')} style={{width: 60,height: 60}}></Image>
                        <Text>图片分享</Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={require('../../images/menu3.png')} style={{width: 60,height: 60}}></Image>
                        <Text>商品购买</Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={require('../../images/menu4.png')} style={{width: 60,height: 60}}></Image>
                        <Text>留言反馈</Text>
                    </View>
                    
                    <TouchableHighlight onPress={this.goMovieList} underlayColor='#fff' style={styles.box}> 
                    <View >
                        <Image source={require('../../images/menu5.png')} style={{width: 60,height: 60}}></Image>
                        <Text>热映电影</Text>
                    </View>
                    </TouchableHighlight>

                    <View style={styles.box}>
                        <Image source={require('../../images/menu6.png')} style={{width: 60,height: 60}}></Image>
                        <Text>联系我们</Text>
                    </View>
                </View>
             </View>
         )
     }

     goMovieList = () => {
         Actions.movielist({id:10})
     }
}

const styles = StyleSheet.create({
        box:{
            width: '33.33%',
            alignItems: 'center',
            marginTop: 15,
        }
  })