import axios from 'axios';

export const API_DOT_DOMAIN = 'http://127.0.0.1:8000/api';

const fetcher = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});

export async function getCategories() {
  return fetcher({
    method: 'get',
    url: `${API_DOT_DOMAIN}/productCategories`,
  }).then((res) => res);
}
export async function getProducts() {
  return fetcher({
    method: 'get',
    url: `${API_DOT_DOMAIN}/products`,
  }).then((res) => res);
}
export async function getSales() {
  return fetcher({
    method: 'get',
    url: `${API_DOT_DOMAIN}/salesGoods`,
  }).then((res) => res);
}
export async function getSuppliers() {
  return fetcher({
    method: 'get',
    url: `${API_DOT_DOMAIN}/suppliers`,
  }).then((res) => res);
}