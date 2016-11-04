'use strit';

module.exports = (schema) => {
    schema.pre('remove', { doc: true }, function(next) {
        console.log('Removido');
        next();
    });
};
