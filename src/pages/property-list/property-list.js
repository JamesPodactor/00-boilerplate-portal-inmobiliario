import {
  getPropertyList,
  getSaleTypeList,
  getProvinceList,
} from './property-list.api';
import { mapPropertyListApiToVm } from './property-list.mappers';
import { addPropertyRows, setOptions } from './property-list.helpers';

Promise.all([getPropertyList(), getSaleTypeList(), getProvinceList()]).then(
  ([propertyList, saleTypeList, provinceList]) => {
    console.log(propertyList)
    // loadPropertyList(propertyList);
    // setOptions(saleTypeList, 'select-sale-type', '¿Qué venta?');
    // setOptions(provinceList, 'select-province', '¿Dónde?');
  }
);

const loadPropertyList = (propertyList) => {
  const vmPropertyList = mapPropertyListApiToVm(propertyList);
  addPropertyRows(vmPropertyList);
};
