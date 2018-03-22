import {formatDate, moneyNum, formatNum} from './utils';


export default function (Vue) {

  Vue.filter('int',function (val){
    return parseInt(val)
  })

  Vue.filter('json', function (value) {
    return JSON.stringify(value)
  })

  /**
   * 123.45 => 123.00
   */
  Vue.filter('number', function (value, suffix) {
    if (isNaN(parseInt(value))) {
      return value;
    }
    return moneyNum(value, suffix);
  })

  /**
   * 123=>一二三
   */
  Vue.filter('formatNum', function (value) {
    if (isNaN(parseInt(value))) {
      return value;
    }
    return formatNum(value);
  })

  /**
   * 13701756015=> 137****6015
   */
  Vue.filter('confusePhone', function (value) {
    if (isNaN(parseInt(value)) || String(value).length !== 11) {
      return value;
    }
    return String(value).substr(0, 3) + "****" + String(value).substr(7, 4);
  })

  /**
   * 1000=>1,000  千分位
   */
  Vue.filter('thousand',function (num){
    if((num+"").trim()==""){
      return"";
    }
    if(isNaN(num)){
      return"";
    }

    num = num+"";

    if(/^.*\..*$/.test(num)){

      var pointIndex =num.lastIndexOf(".");

      var intPart = num.substring(0,pointIndex);

      var pointPart =num.substring(pointIndex+1,num.length);

      intPart = intPart +"";

      var re =/(-?\d+)(\d{3})/

      while(re.test(intPart)){

        intPart =intPart.replace(re,"$1,$2")

      }

      num = intPart+"."+pointPart;

    }else{

      num = num +"";

      var re =/(-?\d+)(\d{3})/

      while(re.test(num)){

        num =num.replace(re,"$1,$2")

      }

    }

    return num;

  })

  /**
   * yyyy-MM-dd (周w)默认 w周
   */
  Vue.filter('date', function (value, format) {
    if (typeof value !== 'undefined') {
      !format && (format = "yyyy-MM-dd");
      let d = new Date(value);
      if(isNaN(d.getTime())){
        return value;
      }
      return formatDate(d, format);
    } else {
      return ''
    }
  })

  /**
   * yyyy-MM-dd HH:mm:ss (周w)默认 w周
   */
  Vue.filter('dates', function (value, format) {
    if (typeof value !== 'undefined') {
      !format && (format = "yyyy-MM-dd HH:mm:ss");
      let d = new Date(value);
      if(isNaN(d.getTime())){
        return value;
      }
      return formatDate(d, format);
    } else {
      return ''
    }
  })
  /**
   * HH:mm:ss (周w)默认 w周
   */
  Vue.filter('times', function (value, format) {
    if (typeof value !== 'undefined') {
      !format && (format = "HH:mm:ss");
      let d = new Date(value);
      if(isNaN(d.getTime())){
        return value;
      }
      return formatDate(d, format);
    } else {
      return ''
    }
  })
  /**
   * 转换成秒
   */
  Vue.filter('formatSeconds', function (value) {
    var theTime = parseInt(value);// 秒
    var theTime1 = 0;// 分
    var theTime2 = 0;// 小时
    if(theTime > 60) {
      theTime1 = parseInt(theTime/60);
      theTime = parseInt(theTime%60);
      if(theTime1 > 60) {
        theTime2 = parseInt(theTime1/60);
        theTime1 = parseInt(theTime1%60);
      }
    }
    var result = ""+parseInt(theTime)+"秒";
    if(theTime1 > 0) {
      result = ""+parseInt(theTime1)+"分"+result;
    }
    if(theTime2 > 0) {
      result = ""+parseInt(theTime2)+"小时"+result;
    }
    return result;
  })

}
