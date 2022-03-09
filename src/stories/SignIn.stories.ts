import { Meta, Story, moduleMetadata } from '@storybook/angular';

import {SignInComponent} from '$app/modules/auth/components/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Sign In',
  component: SignInComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [FormsModule],
    }),
  ]
} as Meta;

const Template: Story = (args) => ({

});

export const Default = Template.bind({});
Default.args= {
};

export const Pending = Template.bind({});
Pending.args= {
};

export const Errored = Template.bind({});
Errored.args= {
};