/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD | 丁铭锋
 *@Date: 2017-04-06 11:01:45
 */

//请求成功获取数据
export const RECEIVE_DATA = Symbol('RECEIVE_DATA');
//请求失败
export const REQUEST_FAILED = Symbol('REQUEST_FAILED');
//显示登录Modal
export const LOGIN_MODAL_SHOW = Symbol('LOGIN_MODAL_SHOW');
//登录
export const LOGIN = Symbol('LOGIN');
//根组件Tab变更
export const TAB_CHANGE_HOME = Symbol('TAB_CHANGE_HOME');
//环境管理Tab变更
export const TAB_CHANGE_ENV = Symbol('TAB_CHANGE_ENV');
//系统设置Tab变更
export const TAB_CHANGE_SYS = Symbol('TAB_CHANGE_SYS');
//显示Portal modal
export const PORTAL_MODAL_SHOW = Symbol('PORTAL_MODAL_SHOW');
//添加Portal
export const ADD_PORTAL = Symbol('ADD_PORTAL');
//删除Portal
export const DEL_PORTAL = Symbol('DEL_PORTAL');
//新增Channel
export const ADD_CHANNEL = Symbol('ADD_CHANNEL');
//显示Channel modal
export const CHANNEL_MODAL_SHOW = Symbol('CHANNEL_MODAL_SHOW');
//拉取Channel列表
export const GET_CHANNEL_LIST = Symbol('GET_CHANNEL_LIST');
//拉取Queue列表
export const GET_QUEUE_LIST = Symbol('GET_QUEUE_LIST');
//拉取Vdp列表
export const GET_VDP_LIST = Symbol('GET_VDP_LIS');
//拉取订阅列表
export const GET_SUBSCRIBE_LIST = Symbol('GET_SUBSCRIBE_LIST');
//订阅频道
export const SUBSCRIBE = Symbol('SUBSCRIBE');
//取消订阅
export const UNSUBSCRIBE = Symbol('UNSUBSCRIBE');
//拉取系统参数列表
export const GET_PARAMS_LIST = Symbol('GET_PARAMS_LIST');
//拉取系统域名列表
export const GET_DOMAIN_LIST = Symbol('GET_DOMAIN_LIST');
