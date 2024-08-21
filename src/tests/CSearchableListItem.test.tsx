import {fireEvent, render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import {CSearchableListItem} from "../components/CSearchableList/CSearchableListItem"
import React from "react"

const mockContact = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "avatar-url",
}

describe("CSearchableListItem", () => {
    it("renders contact name and email", () => {
        render(<CSearchableListItem contact={mockContact} />)

        expect(screen.getByText("John Doe")).toBeInTheDocument()
        expect(screen.getByText("john.doe@example.com")).toBeInTheDocument()
    })

    it("applies custom styles", () => {
        const {container} = render(<CSearchableListItem contact={mockContact} />)

        expect(container.firstChild).toHaveStyle(`
            display: flex;
            align-items: center;
            height: 52px;
        `)
    })

    it("applies hover effect styles", () => {
        const {container} = render(<CSearchableListItem contact={mockContact} />)
        const item = container.firstChild as HTMLElement

        fireEvent.mouseOver(item)

        requestAnimationFrame(() => {
            const computedStyle = window.getComputedStyle(item)

            expect(computedStyle.backgroundColor).toBe("rgb(242, 245, 247)")
            expect(computedStyle.borderRadius).toBe("8px")
        })
    })
})
