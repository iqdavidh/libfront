const listaDiaSemana = ['Dom', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
const listaMes = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
];
const listaMesAbb = [
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sep',
  'Oct',
  'Nov',
  'Dic'
];

const LibFecha = {
  getMesFromIndex: index => {
    return listaMes[index];
  },
  getDateFromFechaYMD: fymd => {
    let lista = fymd.toString().split('-');
    return new Date(
      parseInt(lista[0]),
      parseInt(lista[1]) - 1,
      parseInt(lista[2])
    );
  },
  getDateFromFechaDMY: fdmy => {
    let lista = fdmy.toString().split('/');

    let mes = parseInt(lista[1]) - 1;
    let f = new Date(lista[2], mes, lista[0]);

    return f;
  },
  getFYMDFromDate: d => {
    let y = d.getFullYear();
    let mes = d.getMonth() + 1;
    let dia = d.getDate();

    dia = (dia < 10 ? '0' : '') + dia.toString();
    mes = (mes < 10 ? '0' : '') + mes.toString();

    return `${y}-${mes}-${dia}`;
  },
  getDMYFromDate: d => {
    let y = d.getFullYear();
    let mes = d.getMonth() + 1;
    let dia = d.getDate();

    dia = (dia < 10 ? '0' : '') + dia.toString();
    mes = (mes < 10 ? '0' : '') + mes.toString();

    return `${dia}/${mes}/${y}`;
  },
  getFAbbDFromDate: d => {
    let y = d.getFullYear();
    let mes = d.getMonth() + 1;
    let dia = d.getDate();
    let diaSemana = d.getDay();

    const textoDia = (dia < 10 ? '0' : '') + dia.toString();
    const nombreDia = listaDiaSemana[diaSemana];
    const nombreMes = listaMesAbb[mes - 1];

    return `${nombreDia} ${textoDia} ${nombreMes} ${y}`;
  },
  getDMYFromYMD(fYMD) {
    let lista = fYMD.toString().split('-');

    let y = parseInt(lista[0]);
    let mes = parseInt(lista[1]);
    let dia = parseInt(lista[2]);

    dia = (dia < 10 ? '0' : '') + dia.toString();
    mes = (mes < 10 ? '0' : '') + mes.toString();

    return `${dia}/${mes}/${y}`;
  },
  getYMDFromDMY(fDMY) {
    let lista = fDMY.toString().split('/');

    let y = parseInt(lista[2]);
    let mes = parseInt(lista[1]);
    let dia = parseInt(lista[0]);

    dia = (dia < 10 ? '0' : '') + dia.toString();
    mes = (mes < 10 ? '0' : '') + mes.toString();

    return `${y}-${mes}-${dia}`;
  },
  getDateFromAddDays(date, dias) {
    let ts = date.getTime() + dias * 86400000;
    return new Date(ts);
  }
};

module.exports =  LibFecha;
