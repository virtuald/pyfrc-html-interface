import * as ActionTypes from "../constants/action-types";

export function simStart() {
  return {
    type: ActionTypes.SIM_STARTED
  };
}

export function simStop() {
  return {
    type: ActionTypes.SIM_STOPPED
  };
}

export function simSocketInitialized(simSocket) {
  return {
    type: ActionTypes.INITIALIZE_SIM_SOCKET,
    payload: {
      simSocket
    }
  }
}

export function initializeHalData(dataOut, dataIn) {
  return {
    type: ActionTypes.INITIALIZE_HAL_DATA,
    payload: {
      dataOut,
      dataIn
    }
  };
}

export function updateHalDataOut(data) {
  return {
    type: ActionTypes.UPDATE_HAL_DATA_OUT,
    payload: data
  };
}

export function updateHalDataIn(key, value) {

  let updates = {};

  if (arguments.length == 2) {
    const key = arguments[0];
    const value = arguments[1];
    updates[key] = value;
  }
  else {
    updates = arguments[0];
  }

  return {
    type: ActionTypes.UPDATE_HAL_DATA_IN,
    payload: {
      updates
    }
  };
}

export function updateRobotMode(mode) {
  return {
    type: ActionTypes.ROBOT_MODE_UPDATE,
    payload: {
      robotMode: mode
    }
  };
}

export function registerToLayout(tagName) {
  return {
    type: ActionTypes.REGISTER_TO_LAYOUT,
    payload: {
      tagName
    }
  };
}

export function addedToLayout(tagName) {
  return {
    type: ActionTypes.ADDED_TO_LAYOUT,
    payload: {
      tagName
    }
  };
}

export function removeFromLayout(tagName) {
  return {
    type: ActionTypes.REMOVED_FROM_LAYOUT,
    payload: {
      tagName
    }
  };
}

export function moduleMenuUpdated(menuItems) {
  return {
    type: ActionTypes.MODULE_MENU_UPDATED,
    payload: {
      menuItems
    }
  };
}