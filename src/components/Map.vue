<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Loader } from "@googlemaps/js-api-loader";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY as string;
// const apiKey = "AIzaSyB9rCPQZA7gTLPdUpWGleytTtsbM-1sDWQ";

const mapElement = ref<HTMLElement | null>(null);

onMounted(async () => {
  const loader = new Loader({
    apiKey, 
    version: "weekly",
  });

  const google = await loader.load();

  const map = new google.maps.Map(mapElement.value as HTMLElement, {
    center: { lat: 40.7128, lng: -74.006 },
    zoom: 12,
  });

  new google.maps.Marker({
    position: { lat: 40.7128, lng: -74.006 },
    map,
    title: "Hello NYC!",
  });
});
</script>

<template>
  <div ref="mapElement" class="w-full h-[400px] rounded-lg shadow"></div>
</template>
