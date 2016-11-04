'use strit';

module.exports = (schema) => {
    schema.pre('save', function(next) {
        schema.path('createdAt').expires('1m');
        // /console.log(String(this.qtdDias) + 'm');
        next();
    });
};
