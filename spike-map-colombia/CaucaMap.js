import define1 from "./CollectionMapTopo.js";


function _1(md) {
  return (md`# Mapa Cauca - Colombia`)
}

function _spikeBy(select) {
  return select({
    options: ["STP27_PERS"],
    value: "STP27_PERS",
    title: "Atributo a mostrar",
    disabled: true,
  });
}

function _chart(spikeMapColombia) {
  return (spikeMapColombia())
}

function _4(chart, data) {
  return (chart(data, false))
}

function _spikeMapColombia(d3, width, height, features, path, topojson, mapData, margin, h, updateScale, projection, color, mountain) {
  return ((dataAsMap, options) => {
    const svg = d3
      .create("svg")
      .style("overflow", "visible")
      .attr("viewBox", [0, 0, width, height]);

    const gGeo = svg.append("g");
    gGeo
      .selectAll(".mcpio")
      .data(features.features)
      .join("path")
      .attr("class", "mcpio")
      .attr("data-municipio", d => d.properties.MPIO_CNMBR)
      .style("stroke", "black")
      .style("stroke-width", 1.5)
      .style("fill", "white")
      .style("filter", "url(#drop-shadow)") // Aplicar sombra
      .attr("d", d => path(d))
      .on("mouseover", onMouseOver)
      .on("mouseout", onMouseOut);

    // Función para cambiar el color y mostrar información al pasar el ratón sobre los municipios
    // Agregar un campo de entrada con autocompletado para seleccionar municipios
    const municipios = features.features.map(d => d.properties.MPIO_CNMBR);
    $("#municipio-input").autocomplete({
      source: municipios,
      select: function (event, ui) {
        const selectedMunicipio = ui.item.value;
        // Filtrar las características para encontrar el municipio seleccionado
        const selectedFeature = features.features.find(d => d.properties.MPIO_CNMBR === selectedMunicipio);
        // Verificar si se encontró el municipio seleccionado
        if (selectedFeature) {
          // Resaltar el municipio seleccionado en el mapa
          gGeo.selectAll(".mcpio")
            .style("fill", d => d === selectedFeature ? "#10EC9C" : "white"); // Cambiar el color solo del municipio seleccionado
          // Mostrar información del municipio seleccionado
          const selectedPoblacion = selectedFeature.properties.STP27_PERS;
          const tooltip = d3.select(".tooltip");
          tooltip.select(".tooltipName").text(selectedMunicipio);
          tooltip.select(".tooltipValue").text(`Población: ${selectedPoblacion}`);
          tooltip.style("visibility", "visible");
        } else {
          // Municipio no encontrado, hacer algo si es necesario
          console.log("Municipio no encontrado:", selectedMunicipio);
        }
      }
    });
    function onMouseOver(evt, d) {
      d3.select(this)
        .transition()
        .duration(200)
        .style("fill", "#10EC9C"); // Cambiar el color al pasar el mouse

      // Mostrar información del municipio
      const selectedMunicipio = d.properties.MPIO_CNMBR;
      const selectedPoblacion = d.properties.STP27_PERS;
      const tooltip = d3.select(".tooltip");
      tooltip.select(".tooltipName").text(selectedMunicipio);
      tooltip.select(".tooltipValue").text(`Población: ${selectedPoblacion}`);
      tooltip.style("visibility", "visible")

    }

    function onMouseOut(evt, d) {
      d3.select(this)
        .transition()
        .duration(200)
        .style("fill", "white"); // Restaurar el color original al quitar el mouse

      // Ocultar información del municipio y resetear la posición del texto
      d3.select(".tooltip").style("visibility", "hidden")
        .attr("transform", "translate(0,0)");
    }

    const gMountains = svg.append("g");

    const gLegend = svg
      .append("g")
      .attr("class", "gLegend")
      .attr(
        "transform",
        `translate(${width - margin.right - margin.left - 150},${margin.top + 150})`
      );

    gLegend
      .append("text")
      .attr("y", 30)
      .attr("x", -6)
      .style("font-family", "sans-serif")
      .style("font-size", "10pt")
      .style("font-style", "italic")
      .text("Legend");

    svg
      .append("text")
      .attr("class", "tooltip")
      .style("font-family", "sans-serif")
      .style("font-size", "12pt")
      .attr("transform", "translate(50, 50)")
      .style("visibility", "hidden")
      .call(text =>
        text
          .append("tspan")
          .attr("class", "tooltipIcon")
          .style("font-size", "14pt")
          .style("font-weight", "bold")
          .style("fill", "#10EC9C")
          .attr("y", 0)
          .attr("x", 0)
          .text("\u24D8") // Ícono de información
      )
      .call(text =>
        text
          .append("tspan")
          .attr("class", "tooltipName")
          .style("font-weight", "bolder")
          .attr("dy", "1.2em")
          .attr("x", 0)
          .text()
      )
      .call(text =>
        text
          .append("tspan")
          .attr("class", "tooltipValue")
          .style("font-size", "10pt")
          .style("font-style", "italic")
          .attr("dy", "1.2em")
          .attr("x", 0)
          .text()
      );

    const defs = svg.append("defs");

    // Definir el filtro de sombra
    const filter = defs
      .append("filter")
      .attr("id", "drop-shadow")
      .attr("height", "130%");

    filter
      .append("feGaussianBlur")
      .attr("in", "SourceAlpha")
      .attr("stdDeviation", 3)
      .attr("result", "blur");

    filter
      .append("feOffset")
      .attr("in", "blur")
      .attr("dx", 2)
      .attr("dy", 2)
      .attr("result", "offsetBlur");

    const feMerge = filter.append("feMerge");

    feMerge.append("feMergeNode").attr("in", "offsetBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    const update = (dataAsMap, options) => {
      const {
        normalize = false,
        dynamicScale = true,
        duration = 250,
        sort = false,
        spikeHeight = 100,
        normalizeFactor = 1000000,

      } = options;

      // const svg = d3.select(svg);
      const before = new Date();
      console.log("dataAsMap", (new Date() - before) / 1000, dataAsMap);

      let notFound = [];
      features.features.forEach(d => {
        const value = dataAsMap.get(d.properties.MPIO_CDPMP);
        if (value === undefined) {
          notFound.push(d.properties.MPIO_CDPMP);
          d.value = undefined;
          return;
        }
        d.value =
          value / (normalize ? d.properties.STP27_PERS / normalizeFactor : 1);
      });
      if (notFound.length) {
        console.log("Municipios no encontrados", notFound);
      }
      console.log("features.value", (new Date() - before) / 1000);

      const dataExtent = d3.extent(features.features, d => d.value);
      const rangeLegend = d3.range(
        dataExtent[0],
        dataExtent[1] + Number.MIN_VALUE,
        (dataExtent[1] + Number.MIN_VALUE - dataExtent[0]) / 6
      );

      h.range([0, spikeHeight]);
      if (dynamicScale) {
        updateScale(dataExtent);
      }

      if (sort) {
        features.features = features.features.sort((a, b) =>
          sort === "descending" ? b.value - a.value : a.value - b.value
        );
        console.log("sorted ", (new Date() - before) / 1000);
      }

      const onMouseOver = function (evt, d) {
        const [x, y] = path.centroid(d);

        gMountains.selectAll(".mountain").style("stroke-opacity", 0.3);
        d3.select(this).style("stroke-opacity", 1);
        svg
          .select(".tooltip")
          .attr("transform", `translate(${x + 10}, ${y})`)
          .call((text) =>
            text
              .select(".tooltipName")
              .text(`${d.properties.MPIO_CNMBR} - ${d.properties.DPTO_CNMBR}`)
          )
          .call((text) =>
            text.select(".tooltipValue").text(`Población: ${d.properties.STP27_PERS}`)
          );
      };

      const onMouseOut = function () {
        gMountains.selectAll(".mountain").style("stroke-opacity", 1);
        svg.selectAll(".tooltip tspan").text("");
      };

      gMountains
        .selectAll(".mountain")
        .data(
          features.features.filter(d => d.value !== undefined),
          d => d.properties.DPTO_CNMBR
        )
        .join("path")
        .attr("class", "mountain")
        .attr("transform", d => `translate(${projection(d3.geoCentroid(d))})`)
        .style("fill", d => {
          const municipioCodigo = d.properties.MPIO_CCDGO;
          if (["698", "300", "573"].includes(municipioCodigo)) {
            return "black";
          } else if (["110", "142", "212", "455", "513", "780", "845"].includes(municipioCodigo)) {
            return "red";
          } else {
            return "#eee";
          }
        })
        .style("fill-opacity", 0.9)
        .style("stroke", d => {
          const municipioCodigo = d.properties.MPIO_CCDGO;
          if (["698", "300", "573"].includes(municipioCodigo)) {
            return "blue";
          } else {
            return color(d.value);
          }
        })
        .style("stroke-width", 1)
        .on("mouseover", onMouseOver)
        .on("mouseout", onMouseOut)
        .transition()
        .duration(duration)
        .attr("d", d => mountain(d.value));


      gLegend
        .selectAll("g.legend")
        .data(rangeLegend)
        .join(enter =>
          enter
            .append("g")
            .attr("class", "legend")
            .call(g => {
              g.append("path");
              g.append("text");
            })
        )
        .attr("transform", (d, i) => `translate(${i * 25},0)`)

    };

    svg.node().value = update;

    if (dataAsMap) update(dataAsMap, options);

    return svg.node();
  }
  )
}

