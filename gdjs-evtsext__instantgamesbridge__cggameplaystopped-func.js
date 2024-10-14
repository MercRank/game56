
if (typeof gdjs.evtsExt__InstantGamesBridge__CGGameplayStopped !== "undefined") {
  gdjs.evtsExt__InstantGamesBridge__CGGameplayStopped.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InstantGamesBridge__CGGameplayStopped = {};


gdjs.evtsExt__InstantGamesBridge__CGGameplayStopped.userFunc0xc65890 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
bridge.platform.sendMessage("gameplay_stopped");
};
gdjs.evtsExt__InstantGamesBridge__CGGameplayStopped.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InstantGamesBridge__CGGameplayStopped.userFunc0xc65890(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__InstantGamesBridge__CGGameplayStopped.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InstantGamesBridge__IsInizialize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InstantGamesBridge__PlatformType.func(runtimeScene, "crazy_games", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__InstantGamesBridge__CGGameplayStopped.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__InstantGamesBridge__CGGameplayStopped.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InstantGamesBridge__CGGameplayStopped.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__InstantGamesBridge__CGGameplayStopped.registeredGdjsCallbacks = [];