<template>
  <div class="px-4">
    <div class="h4 font-weight-bold">Payments</div>
    <div class="col border rounded shadow-sm mt-4 px-2" style="background-color:#eee">
      <div class="pb-2 pt-4 font-weight-bold">Public Bank</div>
      <div class="pt-2 pb-4">
        <el-input size="medium" placeholder="Card Number"></el-input>
        <div class="d-flex mt-3">
          <el-input size="medium" class="mr-1" placeholder="CVC"></el-input>
          <el-input size="medium" class="ml-1" placeholder="Expiry"></el-input>
        </div>
      </div>
    </div>
    <div class=" mt-3">
      <div class="py-4" style="border: 1px dotted black">
        <div class="text-center">
          <img :src="require('~/assets/mcd_logo.png')" width="32" height="32" />
          <p class="mt-2" style="font-size : 15px">
            120-120A Jalan Bukit Bintang, 55100, Kuala Lumpur, Malaysia
          </p>
        </div>
        <hr class="mx-2 text-dark" />
        <div class="d-flex px-2">
          <div style="width:150px">Item</div>
          <div style="width:50px" class="">Amt.</div>
          <div style="width:100px" class="text-right">Price</div>
        </div>
        <div v-for="(order, key) in orders" :key="key">
          <div class="px-2 d-flex">
            <div style="width:150px">{{ order.name }}</div>
            <div style="width:50px" class="text-center">{{ order.amount }}</div>
            <div style="width:100px" class="text-right">
              {{ order.unit_price }}
            </div>
          </div>
        </div>
        <hr class="mx-2 text-dark" />
        <div class="mt-3 px-2">
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
      </div>
    </div>
    <el-button class="col-11" type="warning" size="large" style="position: fixed; bottom: 10px; right:15px">
      <div class="font-weight-bold text-dark" @click="createOrder()">
        Confirm Payment
      </div>
    </el-button>
  </div>
</template>

<script>
export default {
  props: ['orders'],
  computed: {
    total() {
      return _.sumBy(this.orders, 'unit_price')
    }
  },
  data() {
    return {
      deliverFees: 3
    }
  },
  methods: {
    async createOrder() {
      try {
        const orders = _.map(this.orders, (x) => {
          return { name: x.name, amount: x.amount, unit_price: x.unit_price }
        })

        await this.$axios.post('order', { status: 1, items: orders })
        this.$notify({
          title: 'Success',
          type: 'success',
          message: 'Order has been successfully created.'
        })
        this.$router.push('/order')
      } catch (err) {
        this.$notify({ title: 'Error', type: 'danger', message: err })
      }
    }
  }
}
</script>
