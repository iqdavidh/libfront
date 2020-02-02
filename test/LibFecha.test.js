import { assert } from 'chai';
import LibFecha from '../src/LibFecha';

/*
 * Libreria para procesar las fechas, convertir fechas, ver periodos, un paso antes de moment
 * */

describe('LibFecha ', function() {
  it('getMesFromIndex - regresa el nombre del mes a artir de index base 0', function() {
    const indexEnero = 0;
    assert(
      'Enero' === LibFecha.getMesFromIndex(indexEnero),
      'No coincide mes enero'
    );

    const indexDic = 11;
    assert(
      'Diciembre' === LibFecha.getMesFromIndex(indexDic),
      'No coincide mes enero'
    );
  });

  it('getDateFromFechaYMD - fecha simple', function() {
    const fymd = '2000-01-30';
    const d = LibFecha.getDateFromFechaYMD(fymd);

    assert(2000 === d.getFullYear(), 'No coincide year');
    assert(0 === d.getMonth(), 'No coincide mes');
    assert(30 === d.getDate(), 'No coincide fecha');
  });

  it('getDateFromFechaDMY - fecha simple', function() {
    const fdmy = '30/01/2000';
    const d = LibFecha.getDateFromFechaDMY(fdmy);

    assert(2000 === d.getFullYear(), 'No coincide year');
    assert(0 === d.getMonth(), 'No coincide mes');
    assert(30 === d.getDate(), 'No coincide fecha');
  });

  it('getFYMDFromDate - fecha simple', function() {
    const d = new Date(2000, 0, 30);
    const fymd = LibFecha.getFYMDFromDate(d);

    assert('2000-01-30' === fymd, 'No coincide');
  });

  it('getDMYFromDate - fecha simple', function() {
    const d = new Date(2000, 0, 30);
    const fdmy = LibFecha.getDMYFromDate(d);

    assert('30/01/2000' === fdmy, 'No coincide');
  });

  it('getFAbbDFromDate - fecha simple', function() {
    const d = new Date(2019, 7, 12);
    const fabb = LibFecha.getFAbbDFromDate(d);

    assert('Lu 12 Ago 2019' === fabb, 'No coincide - ' + fabb);
  });

  it('getDMYFromYMD - fecha simple', function() {
    const fymd = '2011-05-30';
    const fdmy = LibFecha.getDMYFromYMD(fymd);

    assert('30/05/2011' === fdmy, 'No coincide - ' + fdmy);
  });

  it('getYMDFromDMY -fecha simple', function() {
    const fdmy = '30/05/2011';
    const fymd = LibFecha.getYMDFromDMY(fdmy);

    assert('2011-05-30' === fymd, 'No coincide - ' + fdmy);
  });

  it('getDateFromAddDays - agregar 1 dias as 2019-05-20 ', function() {
    const fymd = '2019-05-20';

    const date = LibFecha.getDateFromFechaYMD(fymd);

    const newDate = LibFecha.getDateFromAddDays(date, 1);

    const fnew = LibFecha.getFYMDFromDate(newDate);

    assert(
      '2019-05-21' === fnew,
      `No coincide agregar 1 dia a ${fymd} , se recibio ${fnew}`
    );
  });

  it('getDateFromAddDays - quitar 10 dias as 2019-05-20 ', function() {
    const fymd = '2019-05-20';

    const date = LibFecha.getDateFromFechaYMD(fymd);

    const newDate = LibFecha.getDateFromAddDays(date, -10);

    const fnew = LibFecha.getFYMDFromDate(newDate);

    assert(
      '2019-05-10' === fnew,
      `No coincide agregar -10 dia a ${fymd} , se recibio ${fnew}`
    );
  });
});
