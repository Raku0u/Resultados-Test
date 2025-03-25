ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-73.080400, -36.842287, -72.979892, -36.787387]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CasaDeus_1 = new ol.format.GeoJSON();
var features_CasaDeus_1 = format_CasaDeus_1.readFeatures(json_CasaDeus_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CasaDeus_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CasaDeus_1.addFeatures(features_CasaDeus_1);
cluster_CasaDeus_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CasaDeus_1
});
var lyr_CasaDeus_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CasaDeus_1, 
                style: style_CasaDeus_1,
                popuplayertitle: 'Casa Deus',
                interactive: true,
                title: '<img src="styles/legend/CasaDeus_1.png" /> Casa Deus'
            });

lyr_OSMStandard_0.setVisible(true);lyr_CasaDeus_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CasaDeus_1];
lyr_CasaDeus_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'T_Pregunta': 'T_Pregunta', 'N_Preg_Inc': 'N_Preg_Inc', 'N_Preg_Cor': 'N_Preg_Cor', 'Por_Corr': 'Por_Corr', 'Porc_Incor': 'Porc_Incor', 'Porc_Total': 'Porc_Total', 'Preg_Incor': 'Preg_Incor', 'Nombre': 'Nombre', 'Video': 'Video', });
lyr_CasaDeus_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'T_Pregunta': 'TextEdit', 'N_Preg_Inc': 'TextEdit', 'N_Preg_Cor': 'TextEdit', 'Por_Corr': 'TextEdit', 'Porc_Incor': 'TextEdit', 'Porc_Total': 'TextEdit', 'Preg_Incor': 'TextEdit', 'Nombre': 'TextEdit', 'Video': 'TextEdit', });
lyr_CasaDeus_1.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'T_Pregunta': 'inline label - always visible', 'N_Preg_Inc': 'inline label - always visible', 'N_Preg_Cor': 'no label', 'Por_Corr': 'inline label - visible with data', 'Porc_Incor': 'inline label - always visible', 'Porc_Total': 'inline label - always visible', 'Preg_Incor': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_CasaDeus_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});