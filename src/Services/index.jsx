import data from '../../data.json';

export default function getData(section) {
  return Promise.resolve(data[section]);
}
