<template>
      <nb-list>
        <nb-list-item
          v-for="listItem in listItemArr"
          :key="listItem.route"
          button
          :onPress="() => this.props.navigation.navigate(listItem.route)"
        >
          <nb-left>
            <nb-icon :name="listItem.icon" class="body-icon-color" />
            <nb-text>
              &nbsp;	{{ listItem.text }}
            </nb-text>
          </nb-left>

          <nb-right>
            <nb-icon name="arrow-forward" class="body-icon-color" />
          </nb-right>
        </nb-list-item>
      </nb-list>
</template>
<script>
export default {
data() {
    return {
      listItemArr: [
        {
          route: "BasicFooter",
          text: "Receipts",
          icon: "camera",
          number: "1"
        },
        {
          route: "IconFooter",
          text: "Details",
          icon: "paper",
          number: "2"
        },
        {
          route: "IconText",
          text: "Tax Refund Form",
          icon: "print",
          number: "3"

        },
         {
          route: "BadgeFooter",
          text: "Refund",
          icon: "card",
          number: "4"

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
</style>
