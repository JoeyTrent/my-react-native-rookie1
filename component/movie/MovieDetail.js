import React,{Component}from 'react'
import {View,Image,Text,ActivityIndicator,ScrollView,StyleSheet} from 'react-native'

export default class MovieDetail extends Component {
     constructor(props) {
         super(props)
         this.state = {
             movieInfo: {},
             isloading: true
         }
     }
    // https：//api.douban.com/v2/movie/subject/25779217?apikey=0df993c66c0c636e29ecbb5344252a4a
     componentWillMount(){
         const url = 'https://api.douban.com/v2/movie/subject/'+ this.props.id +'?apikey=0df993c66c0c636e29ecbb5344252a4a'
         fetch(url)
         .then(res => res.json())
         .then(data => {
             this.setState({
                   movieInfo: data,
                   isloading:false
             })
         })
         
     }

     render(){
         return(<View>
            {this.renderInfo()}
         </View>)
     }
     renderInfo = () => {
         if(this.state.isloading){
            return <ActivityIndicator size='large'></ActivityIndicator>
         }else{
             return <ScrollView>
                  <View style={{padding: 5}}>
                  <Text style={{fontSize:25,textAlign:'center', marginTop: 20,marginBottom:20}}>{this.state.movieInfo.title}</Text>
                  <View style={{alignItems: 'center'}}>
                  <Image source={{uri: this.state.movieInfo.images.large.replace('img3','img1')}} style={{width:200,height:280}}></Image></View>   
                  <View style={{padding:20,paddingRight:20}}>            
                  <Text style={{lineHeight:30,marginTop:20}}>&nbsp;&nbsp;&nbsp;&nbsp;{this.state.movieInfo.summary}</Text>
                  </View>
             </View>
             </ScrollView>
         }
     }
}

const styles = StyleSheet.create({
   
})