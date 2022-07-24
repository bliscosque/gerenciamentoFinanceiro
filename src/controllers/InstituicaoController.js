import Instituicao from '../models/Instituicao';

class InstituicaoController {
  async index(req, res) {
    const instituicoes = await Instituicao.findAll({
      // attributes: ['id', 'nome', 'email', 'idade', 'peso', 'altura'],
      // order: [['id', 'DESC'], [Foto, 'id', 'DESC']], // ou 'ASC'
      // include: {
      //  model: Foto,
      //  attributes: ['url', 'filename', 'originalname'],
      // },
    });
    res.json(instituicoes);
  }

  async store(req, res) {
    try {
      const instituicao = await Instituicao.create(req.body);

      return res.json(instituicao);
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

      const instituicao = await Instituicao.findByPk(id, {
        // attributes: ['id', 'nome', 'email', 'idade', 'peso', 'altura'],
        // order: [['id', 'DESC'], [Foto, 'id', 'DESC']], // ou 'ASC'
        // include: {
        //  model: Foto,
        //  attributes: ['url', 'filename', 'originalname'],
        // },
      });

      if (!instituicao) {
        return res.status(400).json({
          errors: ['Instituicao does not exists'],
        });
      }
      // console.log(corretora);

      return res.json(instituicao);
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

      const instituicao = await Instituicao.findByPk(id);

      if (!instituicao) {
        return res.status(400).json({
          errors: ['Instituicao does not exists'],
        });
      }
      await instituicao.destroy();
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

      const instituicao = await Instituicao.findByPk(id);

      if (!instituicao) {
        return res.status(400).json({
          errors: ['Instituicao does not exist'],
        });
      }

      const instituicaoUpdated = await instituicao.update(req.body);

      return res.json(instituicaoUpdated);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new InstituicaoController();
