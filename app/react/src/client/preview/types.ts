import { ReactElement } from 'react';

export type { RenderContext } from '@storybook/store';
export type { StoryContext } from '@storybook/csf';

export interface ShowErrorArgs {
  title: string;
  description: string;
}

export type StoryFnReactReturnType = ReactElement<unknown>;

export interface IStorybookStory {
  name: string;
  render: () => any;
}

export interface IStorybookSection {
  kind: string;
  stories: IStorybookStory[];
}
