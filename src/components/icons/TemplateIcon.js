import PlusIcon from './PlusIcon';
import MinusIcon from './MinusIcon';
import MenuIcon from './MenuIcon';
import CloseIcon from './CloseIcon';
import AppLogoIcon from './AppLogoIcon';
import {BLACK} from '../../constants/COLOUR';
import React from 'react';

const IconList = {
  PlusIcon: PlusIcon,
  MinusIcon: MinusIcon,
  MenuIcon: MenuIcon,
  CloseIcon: CloseIcon,
  AppLogoIcon: AppLogoIcon,
};

const TemplateIcon = ({name, style, color = BLACK, size = 20}) => {
  if (!name) {
    console.warn('Template icon name is missing!');
    return null;
  }

  const Content = IconList[name];

  if (Content) {
    return <Content style={style} size={size} color={color} />;
  }

  const IconStringList = Object.keys(IconList);

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.warn(
    `[Template icon] - name: ${name} must only equal one of:${IconStringList}`,
  );
  return null;
};

export default TemplateIcon;
