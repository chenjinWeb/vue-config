import http from "../axios";
import {toBodyString} from "../../utils"
import md5 from "../../md5"


//工作报表work_report/home_work_info_list
export const homeworkreport = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/work_report/home_work_info_list?${query}`,)
}

/*首页销售额，销售量，现金*/
export const indexsale = (body = {}) => {
  const query = toBodyString(body);
  return http.get(`/home/home?${query}`)
}

//销售额详情home/totalsellroomdetail
export const totalsaledetail = (body = {}) => {
  const query = toBodyString(body);
  return http.get(`/home/totalsellroomdetail?${query}`)
}

//销售额明细(设备)home/selldatadetailbymachine
export const selldatadetail = (body = {}) => {
  const query = toBodyString(body);
  return http.get(`/home/selldatadetailbymachine?${query}`)
}

//销售额明细(设备组)home/selldatadetailbymachinegroup
export const sellzudetail = (body = {}) => {
  const query = toBodyString(body);
  return http.get(`/home/selldatadetailbymachinegroup?${query}`)
}

//销售额明细(时间)home/selldatadetailbydate
export const selltimedetail = (body = {}) => {
  const query = toBodyString(body);
  return http.get(`/home/selldatadetailbydate?${query}`)
}

//根据设备/设备组获取详情home/selldatadetailbytype
export const selltypedetail = (body = {}) => {
  const query = toBodyString(body);
  return http.get(`/home/selldatadetailbytype?${query}`)
}


/*商品排行*/
export const productrank = (body = {}) => {
  const query = toBodyString(body)
  return http.get(`/home/selldatarank?${query}`)
}

/*缺品类排行*/
export const lackrank = (body = {}) => {
  const query = toBodyString(body)
  return http.get(`/device/vmOperationV2?${query}`)
}

/*设备排行*/
export const shebeirank = (body = {}) => {
  const query = toBodyString(body)
  return http.get(`/home/device_total_rank?${query}`)
}


/*设备组排行*/
export const devicerank = (body = {}) => {
  const query = toBodyString(body)
  return http.get(`/home/groupselldatarank?${query}`)
}

/*分公司排行*/
export const companyrank = (body = {}) => {
  const query = toBodyString(body)
  return http.get(`/home/lChlAreaSellDataRank?${query}`)
}


/*echarts图形*/
export const indexecharts = (body = {}) => {
  const query = toBodyString(body)
  return http.get(`/home/hourselldata?${query}`)
}

//微信登录
export const wxlogin = () => {
  return http.get(`/wx/login`,)
}

//admin微信登录
export const wxloginadmin = () => {
  return http.get(`/wx/login2`,)
}

//成功也自动登录
export const thirdpart = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/user/login/thirdpart?${query}`)
}

//微信绑定
export const wxbind = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/wx/bind?${query}`,)
}

//微信解绑
export const wxunbind = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/user/un_bind_wx?${query}`,)
}

//登录
export const userlogin = (body = {}) => {
  let b = Object.assign({}, body);
  b.password = (b.password && b.username) ? md5(b.username + md5(b.password)) : '';
  return http.post(`/user/login`, b);
};

//首页获取设备信息device/homeVmCountV2
export const deviceinfo = () => {
  return http.get(`device/homeVmCountV2`)
}

//指定商品指定时间段销售额和销售量home/productselldata
export const productselldata = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/home/productselldata?${query}`,)
}

//指定设备指定时间段销售额和销售量home/productselldata
export const productdevicedata = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/home/device_total_rank_click_total?${query}`,)
}

//按商品设备列表home/productselldatadetailbymachine
export const productselllist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/home/productselldatadetailbymachine?${query}`,)
}

//按商品设备列表home/productselldatadetailbymachine
export const productdevicelist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/home/device_total_rank_click_detail?${query}`,)
}

//按商品设备组列表home/productselldatadetailbygroup
export const productgrouplist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/home/productselldatadetailbygroup?${query}`,)
}

//按商品时间列表home/productselldatadetailbydate
export const producttimelist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/home/productselldatadetailbydate?${query}`,)
}

//按商品商品维度home/productselldatadetailbyproduct
export const productedlist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/home/productselldatadetailbyproduct?${query}`,)
}

//指定设备指定时间段销售额和销售量home/machinegroupselldata
export const deviceselldata = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/home/machinegroupselldata?${query}`,)
}

