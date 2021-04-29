<template>
  <div class="p-4" v-loading="loading">
    <div class="mb-4" v-for="(order, key) in orders" :key="key">
      <div class="font-weight-bold text-muted text-right">29/04/2021</div>
      <div class="d-flex p-4 border rounded" style="background-color:lightgrey">
        <div>
          <div class="font-weight-bold">
            Preparing
          </div>
          <div style="border-left: 2px dotted black; height:30px"></div>
          <div class="font-weight-bold text-muted">Delivering</div>
        </div>
        <div class="col p-0 text-right">
          <div>
            <p class="text-muted m-0" style="font-size:10px" @click="$router.push('/delivery')">Estimated Time</p>
            <p class="font-weight-bold m-0">30 mins</p>
            <div v-if="_.includes([0, 1], order.status)" class="mt-3 font-weight-bold text-danger" @click="cancelOrder(order.id)">
              Cancel Order
              <el-tooltip class="item" effect="dark" content="order can be cancel before someone picked up." placement="left-start">
                <span><i class="fas fa-question-circle text-muted"></i></span>
              </el-tooltip>
            </div>
            <div v-if="order.status == 2" class="mt-3 text-danger">Cancelled</div>
            <div v-if="order.status == 3" class="mt-3 text-success">Deliverd</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
      loading: false
    }
  },
  created() {
    this.getOrder()
  },
  methods: {
    async getOrder() {
      this.loading = true
      const { data } = await this.$axios('order')
      this.orders = data
      this.loading = false
    },
    async cancelOrder(orderId) {
      try {
        await this.$axios.put(`order/${orderId}`, { status: 2 })
        this.$notify({ title: 'Success', type: 'success', message: 'Your order has been cancelled' })
        this.getOrder()
      } catch (err) {
        this.$notify({ title: 'Error', type: 'danger', message: err })
      }
    }
  }
}
</script>
