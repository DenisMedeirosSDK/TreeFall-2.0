import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { v4 } from 'uuid';
import * as Yup from 'yup';

import TreeFall from '../entities/TreeFall';
import treeFallView from '../views/treeFalls_view';

export default {
  async show(request: Request, response: Response) {
    const treeFallRepository = getRepository(TreeFall);

    const { id } = request.params;

    const treeFall = await treeFallRepository.findOneOrFail(id, {
      relations: ['images'],
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
      id: v4(),
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

    const schema = Yup.object().shape({
      street: Yup.string().required(),
      neighborhood: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      country: Yup.string().required(),
      zipcode: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const treeFall = treeFallRepository.create(data);

    await treeFallRepository.save(treeFall);

    return response.json(treeFallView.render(treeFall));
  },
};
