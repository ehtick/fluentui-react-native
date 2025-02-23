import { ViewStyle } from 'react-native';
import { IOperationSet } from '@uifabricshared/foundation-tokens';
import { Theme } from '@fluentui-react-native/theme-types';
import { tokenBuilder } from './tokenBuilder';

export interface LayoutTokens {
  minWidth?: ViewStyle['minWidth'];
  maxWidth?: ViewStyle['maxWidth'];
  minHeight?: ViewStyle['minHeight'];
  padding?: ViewStyle['padding'];
  paddingHorizontal?: ViewStyle['paddingHorizontal'];
  paddingVertical?: ViewStyle['paddingVertical'];
}

export const layoutTokens: IOperationSet<LayoutTokens, Theme> = [
  { source: 'minWidth' },
  { source: 'maxWidth' },
  { source: 'minHeight' },
  { source: 'padding' },
  { source: 'paddingHorizontal' },
  { source: 'paddingVertical' },
];

export const layoutStyles = tokenBuilder<LayoutTokens>(
  'minWidth',
  'maxWidth',
  'minHeight',
  'padding',
  'paddingHorizontal',
  'paddingVertical',
);
