<template>
      <nb-tabs>
      <nb-tab :heading="getHeadingCompForTab1()">
        <checkList />
      </nb-tab>
      <nb-tab :heading="getHeadingCompForTab2()">
        <dummy />
      </nb-tab>
      <nb-tab :heading="getHeadingCompForTab3()">
        <dummy />
      </nb-tab>
    </nb-tabs>
</template>

<script>
import dummy from "./dummy";
import React from "react";
import checkList from "./checkList";
import { TabHeading, Icon, Text } from "native-base";

export default {

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
  components: {dummy, TabHeading, checkList},

};
</script>
