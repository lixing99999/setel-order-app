<template>
  <div class="p-4">
    <div class="h3 font-weight-bold">Carts</div>
    <div class="mt-4">
      <div v-for="(order, key) in carts" :key="key">
        <div class="border-bottom py-2 row">
          <img :src="require('~/assets/img/big-mac.png')" width="84" height="84" />
          <div class="align-self-center ml-2">
            <div class="font-weight-bold">{{ order.name }}</div>
            <div class="mt-3">
              <el-input-number size="mini" v-model="order.amount" :min="1" :max="10"></el-input-number>
            </div>
          </div>
          <div class="align-self-center text-muted col text-right">RM {{ order.unit_price }}</div>
        </div>
      </div>
    </div>
    <div class="mt-3 font-weight-bold">
      <div class="d-flex justify-content-end">
        <div class="text-right mr-2">Sub Total</div>
        <div style="width:50px" class="text-right">
          {{ total }}
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <div class="text-right mr-2">Delivery</div>
        <div style="width:50px" class="text-right">{{ deliverFees }}</div>
      </div>
      <div class="d-flex justify-content-end">
        <div class="text-right mr-2">Total</div>
        <div style="width:50px" class="text-right">
          {{ _.sum([total, deliverFees]) }}
        </div>
      </div>
    </div>
    <el-button class="col mt-3" type="warning" @click="showDrawer = !showDrawer">
      <div class="font-weight-bold text-dark">Check Out</div>
    </el-button>
    <el-drawer size="80%" :visible.sync="showDrawer" :direction="'btt'">
      <div class="overflow-auto pb-4" style="height:430px">
        <payment :orders="carts" />
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import payment from '../../components/orders/payment.vue'
export default {
  components: { payment },
  computed: {
    total() {
      return _.sumBy(this.carts, 'unit_price')
    },
    ...mapGetters(['carts'])
  },
  data() {
    return {
      showDrawer: false,
      deliverFees: 3,
      orders: [
        {
          name: 'Big Mac',
          amount: 1,
          unit_price: 11.0
        },
        {
          name: 'Apple Pie',
          amount: 1,
          unit_price: 3.0
        }
      ]
    }
  },
  methods: {}
}
</script>
