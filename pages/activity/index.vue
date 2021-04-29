<template>
  <div class="p-4">
    <div class="h3 font-weight-bold">Activity</div>
    <div class="h4 font-weight-bold mt-4 text-muted">2020</div>
    <div class="row px-2">
      <div v-for="(activity, key) in 15" :key="key">
        <el-tooltip class="item" effect="dark" content="You've order a cheese burger on 11/03/20" placement="top-start">
          <div class="mx-1 my-1" :class="key % 3 == 0 ? ' bg-warning' : 'bg-light'" style="width:25px; height:25px; border : 1px solid #eee; border-radius:5px"></div
        ></el-tooltip>
      </div>
    </div>
    <div class="h4 font-weight-bold mt-4 text-muted">2021</div>
    <div class="row px-2">
      <div v-for="(activity, key) in 15" :key="key">
        <el-tooltip class="item" effect="dark" content="You've order a cheese burger on 19/03/21" placement="top-start">
          <div class="mx-1 my-1" :class="key % 2 == 0 ? ' bg-warning' : 'bg-light'" style="width:25px; height:25px; border : 1px solid #eee; border-radius:5px"></div>
          ></el-tooltip
        >
      </div>
    </div>
  </div>
</template>
