app.cfg = {
  HEADER_SOCIAL: {
    facebook: true,
    twitter: true,
    bitly: {
      enable: true,
      login: 'esristorymaps',
      key: 'R_14fc9f92e48f7c78c21db32bd01f7014'
    }
  },
  HEADER: {
    logo: {
      url: 'resources/tpl/viewer/icons/esri-logo-both.png',
      target: 'http://www.esri.com'
    },
    link: {
      title: 'A Story Map',
      url: 'http://storymaps.arcgis.com/'
    }
  },
  TIMEOUT_VIEWER_LOAD: 5000,

  TPL_NAME: 'Story Map Cascade',
  TPL_ID: 'storymap-cascade',

  WEBAPP_TAG: ['Story Map', 'Cascade'],
  WEBAPP_KEYWORD_GENERIC: ['JavaScript', 'Map', 'Mapping Site', 'Online Map', 'Ready To Use', 'selfConfigured', 'Web Map'],
  WEBAPP_KEYWORD_APP: ['Story Map', 'Story Maps', 'Cascade'],

  // Optional array of proxy rules
  PROXY_RULES: [
    /*{
      urlPrefix: "http://services.arcgis.com/",
      proxyUrl: "http://myserver.domain.com/DotNet/proxy.ash"
    }*/
  ],
  BING_MAPS_KEY: '',
  HELPER_SERVICES: {
    geometry: {
      //url: location.protocol + "//utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer"
    },
    geocode: [
      /*
      {
        url: location.protocol + "//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
        name: "My Geocoder"
      }
      */
    ]
  },
  BUILDER_LINKS: {
    picasaHelp: 'https://blogs.esri.com/esri/arcgis/2016/05/27/story-maps-and-picasa/'
  },
  // Edit those to set a custom sharing or proxy URL
  // You have to edit those only if your webmap is deployed on Portal for ArcGIS instance and if you are not deploying the template on the Portal webserver
  // If you are using ArcGIS Online or deploying the template on a Portal instance, you don't have to edit those URL
  DEFAULT_SHARING_URL: '//www.arcgis.com/sharing/content/items',
  //DEFAULT_SHARING_URL: "//portal.internal.com/arcgis/sharing/content/items",
  DEFAULT_PROXY_URL: '//www.arcgis.com/sharing/proxy'
  //DEFAULT_PROXY_URL: "//portal.internal.com/arcgis/sharing/proxy"
};
