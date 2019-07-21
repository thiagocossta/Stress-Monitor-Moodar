const Stress = require('../models/Stress');
const moment = require('moment');

module.exports = {
  async index(req, res) {
      try{
        const stresses = await Stress.find().sort('-date');
        req.io.emit('stress', stresses);
        
        return res.json(stresses); 
      } catch (error) {
        return res.status(400).send({error: 'Error listing stresses'});
    }
  },

  async getStress(req, res) {
      try {
        const stress = await Stress.findById(req.params.id)
        req.io.emit('stress', stress);
        return res.json(stress);
      } catch (error) {
        return res.status(400).send({error: 'Error getting stress'});
      }
  },
  
  async store(req, res) {
      try{
        const { status, date, description } = req.body;
        
        const stress = await Stress.create({
            status,
            date,
            description,
        });
        
        await stress.save();
        req.io.emit('stress', stress);

        return res.json(stress);
        } catch (error) {
            return res.status(400).send({error: 'Error creating stress'});
        }
  },

  async updateStatus(req, res) {
      try{

        const stress = await Stress.findByIdAndUpdate(
            req.params.id, {
                $set: { status: req.body.status 
            }}, {new: true});
            await stress.save();
            req.io.emit('stress', stress);
            return res.json(stress);
        } catch (error) {
            return res.status(400).send({error: 'Error updating status'});
        }
  },

async updateCurrentStatus(req, res) {
    try{
        const stress = await Stress.findOne({
            date: moment(Date.now()).format('MM-DD-YYYY')}
        );
        var query = { status: stress.status }
        stress = await Stress.findOneAndUpdate(
          query, {
              $set: { status: req.body.value 
          }}, stress, {new: true});
        await stress.save();
        // req.io.emit('stress', stress);
        return res.json(stress);
    }catch (error) {
        return res.status(400).send({error: 'Error AQUI status'});
}
  },
  
  async upDate(req, res) {
      try{
        const stress = await Stress.findByIdAndUpdate(req.params.id, {
            $set: { status: req.body.status, date: req.body.date, description: req.body.description
            }}, {new: true});

        await stress.save();
        return await res.json(stress);
        } catch (error) {
            return res.status(400).send({error: 'Error updating stress'});
        }
  },

  async delete(req, res) {
      try{
        const stress = await Stress.findByIdAndDelete(req.params.id);
        req.io.emit('stress', stress);
        return res.json(stress);
      } catch (error) {
        return res.status(400).send({error: 'Error deleting patient'});
    }
  }
};

