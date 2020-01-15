<template>
<nb-container :style="{ backgroundColor: '#fff' }">
       <nb-header> 
      </nb-header>
      <nb-content>
         <tabs :navigation="this.props.navigation">
      </nb-content> 
 

        <footer/>
  </nb-container>        
</template>
<script>
import tabs from "./tabs";
import footer from "./footer";
import checkList from "./checkList";
import { Container, Header, Content, Footer, Text } from 'native-base';

export default {
   props: {
        navigation: {
            type: Object,
            required: true
        }
    },
   components: {tabs, footer, checkList, Content}
}

</script>