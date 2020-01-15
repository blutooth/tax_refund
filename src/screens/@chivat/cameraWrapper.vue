<template>
  <view class="container"  id =#wrapper>
    <camera :type="this.type" class="cam"/>
    <nb-button :onPress="onPress" class="cam_but" >
        <nb-text>Click Me!</nb-text>
      </nb-button>
  </view>
</template>

<script>
import * as Permissions from 'expo-permissions';
import {Camera} from "expo-camera";
import store from "../../store";

export default {
 data: function() {
   return {
     hasCameraPermission: false,
     type: Camera.Constants.Type.back,
   };
 },
 mounted: async () => {
   try{
    let status = await Permissions.askAsync(Permissions.CAMERA);
    this.hasCameraPermission = status.status == "granted" ? true : false;
  } 
  catch(err) {
        console.log(err);
  }
 },
 methods: { onPress: async () => {
   try{
    let photo = await Camera.takePictureAsync({ 
      quality: 1,
      skipProcessing: true,
      onPictureSaved: this.onPictureSaved });
   }
   catch(err) {
      console.log(err);
   }
   },
   onPictureSaved: async (photo) => {
      store.commit("ADD_RECEIPT");
      this.navigation.navigate('Receipts');
  } 
 
 
 },
 components: { Camera },
};
</script>
<style>
.container {
  flex: 1;
    flex-direction: column;

  min-height: 1; 

}
.text-color-primary {
  color: blue;
}

.cam {
  flex: 1;
}
.cam_but {
  min-height: 100; 
}
</style>