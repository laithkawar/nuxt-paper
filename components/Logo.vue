<template>
  <!-- This is the canvas controlled by Paper.JS -->
  <canvas width="550" height="360" resize id="view" ref="view"></canvas>
</template>

<script>
export default {
  data() {
    return {
      imagePath: '',
      paper: null, // Our Paper instance
    }
  },
  mounted() {
    // Create and store the Paper instance in a Vue variable (this.paper)
    this.paper = this.$paper.setup(this.$refs.view)

    console.log(this.paper.view.size.width)

    const radius = 40
    var centerX = Math.round(this.paper.view.size.width - radius) / 2
    var centerY = Math.round(this.paper.view.size.height - radius) / 2
    var circle = new this.paper.Path.Circle({
      center: new this.paper.Point(centerX, centerY),
      radius: radius,
      strokeColor: new this.paper.Color(1, 0, 0),
    })

    var layer = new this.paper.Layer(circle)
  },
}
</script>

<style>
/* .NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
} */
</style>
