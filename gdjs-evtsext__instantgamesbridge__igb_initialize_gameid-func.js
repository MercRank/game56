
if (typeof gdjs.evtsExt__InstantGamesBridge__IGB_initialize_gameId !== "undefined") {
  gdjs.evtsExt__InstantGamesBridge__IGB_initialize_gameId.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InstantGamesBridge__IGB_initialize_gameId = {};


gdjs.evtsExt__InstantGamesBridge__IGB_initialize_gameId.userFunc0xa46f00 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var init = runtimeScene.getGame().getVariablesForExtension("InstantGamesBridge").get("IGB_initialize");
var platform_name = eventsFunctionContext.getArgument("Platform");

let options = {
    forciblySetPlatformId: platform_name,
    platforms: {}
};

options.platforms[platform_name] = { 
    gameId: eventsFunctionContext.getArgument("GameID")
};

bridge.initialize(options)
    .then(() => {
        init.setBoolean(true)
    })
    .catch(error => {
        console.log("Failed to initialize")
    })

};
gdjs.evtsExt__InstantGamesBridge__IGB_initialize_gameId.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InstantGamesBridge__IGB_initialize_gameId.userFunc0xa46f00(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__InstantGamesBridge__IGB_initialize_gameId.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__InstantGamesBridge__IsInizialize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(11372908);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__InstantGamesBridge__IGB_initialize_gameId.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__InstantGamesBridge__IGB_initialize_gameId.func = function(runtimeScene, Platform, GameID, parentEventsFunctionContext) {
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
if (argName === "Platform") return Platform;
if (argName === "GameID") return GameID;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InstantGamesBridge__IGB_initialize_gameId.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__InstantGamesBridge__IGB_initialize_gameId.registeredGdjsCallbacks = [];