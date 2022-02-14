import { bridge } from '@src/bridge'

// FIXME: 이게 왜 DOMAIN 임... 변수 명이라도 바꿔
// Note: [WMAS-7]
export const GATSBY_CLOUDFRONT_DOMAIN = '/results';

// https://github.com/daangn/webview/blob/develop/bridge-modern/src/core/Driver.ts#L33
export const IS_CUPERTINO =
  bridge.environment === 'Cupertino' && Boolean((window as any).webkit?.messageHandlers?.messageHandler)

// https://github.com/daangn/webview/blob/develop/bridge-modern/src/core/Driver.ts#L30
export const IS_ANDROID = bridge.environment === 'Android' && Boolean((window as any).AndroidFunction?.messageHandler)

export const IS_DAANGN_WEBVIEW = IS_CUPERTINO || IS_ANDROID
