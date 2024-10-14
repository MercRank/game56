
if (typeof gdjs.evtsExt__InstantGamesBridge__GetAvatar !== "undefined") {
  gdjs.evtsExt__InstantGamesBridge__GetAvatar.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InstantGamesBridge__GetAvatar = {};
gdjs.evtsExt__InstantGamesBridge__GetAvatar.GDobjObjects1= [];
gdjs.evtsExt__InstantGamesBridge__GetAvatar.GDobjObjects2= [];


gdjs.evtsExt__InstantGamesBridge__GetAvatar.userFunc0xa75710 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var arrayPhoto = bridge.player.photos;
var base = eventsFunctionContext.getObjects("obj");

const texture = PIXI.BaseTexture.from(arrayPhoto[0]);
for (const obj of base) obj.getRendererObject().texture.baseTexture = texture;


};
gdjs.evtsExt__InstantGamesBridge__GetAvatar.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InstantGamesBridge__GetAvatar.userFunc0xa75710(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__InstantGamesBridge__GetAvatar.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InstantGamesBridge__IsInizialize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InstantGamesBridge__IsAuthorizeSupported.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InstantGamesBridge__IsAuthorized.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__InstantGamesBridge__GetAvatar.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__InstantGamesBridge__GetAvatar.func = function(runtimeScene, obj, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__InstantGamesBridge__GetAvatar.GDobjObjects1.length = 0;
gdjs.evtsExt__InstantGamesBridge__GetAvatar.GDobjObjects2.length = 0;

gdjs.evtsExt__InstantGamesBridge__GetAvatar.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__InstantGamesBridge__GetAvatar.GDobjObjects1.length = 0;
gdjs.evtsExt__InstantGamesBridge__GetAvatar.GDobjObjects2.length = 0;


return;
}

gdjs.evtsExt__InstantGamesBridge__GetAvatar.registeredGdjsCallbacks = [];