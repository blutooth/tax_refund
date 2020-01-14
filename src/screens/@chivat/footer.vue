<template>
  <nb-container :style="{ backgroundColor: '#fff' }">

    <nb-content padder></nb-content>

    <nb-footer>
      <nb-footer-tab>
        <nb-button :active="tab1" :onPress="toggleTab1">
          <nb-icon name="camera" :active="tab1" />
          <nb-text> Receipts</nb-text>
        </nb-button>

        <nb-button :active="tab2" :onPress="toggleTab2">
          <nb-icon name="camera" :active="tab2" />
          <nb-text> Camera</nb-text>
        </nb-button>

        <nb-button :active="tab3" :onPress="toggleTab3">
          <nb-icon name="person" :active="tab3" />
          <nb-text>Account</nb-text>
        </nb-button>

        <nb-button :active="tab4" :onPress="toggleTab4">
          <nb-icon name="more" :active="tab4" />
          <nb-text>More</nb-text>
        </nb-button>
      </nb-footer-tab>
    </nb-footer>
  </nb-container>
</template>

<script>
export default {
  data() {
    return {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    };
  },
  methods: {
    toggleTab1() {
      this.tab1 = true;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = false;
    },
    toggleTab2() {
      this.tab1 = false;
      this.tab2 = true;
      this.tab3 = false;
      this.tab4 = false;
    },
    toggleTab3() {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = true;
      this.tab4 = false;
    },
    toggleTab4() {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = true;
    }
  }
};
</script>
