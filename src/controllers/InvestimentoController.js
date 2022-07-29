import Investimento from '../models/Investimento';

class InvestimentoController {
  async index(req, res) {
    const investimentos = await Investimento.findAll({
      // attributes: ['id', 'nome', 'email', 'idade', 'peso', 'altura'],
      // order: [['id', 'DESC'], [Foto, 'id', 'DESC']], // ou 'ASC'
      // include: {
      //  model: Foto,
      //  attributes: ['url', 'filename', 'originalname'],
      // },
    });
    res.json(investimentos);
  }

  async store(req, res) {
    try {
      const investimento = await Investimento.create(req.body);

      return res.json(investimento);
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

      const investimento = await Investimento.findByPk(id, {
        // attributes: ['id', 'nome', 'email', 'idade', 'peso', 'altura'],
        // order: [['id', 'DESC'], [Foto, 'id', 'DESC']], // ou 'ASC'
        // include: {
        //  model: Foto,
        //  attributes: ['url', 'filename', 'originalname'],
        // },
      });

      if (!investimento) {
        return res.status(400).json({
          errors: ['Investimento does not exists'],
        });
      }
      // console.log(corretora);

      return res.json(investimento);
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

      const investimento = await Investimento.findByPk(id);

      if (!investimento) {
        return res.status(400).json({
          errors: ['Investimento does not exists'],
        });
      }
      await investimento.destroy();
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

      const investimento = await Investimento.findByPk(id);

      if (!investimento) {
        return res.status(400).json({
          errors: ['Investimento does not exist'],
        });
      }

      const investimentoUpdated = await investimento.update(req.body);

      return res.json(investimentoUpdated);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new InvestimentoController();