//指定设备指定时间段销售额和销售量home/machinegroupselldata
export const companyselldata = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/home/lChlAreaSellData?${query}`,)
}


//按设备设备列表home/machinegroupselldatadetailbymachine
export const deviceselllist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/home/machinegroupselldatadetailbymachine?${query}`,)
}

export const companyselllist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/home/lChlAreaSellDataDetailByMachine?${query}`,)
}

export const lackselllist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/vmUserInfoV2?${query}`,)
}

//财务明细
export const financedetail = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/getIoDetailV2?${query}`,)
}

//现金管理
export const cashlist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/cashManageV2?${query}`,)
}

//现金信息getReviewV2
export const getview = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/getReviewV2?${query}`,)
}

//财务新增类型下拉
export const gettypes = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/getTypeV2`,)
}

//财务新增
export const addfinancial = (body = {}) => {
  let query = toBodyString(body);
  return http.post(`/warehouse/addFinanceV2`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
};

//修改金额
export const fixcashmoney = (body = {}) => {
  let query = toBodyString(body);
  return http.post(`/warehouse/cashManageEditV2`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
};

//按设备设备组列表home/machinegroupselldatadetailbygroup
export const devicegrouplist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/home/machinegroupselldatadetailbygroup?${query}`,)
}

export const companygrouplist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/home/lChlAreaSellDataDetailByProduct?${query}`,)
}

//按设备时间列表home/machinegroupselldatadetailbydate
export const devicetimelist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/home/machinegroupselldatadetailbydate?${query}`,)
}

export const companytimelist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/home/lChlAreaSellDataDetailByData?${query}`,)
}

//按设备商品列表home/machinegroupselldatadetailbyproduct
export const deviceproductlist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/home/machinegroupselldatadetailbyproduct?${query}`,)
}


//销售数据device/sellDataV2
export const deviceindexsell = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/sellDataV2?${query}`,)
}

//销售数据的图形device/machinehourselldata
export const deviceoneechart = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/machinehourselldata?${query}`,)
}

//首页缺货device/homeVmOffV2
export const homeoff = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`device/homeVmOffV2?${query}`)
}

//首页空道device/homeVmMonitor
export const homemonitor = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`device/homeVmMonitorV2?${query}`)
}

//首页缺货按设备/设备组device/homeVmOffGroupV2
export const homegroup = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`device/homeVmOffGroupV2?${query}`)
}

//缺货商品详情device/homeVmOffInfoV2
export const homegroupdetail = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`device/homeVmOffInfoV2?${query}`)
}

//首页缺品类按设备/设备组device/lack_goods_type_by_device
export const homelack = (body={}) => {
  let query = toBodyString(body);
  return http.get(`device/lack_goods_type?${query}`)
}

//首页缺品相按设备/设备组device/lack_px_list
export const homexiang = (body={}) => {
  let query = toBodyString(body);
  return http.get(`device/lack_px_list?${query}`)
}

//缺品类详情device/get_lack_goods_type_detail
export const lackdetail = (body={}) => {
  let query = toBodyString(body);
  return http.get(`device/get_lack_goods_type_detail?${query}`)
}

//查看空道

//首页-设备故障device/homeVmErrorV2
export const deviceerror = (body={}) => {
  let query = toBodyString(body);
  return http.get(`device/homeVmErrorV2?${query}`)
}

//首页-统计详情device/homeVmErrorV2
export const errordetail = (body={}) => {
  let query = toBodyString(body);
  return http.get(`device/VmErrorV2?${query}`)
}

/**
 * 注销登录
 */
export const logout = (param = {}) => {
  return http.get(`/user/quit`)
}

/*
 *
 * 获取菜单权限
 *
 * */
export const current = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/user/current?${query}`);
};

/**
 * 个人信息
 * @param {*} param
 */
export const userinfo = (param = {}) => {
  let query = toBodyString(param);
  return http.get(`user/info?${query}`)
}




/*点位location_area/area_list*/
export const pointindex = (body = {}) => {
  const query = toBodyString(body);
  return http.get(`location_area/v2/area_list?${query}`)
}

//获取区域
export const getarea = (body = {}) => {
  const query = toBodyString(body);
  return http.get(`location_area/v2/add_edit_area?${query}`)
}

