
if (typeof gdjs.evtsExt__InstantGamesBridge__YandexAuthorize !== "undefined") {
  gdjs.evtsExt__InstantGamesBridge__YandexAuthorize.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InstantGamesBridge__YandexAuthorize = {};
gdjs.evtsExt__InstantGamesBridge__YandexAuthorize.GDobjObjects1= [];
gdjs.evtsExt__InstantGamesBridge__YandexAuthorize.GDobjObjects2= [];


gdjs.evtsExt__InstantGamesBridge__YandexAuthorize.userFunc0xc08000 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var nameVar = runtimeScene.getGame().getVariables().get(eventsFunctionContext.getArgument("nameVar"));
var idVar = runtimeScene.getGame().getVariables().get(eventsFunctionContext.getArgument("idVar"));
var condVar = runtimeScene.getGame().getVariables().get("IGB_YA_NoAuthorizes");

var getImg = runtimeScene.getGame().getVariables().get(eventsFunctionContext.getArgument("getImg"));
 
let authorizationOptions = {
    'yandex': {
        scopes: true
    }
}

bridge.player.authorize(authorizationOptions)
    .then(() => {
        var name = bridge.player.name;
        var id = bridge.player.id;

        nameVar.setString(name);
        idVar.setString(id);

        if (getImg){
            var arrayPhoto = bridge.player.photos;
            var base = eventsFunctionContext.getObjects("obj");

            console.log("FOTO: ", arrayPhoto[0]);
            const texture = PIXI.BaseTexture.from(arrayPhoto[0]);
            for (const obj of base) obj.getRendererObject().texture.baseTexture = texture;
        }
    })
    .catch(error => {
        condVar.setBoolean(true)
    })

};
gdjs.evtsExt__InstantGamesBridge__YandexAuthorize.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InstantGamesBridge__YandexAuthorize.userFunc0xc08000(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__InstantGamesBridge__YandexAuthorize.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0), true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__InstantGamesBridge__YandexAuthorize.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__InstantGamesBridge__YandexAuthorize.func = function(runtimeScene, nameVar, idVar, getImg, obj, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"obj": obj
},
  _objectArraysMap: {
"obj": gdjs.objectsListsToArray(obj)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("InstantGamesBridge"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("InstantGamesBridge"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "nameVar") return nameVar;
if (argName === "idVar") return idVar;
if (argName === "getImg") return getImg;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__InstantGamesBridge__YandexAuthorize.GDobjObjects1.length = 0;
gdjs.evtsExt__InstantGamesBridge__YandexAuthorize.GDobjObjects2.length = 0;

gdjs.evtsExt__InstantGamesBridge__YandexAuthorize.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__InstantGamesBridge__YandexAuthorize.GDobjObjects1.length = 0;
gdjs.evtsExt__InstantGamesBridge__YandexAuthorize.GDobjObjects2.length = 0;


return;
}

gdjs.evtsExt__InstantGamesBridge__YandexAuthorize.registeredGdjsCallbacks = [];