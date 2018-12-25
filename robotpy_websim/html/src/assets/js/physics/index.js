
import * as field from './field';
import * as drivetrains from './drivetrains';
import * as robot from './robot';
import * as configDefaults from './config-defaults.json';
import * as tankmodel from './tankmodel';

export const Field = field;
export const Drivetrains = drivetrains;
export const Robot = robot;
export const ConfigDefaults = configDefaults.default;
export const Tankmodel = tankmodel;

export function setMatterWrapper(wrapper) {
  robot.setMatterWrapper(wrapper);
  field.setMatterWrapper(wrapper);
}