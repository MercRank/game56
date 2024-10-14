
if (typeof gdjs.evtsExt__InstantGamesBridge__SetYandexLeadScore !== "undefined") {
  gdjs.evtsExt__InstantGamesBridge__SetYandexLeadScore.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InstantGamesBridge__SetYandexLeadScore = {};


gdjs.evtsExt__InstantGamesBridge__SetYandexLeadScore.userFunc0xc63298 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const scoreVar = eventsFunctionContext.getArgument("score");
const leadName = eventsFunctionContext.getArgument("LeadName");
var state = runtimeScene.getGame().getVariablesForExtension("InstantGamesBridge").get("IGB_YA_leaderboardSetSuccess");

let setScoreOptions = {
    'yandex': {
        leaderboardName: leadName,
        score: scoreVar
    }
};

if(scoreVar && leadName){
bridge.leaderboard.setScore(setScoreOptions)
    .then(() => {
        state.setBoolean(true)
    })
    .catch(error => {
        console.error("Set Yandex Games leaderboard score failed", error)
        state.setBoolean(false)
    })

 }   
};
gdjs.evtsExt__InstantGamesBridge__SetYandexLeadScore.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InstantGamesBridge__SetYandexLeadScore.userFunc0xc63298(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__InstantGamesBridge__SetYandexLeadScore.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InstantGamesBridge__IsInizialize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__InstantGamesBridge__SetYandexLeadScore.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__InstantGamesBridge__SetYandexLeadScore.func = function(runtimeScene, LeadName, score, parentEventsFunctionContext) {
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
if (argName === "LeadName") return LeadName;
if (argName === "score") return score;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InstantGamesBridge__SetYandexLeadScore.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__InstantGamesBridge__SetYandexLeadScore.registeredGdjsCallbacks = [];