//新增点位get
export const addpoint = (body = {}) => {
  return http.post(`location_area/v2/add_edit_area`,body,{
    headers: {
      'Content-Type': 'form-data'
    }
  })
}

//删除点位deleteLi
export const deletepoint = (body = {}) => {
  const query = toBodyString(body);
  return http.get(`location_area/v2/delete_area?${query}`)
}

//获取点位信息(新增，编辑，预览,上传点位图片)location_area/location_detail_info
export const previewpoint = (body = {}) => {
  const query = toBodyString(body);
  return http.get(`location_area/v2/location_detail_info?${query}`)
}

//删除点位信息location_area/delete_location_detail
export const deletepointdata = (body = {}) => {
  const query = toBodyString(body);
  return http.get(`location_area/v2/delete_location_detail?${query}`)
}


//点位数据列表location_area/location_detail_list
export const pointdetail=(body={})=>{
  const query = toBodyString(body);
  return http.get(`location_area/v2/location_detail_list?${query}`)
}

//申请机器location_area/apply_vm
export const applyvm=(body={})=>{
  return http.post(`location_area/v2/apply_vm`,body)
}

//新增修改点位区域
export const addareapoint=(body={})=>{
  return http.post(`location_area/v2/add_edit_location_detail`,body)
}

//查看原因location_area/v2/get_refuse_reason
export const checkreason=(body={})=>{
  const query = toBodyString(body);
  return http.get(`location_area/v2/get_refuse_reason?${query}`)
}

//处理申请/location_area/v2/get_apply_info
export const handlestate=(body={})=>{
  return http.post(`location_area/v2/get_apply_info`,body)
}

//操作人/location_area/v2/operator
export const operator=(body={})=>{
  const query = toBodyString(body);
  return http.get(`location_area/v2/operator?${query}`)
}

//提交操作人/location_area/v2/set_operator
export const setoperator=(body={})=>{
  let query = toBodyString(body);
  return http.post(`location_area/v2/set_operator`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

//提交处理location_area/v2/deal_apply_Info
export const commitdata=(body={})=>{
  let query = toBodyString(body);
  return http.post(`location_area/v2/deal_apply_Info`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

//获取施工人员信息location_area/v2/get_assign_build_user
export const getassign = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/location_area/v2/get_assign_build_user?${query}`);
};

//获取补货人信息location_area/v2/get_replenishment_user
export const getreplent = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/location_area/v2/get_replenishment_user?${query}`);
};

//入库确认warehouse/inAllowV2
export const inallow = (body = {}) => {
  let query = toBodyString(body);
  return http.post(`warehouse/inAllowV2`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
};

//拒绝/warehouse/refuseInfoV2
export const refuzeinfo=(body={})=>{
  let query = toBodyString(body);
  return http.get(`/warehouse/refuseInfoV2?${query}`);
}

//设置点位施工人员location_area/set_assign_build_user
export const setassign = (body = {}) => {
  let query = toBodyString(body);
  return http.post(`location_area/v2/set_assign_build_user`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
};

//获取mac地址location_area/v2/get_location_detail_macs
export const getmac = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/location_area/v2/get_location_detail_macs?${query}`);
};

//修改，提交mac地址location_area/v2/drop_point
export const droppoint = (body = {}) => {
  return http.post(`location_area/v2/drop_point`,body)
}

//实施完成location_area/v2/build_end
export const buildend=(body={})=>{
  let query = toBodyString(body);
  return http.post(`location_area/v2/build_end`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

//设备列表api/location_area/v2/vm_list
export const vmlist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/location_area/v2/vm_list?${query}`);
};

//获取补货人员location_area/set_replenishment_user
export const replenishuser=(body={})=>{
  let query = toBodyString(body);
  return http.post(`location_area/v2/set_replenishment_user`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}




/*商品接口************************************************************************/

//采购管理warehouse/inWarehouseV2
export const inwarehouse = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/inWarehouseV2?${query}`);
};

export const inwarecheck = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/inCheckV2?${query}`);
};

//入库管理(详情)warehouse/getIwhInfoV2
export const inwarecheckdetail = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/getIwhInfoV2?${query}`);
};

//warehouse/updateInV2
export const updateinpro=(body={})=>{
  let query = toBodyString(body);
  return http.post(`warehouse/updateInV2`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

//商品管理首页warehouse/getWarehouseInfoV2
export const storehouse = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/getWarehouseInfoV2?${query}`);
};

