import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import TreeFall from '../entities/TreeFall';

import treeFallView from '../views/treeFalls_view';

export default {
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const treeFallRepository = getRepository(TreeFall);

    const treeFall = await treeFallRepository.findOneOrFail(id, {
      where: { id },
    });

    return response.json(treeFallView.render(treeFall));
  },
  async index(request: Request, response: Response) {
    const treeFallRepository = getRepository(TreeFall);

    const treeFalls = await treeFallRepository.find({
      relations: ['images'],
    });

    return response.json(treeFallView.renderMany(treeFalls));
  },
  async create(request: Request, response: Response) {
    const {
      street,
      neighborhood,
      city,
      state,
      country,
      zipcode,
      latitude,
      longitude,
    } = request.body;

    const treeFallRepository = getRepository(TreeFall);

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
      return {
        path: image.filename,
      };
    });

    const data = {
      street,
      neighborhood,
      city,
      state,
      country,
      zipcode,
      latitude,
      longitude,
      images,
    };

    const treeFall = treeFallRepository.create(data);

    await treeFallRepository.save(treeFall);

    return response.json(treeFallView.render(treeFall));
  },
};
