import {find, toLower} from 'lodash';
import {IconProps} from './IconProps';
import PlusIcon from './PlusIcon';
import MinusIcon from './MinusIcon';
import MenuIcon from './MenuIcon';
import CloseIcon from './CloseIcon';
import AppLogoIcon from './AppLogoIcon';
import {BLACK} from '../../constants/COLOUR';
import React, {FC, useEffect, useRef, useState} from 'react';

// export type TemplateIconName = 'CircleIcon' | 'CloseIcon' | 'PlusIcon' | null;

// export interface TemplateIconProps extends IconProps {
//   name: TemplateIconName;
// }

const IconList = {
  PlusIcon: PlusIcon,
  MinusIcon: MinusIcon,
  MenuIcon: MenuIcon,
  CloseIcon: CloseIcon,
  AppLogoIcon: AppLogoIcon,
};

// const TemplateIcon: React.FC<TemplateIconProps> = ({
const TemplateIcon = ({name, style, color = BLACK, size = 20}) => {
  if (!name) {
    console.warn('Template icon name is missing!');
    return null;
  }

  const Content = IconList[name];

  // const Content = find(
  //   IconList,
  //   el => toLower(el?.name) === toLower(name),
  // )?.icon;

  if (Content) {
    return <Content style={style} size={size} color={color} />;
  }

  // const IconStringList: string[] = IconList.map(el => el?.name);
  // const IconStringList = IconList.map(el => el?.name);
  const IconStringList = Object.keys(IconList);

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.warn(
    `[Template icon] - name: ${name} must only equal one of:${IconStringList}`,
  );
  return null;
};

export default TemplateIcon;
