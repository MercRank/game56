
if (typeof gdjs.evtsExt__InstantGamesBridge__GetCatalog !== "undefined") {
  gdjs.evtsExt__InstantGamesBridge__GetCatalog.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InstantGamesBridge__GetCatalog = {};


gdjs.evtsExt__InstantGamesBridge__GetCatalog.userFunc0x8f95e8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var catalog_array = runtimeScene.getGame().getVariables().get(eventsFunctionContext.getArgument("array_name"));

if(catalog_array){
bridge.payments.getCatalog()
    .then(catalogItems => {
        catalogItems.forEach(catalogItem => {
            var newItem = new gdjs.Variable();
            newItem.getChild("id").setString(catalogItem.id);
            newItem.getChild("title").setString(catalogItem.title);
            newItem.getChild("description").setString(catalogItem.description);
            newItem.getChild("imageURI").setString(catalogItem.imageURI);
            newItem.getChild("price").setString(catalogItem.price);
            newItem.getChild("priceValue").setNumber(catalogItem.priceValue);
            newItem.getChild("priceCurrencyCode").setString(catalogItem.priceCurrencyCode);
            newItem.getChild("priceCurrencyImage").setString(catalogItem.priceCurrencyImage);
            
            var index = catalog_array.getChildrenCount();
            catalog_array.addChild(index.toString(), newItem);

        });
    })
    .catch(error => {
        console.log(error);
    });

} else {
    console.log("Global Variable " + eventsFunctionContext.getArgument("array_name") + " is not exist");
}
};
gdjs.evtsExt__InstantGamesBridge__GetCatalog.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InstantGamesBridge__GetCatalog.userFunc0x8f95e8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__InstantGamesBridge__GetCatalog.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InstantGamesBridge__IsInizialize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__InstantGamesBridge__GetCatalog.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__InstantGamesBridge__GetCatalog.func = function(runtimeScene, array_name, parentEventsFunctionContext) {
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
if (argName === "array_name") return array_name;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InstantGamesBridge__GetCatalog.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__InstantGamesBridge__GetCatalog.registeredGdjsCallbacks = [];