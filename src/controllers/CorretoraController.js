import Corretora from '../models/Corretora';

class CorretoraController {
  async index(req, res) {
    const corretoras = await Corretora.findAll({
      // attributes: ['id', 'nome', 'email', 'idade', 'peso', 'altura'],
      // order: [['id', 'DESC'], [Foto, 'id', 'DESC']], // ou 'ASC'
      // include: {
      //  model: Foto,
      //  attributes: ['url', 'filename', 'originalname'],
      // },
    });
    res.json(corretoras);
  }

  async store(req, res) {
    try {
      const corretora = await Corretora.create(req.body);

      return res.json(corretora);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const corretora = await Corretora.findByPk(id, {
        // attributes: ['id', 'nome', 'email', 'idade', 'peso', 'altura'],
        // order: [['id', 'DESC'], [Foto, 'id', 'DESC']], // ou 'ASC'
        // include: {
        //  model: Foto,
        //  attributes: ['url', 'filename', 'originalname'],
        // },
      });

      if (!corretora) {
        return res.status(400).json({
          errors: ['Corretora does not exists'],
        });
      }
      // console.log(corretora);

      return res.json(corretora);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const corretora = await Corretora.findByPk(id);

      if (!corretora) {
        return res.status(400).json({
          errors: ['Corretora does not'],
        });
      }
      await corretora.destroy();
      return res.json({ deleted: true });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const corretora = await Corretora.findByPk(id);

      if (!corretora) {
        return res.status(400).json({
          errors: ['Corretora does not exist'],
        });
      }

      const corretoraUpdated = await corretora.update(req.body);

      return res.json(corretoraUpdated);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new CorretoraController();
