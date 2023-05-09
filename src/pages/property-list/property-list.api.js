import Axios from "axios";

const propertyListUrl = `${process.env.Base_API_URL}/properties`;

export const getPropertyList = () => Axios.get(propertyListUrl).then(({ data }) => data);

const saleTypeListUrl = `${process.env.Base_API_URL}/saleTypes`;

export const getSaleTypeList = () => Axios.get(saleTypeListUrl).then(({ data }) => data);

const provinceListUrl = `${process.env.Base_API_URL}/provinces`;

export const getProvinceList = () => Axios.get(provinceListUrl).then(({ data }) => data);