function _updateScale(h, color) {
  return (
    dataExtent => {
      const max = Math.abs(Math.max(...dataExtent));
      h.domain([0, Math.abs(dataExtent[1])]);
      color.domain([-max, max]);
    }
  )
}

function _data(features, spikeBy, d3) {
  let showAllMap = localStorage.getItem('showAllMap') === 'true' ? true : false;
  const cambio = document.querySelector("#botonCambio");

  cambio.addEventListener("click", () => {
    showAllMap = !showAllMap;
    localStorage.setItem('showAllMap', showAllMap);
    window.location.reload();
  });

  if (showAllMap) {
    // Mostrar todo el mapa de Colombia
    const filteredFeatures = features.features.filter((d) => d.properties.DPTO_CCDGO === "19");
    const data = new Map(filteredFeatures.map((d) => [d.properties.MPIO_CDPMP, d.properties[spikeBy]]));
    features.features = filteredFeatures.sort((a, b) => d3.ascending(a.properties.STP27_PERS, b.properties.STP27_PERS));
    
    filteredFeatures.forEach(feature => {
        console.log('Latitud:', feature.properties.LATITUD, ', Longitud:', feature.properties.LONGITUD);
    });

    return data;
}
 else {
    const data = new Map(features.features.map(d => [d.properties.MPIO_CDPMP, d.properties[spikeBy]]));
    features.features = features.features.sort((a, b) => d3.ascending(a.properties.STP27_PERS, b.properties.STP27_PERS));
    return data;
  }
}

