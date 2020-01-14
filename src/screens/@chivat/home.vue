<template>
<nb-container :style="{ backgroundColor: '#fff' }">
        <nb-header>
           <header>
         </nb-header>
        <nb-body>
        <dummy/>
        <checkList/>
        </nb-body>
        <footer/>
  </nb-container>        
</template>
<script>
import header from "./header";
import footer from "./footer";
import checkList from "./checklist";
import dummy from "./dummy";

export default {
   components: {header, dummy, footer, checkList}
}

</script>