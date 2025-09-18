<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Loader } from "@googlemaps/js-api-loader";

interface Property {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  category: string;
  lat: number;
  lng: number;
}

const props = defineProps<{
  properties: Property[];
}>();


const apiKey = import.meta.env.VITE_GOOGLE_API_KEY as string;

const mapElement = ref<HTMLElement | null>(null);

onMounted(async () => {
  const loader = new Loader({
    apiKey, 
    version: "weekly",
  });

  const google = await loader.load();

  const map = new google.maps.Map(mapElement.value as HTMLElement, {
    center: { lat: 42.8864, lng: -78.8784 }, // Buffalo city center
    zoom: 10,
  });

  props.properties.forEach((property) => {
    const marker = new google.maps.Marker({
      position: { lat: property.lat, lng: property.lng },
      map,
      title: property.name,
    })
  });

  
});
</script>

<template>
  <div ref="mapElement" class="w-full h-[400px] rounded-lg shadow"></div>
</template>
