// (00) 00000-0000
export function maskPhone(value: string) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d)/, "($1")
    .replace(/(\(\d{2})(\d)/, "$1) $2")
    .replace(/(\d{5})(\d{1,4})/, "$1-$2")
    .replace(/(-\d{4})\d/, "$1");
}
