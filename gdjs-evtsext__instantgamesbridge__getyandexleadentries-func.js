
if (typeof gdjs.evtsExt__InstantGamesBridge__GetYandexLeadEntries !== "undefined") {
  gdjs.evtsExt__InstantGamesBridge__GetYandexLeadEntries.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InstantGamesBridge__GetYandexLeadEntries = {};


gdjs.evtsExt__InstantGamesBridge__GetYandexLeadEntries.userFunc0xc65890 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var catalog_array = runtimeScene.getGame().getVariables().get(eventsFunctionContext.getArgument("array_name"));

let options = { }

switch (bridge.platform.id) {
    case 'yandex':
        options = {
            leaderboardName: eventsFunctionContext.getArgument("lead_name"),
            includeUser: eventsFunctionContext.getArgument("include_user"), 
            quantityAround: eventsFunctionContext.getArgument("quantity_around"),
            quantityTop: eventsFunctionContext.getArgument("quantity_top")
        }
        break
}

if(catalog_array){
    bridge.leaderboard.getEntries(options)
        .then(entries => {
            entries.forEach(entry => {
                var newItem = new gdjs.Variable();
                newItem.getChild("id").setString(entry.id);
                newItem.getChild("name").setString(entry.name);
                newItem.getChild("photo").setString(entry.photo);
                newItem.getChild("score").setString(entry.score);
                newItem.getChild("rank").setString(entry.rank);
                
                var index = catalog_array.getChildrenCount();
                catalog_array.addChild(index.toString(), newItem);

            })
        })
        .catch(error => {
            console.log(error);
        })
}  else {
    console.log("Global Variable " + eventsFunctionContext.getArgument("array_name") + " is not exist");
}
};
gdjs.evtsExt__InstantGamesBridge__GetYandexLeadEntries.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InstantGamesBridge__GetYandexLeadEntries.userFunc0xc65890(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__InstantGamesBridge__GetYandexLeadEntries.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InstantGamesBridge__IsInizialize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__InstantGamesBridge__GetYandexLeadEntries.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__InstantGamesBridge__GetYandexLeadEntries.func = function(runtimeScene, lead_name, include_user, quantity_around, quantity_top, array_name, parentEventsFunctionContext) {
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
if (argName === "lead_name") return lead_name;
if (argName === "include_user") return include_user;
if (argName === "quantity_around") return quantity_around;
if (argName === "quantity_top") return quantity_top;
if (argName === "array_name") return array_name;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InstantGamesBridge__GetYandexLeadEntries.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__InstantGamesBridge__GetYandexLeadEntries.registeredGdjsCallbacks = [];