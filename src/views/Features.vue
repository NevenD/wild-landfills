<template>
  <v-container class="features">
    <div class="font-weight-thin display-1">List of functionalities:</div>
    <v-layout>
      <v-tooltip top>
        <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
          <v-icon left small>folder</v-icon>
          <span class="caption text-lowercase">By functionality name</span>
        </v-btn>
        <span>Sort functionalities by name</span>
      </v-tooltip>

      <!-- <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">By person name</span>
          </v-btn>
          <span>Sort projects by person name</span>
      </v-tooltip>-->
    </v-layout>
    <v-card v-for="project in projects" :key="project.title">
      <v-layout row wrap :class="`pa-3 project ${project.status}`">
        <v-flex xs12 md3>
          <div class="caption grey--text">App functionalities</div>
          <div>{{project.title}}</div>
        </v-flex>
        <v-flex xs12 sm4 md3>
          <div class="caption grey--text">Tool</div>
          <div v-html="project.tools"></div>
        </v-flex>
        <v-flex xs12 sm4 md3>
          <div class="caption grey--text">Details</div>
          <div>{{project.desc}}</div>
        </v-flex>
        <v-flex xs12 sm4 md3>
          <div class="right">
            <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
          </div>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Implemented WMS Layers",
          tools:
            "<a href='https://openlayers.org/en/latest/apidoc/module-ol_source_TileWMS.html' target='_blank' rel='noopener noreferrer'>TileWMS</a> ",
          desc:
            "Added 5 raster layers (digital ortofoto 2011/2016, topographic map, corine land cover and bing map )",
          status: "implemented"
        },
        {
          title: "Added vector layers",
          tools:
            "<a href='https://openlayers.org/en/latest/apidoc/module-ol_format_GeoJSON-GeoJSON.html' target='_blank' rel='noopener noreferrer'>Geojson</a> ",
          desc:
            "Implemented read, delete, zoom to extent, get feature properties on click",
          status: "implemented"
        },
        {
          title: "Added interactions",
          tools:
            "<a href='https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html' target='_blank' rel='noopener noreferrer'>Interactions</a> ",
          desc:
            "Implemented modify and snapping for vector layers. Added rotation and reset rotation with animated zoom and reset view. Added opacity for all layers from layer dialog",
          status: "implemented"
        },
        {
          title: "Added draw geometry",
          tools:
            "<a href='https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw-Draw.html' target='_blank' rel='noopener noreferrer'>Draw geometry</a> ",
          desc:
            "Added drawing geometry type for point,line,polygon and circle.",
          status: "implemented"
        },
        {
          title: "Added map controls",
          tools:
            "<a href='https://openlayers.org/en/latest/apidoc/module-ol_control.html' target='_blank' rel='noopener noreferrer'>Map controls</a> ",
          desc:
            "Added ability to show/hide additional map elements like attribution, coordinates, scalebar and minimap",
          status: "ongoing"
        },
        {
          title: "Added measure feature",
          tools:
            "<a href='https://openlayers.org/en/latest/examples/measure.html' target='_blank' rel='noopener noreferrer'>Measure example</a> ",
          desc: "Implemented ability to measure area and length",
          status: "implemented"
        },
        {
          title: "Implemented vector drag and drop",
          tools:
            "<a href='https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragAndDrop-DragAndDrop.html' target='_blank' rel='noopener noreferrer'>Drag/drop interaction</a> ",
          desc:
            "Added ability to drag and drop GPX,GeoJSON,IGC,KML,TopoJSON and render vectors. Implemented modify option for dragged vectors (only for geojson). Ability to download modified vectors",
          status: "implemented"
        },
        {
          title: "Parse vector shapefiles",
          tools: "N/A",
          desc: "Implement functionality to upload and edit shapefile vectors",
          status: "todo"
        },
        {
          title: "Consume spatial data via API",
          tools: "N/A",
          desc:
            "Using AXIOS to consume spatial data and render them on map with ability to read properties",
          status: "todo"
        },
        {
          title: "Implemented WFS functionality",
          tools:
            "<a href='https://openlayers.org/en/latest/apidoc/module-ol_format_WFS-WFS.html' target='_blank' rel='noopener noreferrer'>WFS Vectors</a> ",
          desc:
            "Implement feature format for reading and writing data in the WFS format",
          status: "todo"
        },
        {
          title: "Add HeatMaps",
          tools:
            "<a href='https://openlayers.org/en/latest/apidoc/module-ol_layer_Heatmap-Heatmap.html' target='_blank' rel='noopener noreferrer'>Heatmaps</a> ",
          desc: "Implement layers for rendering vector data as a heatmap",
          status: "todo"
        },
        {
          title: "Integrate existing frontend functionality with .NET Core",
          tools:
            "<a href='https://docs.microsoft.com/en-us/dotnet/core/about' target='_blank' rel='noopener noreferrer'>.NET Core</a> ",
          desc:
            "Create backend logic for existing app. Create functionality for adding properties and vector geometries i db (SQL or PostgreSQL).Save and render geometry using .NET Core ",
          status: "todo"
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>

<style>
.features {
  height: calc(100vh - 100px);
  overflow-y: scroll;
}

.project.implemented {
  border-left: 6px solid #3cd1c2;
}
.project.ongoing {
  border-left: 6px solid orange;
}
.project.todo {
  border-left: 6px solid tomato;
}
.v-chip.implemented {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: orange;
}
.v-chip.todo {
  background: tomato;
}
</style>