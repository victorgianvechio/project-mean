'use strict';

module.exports = (cpf) => {
	cpf = cpf.replace(/(\d{3})(\d)/,'$1.$2');
	cpf = cpf.replace(/(\d{3})(\d)/,'$1.$2');
	cpf = cpf.replace(/(\d{3})(\d)/,'$1-$2');
	return cpf;
};
