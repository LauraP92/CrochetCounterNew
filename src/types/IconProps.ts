import { ViewStyle } from 'react-native';
import React, { FC, useEffect, useRef, useState } from 'react';

export interface IconProps {
    size?:number;
    color?:string;
    style?:ViewStyle | ViewStyle[] | null;
    active?:boolean
}