//商品管理首页warehouse/deleteWHV2
export const deletestore = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/deleteWHV2?${query}`);
};

export const cancelstore = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/getOwhInfoV2?${query}`);
};

//库存商品清单
export const productlist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/getIoInfoV2?${query}`);
};

//提交
export const addoutcheck=(body={})=>{
  let query = toBodyString(body);
  return http.post(`warehouse/addOutCheckV2`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

//提交
export const pgstatesubmit=(body={})=>{
  let query = toBodyString(body);
  return http.post(`warehouse/pgStateSubmitV2`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

//下拉获取库存
export const getcountdata = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/getPwCount?${query}`);
};


export const refuseOutWarehouse = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/refuseOutWarehouse?${query}`);
};

export const storeapply=(body={})=>{
  let query = toBodyString(body);
  return http.post(`warehouse/procurementV2`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

export const reprocurement=(body={})=>{
  let query = toBodyString(body);
  return http.post(`warehouse/reProcurementV2`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

//直接入库
export const instorefn=(body={})=>{
  let query = toBodyString(body);
  return http.post(`warehouse/directIwV2`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

export const storerefuze=(body={})=>{
  let query = toBodyString(body);
  return http.post(`warehouse/reProcurementV2`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

//数量参考
export const numberref = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/getWarehouseInfoV2?${query}`);
};

//库存
export const stockdata = (body={}) => {
  let query = toBodyString(body);
  return http.get(`warehouse/getWarehouseInfoV2?${query}`)
}

//府库清单inWarehouse/warelist
export const inwarelist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/inWarehouse/warelist?${query}`);
};

export const warelist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/inWarehouse/inWareTotal?${query}`);
};

//获取入库统计详情
export const storedetails = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/inWarehouse/inWareTotalDetail?${query}`);
};

//获取入库统计详情
export const storeddetails = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/getOwhInfoV2?${query}`);
};

//出库审批warehouse/auditOwhV2
export const auditcheck=(body={})=>{
  let query = toBodyString(body);
  return http.post(`warehouse/auditOwhV2`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

//退货审批warehouse/auditOwhV2
export const refundconfirm=(body={})=>{
  let query = toBodyString(body);
  return http.post(`warehouse/b2bRefundConfirm`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

//出库管理warehouse/outWarehouseV2
export const outstoredata = (body = {}) => {
  const query = toBodyString(body);
  return http.get(`/warehouse/outWarehouseV2?${query}`)
}

//仓库金额和数量warehouseManagementV2
export const storemoneynumber = (body = {}) => {
  const query = toBodyString(body);
  return http.get(`/warehouse/warehouseManagementV2?${query}`)
}

//一键采购oneKeyApplyV2
export const onekeyapply = (body = {}) => {
  const query = toBodyString(body);
  return http.get(`/warehouse/oneKeyApplyV2?${query}`)
}

//采购审核getPgApplyInFoV2
export const procureapply = (body = {}) => {
  const query = toBodyString(body);
  return http.get(`/warehouse/getPgApplyInFoV2?${query}`)
}

//采购reAuditIwhV2
export const readuit = (body = {}) => {
  const query = toBodyString(body);
  return http.get(`/warehouse/reAuditIwhV2?${query}`)
}

//采购舒心
export const refreash = (body = {}) => {
  const query = toBodyString(body);
  return http.get(`/warehouse/refresh?${query}`)
}

//入库待审核getIwInfoV2
export const instorechecked = (body = {}) => {
  const query = toBodyString(body);
  return http.get(`/warehouse/getIwInfoV2?${query}`)
}

//提交页面跳转
export const pagecommit = (body = {}) => {
  return http.post(`location_area/v2/add_edit_area`,body,{
    headers: {
      'Content-Type': 'form-data'
    }
  })
}




//入库提交warehouse/iwConfirmV2
export const instorecommit=(body={})=>{
  let query = toBodyString(body);
  return http.post(`warehouse/iwConfirmV2`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

//添加商品接口warehouse/auditIwhV2
export const auditiwh=(body={})=>{
  let query = toBodyString(body);
  return http.post(`warehouse/auditIwhV2`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

//欠货处理
export const qhhandle=(body={})=>{
  let query = toBodyString(body);
  return http.post(`warehouse/iwConfirmV2`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

//合同列表
export const constract=(body={})=>{
  let query = toBodyString(body);
  return http.get(`/warehouse/getContractNumber?${query}`);
}

//拒绝warehouse/refusePgApply
export const refuzereason=(body={})=>{
  let query = toBodyString(body);
  return http.get(`/warehouse/refusePgApply?${query}`);
}

//获取箱数warehouse/getSpecs
export const getspecs=(body={})=>{
  let query = toBodyString(body);
  return http.get(`/warehouse/getSpecs?${query}`);
}


//获取出库清单详情outWarehouse/outDetail
export const goodsdetail = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/outWarehouse/outDetail?${query}`);
};

//出库清单待出库outWarehouse/outWait
export const outwait = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/outWarehouse/outWait?${query}`);
};

//待出库处理
export const handelwait = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/inWarehouse/warelistDetail?${query}`);
};

//已出库outWarehouse/outFinished
export const outfinish = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/outWarehouse/outFinished?${query}`);
};

//获取出库统计(商品)
export const outtotal = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/outWarehouse/outWareTotal?${query}`);
};

//获取出库统计(出货人)
export const outpeople = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/outWarehouse/outWareUserTotal?${query}`);
};

//获取出库商品详情outWarehouse/outWareTotalDetail
export const productdetail = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/outWarehouse/outWareTotalDetail?${query}`);
};

//取消申请cancelAuditV2
export const cancelaudit = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/cancelAuditV2?${query}`);
};

//取消采购cancelAuditV2
export const cancelorder = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/cancelOrder?${query}`);
};


//重新提交cancelAuditV2
export const reconfirm=(body={})=>{
  let query = toBodyString(body);
  return http.post(`/warehouse/procurementForSaveV2`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

//获取出库人详情outWarehouse/outUserDetail
export const peopledetail = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/outWarehouse/outUserDetail?${query}`);
};

