const createPlantelHigiene = require('./create.handlers.plantel-higiene.adapters');
const updatePlantelHigiene = require('./update.handlers.plantel-higiene.adapters');
const deletePlantelHigiene = require('./delete.handlers.plantel-higiene.adapters');
const findGroupPlantelHigiene = require('./find-group.handlers.plantel-higiene.adapters');
const createPlantelInfraestructura = require('./create.handlers.plantel-infraestructura.adapters');
const findPlantelInfraestructura = require('./find.handlers.plantel-infraestructura.adapters');

module.exports = {
  createPlantelHigiene,
  updatePlantelHigiene,
  deletePlantelHigiene,
  findGroupPlantelHigiene,
  createPlantelInfraestructura,
  findPlantelInfraestructura,
};
