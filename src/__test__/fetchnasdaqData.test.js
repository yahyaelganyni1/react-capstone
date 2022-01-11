import '@testing-library/jest-dom/extend-expect';
import fetchData from '../__mocks__/https';
import fetchNasdaqData from './fetchNasdaqData';

describe('test fetching company', () => {
  it('test fetching country name', async () => {
    await fetchNasdaqData().then((data) => {
      expect(data[0].name).toBe('Align Technology');
    });
  });

  it('test fetch company head Quarter', async () => {
    await fetchData().then((data) => {
      expect(data[0].headQuarter).toBe('San Jose, CALIFORNIA');
    });
  });
  it('test fetch company symbol', async () => {
    await fetchData().then((data) => {
      expect(data[0].symbol).toBe('TCOM');
    });
  });
  it('test fetch company sector', async () => {
    await fetchData().then((data) => {
      expect(data[0].sector).toBe('Healthcare');
    });
  });
});
