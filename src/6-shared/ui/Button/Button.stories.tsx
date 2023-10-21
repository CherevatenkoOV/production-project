import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ThemeDecorator} from '6-shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '1-app/providers/ThemeProvider';
import {Button, ButtonSize, ButtonVariant} from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const PrimarySizeM = Template.bind({});
PrimarySizeM.args = {
    children: 'Text',
    size: ButtonSize.M
};

export const PrimarySizeL = Template.bind({});
PrimarySizeL.args = {
    children: 'Text',
    size: ButtonSize.L
};

export const PrimarySizeXL = Template.bind({});
PrimarySizeXL.args = {
    children: 'Text',
    size: ButtonSize.XL
};


export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: ButtonVariant.CLEAR,
};

export const ClearSizeM = Template.bind({});
ClearSizeM.args = {
    children: 'Text',
    variant: ButtonVariant.CLEAR,
    size: ButtonSize.M
};
export const ClearSizeL = Template.bind({});
ClearSizeL.args = {
    children: 'Text',
    variant: ButtonVariant.CLEAR,
    size: ButtonSize.L
};
export const ClearSizeXL = Template.bind({});
ClearSizeXL.args = {
    children: 'Text',
    variant: ButtonVariant.CLEAR,
    size: ButtonSize.XL
};


export const Red = Template.bind({});
Red.args = {
    children: 'Text',
    variant: ButtonVariant.RED,
};

export const RedSizeM = Template.bind({});
RedSizeM.args = {
    children: 'Text',
    variant: ButtonVariant.RED,
    size: ButtonSize.M
};

export const RedSizeL = Template.bind({});
RedSizeL.args = {
    children: 'Text',
    variant: ButtonVariant.RED,
    size: ButtonSize.L
};

export const RedSizeXL = Template.bind({});
RedSizeXL.args = {
    children: 'Text',
    variant: ButtonVariant.RED,
    size: ButtonSize.XL
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    variant: ButtonVariant.OUTLINE,
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    children: 'Text',
    variant: ButtonVariant.OUTLINE,
    size: ButtonSize.M
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    variant: ButtonVariant.OUTLINE,
    size: ButtonSize.L
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Text',
    variant: ButtonVariant.OUTLINE,
    size: ButtonSize.XL
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    variant: ButtonVariant.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundVariant = Template.bind({});
BackgroundVariant.args = {
    children: 'Text',
    variant: ButtonVariant.BACKGROUND,
};
export const BackgroundInvertedVariant = Template.bind({});
BackgroundInvertedVariant.args = {
    children: 'Text',
    variant: ButtonVariant.BACKGROUND_INVERTED,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '>',
    size: ButtonSize.M,
    variant: ButtonVariant.BACKGROUND_INVERTED,
    square: true
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    size: ButtonSize.L,
    variant: ButtonVariant.BACKGROUND_INVERTED,
    square: true
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    size: ButtonSize.XL,
    variant: ButtonVariant.BACKGROUND_INVERTED,
    square: true
};
