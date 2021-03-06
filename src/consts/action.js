/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD
 *@Date: 2017-04-06 11:01:45
 */

//重置reducer
export const RESET_REDUCER = Symbol('RESET_REDUCER');
//请求成功获取数据
export const REQUEST_SUCCESS = Symbol('REQUEST_SUCCESS');
//请求失败
export const REQUEST_FAILED = Symbol('REQUEST_FAILED'); //请求失败
//显示/隐藏登录Modal
export const LOGIN_MODAL_HANDLE = Symbol('LOGIN_MODAL_HANDLE');
//显示/隐藏系统参数Modal
export const PARAMS_MODAL_HANDLE = Symbol('PARAMS_MODAL_HANDLE');
//显示/隐藏模板参数
export const VARIABLE_MODAL_HANDLE = Symbol('VARIABLE_MODAL_HANDLE');
//显示Portal modal
export const PORTAL_MODAL_HANDLE = Symbol('PORTAL_MODAL_HANDLE');
//显示Channel modal
export const CHANNEL_MODAL_HANDLE = Symbol('CHANNEL_MODAL_HANDLE');
//登录
export const LOGIN = Symbol('LOGIN');
//根组件Tab变更
export const TAB_CHANGE_HOME = Symbol('TAB_CHANGE_HOME');
//接入申请Tab变更
export const TAB_CHANGE_APPLICATION = Symbol('TAB_CHANGE_APPLICATION');
//接入审批Tab变更
export const TAB_CHANGE_APPROVAL = Symbol('TAB_CHANGE_APPROVAL');
//环境管理Tab变更
export const TAB_CHANGE_ENV = Symbol('TAB_CHANGE_ENV');
//系统设置Tab变更
export const TAB_CHANGE_SYS = Symbol('TAB_CHANGE_SYS');
//添加Portal
export const ADD_PORTAL = Symbol('ADD_PORTAL');
//删除Portal
export const DEL_PORTAL = Symbol('DEL_PORTAL');
//新增Channel
export const ADD_CHANNEL = Symbol('ADD_CHANNEL');
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
//拉取控制台列表
export const GET_CONSOLE_LIST = Symbol('GET_CONSOLE_LIST');
//拉取集群台列表
export const GET_CLUSTER_LIST = Symbol('GET_CLUSTER_LIST');
//获取线形图数据
export const GET_LINE_CHART_DATA = Symbol('GET_LINE_CHART_DATA');
//获取柱状图数据
export const GET_BAR_CHART_DATA = Symbol('GET_BAR_CHART_DATA');
//获取饼状图数据
export const GET_PIE_CHART_DATA = Symbol('GET_PIE_CHART_DATA');
//获取雷达图数据
export const GET_RADAR_CHART_DATA = Symbol('GET_RADAR_CHART_DATA');
//获取拓扑图数据
export const GET_TOPOLOGICAL_CHART_DATA = Symbol('GET_TOPOLOGICAL_CHART_DATA');