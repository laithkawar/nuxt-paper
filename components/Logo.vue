<template>
  <!-- This is the canvas controlled by Paper.JS -->
  <div class="flex justify-center content-center">
    <canvas width="300" resize id="view" ref="view"></canvas>
  </div>
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
    const marginX = 20

    var iconX = Math.round(radius + 1)
    var iconY = Math.round(this.paper.view.size.height / 2)

    var icon = new this.paper.Path.Circle({
      center: new this.paper.Point(iconX, iconY),
      radius: radius,
      strokeColor: new this.paper.Color(1, 0, 0),
    })

    var textX = radius * 2 + marginX
    var textY = iconY - radius

    // Create a rectangle shaped path with its top left corner
    // at {x: 80, y: 25} and a size of {width: 75, height: 50}:
    var pathText = new this.paper.Path.Rectangle({
      point: [textX, textY],
      size: [this.paper.view.size.width - textX, radius * 2],
      // fillColor: 'white',
    })

    var text = new this.paper.PointText(
      new this.paper.Point(textX, iconY * 1.3)
    )
    text.content = 'Test Co'
    text.style = {
      fontFamily: 'Ubuntu',
      fontWeight: 'bold',
      fontSize: 75,
      fillColor: 'red',
      justification: 'left',
    }

    // Fit the circlePath to the bounding rectangle of
    // the rectangular path:
    console.log(text.bounds)
    if (text.bounds.width > pathText.bounds.width)
      text.fitBounds(pathText.bounds)
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
