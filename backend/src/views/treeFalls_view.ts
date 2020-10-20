import TreeFall from '../entities/TreeFall';
import imageView from '../views/images_view';

export default {
  render(treeFall: TreeFall) {
    return {
      id: treeFall.id,
      street: treeFall.street,
      neighborhood: treeFall.neighborhood,
      city: treeFall.city,
      state: treeFall.state,
      country: treeFall.country,
      latitude: treeFall.latitude,
      longitude: treeFall.longitude,
      zipcode: treeFall.zipcode,
      images: imageView.renderMany(treeFall.images),
    };
  },

  renderMany(treeFall: TreeFall[]) {
    return treeFall.map(treeFall => this.render(treeFall));
  },
};
