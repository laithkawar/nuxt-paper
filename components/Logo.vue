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

    const radius = 50
    const marginX = 25

    var iconX = Math.round(radius + marginX)
    var iconY = Math.round(this.paper.view.size.height / 2)

    var icon = new this.paper.Path.Circle({
      center: new this.paper.Point(iconX, iconY),
      radius: radius,
      strokeColor: new this.paper.Color(1, 0, 0),
    })

    var text = new this.paper.PointText(
      new this.paper.Point(iconX * 2, iconY + 15)
    )
    text.content = 'MyCompany'
    text.style = {
      fontFamily: 'Courier New',
      fontWeight: 'bold',
      fontSize: 60,
      fillColor: 'red',
      justification: 'left',
    }

    // var layer = new this.paper.Layer(icon)
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