//获取库存详情warehouse/warehouseList
export const productstore = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/warehouseList?${query}`);
};

//获取库存详情warehouse/getWarehouseInfoV2
export const storehousedetail = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/getWarehouseInfoV2?${query}`);
};

//获取签到列表device/signedInfoV2
export const signlist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/signedInfoV2?${query}`);
};

export const errortotal = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/VmErrorV2?${query}`);
};

//选择商品接口opgoods/goodslist
export const goodslist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/opgoods/goodslist?${query}`);
};

//提货商品接口opgoods/getWhGoodsV2
export const getwhgoods = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/getWhGoodsV2?${query}`);
};

//直接出库的商品下拉warehouse/getWhGoodsV2
export const goodsoutlist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/getWhGoodsV2?${query}`);
};

//设备编号下拉device/deviceListV2
export const devicedown = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/deviceListV2?${query}`);
};

//添加商品接口inWarehouse/addList
export const addlist=(body={})=>{
  let query = toBodyString(body);
  return http.post(`inWarehouse/addList`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

//添加出库商品接口outWarehouse/outBathList
export const addgoodslist=(body={})=>{
  let query = toBodyString(body);
  return http.post(`outWarehouse/outBathList`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

//获取出货员接口outWarehouse/outUserInfo
export const outuserinfo = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/outWarehouse/outUserInfo?${query}`);
}

/*设备接口************************************************************************/

export const deviceindex = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/deviceListV2?${query}`);
};

//设备组
export const deviceGroups = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/deviceGroupV2?${query}`);
};

//设备组
export const devicemanageGroups = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/getVmGroupListV2?${query}`);
};

//设备信息
export const deviceInfos = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/deviceInfoV2?${query}`);
};


//空道详情
export const offMonitorInfo = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/offMonitorInfoV2?${query}`);
};

//一键补满device/oneKeyFillUp
export const onekeyfull = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/oneKeyFillUp?${query}`);
};

//签到历史
export const signedInfo = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/signedInfoV2?${query}`);
};
 //故障
export const vmError = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/VmErrorV2?${query}`);
};

 //故障恢复
export const updateVmError = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/updateVmErrorV2?${query}`);
};

  //获取交易订单详情
export const orderInfo = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/orderInfoV2?${query}`);
};

  //历史变动
export const historychange = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/getVmMoveListV2?${query}`);
};

  //商品统计
