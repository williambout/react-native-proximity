//
//  RNProximity.m
//
//  Created by William Bout
//

#import <React/RCTBridge.h>
#import <React/RCTEventDispatcher.h>
#import "EventEmitter.h"
#import "RNProximity.h"


@implementation RNProximity

@synthesize bridge = _bridge;
@synthesize emitter;

RCT_EXPORT_MODULE();

- (instancetype)init
{
    if ((self = [super init])) {
        [[UIDevice currentDevice] setProximityMonitoringEnabled:NO];
        [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(sensorStateChange:) name:@"UIDeviceProximityStateDidChangeNotification" object:nil];
        emitter = [[EventEmitter alloc] init];
    }
    return self;
}

- (void)dealloc
{
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

+ (BOOL) requiresMainQueueSetup {
    return YES;
}

- (void)sensorStateChange:(NSNotificationCenter *)notification
{
    BOOL proximityState = [[UIDevice currentDevice] proximityState];
    emitter.bridge = self.bridge;
    [emitter sendEventWithName:@"proximityStateDidChange"
                                body:@{@"proximity": @(proximityState)}];
}

RCT_EXPORT_METHOD(proximityEnabled:(BOOL)enabled) {
    dispatch_async(dispatch_get_main_queue(), ^{
        [[UIDevice currentDevice] setProximityMonitoringEnabled:enabled];
    });
}

@end
