import React,{Component} from 'react'
import {View,Image,Text,ActivityIndicator,FlatList,TouchableHighlight,StyleSheet} from 'react-native'

// 导入路由的组件
import { Actions } from 'react-native-router-flux'


const styles = StyleSheet.create({
    movieTitle: {
      fontWeight: 'bold'
    }
  })



export default class MovieList extends Component {
     constructor(props) {
         super(props)
         this.state = {
             movies: [],
             nowPage: 1,
             totalPage: 0,
             pageSize: 15,
             isLoading: true
         }
     }
     
     componentWillMount(){
            this.getMovieByPage()
     }

     render(){
         return(<View>
            {this.renderList()}
         </View>)
     }

     getMovieByPage = () => {
        const start = (this.state.nowPage-1)*this.state.pageSize
        const url = `https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${start}&count=${this.state.pageSize}////?`
        
        fetch(url)
        .then(res => res.json())
        .then(data => {
            this.setState({
                isLoading: false,
                movies : this.state.movies.concat(data.subjects),
                totalPage: Math.ceil(data.total/this.state.pageSize) 
            })
        })
       
        //  setTimeout(() => {
        //       this.setState({
        //           isLoading: false,
        //           movies: require('./test_list.json').subjects,
        //           totalPage: Math.ceil(require('./test_list.json').total/this.state.pageSize)
        //       })
        // },500)
     }

     renderList = () => {
         if(this.state.isLoading){
             return <ActivityIndicator size = 'large'></ActivityIndicator>
         }else{
             return <FlatList
             data={this.state.movies}
             keyExtractor={(item, i) => i.toString()} // 解决 key 问题
             renderItem={({ item }) => this.renderItem(item)} // 调用方法，去渲染每一项
             ItemSeparatorComponent={this.renderSeparator} //渲染分割线的属性方法
             onEndReachedThreshold={0.5} // 距离底部还有多远的时候，触发加载更多的事件
             onEndReached={this.loadNextPage} // 当距离不足 0.5 的时候，触发这个方法，加载下一页数据
             ></FlatList>
         }
     }   
      
     // 渲染每项电影
  renderItem = (item) => {
    return <TouchableHighlight underlayColor="#fff" onPress={() => { Actions.moviedetail({ id: item.id }) }}>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <Image source={{ uri: item.images.small }} style={{ width: 100, height: 140, marginRight: 10 }}></Image>
        <View style={{ justifyContent: 'space-around' }}>
          <Text><Text style={styles.movieTitle}>电影名称：</Text>{item.title}</Text>
          <Text><Text style={styles.movieTitle}>电影类型：</Text>{item.genres.join('，')}</Text>
          <Text><Text style={styles.movieTitle}>制作年份：</Text>{item.year}年</Text>
          <Text><Text style={styles.movieTitle}>豆瓣评分：</Text>{item.rating.average}分</Text>
        </View>
      </View>
    </TouchableHighlight>
  }

   // 渲染分割线
   renderSeparator = () => {
    return <View style={{ borderTopColor: '#ccc', borderTopWidth: 1, marginLeft: 10, marginRight: 10 }}></View>
  }

   // 加载下一页
   loadNextPage = () => {
    // 如果下一页的页码值，大于总页数了，直接return
    if ((this.state.nowPage + 1) > this.state.totalPage) {
      return
    }

    this.setState({
      nowPage: this.state.nowPage + 1
    }, function () {
      this.getMovieByPage()
    })
  }
}
