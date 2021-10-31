import * as ActionIds from './ActionIds';

export function getSales(filter, paging) {
  return { type: ActionIds.SALES_REQ, filter, paging }
}