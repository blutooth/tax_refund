<template>
  <nb-content padder>
    <nb-separator bordered noTopBorder>
      <nb-h3>USER</nb-h3>
    </nb-separator>
    <nb-list-item>
      <nb-thumbnail :source="pranik" />
      <nb-body>
        <nb-h3>
          damilareisaac@hotmail.com
        </nb-h3>
        <nb-text :numberOfLines="1">
          damilareisaac@hotmail.com
        </nb-text>
      </nb-body>
    </nb-list-item>
    <nb-separator bordered noTopBorder>
      <nb-h3>PROFILE</nb-h3>
    </nb-separator>
    <nb-list-item icon>
      <nb-left>
        <nb-button :style="{ backgroundColor: '#FF9501' }">
          <nb-icon active name="person" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-text :onPress="() => this.props.navigation.openDrawer()"
          >My Profile</nb-text
        >
      </nb-body>
      <nb-right>
        <nb-icon name="arrow-forward" :style="{ color: '#999' }" />
      </nb-right>
    </nb-list-item>
    <nb-list-item icon>
      <nb-left>
        <nb-button :style="{ backgroundColor: '#FF9501' }">
          <nb-icon active name="card" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-text>Refund Methods</nb-text>
      </nb-body>
      <nb-right>
        <nb-icon name="arrow-forward" :style="{ color: '#999' }" />
      </nb-right>
    </nb-list-item>
    <nb-separator bordered noTopBorder>
      <nb-h3>TRIP AND REFUND HISTORY</nb-h3>
    </nb-separator>
    <nb-list-item icon>
      <nb-left>
        <nb-button :style="{ backgroundColor: '#FF9501' }">
          <nb-icon active name="cart" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-text>My Trips</nb-text>
      </nb-body>
      <nb-right>
        <nb-icon name="arrow-forward" :style="{ color: '#999' }" />
      </nb-right>
    </nb-list-item>
    <nb-list-item icon>
      <nb-left>
        <nb-button :style="{ backgroundColor: '#FF9501' }">
          <nb-icon active name="cart" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-text>My Refunds</nb-text>
      </nb-body>
      <nb-right>
        <nb-icon name="arrow-forward" :style="{ color: '#999' }" />
      </nb-right>
    </nb-list-item>

    <nb-separator bordered noTopBorder>
      <nb-h3>OTHERS</nb-h3>
    </nb-separator>
    <nb-list-item icon>
      <nb-left>
        <nb-button :style="{ backgroundColor: '#FF9501' }">
          <nb-icon active name="lock" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-text>My Password </nb-text>
      </nb-body>
      <nb-right>
        <nb-icon name="arrow-forward" :style="{ color: '#999' }" />
      </nb-right>
    </nb-list-item>
    <nb-separator bordered noTopBorder> </nb-separator>
    <nb-button full light>
      <nb-text>Sign Out</nb-text>
    </nb-button>
  </nb-content>
</template>

<script>
import pranik from "../../../../assets/pratik.png";
import React from "react";
import { Platform } from "react-native";
import { Icon } from "native-base";
export default {
  data() {
    return {
      osType: Platform.OS,
      selected1: "key1",
      airplaneMode: false,
      pranik
    };
  },
  methods: {
    onValueChange(value) {
      this.selected1 = value;
    },
    getIosIconForPicker() {
      return <Icon name="ios-arrow-down" />;
    },
    toggleAirplaneMode() {
      this.airplaneMode = !this.airplaneMode;
    }
  }
};
</script>
