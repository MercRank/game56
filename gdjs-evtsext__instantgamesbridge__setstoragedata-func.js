
if (typeof gdjs.evtsExt__InstantGamesBridge__SetStorageData !== "undefined") {
  gdjs.evtsExt__InstantGamesBridge__SetStorageData.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InstantGamesBridge__SetStorageData = {};


gdjs.evtsExt__InstantGamesBridge__SetStorageData.userFunc0x8dddd8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var key = eventsFunctionContext.getArgument('key')
var value = eventsFunctionContext.getArgument('value')
var gdKeyArray = runtimeScene.getGame().getVariablesForExtension("InstantGamesBridge").get("IGB_Set_keyArray");
var gdValArray = runtimeScene.getGame().getVariablesForExtension("InstantGamesBridge").get("IGB_Set_valArray");

gdKeyArray.pushValue(key);
gdValArray.pushValue(value);

};
gdjs.evtsExt__InstantGamesBridge__SetStorageData.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InstantGamesBridge__SetStorageData.userFunc0x8dddd8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__InstantGamesBridge__SetStorageData.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0), true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__InstantGamesBridge__SetStorageData.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__InstantGamesBridge__SetStorageData.func = function(runtimeScene, value, key, parentEventsFunctionContext) {
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
if (argName === "value") return value;
if (argName === "key") return key;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InstantGamesBridge__SetStorageData.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__InstantGamesBridge__SetStorageData.registeredGdjsCallbacks = [];