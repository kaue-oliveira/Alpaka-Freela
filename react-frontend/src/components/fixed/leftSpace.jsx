import React, { useState } from "react";

import Images from "./images";

const MenuButton = ({ label, icon, isSelected, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const buttonStyles = {
        container: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "9px",
            cursor: "pointer",
            border: "1px solid",
            borderColor: isSelected ? "#000" : "#ffffff",
            borderRadius: "5px",
            backgroundColor: isSelected
                ? "#e7e5fd"
                : isHovered
                  ? "#dbdbdb"
                  : "#fff",
            color: isSelected || isHovered ? "#000" : "#333",
            transition: "background-color 0.3s ease, border-color 0.3s ease",
            fontSize: "16px",
        },
        icon: {
            width: "20px",
            height: "20px",
        },
    };

    return (
        <div
            style={buttonStyles.container}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={icon} alt="icon" style={buttonStyles.icon} />
            <span>{label}</span>
        </div>
    );
};

const Menu = ({ items, onItemClick }) => {
    const defaultSelectedIndex = items.findIndex((item) => item.startSelected);
    const [selectedItem, setSelectedItem] = useState(
        defaultSelectedIndex !== -1 ? defaultSelectedIndex : null,
    );

    const handleItemClick = (index) => {
        setSelectedItem(index);
        if (onItemClick) {
            onItemClick(items[index].action);
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {items.map((item, index) => (
                <MenuButton
                    key={index}
                    label={item.label}
                    icon={item.icon}
                    isSelected={selectedItem === index}
                    onClick={() => handleItemClick(index)}
                />
            ))}
        </div>
    );
};

export default function LeftSpace({ onButtonClick }) {
    const menuItems = [
        {
            label: "Encontrar Freelancer",
            icon: Images.manTechEmoji,
            action: "freelancer",
            startSelected: true,
        },
        {
            label: "Encontrar trabalho",
            icon: Images.briefCaseEmoji,
            action: "trabalho",
        },
        {
            label: "Gerenciar publicações",
            icon: Images.rocketEmoji,
            action: "gerenciar-publicacoes",
        },
        {
            label: "Gerenciar conta",
            icon: Images.hammerEmoji,
            action: "conta",
        },
    ];

    const handleMenuClick = (action) => {
        // Atualiza a URL no navegador
        const newUrl = `/${action}`;
        window.history.pushState(null, "", newUrl);
        if (onButtonClick) {
            onButtonClick(action); // Notifica o pai sobre a ação do botão
        }
    };

    return (
        <div
            style={{
                width: "15%",
                padding: "30px",
                minHeight: "96vh",
                borderRight: "1px solid #000000",
            }}
        >
            <h3
                style={{
                    marginBottom: "10px",
                    color: "#242424",
                    backgroundColor: "#dbdbdb",
                    padding: "5px",
                    borderRadius: "5px",
                }}
            >
                <img
                    src={Images.packageEmoji}
                    alt=""
                    style={{
                        width: "10%",
                        marginLeft: "3%",
                        marginRight: "3%",
                    }}
                />
                Menu
            </h3>
            <Menu items={menuItems} onItemClick={handleMenuClick} />
        </div>
    );
}
