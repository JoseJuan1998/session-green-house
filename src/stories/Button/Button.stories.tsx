import {ComponentMeta, ComponentStory} from '@storybook/react'
import Button from '../../components/Button'

export default {
    title:'Buttons',
    component: Button
} as ComponentMeta<typeof Button>

const Template:ComponentStory<typeof Button> = (args) => {

    return<Button {...args}/>
}

export const ButtonPill = Template.bind({})
export const ButtonSquare = Template.bind({})
ButtonSquare.args={
    variant:'Square'
}