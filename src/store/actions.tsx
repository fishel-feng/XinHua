/*
 * action 类型
 */

export const GET_LATEST = 'GET_LATEST';
export const GET_NODES = 'GET_NODES';
export const GET_NODE_LIST = 'GET_NODE_LIST';
export const SET_TOPIC_VIEW = 'SET_TOPIC_VIEW';
export const SET_TOPIC_DETAIL = 'SET_TOPIC_DETAIL';

/*
 * action 创建函数
 */

export function getLatest(data : any) {
  return {type: GET_LATEST, data};
}
export function getNodes(data : any) {
  return {type: GET_NODES, data};
}
export function getNodeList(data : any) {
  return {type: GET_NODE_LIST, data};
}
export function setTopicView(topic : any) {
  return {type: SET_TOPIC_VIEW, topic};
}
export function setTopicDetial(info : any) {
  return {type: SET_TOPIC_DETAIL, info};
}