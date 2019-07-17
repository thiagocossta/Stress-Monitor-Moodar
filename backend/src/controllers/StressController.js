const Stress = require('../models/Stress');
const moment = require('moment');

module.exports = {
  async index(req, res) {
      const stresses = await Stress.find().sort('-date');
      req.io.emit('stress', stresses);

      return res.json(stresses); 
  },

  async getStress(req, res) {
      const stress = await Stress.findById(req.params.id)
      req.io.emit('stress', stress);
      return res.json(stress);
  },
  
  async store(req, res) {
      const { status, date, description } = req.body;

      const stress = await Stress.create({
          status,
          date,
          description,
      });
      await stress.save();
      req.io.emit('stress', stress);

      return res.json(stress);
  },

  async updateStatus(req, res) {
    const stress = await Stress.findByIdAndUpdate(
        req.params.id, {
             $set: { status: req.body.status 
        }});
        await stress.save();
        req.io.emit('stress', stress);
        return res.json(stress);
  },

async updateCurrentStatus(req, res) {
    const stress = await Stress.findOne({
        date: new moment(Date.now()).format('MM-DD-YYYY')}
    );
    await Stress.updateOne(
        { _id: stress._id },
   { $set:
      {
          status: req.body.value
      }, 
   }, { runValidators: true }
    )
        req.io.emit('stress', stress);
        return res.json(stress);
  },
  
  async upDate(req, res) {
    const stress = await Stress.findByIdAndUpdate(req.params.id, {
        $set: { status: req.body.status, date: req.body.date, description: req.body.description
        }});

    await stress.save();
    req.io.emit('stress', stress);
    return res.json(stress);
  },

  async delete(req, res) {
      const stress = await Stress.findByIdAndDelete(req.params.id);
      req.io.emit('stress', stress);
      return res.send('deletado');
  }
};

