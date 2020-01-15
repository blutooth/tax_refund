<template>

      <nb-tabs>

      <nb-tab :heading="getHeadingCompForTab1()">
        <text> {{this.props.navigation}}</text>

        <receipts :navigation ="this.props.navigation"/>
      </nb-tab>
      <nb-tab :heading="getHeadingCompForTab2()">
      </nb-tab>
      <nb-tab :heading="getHeadingCompForTab3()">
      </nb-tab>
    </nb-tabs>
</template>

<script>
import React from "react";
import checkList from "./checkList";
import cameraWrapper from "./cameraWrapper";
import receipts from "./receipts";
import { TabHeading, Icon, Text } from "native-base";

export default {
  props: {
        navigation: {
            type: Object
        }
    },
  methods: {
    getHeadingCompForTab1: function() {
      return (
        <TabHeading>
          <Icon name="camera" />
          <Text>Camera</Text>
        </TabHeading>
      );
        },
    getHeadingCompForTab2: function() {
      return (
        <TabHeading>
          <Text>No Icon</Text>
        </TabHeading>
      );
    },
    getHeadingCompForTab3: function() {
      return (
        <TabHeading>
          <Icon name="apps" />
        </TabHeading>
      );
    }
  },
  components: {TabHeading, checkList, cameraWrapper,  receipts},

};
</script>
