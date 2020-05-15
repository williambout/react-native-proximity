//
//  EventEmitter.m
//  AFNetworking
//
//  Created by Stephan on 11.05.20.
//

#import "EventEmitter.h"

@implementation EventEmitter

- (NSArray<NSString *> *)supportedEvents {
    return @[@"proximityStateDidChange"];
}

@end

