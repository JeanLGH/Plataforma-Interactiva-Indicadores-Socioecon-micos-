import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import colombiaMunicipios from './colombia-municipios.json';

const municipalitiesToShow = [
  'Santander de Quilichao',
  'Buenos Aires',
  'Suárez',
  'Puerto Tejada',
  'Caloto',
  'Guachené',
  'Villarrica',
  'Corinto',
  'Miranda',
  'Padilla',
  'Jambaló',
  'Caldono',
  'Toribio',
];

const ColombiaMap = () => {
  const [selectedMunicipality, setSelectedMunicipality] = useState(null);

  useEffect(() => {
    const width = 900;
    const height = 900;

    const svg = d3
      .select('#map-container')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const projection = d3
      .geoMercator()
      .scale(2000)
      .translate([width / 2, height / 2])
      .center([-61, 43])
      .rotate([2, 3, 2]);

    const path = d3.geoPath().projection(projection);

    const municipalities = topojson.feature(colombiaMunicipios, colombiaMunicipios.objects.mpios).features.filter(
      (d) => municipalitiesToShow.includes(d.properties.NOMBRE_MPIO)
    );

    // Renderizar municipios
    svg
      .selectAll('.mpio')
      .data(municipalities)
      .enter()
      .append('path')
      .attr('class', (d) => `mpio _${d.id}`)
      .attr('d', path)
      .style('fill', (d) => (selectedMunicipality === d.id ? 'red' : 'lightblue')) // Cambiar el color del mapa aquí
      .style('stroke', 'black') // Borde negro
      .style('stroke-width', 1) // Ajustar el ancho del borde del municipio según sea necesario
      .on('click', (event, d) => {
        setSelectedMunicipality(d.id);
      });

    // Renderizar nombres de municipios
    svg
      .selectAll('.mpio-label')
      .data(municipalities)
      .enter()
      .append('text')
      .attr('class', 'mpio-label')
      .attr('transform', (d) => `translate(${path.centroid(d)[0]}, ${path.centroid(d)[1]})`)
      .attr('dy', '0.35em') // Ajusta este valor para cambiar la posición vertical del texto
      .attr('text-anchor', 'middle')
      .style('fill', (d) => (selectedMunicipality === d.id ? 'black' : 'transparent')) // Color del texto
      .text((d) => d.properties.NOMBRE_MPIO);

    svg
      .append('path')
      .datum(topojson.mesh(colombiaMunicipios, colombiaMunicipios.objects.depts, (a, b) => a !== b))
      .attr('d', path)
      .attr('class', 'depto-borde')
      .style('fill', 'none') // No hay relleno en el borde
      .style('stroke', 'black') // Borde negro
      .style('stroke-width', 1); // Ajustar el ancho del borde del departamento según sea necesario
  }, [selectedMunicipality]); // El efecto ahora depende de selectedMunicipality

  return <div id="map-container" style={{ width: '100%', height: 'auto' }}></div>;
};

export default ColombiaMap;
