/**
 *@Author: chad.ding
 *@Date: 2017-06-22 17:08:53
 */

export const VARIABLE = [{
    name: '$bo',
    desc: '申请者'
}, {
    name: '$envName',
    desc: '环境名称'
}, {
    name: '$envHosts',
    desc: '当前环境的hosts配置'
}, {
    name: '$flowState',
    desc: '审批的状态（已审批通过，已拒绝）'
}, {
    name: '$flowCause',
    desc: '拒绝的理由'
}, {
    name: '$flowApprover',
    desc: '审批人'
}, {
    name: '$bindings',
    desc: '绑定的数据库名表名或者频道名称'
}, {
    name: '$cluster',
    desc: '当前分配的集群'
}, {
    name: '$product',
    desc: '当前分配集群的产品类型（Kafka或RabbitMQ）'
}, {
    name: '$resId',
    desc: '资源ID'
}, {
    name: '$resName',
    desc: '申请的资源名称'
}, {
    name: '$channel',
    desc: '整个channel对象'
}, {
    name: '$queue',
    desc: '整个queue对象'
}];
