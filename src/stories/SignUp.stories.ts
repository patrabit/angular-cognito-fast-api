import { Meta, Story, moduleMetadata } from '@storybook/angular';

import { FormsModule } from '@angular/forms';
import {SignUpComponent} from '$modules/auth/components/sign-up/sign-up.component';

export default {
    title: 'Sign Up',
    component: SignUpComponent,
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