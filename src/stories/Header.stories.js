import React from 'react';
import StoryRouter from 'storybook-react-router';
import Header from 'components/organisms/Header';

export default {
  title: 'Organisms/Header',
  component: Header,
  decorators: [StoryRouter()],
};

export const Main = () => <Header />;
