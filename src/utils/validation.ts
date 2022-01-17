// Aceita apenas que letras sejam digitadas
export const ValidatedEmail =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

export const ValidatedCpf = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/;
export const ValidatedCnpj =
  /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}\-[0-9]{2}$/;

export const ValidatedPassword =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

export const ValidatedCep = /^\d{5}-\d{3}$/;
