const provinceAndCity = require('@/assets/json/province.json');
// 汉字转区域码
export function ChineseToAreaCode(value) {
  const search = {
    province: '',
    city: '',
    district: ''
  }
  for (var k = 0, lengthk = provinceAndCity.length; k < lengthk; k++) {
    //确定省
    if (provinceAndCity[k].name == value[0]) {
      search.province = provinceAndCity[k].code;
      if (provinceAndCity[k].cityList && value.length >= 2 && value[1] != "") {
        for (var i = 0, lengthi = provinceAndCity[k].cityList.length; i < lengthi; i++) {
          //确定市
          if (provinceAndCity[k].cityList[i].name == value[1] || provinceAndCity[k].cityList.length == 1) {
            search.city = provinceAndCity[k].cityList[i].code;
            //确定区
            if (provinceAndCity[k].cityList[i].areaList && value.length == 3 && value[2] != "") {
              for (var j = 0, lengthj = provinceAndCity[k].cityList[i].areaList.length; j < lengthj; j++) {
                if (provinceAndCity[k].cityList[i].areaList[j].name == value[2]) {
                  search.district = provinceAndCity[k].cityList[i].areaList[j].code;
                  break;
                }
              }
            }
            break;
          }
        }
      }
      break;
    }
  }
  return [search.province, search.city, search.district]
}

// 区域码转汉字
export function areaCodeToChinese(value) {
  const search = {
    province: '',
    city: '',
    district: ''
  }
  for (var k = 0, lengthk = provinceAndCity.length; k < lengthk; k++) {
    //确定省
    if (provinceAndCity[k].code == value[0]) {
      search.province = provinceAndCity[k].name;
      if (provinceAndCity[k].cityList && value.length >= 2 && value[1] != "") {
        for (var i = 0, lengthi = provinceAndCity[k].cityList.length; i < lengthi; i++) {
          //确定市
          if (provinceAndCity[k].cityList[i].code == value[1] || provinceAndCity[k].cityList.length == 1) {
            search.city = provinceAndCity[k].cityList[i].name;
            //确定区
            if (provinceAndCity[k].cityList[i].areaList && value.length == 3 && value[2] != "") {
              for (var j = 0, lengthj = provinceAndCity[k].cityList[i].areaList.length; j < lengthj; j++) {
                if (provinceAndCity[k].cityList[i].areaList[j].code == value[2]) {
                  search.district = provinceAndCity[k].cityList[i].areaList[j].name;
                  break;
                }
              }
            }
            break;
          }
        }
      }
      break;
    }
  }
  return search.province + " " + search.city + " " + search.district
}