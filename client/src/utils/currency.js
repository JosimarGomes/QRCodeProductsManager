export const currencyToPtBR = value => (new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' })
    .format(value));

export const currencyToFormPtBr = (value = "") => value.toString().replace(".", ",");

export const ptBrToCurrencyNumber = (value = "") => value.toString().replace(".", "").replace(",", '.')