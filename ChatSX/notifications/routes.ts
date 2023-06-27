import {CHATROOM, HOMEFEED} from '../constants/Screens';
import {ROUTE_CHATROOM, ROUTE_CHATROOM_DETAIL} from './constants';

export function getRoute(route: any) {
  let regexToExtractHost = /route:\/\/(.*?)\?/;
  let regexToExtractParams = /[?&]([^=#]+)=([^&#]*)/g,
    params = {} as any,
    match;

  let navigationRoute = route?.match(regexToExtractHost);
  while ((match = regexToExtractParams.exec(route))) {
    params[match[1]] = match[2];
  }
  
  switch (navigationRoute[1]) {
    case ROUTE_CHATROOM: {
      let paramsKey = Object.keys(params);
      return {route: CHATROOM, params: {chatroomID: params[paramsKey[0]]}};
    }

    case ROUTE_CHATROOM_DETAIL: {
      let paramsKey = Object.keys(params);
      return {route: CHATROOM, params: {chatroomID: params[paramsKey[0]]}};
    }

    default:
      return {route: HOMEFEED, params: {}};
  }
}