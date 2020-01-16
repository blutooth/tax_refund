<template>
  <nb-list class="scroll_list">
    <nb-list-item v-for="listItem in listItemArr" :key="listItem.text">
      <nb-left>
        <nb-thumbnail square :size="55" :source="listItem.img" />
      </nb-left>
      <nb-body>
        <nb-text>
          {{ listItem.text }}
        </nb-text>
        <nb-text :numberOfLines="1" note>
          {{ listItem.note }}
        </nb-text>
      </nb-body>
      <nb-right>
        <nb-button transparent>
          <nb-text>View</nb-text>
        </nb-button>
      </nb-right>
    </nb-list-item>
  </nb-list>
</template>

<script>
import sankhadeep from "../../../../assets/pratik.png";
import supriya from "../../../../assets/pratik.png";
import himanshu from "../../../../assets/pratik.png";
import shweta from "../../../../assets/pratik.png";
import shruti from "../../../../assets/pratik.png";
import shivraj from "../../../../assets/pratik.png";



export default {
  data() {
    return {
      listItemArr: [
        {
          img: sankhadeep,
          text: "Sankhadeep",
          note: "Its time to build a difference . ."
        },
        {
          img: supriya,
          text: "Supriya",
          note: "One needs courage to be happy and smiling all time . . "
        },
        {
          img: shivraj,
          text: "Shivraj",
          note: "Time changes everything . ."
        },
        {
          img: shruti,
          text: "Shruti",
          note: "The biggest risk is a missed opportunity !!"
        }
      ]
    };
  }
};
</script>

<style>
.body-icon-color {
  color: #999;
}

.scroll_list {
  overflow: scroll;
}
</style>
