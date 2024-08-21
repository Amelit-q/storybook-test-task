import React from "react"
import styled from "styled-components"
import Avatar from "boring-avatars"
import {IContact} from "./CSearchableList"

/**
 * Props for the styled text component.
 * @interface
 * @property {string} color - The text color.
 * @property {string} fontSize - The text font size.
 * @property {string} fontWeight - The text font weight.
 */
export interface IStyledTextProps {
    color: string;
    fontSize: string;
    fontWeight: string;
}

/**
 * Props for the CSearchableListItem component.
 * @interface
 * @property {IContact} contact - The contact object to display.
 */
interface ICSearchableListItemProps {
    contact: IContact;
}

/**
 * Component that displays a contact item with an avatar, name, and email.
 * @component
 * @param {ICSearchableListItemProps} props - The props for the component.
 * @returns {React.FC<ICSearchableListItemProps>} The CSearchableListItem component.
 */
export const CSearchableListItem: React.FC<ICSearchableListItemProps> = ({ contact }) => {
    return (
        <Container>
            <ElementsWrapper>
                <Avatar name={contact.name} size={36} />
                <InfoWrapper>
                    <StyledText color={"#20374b"} fontSize={"14px"}>{contact.name}</StyledText>
                    <StyledText color={"#5a6d80"} fontSize={"13px"}>{contact.email}</StyledText>
                </InfoWrapper>
            </ElementsWrapper>
        </Container>
    )
}

/**
 * Styled container for the list item with hover effects.
 */
const Container = styled.div`
    display: flex;
    align-items: center;
    height: 52px;

    :hover {
        background-color: #f2f5f7;
        border-radius: 8px;
    }
`

/**
 * Styled wrapper for the contact information.
 */
const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 8px;
`

/**
 * Styled wrapper for the elements within the list item.
 */
const ElementsWrapper = styled.div`
    display: flex;
    flex: 1;
    padding: 8px;
    justify-items: center;
`

/**
 * Styled text component with customizable color, font size, and font weight.
 * @component
 * @param {Partial<IStyledTextProps>} props - The props for the styled text component.
 */
export const StyledText = styled.p<Partial<IStyledTextProps>>`
    margin: 0;
    padding: 0;
    color: ${({ color }) => color || "inherit"};
    font-size: ${({ fontSize }) => fontSize || "inherit"};
    font-weight: ${({ fontWeight }) => fontWeight || "normal"};
`