/* 
function _data(features, spikeBy, d3) {
  const filteredFeatures = features.features.filter((d) => d.properties.DPTO_CCDGO === "19");
  const data = new Map(filteredFeatures.map((d) => [d.properties.MPIO_CDPMP, d.properties[spikeBy]]));
  features.features = filteredFeatures.sort((a, b) => d3.ascending(a.properties.STP27_PERS, b.properties.STP27_PERS));
  return data;
}
function _data(features,spikeBy,d3)
{
  const data = new Map(features.features.map(d => [d.properties.MPIO_CDPMP, d.properties[spikeBy]]));
  features.features = features.features.sort((a, b) =>d3.ascending(a.properties.STP27_PERS, b.properties.STP27_PERS));
  return data;
}
*/

function _8(features) {
  return (
    features.features.filter(d => d.properties.MPIO_CDPMP == "05059")
  )
}



function _h(d3) {
  return (
    d3
      .scaleLinear()
      // .domain([0, dataExtent[1]])
      .range([0, 250])
      .nice()
  )
}

function _color(d3) {
  return (
    d3.scaleSequential(d3.interpolateYlOrRd)
  )
}
// Agregar el siguiente código en la función _spikeMapColombia después de la declaración de svg
function _mountain(h) {
  return (d, mx = 5, fixedRadius = 3) => {
    const radius = fixedRadius;
    return `M${-radius},0 A${radius},${radius} 0 1,0 ${radius},0 A${radius},${radius} 0 1,0 ${-radius},0`;
  };
}

