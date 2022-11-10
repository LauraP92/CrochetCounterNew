import { find, toLower } from 'lodash';
import { IconProps } from './IconProps';
import PlusIcon from './PlusIcon';
import { BLACK } from '../../constants/COLOUR';
import React, { FC, useEffect, useRef, useState } from 'react';

export type TemplateIconName = 'CircleIcon' | 'CloseIcon' | 'PlusIcon' | null;

export interface TemplateIconProps extends IconProps {
  name: TemplateIconName;
}

const IconList = [
  {
    name: 'PlusIcon',
    icon: PlusIcon,
  },
];

const TemplateIcon: React.FC<TemplateIconProps> = ({
  name,
  style,
  color = BLACK,
  size = 20,
  active,
}) => {
  if (name === null) {
    return null;
  }
  const Content = find(
    IconList,
    el => toLower(el?.name) === toLower(name),
  )?.icon;

  if (Content) {
    return <Content style={style} size={size} color={color} active={active} />;
  }

  const IconStringList: string[] = IconList.map(el => el?.name);

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.warn(
    `[Template icon] - name: ${name} must only equal one of:${IconStringList}`,
  );
  return null;
};

export default TemplateIcon;
