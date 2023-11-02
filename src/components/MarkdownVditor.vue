<template>
  <div id="vditor" />
</template>

<script>
import Vditor from 'vditor'

export default {
  name: 'MarkdowVditor',

  data() {
    return {
      contentEditor: undefined,
      isLoading: true,
    }
  },

  props: {
    pdata: {
      type: String,
      required: true,
      default: '',
    },
  },
  mounted() {
    this.initVditor()
  },
  methods: {
    initVditor() {
      this.contentEditor = new Vditor('vditor', {
        height: 360,
        toolbarConfig: {
          pin: true,
        },
        cache: {
          enable: false,
        },
        after: () => {
          this.contentEditor.setValue(this.pdata)
        },
      })
      this.$nextTick(() => {
        this.isLoading = false
      })
    },
    getValue() {
      return this.contentEditor.getValue()
    },
  },
}
</script>

<style lang="less">
@import '~vditor/src/assets/less/index';
</style>
