module.exports = (schema) => {
  schema.add({ created_at: Date });

  schema.pre('save', (next) => {
    this.created_at = new Date;
    next();
  });
};
