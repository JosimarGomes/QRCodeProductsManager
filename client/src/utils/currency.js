export const currencyToPtBR = value => (new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' })
    .format(value));

export const currencyToFormPtBr = (value = "") => value.replace(".", ",");

export const ptBrToCurrencyNumber = (value = "") => value.replace(".", "").replace(",", '.');