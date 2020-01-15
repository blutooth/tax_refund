<template>
  <view class="container"  id =#wrapper>
    <camera ref="cameraFoo" :type="this.type" class="cam"/>
    <nb-button :onPress="snap" class="cam_but" >
        <nb-text>Click Me!</nb-text>
      </nb-button>
  </view>
</template>

<script>
import * as Permissions from 'expo-permissions';
import { Camera } from "expo-camera";
import { keys } from "ramda";
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
    hasCameraPermission = status.status == "granted" ? true : false;
    console.log("Rai is a beast");
    
  } 
  catch(err) {
        console.log(err);
  }
 },
 methods: { 

    snap: async function () {
      console.log("plz work")
      const photo = await this.$refs.cameraFoo.takePictureAsync();
      console.log(typeof photo)
      console.log(photo["u"])

      console.log(keys(photo))
      store.commit("ADD_RECEIPT");

      this.navigation.navigate('Receipts');

},
    
   onPictureSaved: async (photo) => {
      store.commit("ADD_RECEIPT");
      this.navigation.navigate('Receipts');
  } 
 
 
 },
 components: { Camera },
 props: {
   navigation: {
      type: Object
    }
 }
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