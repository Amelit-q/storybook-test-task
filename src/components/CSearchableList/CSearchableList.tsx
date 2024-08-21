import React, {useState} from "react"
import styled, {CSSProperties} from "styled-components"
import CSearchableListHeader from "./CSearchableListHeader"
import {CSearchableListItem} from "./CSearchableListItem"
import SvgSearchIcon from "./../../assets/SvgSearchIcon"

/**
 * Interface representing a contact.
 * @interface
 */
export interface IContact {
    id: string;
    name: string;
    email: string;
    avatar: string;
}

/**
 * Interface representing a section within the searchable list.
 * @interface
 */
interface ISection {
    sectionName: "Attended" | "Absent" | "Friends" | "Colleagues";
    contacts: IContact[];
}

/**
 * Props interface for the CSearchableList component.
 * @interface
 */
export interface ICSearchableFieldProps {
    sections: ISection[];
    containerStyle: CSSProperties;
    inputWrapperStyle: CSSProperties;
    elementsWrapperStyle: CSSProperties;
}

/**
 * Enum for section names.
 * @enum {string}
 */
export enum SectionNameEnum {
    ATTENDED = "Attended",
    ABSENT = "Absent",
    COLLEAGUES = "Colleagues",
    FRIENDS = "Friends"
}

/**
 * A list component that allows users to search and view contacts grouped into sections.
 * @component
 * @param {Partial<ICSearchableFieldProps>} props - The props for the component.
 * @returns {React.FC<Partial<ICSearchableFieldProps>>} The CSearchableList component.
 */
const CSearchableList: React.FC<Partial<ICSearchableFieldProps>> = ({
                                                                        sections = [],
                                                                        containerStyle,
                                                                        inputWrapperStyle,
                                                                        elementsWrapperStyle,
                                                                    }) => {
    // State for managing the search term input by the user
    const [searchTerm, setSearchTerm] = useState<string>("")

    // State for managing the visibility of each section
    const [visibleSections, setVisibleSections] = useState<{ [key in SectionNameEnum]: boolean }>({
        Colleagues: false, Friends: false,
        [SectionNameEnum.ATTENDED]: true,
        [SectionNameEnum.ABSENT]: true,
    })

    /**
     * Toggles the visibility of a section.
     * @param {SectionNameEnum} sectionName - The name of the section to toggle.
     */
    const toggleSectionVisibility = (sectionName: SectionNameEnum) => {
        setVisibleSections((prev) => ({
            ...prev,
            [sectionName]: !prev[sectionName],
        }))
    }

    // Filter sections based on the search term
    const filteredSections = sections.map((section) => ({
        ...section,
        contacts: section.contacts.filter((contact) =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
    }))

    return (
        <Container style={containerStyle}>
            <InputWrapper hasText={!!searchTerm} style={inputWrapperStyle}>
                {!searchTerm && <SvgSearchIcon />}
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </InputWrapper>
            {filteredSections.map((section) => (
                <React.Fragment key={section.sectionName}>
                    <CSearchableListHeader
                        title={section.sectionName}
                        handleIconButtonClick={() => toggleSectionVisibility(section.sectionName as SectionNameEnum)}
                    />
                    {visibleSections[section.sectionName as SectionNameEnum] && section.contacts.length > 0 && (
                        <ElementsWrapper style={elementsWrapperStyle}>
                            {section.contacts.map((contact) => (
                                <CSearchableListItem key={contact.id} contact={contact} />
                            ))}
                        </ElementsWrapper>
                    )}
                </React.Fragment>
            ))}
        </Container>
    )
}

/**
 * Styled container for the CSearchableList component.
 * @component
 */
const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 400px;
    border: 1px solid #ccc;
    background-color: #fff;
    font-family: "Roboto", serif;
`

/**
 * Styled wrapper for the input field with dynamic padding based on the presence of text.
 * @component
 */
const InputWrapper = styled.div<Partial<{ hasText: boolean }>>`
    display: flex;
    align-items: center;
    height: 48px;
    padding-left: ${(props) => (props.hasText ? "8px" : "20px")};
    background-color: #fff;

    input {
        flex: 1;
        border: none;
        padding-left: 7px;
        outline: none;
        font-size: 16px;
    }

    input::placeholder {
        color: #8e9aa5;
    }
`

/**
 * Styled wrapper for the list of elements.
 * @component
 */
const ElementsWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 12px 8px;
    margin: 0;
`

export default CSearchableList
