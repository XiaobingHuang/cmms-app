<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { Loader } from "@googlemaps/js-api-loader";
import { MarkerClusterer } from "@googlemaps/markerclusterer";

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
  selectedProperty?: Property
}>();


const apiKey = import.meta.env.VITE_GOOGLE_API_KEY as string;

const mapElement = ref<HTMLElement | null>(null);

let map: google.maps.Map; // store map instance
let markers: google.maps.Marker[] = [];

onMounted(async () => {
  const loader = new Loader({
    apiKey, 
    version: "weekly",
  });

  const google = await loader.load();

  map = new google.maps.Map(mapElement.value as HTMLElement, {
    center: { lat: 42.8864, lng: -78.8784 }, // Buffalo city center
    zoom: 10,
  });

  markers = props.properties.map((property) => {
    const marker = new google.maps.Marker({
      position: { lat: property.lat, lng: property.lng },
      title: property.name,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="font-size: 14px; line-height: 1.4;">
          <strong>${property.name}</strong><br/>
          ${property.address}<br/>
          ${property.city}, ${property.state} ${property.zip}<br/>
          <em>${property.category}</em>
        </div>
      `,
    });

    marker.addListener("click", () => infoWindow.open(map, marker));
    return marker;
  });

  new MarkerClusterer({ map, markers });

  watch(
    () => props.selectedProperty,
    (newMarker) => {
      console.log(newMarker);
      if (newMarker && map) {
        map.panTo({ lat: newMarker.lat, lng: newMarker.lng });
        map.setZoom(15); 
      }
    }
);

  
  
});
</script>

<template>
  <div ref="mapElement" class="w-full h-[400px] rounded-lg shadow"></div>
</template>
