
if (typeof gdjs.evtsExt__InstantGamesBridge__SubscribeEvents !== "undefined") {
  gdjs.evtsExt__InstantGamesBridge__SubscribeEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InstantGamesBridge__SubscribeEvents = {};


gdjs.evtsExt__InstantGamesBridge__SubscribeEvents.userFunc0xa61aa8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var rewState = runtimeScene.getGame().getVariablesForExtension("InstantGamesBridge").get("IGB_Reward_State");
var rewRewarded = runtimeScene.getGame().getVariablesForExtension("InstantGamesBridge").get("IGB_Reward_Rewarded");
var intState = runtimeScene.getGame().getVariablesForExtension("InstantGamesBridge").get("IGB_Inters_State");

var sound_manager = runtimeScene.getGame().getSoundManager();
let volumen = sound_manager.getGlobalVolume();
let allow_visible = true;

if (bridge && bridge.advertisement && bridge.game) {

    bridge.advertisement.on('rewarded_state_changed', state => {
        rewState.setString(state);
        game_state(state);

        if (state === "rewarded"){
            rewRewarded.setBoolean(true)
        }
    });

    bridge.advertisement.on('interstitial_state_changed', state => {
            intState.setString(state); 
            game_state(state);
    })

    bridge.game.on('visibility_state_changed', state => {
        if(allow_visible){
            if(state === "visible"){
                play_sound()
            } else{
                mute_sound()
            }
        }
    })


}

function game_state(state){
    if (state === "opened") {
        allow_visible = false;
        mute_sound()
    } else if (state === "closed"){
        allow_visible = true;
        play_sound()
    }
}

function getVolume(){
    if(sound_manager.getGlobalVolume() !== 0){
        volumen = sound_manager.getGlobalVolume();
    };
}

function mute_sound(){
    getVolume();
    sound_manager.setGlobalVolume(0);
    runtimeScene.getGame().pause(true);  
}

function play_sound(){
    sound_manager.setGlobalVolume(volumen);
    runtimeScene.getGame().pause(false);
}


};
gdjs.evtsExt__InstantGamesBridge__SubscribeEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InstantGamesBridge__SubscribeEvents.userFunc0xa61aa8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InstantGamesBridge__SubscribeEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__InstantGamesBridge__SubscribeEvents.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__InstantGamesBridge__SubscribeEvents.registeredGdjsCallbacks = [];