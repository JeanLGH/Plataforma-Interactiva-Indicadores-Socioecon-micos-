// ColombiaMapMunicipios.js
import React, { useEffect } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import colombiaMunicipios from './colombia-municipios.json';

const ColombiaMapMunicipios = () => {
  useEffect(() => {
    // Tamaño del SVG
    const width = 960;
    const height = 550;

    // Márgenes
    const margin = { top: 20, bottom: 20, right: 20, left: 20 };

    // Crear el contenedor SVG
    const svg = d3.select("#map-container")  // Cambia aquí para seleccionar el contenedor correcto
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // Cargar el archivo topojson
    d3.json(colombiaMunicipios, function (error, data) {
      if (error) throw error;

      // Filtrar geometrías
      const land = topojson.feature(data, {
        type: "GeometryCollection",
        geometries: data.objects.mpios.geometries.filter(function (d) {
          return (d.id / 10000 | 0) % 100 !== 99;
        })
      });

      const landState = topojson.feature(data, {
        type: "GeometryCollection",
        geometrías: data.objects.depts.geometries.filter(function (d) {
          return (d.id / 10000 | 0) % 100 !== 99;
        })
      });

      // Configurar proyección
      const projection = d3.geoTransverseMercator()
        .rotate([74 + 30 / 60, -38 - 50 / 60])
        .fitExtent([[margin.left, margin.top], [width - margin.right, height - margin.bottom]], land);

      // Configurar el generador de path
      const path = d3.geoPath().projection(projection);

      // Dibujar los municipios
      svg.selectAll("path")
        .data(land.features)
        .enter().append("path")
        .attr("class", "tract")
        .attr("d", path)
        .append("title")
        .text(function (d) { return d.properties.name; });

      // Dibujar los bordes de los municipios
      svg.append("path")
        .datum(topojson.mesh(data, data.objects.mpios, function (a, b) { return a !== b; }))
        .attr("class", "tract-border")
        .attr("d", path);

      // Dibujar los bordes de los departamentos
      svg.append("path")
        .datum(topojson.mesh(data, data.objects.depts, function (a, b) { return a !== b; }))
        .attr("class", "tract-border-state")
        .attr("d", path);
    });
  }, []);

  return (
    <div id="map-container" style={{ width: '100%', height: 'auto' }}></div>
  );
}

export default ColombiaMapMunicipios;
