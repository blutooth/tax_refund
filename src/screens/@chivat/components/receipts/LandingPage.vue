<template>
  <nb-content padder>
    <nb-tabs>
      <nb-tab :heading="getHeadingCompForTab1()">
        <nb-button
          full
          warning
          :style="{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center'
          }"
          :onPress="openCamera"
        >
          <nb-icon iconLeft name="camera" :style="{ color: '#aaa' }" />
          <nb-text>Add Invoice</nb-text>
        </nb-button>
        <receipt-list></receipt-list>
      </nb-tab>
      <nb-tab :heading="getHeadingCompForTab2()"> </nb-tab>
      <nb-tab :heading="getHeadingCompForTab3()"> </nb-tab>
    </nb-tabs>
  </nb-content>
</template>

<script>
import React from "react";
import { TabHeading, Icon, Text } from "native-base";

import ReceiptList from "./ReceiptList";
export default {
  components: {
    ReceiptList
  },
  methods: {
    getHeadingCompForTab1() {
      return (
        <TabHeading>
          <Text>INVOICES</Text>
        </TabHeading>
      );
    },
    getHeadingCompForTab2() {
      return (
        <TabHeading>
          <Text>TAX FREE FORMS</Text>
        </TabHeading>
      );
    },
    getHeadingCompForTab3() {
      return (
        <TabHeading>
          <Text>REFUNDS</Text>
        </TabHeading>
      );
    },
    openCamera() {
      this.navigation.navigate("CameraWrapper");
    }
  }
};
</script>
