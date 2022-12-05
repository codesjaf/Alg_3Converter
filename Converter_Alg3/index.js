import View from "./View/view.js";
import Model from "./Model/model.js";
import Controller from "./Controller/controller.js";

const init = () => {
  const view = new View();
  const model = new Model();
  const controller = new Controller(view, model);

  controller.init();
};

init();