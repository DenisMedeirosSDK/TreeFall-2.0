import Image from '../entities/Image';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `${process.env.URL_IMAGE}/uploads/${image.path}`,
    };
  },

  renderMany(image: Image[]) {
    return image.map(image => this.render(image));
  },
};
