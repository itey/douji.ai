<template>
  <div>首页</div>
</template>

<script>
import i18n from '@/i18n'
export default {
  name: 'home-view',
  mounted() {
    console.log(i18n.locale)
  },
}
</script>
