<template>
  <nb-content padder>
    <nb-form>
      <nb-item fixedLabel>
        <nb-label>Username</nb-label>
        <nb-input />
      </nb-item>
      <nb-item fixedLabel last>
        <nb-label>Password</nb-label>
        <nb-input secureTextEntry />
      </nb-item>
    </nb-form>
    <nb-button block :style="{ margin: 15, marginTop: 50 }">
      <nb-text>Sign In</nb-text>
    </nb-button>
  </nb-content>
</template>

<script>
export default {};
</script>
