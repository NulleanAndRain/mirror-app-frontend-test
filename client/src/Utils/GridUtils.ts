import _ from 'lodash';

export const splitArrayForMasonryGrid = (array: Array<unknown>, columnsCount: number) => {
  const chunks = _.chunk(array, columnsCount);
  const result = Array.from({ length: columnsCount })
    .map((_n, i) => chunks.map(x => x[i]));
  return result;
}