//
//  RNProximity.h
//
//  Created by William Bout
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTBridge.h>
#import <React/RCTEventDispatcher.h>

@interface RNProximity : NSObject <RCTBridgeModule>

@property (retain) EventEmitter * emitter;

@end
