
import {
  homeoff,
  homemonitor,
  homegroup,
  homegroupdetail,
  homelack,
  homexiang,
  lackdetail,
  deviceerror,
  signlist,
  errortotal,
  errordetail,
  indexsale,
  totalsaledetail,
  selldatadetail,
  sellzudetail,
  selltimedetail,
  selltypedetail,
  productrank,
  lackrank,
  shebeirank,
  devicerank,
  companyrank,
  indexecharts,
  wxlogin,
  wxloginadmin,
  changepass,
  feedback,
  thirdpart,
  wxbind,
  wxunbind,
  userlogin,
  deviceinfo,
  productselldata,
  productdevicedata,
  productselllist,
  productdevicelist,
  productgrouplist,
  producttimelist,
  productedlist,
  deviceselldata,
  companyselldata,
  deviceselllist,
  companyselllist,
  lackselllist,
  devicegrouplist,
  companygrouplist,
  devicetimelist,
  companytimelist,
  deviceproductlist,
  deviceindexsell,
  deviceoneechart,
  current,
  userinfo,
  logout,
  pointindex,
  addpoint,
  getarea,
  deletepoint,
  previewpoint,
  deletepointdata,
  pointdetail,
  applyvm,
  financedetail,
  gettypes,
  addfinancial,
  checkreason,
  getmac,
  droppoint,
  handlestate,
  operator,
  setoperator,
  commitdata,
  getreplent,
  getassign,
  setassign,
  addareapoint,
  buildend,
  vmlist,
  replenishuser,
  homeworkreport,
  lineout,
  cashlist,
  instorechecked,
  onekeyapply,
  fixcashmoney,
  getcompanylist,
  devicemanageGroups,
  getview,
  getspecs,
  backmall,



  /*商品*/
  auditcheck,
  refundconfirm,
  inwarecheckdetail,
  instorecommit,
  updateinpro,
  storehouse,
  productlist,
  inwarehouse,
  inwarecheck,
  inallow,
  refuzeinfo,
  getcountdata,
  addoutcheck,
  cancelstore,
  storeapply,
  reprocurement,
  numberref,
  stockdata,
  storehousedetail,
  outstoredata,
  inwarelist,
  warelist,
  goodsdetail,
  storedetails,
  storeddetails,
  outwait,
  handelwait,
  outfinish,
  outtotal,
  outpeople,
  productdetail,
  peopledetail,
  productstore,
  goodslist,
  addlist,
  addgoodslist,
  outuserinfo,
  storemoneynumber,
  procureapply,
  goodsoutlist,
  auditiwh,
  qhhandle,
  constract,
  refuzereason,
  storerefuze,
  getwhgoods,
  moveinfo,
  historychange,
  cancelaudit,
  cancelorder,
  reconfirm,





  /*设备*/
  deviceindex,
  deviceGroups,
  pgstatesubmit,
  deviceInfos,
  refuseOutWarehouse,
  offMonitorInfo,
  signedInfo,
  vmError,
  updateVmError,
  orderInfo,
  soldInfo,
  sellData,
  vmType,
  vmTemp,
  vmGroup,
  updateInfo,
  monitorInfo,
  changeVmState,
  // updateAisle,
  changeAisle,
  productInfo,
  tasksubmit,
  devicepccid,
  getcompany,
  devicedown,
  readuit,
  refreash,




  /*补货*/
  current2,
  refuzewarehouse,
  pastate,
  ophome,
  gooddetail,
  qualitydetail,
  repapply,
  repapplydetail,
  repsaleref,
  addapply,
  cashup,
  addcash,
  userwork,
  historywork,
  historyworkdetail,
  commitreprot,
  onekeyfull,
  settemplate,
  changestore,
  getallproducts,
  changeconfirm,
  //aislemanage,

  /*资产管理*/
  assetlist,
  assetvmlist,
  assetvmdetail,
  getvendorlist,
  getrenterlist,
  addeditasset,
  initassetinfo,
  addvendordata,
  addrenterdata,
  applymoney,
  applymoneyhistory,


  accountlist,
  accountdeletelist,
  accountlevellist,
  accountaddedit,
  accountuserinfo,
  machinevmlist,
  accountsetuser,
  accountrolelist,
  accountdeleterole,
  changeaccountstate,
  getroleright,
  setroleright,
  setuserrole,
  deletevmgroup,
  getbelongarea,
  getmaster,
  addeditgroup,
  getvminfo,
  getvmbelong,
  machinecommit,
  deletestore,
  storebind,
  getstoreinfo,
  addstoreinfo,
  pagecommit,
  instorefn



} from "../server/index-server"

