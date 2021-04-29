<template>
  <div>
    <div class="container">
      <div class="row">
        <div
          @click="$router.push('/delivery')"
          class="d-flex p-4 border rounded"
          style="background-color: lightgrey; position: fixed; top: 500px; z-index: 1000;width: 350px; left: 10px;"
        >
          <div>
            <div class="font-weight-bold">
              Preparing
            </div>
            <div class="text-muted" style="border-left: 2px dotted black; height:30px"></div>
            <div class="font-weight-bold text-muted">Delivering</div>
          </div>
          <div class="col p-0 text-right">
            <div>
              <p class="text-muted m-0" style="font-size:10px">
                Estimated Time
              </p>
              <p class="font-weight-bold m-0">30 mins</p>
            </div>
          </div>
        </div>
        <div style="height: 1000px; width: 1000px;" ref="map"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBqCIVM1sdSPjxTg4JEK7Soo2PIXvMpR68&callback=myMap'
        }
      ]
    }
  },
  mounted() {
    if (!window.google) {
      this.$router.go()
    }

    if (window.google) {
      const mapOptions = {
        zoom: 17,
        mapId: 'a89ac3c551064406',
        center: new window.google.maps.LatLng(3.139, 101.6869),
        gestureHandling: 'greedy', //able on mobile to move the map
        zoomControl: true,
        origin: new window.google.maps.LatLng(3.139, 101.6869),
        destination: new window.google.maps.LatLng(3.139, 101.6869),
        provideRouteAlternatives: false,
        travelMode: 'DRIVING',
        drivingOptions: {
          departureTime: new Date(/* now, or future date */),
          trafficModel: 'pessimistic'
        },
        unitSystem: google.maps.UnitSystem.IMPERIAL
      }

      const map = new window.google.maps.Map(this.$refs.map, mapOptions)
      const position = new window.google.maps.LatLng(3.156, 101.695)
      var image = {
        url: 'https://img.pngio.com/mcdonalds-png-images-transparent-free-download-pngmartcom-mcdonalds-logo-transparent-background-432_440.png',
        scaledSize: new google.maps.Size(50, 50)
      }

      const markers = [
        {
          position: new window.google.maps.LatLng(3.139, 101.6869),
          title: 'McDonald',
          scaledSize: new google.maps.Size(0, 10),
          icon: image
        },
        {
          position: new window.google.maps.LatLng(3.156, 101.697),
          title: 'McDonald',
          scaledSize: new google.maps.Size(0, 10),
          icon: image
        }
      ]

      for (const i in markers) {
        const marker = new window.google.maps.Marker(markers[i])
        marker.setMap(map)
      }
    }
  }
}
</script>

<style></style>
