import React from "react"
import styled from "styled-components"
import SvgChevronDown from "../../assets/SvgChevronDown"

/**
 * Props for the CSearchableListHeader component.
 * @interface
 * @property {string} title - The title to display in the header.
 * @property {() => void} handleIconButtonClick - Function to call when the icon button is clicked.
 * @property {object} containerStyles - Styles for the container.
 * @property {string} containerStyles.height - Height of the container.
 * @property {string} containerStyles.padding - Padding of the container.
 * @property {string} containerStyles.borderColor - Border color of the container.
 * @property {object} textStyles - Styles for the text.
 * @property {string} textStyles.fontFamily - Font family of the text.
 * @property {string} textStyles.fontSize - Font size of the text.
 * @property {string} textStyles.color - Color of the text.
 * @property {object} iconButtonStyles - Styles for the icon button.
 * @property {string} iconButtonStyles.cursor - Cursor style for the icon button.
 */
interface ICSearchableListHeaderProps {
    title: string;
    handleIconButtonClick: () => void;
    containerStyles: {
        height: string;
        padding: string;
        borderColor: string;
    };
    textStyles: {
        fontFamily: string;
        fontSize: string;
        color: string;
    };
    iconButtonStyles: {
        cursor: string;
    };
}

/**
 * Component for displaying a header with a title and an icon button.
 * @component
 * @param {Partial<ICSearchableListHeaderProps>} props - The props for the component.
 * @returns {React.FC<Partial<ICSearchableListHeaderProps>>} The CSearchableListHeader component.
 */
const CSearchableListHeader: React.FC<Partial<ICSearchableListHeaderProps>> = ({
                                                                                   title,
                                                                                   handleIconButtonClick,
                                                                                   containerStyles,
                                                                                   textStyles,
                                                                                   iconButtonStyles,
                                                                               }) => {
    return (
        <Container {...containerStyles}>
            <StyledText {...textStyles}>{title}</StyledText>
            <IconButton onClick={handleIconButtonClick} {...iconButtonStyles}>
                <SvgChevronDown />
            </IconButton>
        </Container>
    )
}

/**
 * Styled container for the header with dynamic styles.
 */
const Container = styled.div<Partial<ICSearchableListHeaderProps["containerStyles"]>>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${({height}) => height || "37px"};
    border-bottom: 1px solid ${({borderColor}) => borderColor || "#E4E5E8"};
    border-top: 1px solid ${({borderColor}) => borderColor || "#E4E5E8"};
    padding: ${({padding}) => padding || "0 8px 0 16px"};
`

/**
 * Styled text for the header with dynamic styles.
 */
const StyledText = styled.p<Partial<ICSearchableListHeaderProps["textStyles"]>>`
    font-family: ${({fontFamily}) => fontFamily || "\"Roboto Thin\", serif"};
    font-size: ${({fontSize}) => fontSize || "14px"};
    color: ${({color}) => color || "#5A6D80"};
`

/**
 * Styled icon button with dynamic cursor style.
 */
const IconButton = styled.div<Partial<ICSearchableListHeaderProps["iconButtonStyles"]>>`
    cursor: ${({cursor}) => cursor || "pointer"};
`

export default CSearchableListHeader
