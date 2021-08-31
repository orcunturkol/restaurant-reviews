module.exports = mongoose => {
    const resSchema = new mongoose.Schema(mongoose.Schema({}));
  
    resSchema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });

      const Restaurant = mongoose.model('sample_restaurants', resSchema, 'restaurants');
      return Restaurant;
    };