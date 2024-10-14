
if (typeof gdjs.evtsExt__InstantGamesBridge__BackgroundImage !== "undefined") {
  gdjs.evtsExt__InstantGamesBridge__BackgroundImage.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InstantGamesBridge__BackgroundImage = {};


gdjs.evtsExt__InstantGamesBridge__BackgroundImage.userFunc0x8dddd8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const img = eventsFunctionContext.getArgument("Image");
const size = eventsFunctionContext.getArgument("Size");
const size_number = eventsFunctionContext.getArgument("Size_number") + "%";
const repeat = eventsFunctionContext.getArgument("Repeat");
const position = eventsFunctionContext.getArgument("Position");

document.body.style.backgroundImage = "url(" + img + ")"
document.body.style.backgroundRepeat  = repeat;
document.body.style.backgroundPosition = position;

if(size !== "number"){
document.body.style.backgroundSize = size;
} else {
    document.body.style.backgroundSize = size_number;
}




};
gdjs.evtsExt__InstantGamesBridge__BackgroundImage.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InstantGamesBridge__BackgroundImage.userFunc0x8dddd8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InstantGamesBridge__BackgroundImage.func = function(runtimeScene, Image, Size, Size_number, Repeat, Position, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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
if (argName === "Image") return Image;
if (argName === "Size") return Size;
if (argName === "Size_number") return Size_number;
if (argName === "Repeat") return Repeat;
if (argName === "Position") return Position;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InstantGamesBridge__BackgroundImage.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__InstantGamesBridge__BackgroundImage.registeredGdjsCallbacks = [];