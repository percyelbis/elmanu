var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_B_ANP_PERU0 = new ol.format.GeoJSON();
var features_B_ANP_PERU0 = format_B_ANP_PERU0.readFeatures(json_B_ANP_PERU0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_B_ANP_PERU0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_B_ANP_PERU0.addFeatures(features_B_ANP_PERU0);var lyr_B_ANP_PERU0 = new ol.layer.Vector({
                source:jsonSource_B_ANP_PERU0, 
                style: style_B_ANP_PERU0,
                title: "B_ANP_PERU"
            });var format_B_CUSCO_WGS841 = new ol.format.GeoJSON();
var features_B_CUSCO_WGS841 = format_B_CUSCO_WGS841.readFeatures(json_B_CUSCO_WGS841, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_B_CUSCO_WGS841 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_B_CUSCO_WGS841.addFeatures(features_B_CUSCO_WGS841);var lyr_B_CUSCO_WGS841 = new ol.layer.Vector({
                source:jsonSource_B_CUSCO_WGS841, 
                style: style_B_CUSCO_WGS841,
                title: "B_CUSCO_WGS84"
            });

lyr_B_ANP_PERU0.setVisible(true);lyr_B_CUSCO_WGS841.setVisible(true);
var layersList = [baseLayer,lyr_B_ANP_PERU0,lyr_B_CUSCO_WGS841];
lyr_B_ANP_PERU0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ANP_CATE': 'ANP_CATE', 'ANP_NOMB': 'ANP_NOMB', 'ANP_CODI': 'ANP_CODI', 'ANP_UBPO': 'ANP_UBPO', 'ANP_ARLE': 'ANP_ARLE', 'ANP_BALECR': 'ANP_BALECR', 'ANP_FECREA': 'ANP_FECREA', 'ANP_BALEMO': 'ANP_BALEMO', 'ANP_FEMODI': 'ANP_FEMODI', 'Area_has': 'Area_has', });
lyr_B_CUSCO_WGS841.set('fieldAliases', {'NOMBDEP': 'NOMBDEP', 'COUNT': 'COUNT', 'FIRST_IDDP': 'FIRST_IDDP', 'HECTARES': 'HECTARES', });
lyr_B_ANP_PERU0.set('fieldImages', {'OBJECTID': 'Hidden', 'ANP_CATE': 'TextEdit', 'ANP_NOMB': 'TextEdit', 'ANP_CODI': 'Hidden', 'ANP_UBPO': 'TextEdit', 'ANP_ARLE': 'Hidden', 'ANP_BALECR': 'Hidden', 'ANP_FECREA': 'Hidden', 'ANP_BALEMO': 'Hidden', 'ANP_FEMODI': 'Hidden', 'Area_has': 'Hidden', });
lyr_B_CUSCO_WGS841.set('fieldImages', {'NOMBDEP': 'Hidden', 'COUNT': 'Hidden', 'FIRST_IDDP': 'Hidden', 'HECTARES': 'Hidden', });
lyr_B_ANP_PERU0.set('fieldLabels', {'ANP_CATE': 'no label', 'ANP_NOMB': 'no label', 'ANP_UBPO': 'no label', });
lyr_B_CUSCO_WGS841.set('fieldLabels', {});
lyr_B_CUSCO_WGS841.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});