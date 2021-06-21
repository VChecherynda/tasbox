import React from 'react';
import { Provider } from 'react-redux';

import { InboxScreen } from './InboxScreen';

import { action } from '@storybook/addon-actions';

import * as TaskListStories from './TaskList.stories';

const store = {
    getState: () => {
        return {
            tasks: TaskListStories.Default.args.tasks
        }
    },
    subscribe: () => 0,
    dispatch: action('dispatch')
}

export default {
    component: InboxScreen,
    decorators: [story => <Provider store={store}>{story()}</Provider>],
    title: 'InboxScreen'
}

const Template = args => <InboxScreen {...args} />

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
    error: 'Something'
}
