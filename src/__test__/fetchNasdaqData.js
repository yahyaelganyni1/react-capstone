import fetchData from '../__mocks__/https';

const fetchNasdaqData = () => fetchData()
  .then((nasdaqdata) => {
    const selectedData = [];
    nasdaqdata.forEach((nasdaq) => {
      selectedData.push({
        name: nasdaq.name,
        sector: nasdaq.sector,
        headQuarter: nasdaq.headQuarter,
      });
    });
    return selectedData;
  });

export default fetchNasdaqData;