function _path(d3, projection) {
  return (
    d3.geoPath().projection(projection)
  )
}

function _projection(d3, margin, width, height, features) {
  return (
    d3
      .geoAzimuthalEqualArea()
      .rotate([74 + 30 / 60, -38 - 50 / 60])
      .fitExtent(
        [[margin.left, margin.top], [width - margin.right, height - margin.bottom]],
        features
      )
  )
}

function _margin() {
  return (
    { left: 20, right: 20, top: 20, bottom: 20 }
  )
}

function _height() {
  return (
    900
  )
}

function _line(d3) {
  return (
    d3.line()
  )
}

function _features(topojson, mapData) {
  const features = topojson.feature(mapData, mapData.objects.MGN_AMN_MPIOS);
  features.features = features.features.sort(
    (a, b) => a.properties.STP27_PERS - b.properties.STP27_PERS
  );
  return features;
}


function _mapData(FileAttachment) {
  return (
    FileAttachment(
      "Colombia_departamentos_municipios_poblacion_deptos-topo.json"
    ).json()
  )
}

function _d3(require) {
  return (
    require("d3@6")
  )
}

function _topojson(require) {
  return (
    require("topojson-client@3")
  )
}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["Colombia_departamentos_municipios_poblacion_deptos-topo.json", { url: new URL("./files/colombia-municipios.json", import.meta.url), mimeType: "application/json", toString }]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(("viewof spikeBy")).define("viewof spikeBy", ["select", "mapData"], _spikeBy);
  main.variable(("spikeBy")).define("spikeBy", ["Generators", "viewof spikeBy"], (G, _) => G.input(_));
  main.variable(observer("viewof chart")).define("viewof chart", ["spikeMapColombia"], _chart);
  main.variable(("chart")).define("chart", ["Generators", "viewof chart"], (G, _) => G.input(_));
  main.variable(observer()).define(["chart", "data"], _4);
  main.variable(("spikeMapColombia")).define("spikeMapColombia", ["d3", "width", "height", "features", "path", "topojson", "mapData", "margin", "h", "updateScale", "projection", "color", "mountain"], _spikeMapColombia);
  main.variable(("updateScale")).define("updateScale", ["h", "color"], _updateScale);
  main.variable(("data")).define("data", ["features", "spikeBy", "d3",], _data);
  main.variable().define(["features"], _8);
  main.variable(("h")).define("h", ["d3"], _h);
  main.variable(("color")).define("color", ["d3"], _color);
  main.variable(("mountain")).define("mountain", ["h"], _mountain);
  main.variable(("path")).define("path", ["d3", "projection"], _path);
  main.variable(("projection")).define("projection", ["d3", "margin", "width", "height", "features"], _projection);
  main.variable(("margin")).define("margin", _margin);
  main.variable(("height")).define("height", _height);
  main.variable(("line")).define("line", ["d3"], _line);
  main.variable(("features")).define("features", ["topojson", "mapData"], _features);
  main.variable(("mapData")).define("mapData", ["FileAttachment"], _mapData);
  main.variable(("topojson")).define("topojson", ["require"], _topojson);
  const child1 = runtime.module(define1);
  main.import("select", child1);
  return main;
}
