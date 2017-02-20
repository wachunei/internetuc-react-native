import actions from './constants';

export function setScene(scene) {
  return {
    type: actions.scenes.setScene,
    scene,
  };
}
