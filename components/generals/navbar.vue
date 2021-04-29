<template>
  <div class="d-flex justify-content-between align-self-center py-3 px-4 border-bottom">
    <div @click="showDrawer = !showDrawer">
      <i class="fas fa-bars" style="font-size:32px"></i>
    </div>
    <div>
      <img :src="require('~/assets/mcd_logo.png')" width="32" height="32" />
    </div>
    <div @click="$router.push('/cart')">
      <el-badge :value="carts.length" class="item">
        <i class="el-icon-shopping-bag-1" style="font-size:32px"></i>
      </el-badge>
    </div>

    <el-drawer size="50%" :visible.sync="showDrawer" :direction="'ltr'">
      <div class="px-4">
        <div class="h4 mb-4 font-weight-bold">
          <a href="/" class="text-dark">Menus</a>
        </div>
        <div class="h4 mb-4 font-weight-bold">
          <a href="/order" class="text-dark">Orders</a>
        </div>
        <div class="h4 mb-4 font-weight-bold">
          <a href="/cart" class="text-dark">Carts</a>
        </div>
        <div class="h4 mb-4 font-weight-bold">
          <a href="/activity" class="text-dark">Activities</a>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      showDrawer: false
    }
  },
  computed: {
    ...mapGetters(['carts'])
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
