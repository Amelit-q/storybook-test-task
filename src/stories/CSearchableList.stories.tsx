import {Meta, StoryFn} from "@storybook/react"
import React from "react"
import CSearchableList, {ICSearchableFieldProps} from "../components/CSearchableList/CSearchableList"

export default {
    title: "Components/SearchableList",
    component: CSearchableList,
    parameters: {
        docs: {
            description: {
                component: "A list component that allows users to search and view contacts grouped into sections.",
            },
        },
    },
    argTypes: {
        sections: {control: "object"},
    },
} as Meta

const Template: StoryFn<ICSearchableFieldProps> = (args: any) => <CSearchableList {...args} />

export const Default = Template.bind({})
Default.args = {
    sections: [
        {
            sectionName: "Attended",
            contacts: [
                {id: "1", name: "Dianne Russell", email: "dianne.russels@hotmail.com", avatar: "/avatar1.png"},
                {id: "2", name: "Ronald Richards", email: "ronald.richards@hotmail.com", avatar: "/avatar1.png"},
                {id: "3", name: "Arlene McCoy", email: "arlene.mccoy@hotmail.com", avatar: "/avatar1.png"},
                {id: "4", name: "Kathryn Murphy", email: "kathryn.murphy@hotmail.com", avatar: "/avatar1.png"},
                {id: "5", name: "Savannah Nguyen", email: "savannah.nguyen@hotmail.com", avatar: "/avatar1.png"},
                {id: "6", name: "Albert Flores", email: "albert.flores@hotmail.com", avatar: "/avatar1.png"},
            ],
        },
        {
            sectionName: "Absent",
            contacts: [
                {id: "7", name: "Jenny Wilson", email: "jane@hotmail.com", avatar: "/avatar2.png"},
                {id: "8", name: "Wade Warren", email: "jane@hotmail.com", avatar: "/avatar2.png"},
                {id: "9", name: "Bessie Cooper", email: "jane@hotmail.com", avatar: "/avatar2.png"},
                {id: "10", name: "Ralph Edwards", email: "jane@hotmail.com", avatar: "/avatar2.png"},
            ],
        },
    ],
}
Default.parameters = {
    docs: {
        storyDescription: "This story displays a default list of contacts grouped by their attendance status.",
    },
}

export const SearchField = Template.bind({})
SearchField.args = {
    sections: [],
}
SearchField.parameters = {
    docs: {
        storyDescription: "This story displays the search field component on its own, without any contacts.",
    },
}

export const WithDifferentData = Template.bind({})
WithDifferentData.args = {
    sections: [
        {
            sectionName: "Friends",
            contacts: [
                {id: "14", name: "Alice Smith", email: "alice.smith@example.com", avatar: "/avatar3.png"},
                {id: "15", name: "Bob Johnson", email: "bob.johnson@example.com", avatar: "/avatar3.png"},
            ],
        },
        {
            sectionName: "Colleagues",
            contacts: [
                {id: "16", name: "Carol Davis", email: "carol.davis@example.com", avatar: "/avatar3.png"},
            ],
        },
    ],
}
WithDifferentData.parameters = {
    docs: {
        storyDescription: "This story shows the component with different data sets, demonstrating its flexibility with various sections and contacts.",
    },
}
