import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n'
        + '                Culpa esse ipsa iusto quo ullam, vitae?\n'
        + '                Molestiae pariatur quod repellendus ullam.\n'
        + '                Consequuntur dignissimos hic illum incidunt ipsa,\n'
        + '                maxime molestiae mollitia necessitatibus quidem quod\n'
        + '                quos rerum unde voluptatem? Consequatur consequuntur,\n'
        + '                illum itaque officia pariatur perferendis quam quis\n'
        + '                temporibus? Architecto expedita, officia. Odio?',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n'
        + '                Culpa esse ipsa iusto quo ullam, vitae?\n'
        + '                Molestiae pariatur quod repellendus ullam.\n'
        + '                Consequuntur dignissimos hic illum incidunt ipsa,\n'
        + '                maxime molestiae mollitia necessitatibus quidem quod\n'
        + '                quos rerum unde voluptatem? Consequatur consequuntur,\n'
        + '                illum itaque officia pariatur perferendis quam quis\n'
        + '                temporibus? Architecto expedita, officia. Odio?',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
