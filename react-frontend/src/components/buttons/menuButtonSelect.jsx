import React, { useState, useEffect } from "react";

const DynamicButton = ({ label, onClick, isSelected }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const buttonStyles = {
        container: {
            border: "1px solid #000000",
            borderRadius: "5px",
            padding: "10px 20px",
            fontSize: "15px",
            fontWeight: "800",
            cursor: "pointer",
            backgroundColor: isSelected
                ? "#e7e5fd"
                : isHovered
                  ? "#e7e5fd"
                  : "#f5f5f5",
            color: "#000",
            transition: "background-color 0.3s ease",
        },
    };

    return (
        <button
            style={buttonStyles.container}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

const MenuButtonSelect = ({ buttons, onButtonClick }) => {
    const defaultSelectedIndex = buttons.findIndex(
        (button) => button.startSelected,
    );
    const [selectedButton, setSelectedButton] = useState(
        defaultSelectedIndex !== -1 ? defaultSelectedIndex : null,
    );

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId); // Atualiza o botão selecionado
        if (onButtonClick) {
            onButtonClick(buttons[buttonId].action); // Notifica o pai sobre a ação do botão
        }
    };

    return (
        <div style={{ display: "flex", gap: "10px" }}>
            {buttons.map((button, index) => (
                <DynamicButton
                    key={index}
                    label={button.title}
                    onClick={() => handleButtonClick(index)}
                    isSelected={selectedButton === index}
                />
            ))}
        </div>
    );
};

export default MenuButtonSelect;