export const soldInfo = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/soldInfoV2?${query}`);
};

//销售数据详情
export const sellData = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/sellDataV2?${query}`);
};
//所有设备类型
export const vmType = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/VmTypeV2?${query}`);
};


//所有设备模块
export const vmTemp = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/VmTempV2?${query}`);
};

//所有设备组
export const vmGroup = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/VmGroupV2?${query}`);
};

//设备信息更新(以及开关机)
export const updateInfo = (body = {}) => {
  return http.post(`device/updateInfoV2`,body)
};

//移机接口updateInfo_moveV2
export const moveinfo = (body = {}) => {
  return http.post(`device/updateInfo_moveV2`,body)
};

//货道管理
export const monitorInfo = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/op/aisle_list?${query}`);
};

//设备变更状态(启用状态)
export const changeVmState = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/changeVmStateV2?${query}`);
};

/*//货道补货
export const updateAisle = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/updateAisleV2?${query}`);
};*/

//货到换货
export const changeAisle = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/changeAisleV2?${query}`);
};

//获取所有商品
export const productInfo = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/productInfoV2?${query}`);
};

//补货提交device/updateAisleV2
export const tasksubmit = (body = {}) => {
  return http.post(`/op/v2/tasksubmit`,body)
};

//省市街道device/getPccIdV2
export const devicepccid = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/getPccIdV2?${query}`);
};

//公司下拉warehouse/getCompanyListV2
export const getcompanylist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/getCompanyListV2?${query}`);
};

//运营商device/userInfoV2
export const getcompany = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/userInfoV2?${query}`);
};

/**
 * 修改密码
 */
export const changepass = (body = {}) => {
  console.info(body)
  let b = Object.assign({}, body);
  b.oldpass = (b.oldpass && b.email) ? md5(b.email + md5(b.oldpass)) : '';
  b.newpass = (b.newpass && b.email) ? md5(b.email + md5(b.newpass)) : '';
  let query = toBodyString(b);
  return http.post(`/user/alterpasss`, query, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}


/**
 * 问题反馈
 */
export const feedback = (body = {}) => {
  return http.post(`/user/complaint`, body, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}


/*补货*/
export const current2 = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/user/current?${query}`);
};

//3个状态
export const pastate = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/pgStateV2?${query}`);
};

export const ophome = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/VmHomeV2?${query}`);
};

export const gooddetail = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/op/particulars?${query}`);
};

export const qualitydetail = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/op/vm_surplus_product?${query}`);
};

/*出库记录列表*/
export const repapply = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/pickUpGoodsV2?${query}`);
};

export const repapplydetail = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/replenishment/apply_record_detail?${query}`);
};

export const repsaleref = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/replenishment/goods_reference?${query}`);
};

export const settemplate = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/pgFormWorkV2?${query}`);
};

export const changestore = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/op/ailse_config_list?${query}`);
};

//修改货道
export const changeconfirm=(body={})=>{
  let query = toBodyString(body);
  return http.post(`/op/ailse_change`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

//获取所有商品的列表
export const getallproducts = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/admin/common/product_list?${query}`);
};

//申请查看历史记录work_report/apply_money_history
export const applymoneyhistory = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/work_report/apply_money_history?${query}`);
};

//提货申请warehouse/pgApplyV2
export const addapply=(body={})=>{
  let query = toBodyString(body);
  return http.post(`/warehouse/pgApplyV2`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

//提款申请work_report/apply_money
export const applymoney=(body={})=>{
  let query = toBodyString(body);
  return http.post(`work_report/apply_money`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

//直接出库warehouse/directOutbound
export const lineout=(body={})=>{
  let query = toBodyString(body);
  return http.post(`warehouse/directOutbound`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

//退货到商城
export const backmall=(body={})=>{
  let query = toBodyString(body);
  return http.post(`warehouse/b2bRefund`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

//提货申请提交warehouse/refuseOutWarehouseV2
export const refuzewarehouse=(body={})=>{
  let query = toBodyString(body);
  return http.post(`warehouse/refuseOutWarehouseV2`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

/*现金上交device/cashUpV2*/
export const cashup = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/cashUpV2?${query}`);
};

//上交金额device/addCashV2
export const addcash=(body={})=>{
  let query = toBodyString(body);
  return http.post(`device/addCashV2`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}


/*资产管理*/
export const assetlist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/asset/asset_list?${query}`);
};

//机器列表
export const assetvmlist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/asset/vm_list?${query}`);
};

