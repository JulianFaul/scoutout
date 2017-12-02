<template>
  <div>

    <h1>{{product.id}}</h1>
    <!-- <product-list></product-list> -->
  </div>
</template>

<script>

export default {
  name: "product-details",
  props: ['product']
}
</script>