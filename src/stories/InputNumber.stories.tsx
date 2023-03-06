import React from "react"
import { InputNumber } from "../components"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
	title: "Card",
	component: InputNumber,
} as ComponentMeta<typeof InputNumber>

const Template: ComponentStory<typeof InputNumber> = (args) => <InputNumber {...args} />

export const Primary = Template.bind({})
Primary.args = {
	inputValue: 33
}