const state={

}

const getters =  {

}

const actions = {

  async indexsale_({commit,state},body){
    return await indexsale(body)
  },

  async totalsaledetail_({commit,state},body){
    return await totalsaledetail(body)
  },

  async selldatadetail_({commit,state},body){
    return await selldatadetail(body)
  },

  async sellzudetail_({commit,state},body){
    return await sellzudetail(body)
  },

  async selltimedetail_({commit,state},body){
    return await selltimedetail(body)
  },

  async selltypedetail_({commit,state},body){
    return await selltypedetail(body)
  },

  async productrank_({commit,state},body){
    return await productrank(body)
  },

  /*缺品类*/
  async lackrank_({commit,state},body){
    return await lackrank(body)
  },

  async shebeirank_({commit,state},body){
    return await shebeirank(body)
  },

  async devicerank_({commit,state},body){
    return await devicerank(body)
  },

  async companyrank_({commit,state},body){
    return await companyrank(body)
  },

  async indexecharts_({commit,state},body){
    return await indexecharts(body)
  },

  async wxlogin_({commit, state}) {
    return await wxlogin();
  },

  async thirdpart_({commit, state},body) {
    return await thirdpart(body);
  },

  async wxloginadmin_({commit, state}) {
    return await wxloginadmin();
  },

  async wxbind_({commit, state},body) {
    return await wxbind(body);
  },

  async wxunbind_({commit, state},body) {
    return await wxunbind(body);
  },

  async current_({commit, state}, body) {
    return await current(body);
  },

  async userinfo_({commit, state}, param) {
    return await userinfo(param)
  },

  async deviceinfo_({commit, state}) {
    return await deviceinfo()
  },

  async productdevicedata_({commit, state}, body) {
    return await productdevicedata(body);
  },

  async productselldata_({commit, state}, body) {
    return await productselldata(body);
  },

  async productdevicelist_({commit, state}, body) {
    return await productdevicelist(body);
  },

  async productselllist_({commit, state}, body) {
    return await productselllist(body);
  },

  async productgrouplist_({commit, state}, body) {
    return await productgrouplist(body);
  },

  async producttimelist_({commit, state}, body) {
    return await producttimelist(body);
  },

  async productedlist_({commit, state}, body) {
    return await productedlist(body);
  },

  async deviceselldata_({commit, state}, body) {
    return await deviceselldata(body);
  },

  async companyselldata_({commit, state}, body) {
    return await companyselldata(body);
  },

  async deviceselllist_({commit, state}, body) {
    return await deviceselllist(body);
  },

  async companyselllist_({commit, state}, body) {
    return await companyselllist(body);
  },

  async lackselllist_({commit, state}, body) {
    return await lackselllist(body);
  },

  async financedetail_({commit, state}, body) {
    return await financedetail(body);
  },

  async cashlist_({commit, state}, body) {
    return await cashlist(body);
  },

  async getview_({commit, state}, body) {
    return await getview(body);
  },

  async fixcashmoney_({commit, state}, body) {
    return await fixcashmoney(body);
  },

  async gettypes_({commit, state}, body) {
    return await gettypes(body);
  },

  async addfinancial_({commit, state}, body) {
    return await addfinancial(body);
  },

  async homeworkreport_({commit, state}, body) {
    return await homeworkreport(body);
  },

  async devicegrouplist_({commit, state}, body) {
    return await devicegrouplist(body);
  },

  async companygrouplist_({commit, state}, body) {
    return await companygrouplist(body);
  },

  async devicetimelist_({commit, state}, body) {
    return await devicetimelist(body);
  },

  async companytimelist_({commit, state}, body) {
    return await companytimelist(body);
  },

  async deviceproductlist_({commit, state}, body) {
    return await deviceproductlist(body);
  },

  async deviceindexsell_({commit, state}, body) {
    return await deviceindexsell(body);
  },

  async deviceoneechart_({commit, state}, body) {
    return await deviceoneechart(body);
  },

  async homeoff_({commit, state}, body) {
    return await homeoff(body);
  },

  async deviceerror_({commit, state}, body) {
    return await deviceerror(body);
  },

  async errordetail_({commit, state}, body) {
    return await errordetail(body);
  },

  async homemonitor_({commit, state}, body) {
    return await homemonitor(body);
  },

  async homegroup_({commit, state}, body) {
    return await homegroup(body);
  },

  async homegroupdetail_({commit, state}, body) {
    return await homegroupdetail(body);
  },

  async homelack_({commit, state}, body) {
    return await homelack(body);
  },

  async homexiang_({commit, state}, body) {
    return await homexiang(body);
  },

  async lackdetail_({commit, state}, body) {
    return await lackdetail(body);
  },


  async logout_({commit, state}, param) {
    return await logout(param)
  },

  async userlogin_({commit, state}, body) {
    return await userlogin(body);
  },

  async pointindex_({commit, state}, body) {
    return await pointindex(body);
  },

  async getarea_({commit, state}, body) {
    return await getarea(body);
  },

  async addpoint_({commit, state}, body) {
    return await addpoint(body);
  },

  async deletepoint_({commit, state}, body) {
    return await deletepoint(body);
  },

  async previewpoint_({commit, state}, body) {
    return await previewpoint(body);
  },

  async deletepointdata_({commit, state}, body) {
    return await deletepointdata(body);
  },

  //
  async pointdetail_({commit, state}, body) {
    return await pointdetail(body);
  },

  async addareapoint_({commit, state}, body) {
    return await addareapoint(body);
  },

  async applyvm_({commit, state}, body) {
    return await applyvm(body);
  },

  async checkreason_({commit, state}, body) {
    return await checkreason(body);
  },

  async handlestate_({commit, state}, body) {
    return await handlestate(body);
  },

  async operator_({commit, state}, body) {
    return await operator(body);
  },

  async setoperator_({commit, state}, body) {
    return await setoperator(body);
  },

  async commitdata_({commit, state}, body) {
    return await commitdata(body);
  },

  async getreplent_({commit, state}, body) {
    return await getreplent(body);
  },

  async getassign_({commit, state}, body) {
    return await getassign(body);
  },

  async setassign_({commit, state}, body) {
    return await setassign(body);
  },

  async getmac_({commit, state}, body) {
    return await getmac(body);
  },

  async droppoint_({commit, state}, body) {
    return await droppoint(body);
  },

  async buildend_({commit, state}, body) {
    return await buildend(body);
  },

  async vmlist_({commit, state}, body) {
    return await vmlist(body);
  },

  async replenishuser_({commit, state}, body) {
    return await replenishuser(body);
  },


  /*商品*****************************************/
  async refuseOutWarehouse_({commit, state},body) {
    return await refuseOutWarehouse(body);
  },

  async updateinpro_({commit, state},body) {
    return await updateinpro(body);
  },

  async storehouse_({commit, state},body) {
    return await storehouse(body);
  },

  async deletestore_({commit, state},body) {
    return await deletestore(body);
  },

  async productlist_({commit, state},body) {
    return await productlist(body);
  },

  async refuzeinfo_({commit, state},body) {
    return await refuzeinfo(body);
  },

  async inwarehouse_({commit, state},body) {
    return await inwarehouse(body);
  },

  async inwarecheck_({commit, state},body) {
    return await inwarecheck(body);
  },

  async inallow_({commit, state},body) {
    return await inallow(body);
  },

  async getcountdata_({commit, state},body) {
    return await getcountdata(body);
  },

  async addoutcheck_({commit, state},body) {
    return await addoutcheck(body);
  },

  async cancelstore_({commit, state},body) {
    return await cancelstore(body);
  },

  async storeapply_({commit, state}, body) {
    return await storeapply(body);
  },

  async reprocurement_({commit, state}, body) {
    return await reprocurement(body);
  },

  async instorefn_({commit, state}, body) {
    return await instorefn(body);
  },

  async storerefuze_({commit, state}, body) {
    return await storerefuze(body);
  },

  async auditiwh_({commit, state}, body) {
    return await auditiwh(body);
  },

  async qhhandle_({commit, state}, body) {
    return await qhhandle(body);
  },

  async constract_({commit, state}, body) {
    return await constract(body);
  },

  async refuzereason_({commit, state}, body) {
    return await refuzereason(body);
  },

  async numberref_({commit, state}, body) {
    return await numberref(body);
  },

  async stockdata_({commit, state}, body) {
    return await stockdata(body);
  },

  async storehousedetail_({commit,state},body){
    return await storehousedetail(body)
  },

  async outstoredata_({commit,state},body){
    return await outstoredata(body)
  },

  async inwarecheckdetail_({commit,state},body){
    return await inwarecheckdetail(body)
  },

  async storemoneynumber_({commit,state},body){
    return await storemoneynumber(body)
  },

  async onekeyapply_({commit,state},body){
    return await onekeyapply(body)
  },

  async procureapply_({commit,state},body){
    return await procureapply(body)
  },

  async readuit_({commit,state},body){
    return await readuit(body)
  },

  async refreash_({commit,state},body){
    return await refreash(body)
  },

  async cancelaudit_({commit,state},body){
    return await cancelaudit(body)
  },

  async getspecs_({commit,state},body){
    return await getspecs(body)
  },

  async cancelorder_({commit,state},body){
    return await cancelorder(body)
  },

  async reconfirm_({commit,state},body){
    return await reconfirm(body)
  },

  async instorechecked_({commit,state},body){
    return await instorechecked(body)
  },

  async pagecommit_({commit,state},body){
    return await pagecommit(body)
  },

  async inwarelist_({commit, state},body) {
    return await inwarelist(body);
  },

  async warelist_({commit, state},body) {
    return await warelist(body);
  },

  async goodsdetail_({commit, state},body) {
    return await goodsdetail(body);
  },

  async storedetails_({commit, state},body) {
    return await storedetails(body);
  },

  async instorecommit_({commit, state},body) {
    return await instorecommit(body);
  },

  async storeddetails_({commit, state},body) {
    return await storeddetails(body);
  },

  async auditcheck_({commit, state},body) {
    return await auditcheck(body);
  },

  async refundconfirm_({commit, state},body) {
    return await refundconfirm(body);
  },

  async outwait_({commit, state},body) {
    return await outwait(body);
  },

  async outtotal_({commit,state},body){
    return await outtotal(body)
  },

  async outpeople_({commit,state},body){
    return await outpeople(body)
  },

  async productdetail_({commit,state},body){
    return await productdetail(body)
  },

  async peopledetail_({commit,state},body){
    return await peopledetail(body)
  },

  async productstore_({commit,state},body){
    return await productstore(body)
  },

  async signlist_({commit,state},body){
    return await signlist(body)
  },

  async errortotal_({commit,state},body){
    return await errortotal(body)
  },

  async handelwait_({commit,state},body){
    return await handelwait(body)
  },

  async outfinish_({commit,state},body){
    return await outfinish(body)
  },

  async goodslist_({commit,state},body){
    return await goodslist(body)
  },

  async getwhgoods_({commit,state},body){
    return await getwhgoods(body)
  },

  async goodsoutlist_({commit,state},body){
    return await goodsoutlist(body)
  },

  async devicedown_({commit,state},body){
    return await devicedown(body)
  },

  async addlist_({commit,state},body){
    return await addlist(body)
  },

  async addgoodslist_({commit,state},body){
    return await addgoodslist(body)
  },

  async outuserinfo_({commit,state},body){
    return await outuserinfo(body)
  },

  /*设备*****************************************/
  async deviceindex_({commit,state},body){
    return await deviceindex(body)
  },

  //设备组
  async deviceGroups_({commit,state},body){
    return await deviceGroups(body)
  },

  //设备组
  async devicemanageGroups_({commit,state},body){
    return await devicemanageGroups(body)
  },

  //设备信息
  async deviceInfos_({commit,state},body){
    return await deviceInfos(body)
  },
  //空道详情
  async offMonitorInfo_({commit,state},body){
    return await offMonitorInfo(body)
  },
  //一键补满
  async onekeyfull_({commit,state},body){
    return await onekeyfull(body)
  },
  //签到历史
  async signedInfo_({commit,state},body){
    return await signedInfo(body)
  },
  //故障
  async vmError_({commit,state},body){
    return await vmError(body)
  },
  //故障恢复
  async updateVmError_({commit,state},body){
    return await updateVmError(body)
  },
  //获取交易订单详情
  async orderInfo_({commit,state},body){
    return await orderInfo(body)
  },
  //历史变动
  async historychange_({commit,state},body){
    return await historychange(body)
  },
  //商品统计
  async soldInfo_({commit,state},body){
    return await soldInfo(body)
  },
    //销售数据详情
  async sellData_({commit,state},body){
    return await sellData(body)
  },
//所有设备类型
  async vmType_({commit,state},body){
    return await vmType(body)
  },
//所有设备模块
  async vmTemp_({commit,state},body){
    return await vmTemp(body)
  },
//所有设备组
 async vmGroup_({commit,state},body){
    return await vmGroup(body)
  },
//设备信息更新(以及开关机)
  async updateInfo_({commit,state},body){
    return await updateInfo(body)
  },

//移机
  async moveinfo_({commit,state},body){
    return await moveinfo(body)
  },

//货道管理
  async monitorInfo_({commit,state},body){
    return await monitorInfo(body)
  },
//设备变更状态(启用状态)
  async changeVmState_({commit,state},body){
    return await changeVmState(body)
  },
/*  //货到补货
  async updateAisle_({commit,state},body){
    return await updateAisle(body)
  },*/
//货到换货
  async changeAisle_({commit,state},body){
    return await changeAisle(body)
  },
//获取所有商品
  async productInfo_({commit,state},body){
    return await productInfo(body)
  },

  async tasksubmit_({commit,state},body){
    return await tasksubmit(body)
  },

  async devicepccid_({commit,state},body){
    return await devicepccid(body)
  },

  async getcompanylist_({commit,state},body){
    return await getcompanylist(body)
  },

  async getcompany_({commit,state},body){
    return await getcompany(body)
  },

  async changepass_({commit, state}, param) {
    return await changepass(param)
  },

  async feedback_({commit, state}, param) {
    return await feedback(param)
  },







  /*补货*/
  async current2_({commit, state}, body) {
    return await current2(body);
  },

  async pastate_({commit, state}, body) {
    return await pastate(body);
  },

  async pgstatesubmit_({commit, state}, body) {
    return await pgstatesubmit(body);
  },

  async ophome_({commit, state}, body) {
    return await ophome(body);
  },

  async gooddetail_({commit, state}, body) {
    return await gooddetail(body);
  },

  async qualitydetail_({commit, state}, body) {
    return await qualitydetail(body);
  },

  async applymoney_({commit, state}, body) {
    return await applymoney(body);
  },

  async repapply_({commit, state}, body) {
    return await repapply(body);
  },

  async repapplydetail_({commit, state}, body) {
    return await repapplydetail(body);
  },

  async repsaleref_({commit, state}, body) {
    return await repsaleref(body);
  },

  async addapply_({commit, state}, body) {
    return await addapply(body);
  },

  async settemplate_({commit, state}, body) {
    return await settemplate(body);
  },

  async changestore_({commit, state}, body) {
    return await changestore(body);
  },

  async getallproducts_({commit, state}, body) {
    return await getallproducts(body);
  },

  async changeconfirm_({commit, state}, body) {
    return await changeconfirm(body);
  },

  async lineout_({commit, state}, body) {
    return await lineout(body);
  },

  async backmall_({commit, state}, body) {
    return await backmall(body);
  },

  async refuzewarehouse_({commit, state}, body) {
    return await refuzewarehouse(body);
  },

  async cashup_({commit, state}, body) {
    return await cashup(body);
  },


  async addcash_({commit,state},body){
    return await addcash(body)
  },

  async assetlist_({commit,state},body){
    return await assetlist(body)
  },

  async assetvmlist_({commit,state},body){
    return await assetvmlist(body)
  },

  async assetvmdetail_({commit,state},body){
    return await assetvmdetail(body)
  },

  async getvendorlist_({commit,state},body){
    return await getvendorlist(body)
  },

  async getrenterlist_({commit,state},body){
    return await getrenterlist(body)
  },

  async addeditasset_({commit,state},body){
    return await addeditasset(body)
  },

  async initassetinfo_({commit,state},body){
    return await initassetinfo(body)
  },

  async addvendordata_({commit,state},body){
    return await addvendordata(body)
  },

  async addrenterdata_({commit,state},body){
    return await addrenterdata(body)
  },

  async userwork_({commit,state},body){
    return await userwork(body)
  },

  async historywork_({commit,state},body){
    return await historywork(body)
  },

  async historyworkdetail_({commit,state},body){
    return await historyworkdetail(body)
  },

  async commitreprot_({commit,state},body){
    return await commitreprot(body)
  },

  async accountlist_({commit,state},body){
    return await accountlist(body)
  },

  async accountlevellist_({commit,state},body){
    return await accountlevellist(body)
  },

  async accountdeletelist_({commit,state},body){
    return await accountdeletelist(body)
  },

  async machinevmlist_({commit,state},body){
    return await machinevmlist(body)
  },

  async accountsetuser_({commit,state},body){
    return await accountsetuser(body)
  },

  async accountuserinfo_({commit,state},body){
    return await accountuserinfo(body)
  },

  async accountaddedit_({commit,state},body){
    return await accountaddedit(body)
  },

  async accountrolelist_({commit,state},body){
    return await accountrolelist(body)
  },

  async accountdeleterole_({commit,state},body){
    return await accountdeleterole(body)
  },

  async changeaccountstate_({commit,state},body){
    return await changeaccountstate(body)
  },

  async getroleright_({commit,state},body){
    return await getroleright(body)
  },

  async setroleright_({commit,state},body){
    return await setroleright(body)
  },

  async setuserrole_({commit,state},body){
    return await setuserrole(body)
  },

  async deletevmgroup_({commit,state},body){
    return await deletevmgroup(body)
  },

  async getbelongarea_({commit,state}){
    return await getbelongarea()
  },

  async getmaster_({commit,state},body){
    return await getmaster(body)
  },

  async addeditgroup_({commit,state},body){
    return await addeditgroup(body)
  },

  async getvminfo_({commit,state},body){
    return await getvminfo(body)
  },

  async getvmbelong_({commit,state},body){
    return await getvmbelong(body)
  },

  async machinecommit_({commit,state},body){
    return await machinecommit(body)
  },

  async storebind_({commit,state},body){
    return await storebind(body)
  },

  async getstoreinfo_({commit,state},body){
    return await getstoreinfo(body)
  },

  async addstoreinfo_({commit,state},body){
    return await addstoreinfo(body)
  },

  async applymoneyhistory_({commit,state},body){
    return await applymoneyhistory(body)
  },






  /*async aislemanage_({commit, state}, body) {
    return await aislemanage(body);
  },*/




}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}




