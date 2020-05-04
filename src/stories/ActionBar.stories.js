import React from 'react';
import StoryRouter from 'storybook-react-router';
import ActionBar from 'components/molecules/ActionBar';

export default {
  title: 'Molecules/ActionBar',
  component: ActionBar,
  decorators: [StoryRouter()],
};

export const Normal = () => <ActionBar />;
