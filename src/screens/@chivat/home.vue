<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-container :style="{ backgroundColor: '#fff' }">
      <nb-content padder>
        <account-landing v-if="isAccountTab"></account-landing>
        <more-landing v-if="isMoreTab"></more-landing>
        <receipts-landing v-if="isReceiptsTab"></receipts-landing>
        <notification-landing v-if="isNotificationTab"></notification-landing>
      </nb-content>

      <nb-footer>
        <nb-footer-tab>
          <nb-button :active="isReceiptsTab" :onPress="toggleReceiptsTab">
            <nb-icon name="paper-plane" :active="isReceiptsTab" />
            <nb-text>Receipts</nb-text>
          </nb-button>

          <nb-button
            :active="isNotificationTab"
            :onPress="toggleNotificationTab"
          >
            <nb-icon name="navigate" :active="isNotificationTab" />
            <nb-text>Notification</nb-text>
          </nb-button>

          <nb-button :active="isAccountTab" :onPress="toggleAccountTab">
            <nb-icon name="person" :active="isAccountTab" />
            <nb-text>Account</nb-text>
          </nb-button>

          <nb-button :active="isMoreTab" :onPress="toggleMoreTab">
            <nb-icon name="more" :active="isMoreTab" />
            <nb-text>More</nb-text>
          </nb-button>
        </nb-footer-tab>
      </nb-footer>
    </nb-container>
  </nb-container>
</template>
<script>
import { Container, Header, Content, Footer, Text } from "native-base";
import AccountLanding from "./components/account/LandingPage";
import MoreLanding from "./components/more/LandingPage";
import ReceiptsLanding from "./components/receipts/LandingPage";
import NotificationLanding from "./components/notification/LandingPage";
export default {
  props: {
    navigation: {
      type: Object,
      required: true
    }
  },
  components: {
    AccountLanding,
    MoreLanding,
    ReceiptsLanding,
    NotificationLanding
  },
  data() {
    return {
      isReceiptsTab: true,
      isNotificationTab: false,
      isAccountTab: false,
      isMoreTab: false
    };
  },
  methods: {
    toggleReceiptsTab() {
      this.isReceiptsTab = true;
      this.isNotificationTab = false;
      this.isAccountTab = false;
      this.isMoreTab = false;
    },
    toggleNotificationTab() {
      this.isReceiptsTab = false;
      this.isNotificationTab = true;
      this.isAccountTab = false;
      this.isMoreTab = false;
    },
    toggleAccountTab() {
      this.isReceiptsTab = false;
      this.isNotificationTab = false;
      this.isAccountTab = true;
      this.isMoreTab = false;
    },
    toggleMoreTab() {
      this.isReceiptsTab = false;
      this.isNotificationTab = false;
      this.isAccountTab = false;
      this.isMoreTab = true;
    }
  }
};
</script>
