
import React,{Component} from 'react'

import { View, Button, Image} from 'react-native'
import ImagePicker from 'react-native-image-picker'

var photoOptions = {
    //底部弹出框选项
    title: '请选择',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '选择相册',
    quality: 1,
    allowsEditing: true,
    noData: false,
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  }



export default class Me extends Component {
     constructor(props) {
         super(props)
         this.state = {
            imgURL: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569067205759&di=a7da243d748fd1153305e3de700fd9ef&imgtype=0&src=http%3A%2F%2Fimg1.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp176331427.jpg'
         }
     }

     render(){
         return(
             <View style={{alignItems: 'center', paddingTop: 70}}>
                <Image source={{ uri: this.state.imgURL }} style={{ width: 140, height: 140 , borderRadius: 70}}></Image>
                  <Button title="拍照" onPress={this.cameraAction}></Button>
             </View>
         )
     }

     cameraAction = () => {
        ImagePicker.showImagePicker(photoOptions, (response) => {
          console.log('response' + response);
          if (response.didCancel) {
            return
          }
          this.setState({
            imgURL: response.uri
          })
           })
     }
}