//机器列表
export const assetvmdetail = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/asset/vm_list_detail?${query}`);
};

//获取厂家信息
export const getvendorlist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/asset/get_vendor_list?${query}`);
};

//获取租赁方
export const getrenterlist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/asset/get_renter_list?${query}`);
};

//获取编辑初始化信息
export const initassetinfo = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/asset/asset_info?${query}`);
};

//新增或者编辑
export const addeditasset = (body = {}) => {
  let query = toBodyString(body);
  return http.post(`/asset/add_edit_asset`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
};

//添加厂家信息
export const addvendordata = (body = {}) => {
  let query = toBodyString(body);
  return http.post(`/asset/add_vendor`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
};

//添加租赁方信息
export const addrenterdata = (body = {}) => {
  let query = toBodyString(body);
  return http.post(`/asset/add_renter`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
};

//工作日报/work_report/user_work_info
export const userwork = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/work_report/user_work_info?${query}`);
};

//历史日报/work_report/work_info_list
export const historywork = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/work_report/work_info_list?${query}`);
};

//历史日报详情work_report/work_info_detail
export const historyworkdetail = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/work_report/work_info_detail?${query}`);
};

//提交工作日报信息work_report/submit_work_record
export const commitreprot = (body = {}) => {
  let query = toBodyString(body);
  return http.post(`/work_report/submit_work_record`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
};

//账号列表account/user_list
export const accountlist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/account/user_list?${query}`,)
}

//账号列表device/getVmGroupBelongV2
export const getvmbelong = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/getVmGroupBelongV2?${query}`,)
}

//账号等级
export const accountlevellist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/account/user_level_list?${query}`,)
}

//删除账号
export const accountdeletelist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/account/delete_user?${query}`,)
}

//查看账号
export const accountuserinfo = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/account/user_info?${query}`,)
}

//机器归属
export const machinevmlist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/account/vm_list?${query}`,)
}

//设置账号权限，角色列表
export const accountrolelist = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/account/role_list?${query}`,)
}

//删除角色
export const accountdeleterole = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/account/delete_role?${query}`,)
}

//重置密码，更改状态
export const changeaccountstate = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/account/update_user_info_state?${query}`,)
}

//账号新增或者编辑
export const accountaddedit = (body = {}) => {
  let query = toBodyString(body);
  return http.post(`/account/add_edit_user`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
};

//设置用户机器归属
export const accountsetuser = (body = {}) => {
  let query = toBodyString(body);
  return http.post(`/account/set_user_vm_list`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
};

//设置角色权限
export const setroleright = (body = {}) => {
  let query = toBodyString(body);
  return http.post(`/account/set_role_right`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
};

//获取角色权限account/get_role_right
export const getroleright = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/account/get_role_right?${query}`,)
}


//设置账号权限，设置角色
export const setuserrole = (body = {}) => {
  let query = toBodyString(body);
  return http.post(`/account/set_user_role`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
};


//设备分组管理-删除deleteVmGroupV2
export const deletevmgroup = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/deleteVmGroupV2?${query}`,)
}

//所属区域getBelongAreaV2
export const getbelongarea = () => {
  return http.get(`/device/getBelongAreaV2`,)
}

//获取4个主管的接口getMasterV2
export const getmaster = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/getMasterV2?${query}`,)
}

//新增和编辑提交分组addOrEditVmGroupV2
export const addeditgroup = (body = {}) => {
  let query = toBodyString(body);
  return http.post(`/device/addOrEditVmGroupV2`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
};

//编辑获取分组数据getVmGroupInfoV2
export const getvminfo = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/getVmGroupInfoV2?${query}`,)
}


//机器属性提交
export const machinecommit = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/device/addVmGroupBelongV2?${query}`,)
}

//仓库绑定提交bindingWHV2
export const storebind = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/bindingWHV2?${query}`,)
}

//获取编辑信息warehouse/getPWInfoV2
export const getstoreinfo = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`/warehouse/getPWInfoV2?${query}`,)
}


//新增仓库信息
export const addstoreinfo = (body = {}) => {
  let query = toBodyString(body);
  return http.post(`/warehouse/addOrEditWHV2`,query,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
};




