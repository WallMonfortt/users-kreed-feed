export const RfcValidator = (RFC) =>{
  return /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))((-)?([A-Z\d]{3}))?$/.test(RFC);
}

export const strValidator = (param) =>{
  return /^[a-zA-Z]{3,40}/g.test(param.trim);
}

export const phoneValidator = (phone) =>{
  return /^[+]?(1|1\s|1|\d{3}|\d{3}\s|)?((\(\d{3}\))|\d{3})(|\s)?(\d{3})(|\s)?(\d{4})$/g.test(phone);
}

export const CLABEValidator = (CLABE) =>{
  return /^[0-9]{18}$/g.test(CLABE);
}

export const socialReasonValidator = (reason) =>{
  return /^([a-zA-Z0-9_-]){2,60}$/.test(reason);
}

export const CURPValidator = (CURP) =>{
  return /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/.test(CURP);
}

