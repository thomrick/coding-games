const expect = require('chai').expect;

function u(i, j) {
  return (factoriel((i - 1) + (j - 1)) / (factoriel(i - 1) * factoriel(j - 1)));
}

function factoriel(a) {
  return a === 0 ? 1 : a * factoriel(a - 1);
}

describe('Recursive', () => {
  it('small village', () => {
    const M = 4;
    const N = 4;
    const start = new Date().getTime();
    expect(u(M, N)).to.equal(20);
    const end = new Date().getTime();
    console.log('taking :', (end - start) / 1000, 's');
  });
  it('one way', () => {
    const M = 7;
    const N = 1;
    const start = new Date().getTime();
    expect(u(M, N)).to.equal(1);
    const end = new Date().getTime();
    console.log('taking :', (end - start) / 1000, 's');
  });
  it('small city', () => {
    const M = 14;
    const N = 10;
    const start = new Date().getTime();
    expect(u(M, N)).to.equal(497420);
    const end = new Date().getTime();
    console.log('taking :', (end - start) / 1000, 's');
  });
  it('20th century', () => {
    const M = 31;
    const N = 33;
    const start = new Date().getTime();
    expect(u(M, N)).to.equal('450883717216034179');
    const end = new Date().getTime();
    console.log('taking :', (end - start) / 1000, 's');
  });
  it('conurbation', () => {
    const M = 71;
    const N = 75;
    const start = new Date().getTime();
    expect(u(M, N)).to.equal(1400749509083708812152608657850239525991600);
    const end = new Date().getTime();
    console.log('taking :', (end - start) / 1000, 's');
  });
  it('megalopolis', () => {
    const M = 4120;
    const N = 4159;
    const start = new Date().getTime();
    expect(u(M, N)).to.equal(3375715115287449357506276695064342488380607772551755615179105507804899059681248045620173540991745403362335992757673890092105471733335852706166956530312567334487282482558146587432741997335465472009296092581251339613828107226092250609313066612320150281858290534116070831303198081250139809112963741399399956944877203613353540095656327855513072538940092251883729434762613946137613323500530338626825440359769354370691751069047472210539975607808503988395595325708324022469875191407849075969164735400267273918876233448307487137015836937446405489953161986067724506470373623798715644046761476038236218179504474387495625741419675817420060672735058379381909675603055899102193674430654068847174877852977532039723553447911446099658509438932429148596823935835842373222571840596638888126485481614315239822441381898968768838389768594618361392738202666851323740472500471213191622828935067038056874631138813798341429823849339329564142726906040118599910681472601453825831633755475584930282068833152447251261357850999727);
    const end = new Date().getTime();
    console.log('taking :', (end - start) / 1000, 's');
  });
});