
if (typeof gdjs.evtsExt__InstantGamesBridge__SendDelStorageData !== "undefined") {
  gdjs.evtsExt__InstantGamesBridge__SendDelStorageData.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InstantGamesBridge__SendDelStorageData = {};


gdjs.evtsExt__InstantGamesBridge__SendDelStorageData.userFunc0xa22c40 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var setLog = eventsFunctionContext.getArgument('setLog');
var state = runtimeScene.getGame().getVariablesForExtension("InstantGamesBridge").get("IGB_StorageDelSuccess");
let gdArray = runtimeScene.getGame().getVariablesForExtension("InstantGamesBridge").get("IGB_Del_keyArray");
let keyArray = [];
let options;

restoreArray (gdArray, keyArray);

const platform = bridge.platform.id;

const typeArgument = eventsFunctionContext.getArgument('type');
const local_type = bridge.STORAGE_TYPE.LOCAL_STORAGE;
const platform_type = bridge.STORAGE_TYPE.PLATFORM_INTERNAL;
const default_type = bridge.storage.defaultType;

if (typeArgument === "Platform") {
    if (bridge.storage.isSupported(platform_type)) {
        options = { [platform]: platform_type };
    } else {
        console.log("Platform internal is not supported for the " + platform + " platform");
        return
    }
} else if (typeArgument === "Local") {
    options = { [platform]: local_type };
} else {
    options = { [platform]: default_type };
}

bridge.storage.delete(keyArray, options)
    .then(() => {
        gdArray.clearChildren()
        state.setBoolean(true)

        if (setLog){
            console.log('Delete storage success')
        }
    })
    .catch(error => {
        console.error("Delete storage failed", error);
    });


function restoreArray (gd, array){
    let allVars = gd.getAllChildren();
    for(let item in allVars) {
        let key = Number(item);
        if(key !== NaN) {
            array[key] = allVars[item].getAsString(); 
        }
    }
}
};
gdjs.evtsExt__InstantGamesBridge__SendDelStorageData.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InstantGamesBridge__SendDelStorageData.userFunc0xa22c40(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__InstantGamesBridge__SendDelStorageData.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0), true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__InstantGamesBridge__SendDelStorageData.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__InstantGamesBridge__SendDelStorageData.func = function(runtimeScene, type, setLog, parentEventsFunctionContext) {
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
if (argName === "type") return type;
if (argName === "setLog") return setLog;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InstantGamesBridge__SendDelStorageData.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__InstantGamesBridge__SendDelStorageData.registeredGdjsCallbacks = [];