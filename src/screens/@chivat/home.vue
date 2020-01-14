<template>
<nb-container :style="{ backgroundColor: '#fff' }">
       <nb-header> 
      </nb-header>

      <nb-container>
                   <header>

         <checkList/>
      </nb-container> 
 

        <footer/>
  </nb-container>        
</template>
<script>
import header from "./header";
import footer from "./footer";
import checkList from "./checkList";
import { Container, Header, Content, Footer, Text } from 'native-base';
import dummy from "./dummy";

export default {
   components: {header, dummy, footer, checkList, Content}
}

</script>