<template>
  <div class="p-4">
    <div class="h3 font-weight-bold">Menus</div>

    <subNavbar />

    <div class="mt-3">
      <div class="row">
        <div v-for="(menu, key) in menus" :key="key" @click="showDrawer = !showDrawer">
          <div class="col text-center">
            <img :src="require('~/assets/img/big-mac.png')" width="84" height="84" />
            <div class="text-center">{{ menu.name }}</div>
          </div>
        </div>
      </div>
    </div>

    <el-drawer size="40%" :visible.sync="showDrawer" :direction="'btt'">
      <div>
        <div class="px-4 d-flex justify-content-center">
          <div class="mr-2">
            <img :src="require('~/assets/img/big-mac.png')" width="84" height="84" />
            <div class="text-center">Big Mac</div>
          </div>
          <el-input-number class="align-self-center" size="mini" v-model="amount" :min="1" :max="10"></el-input-number>
        </div>
        <div class="text-center p-4">
          <el-button class="col" type="warning" @click="addOrder()">Confirm</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import subNavbar from '../components/generals/subNavbar'
export default {
  components: {
    subNavbar
  },
  data() {
    return {
      showDrawer: false,
      amount: 0,
      menus: [
        {
          name: 'Big Mac',
          src: 'big_mac',
          amount: 1,
          unit_price: 11
        },
        {
          name: 'Cheese Burger',
          src: 'double_cheese',
          amount: 1,
          unit_price: 8
        }
      ]
    }
  },
  methods: {
    ...mapActions(['addItem']),
    addOrder() {
      this.addItem(this.menus[0])
      this.showDrawer = !this.showDrawer
    }
  }
}
</script>
