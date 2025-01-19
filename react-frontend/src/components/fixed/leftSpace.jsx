import React, { useState, useEffect } from "react";
import Images from "./images";

const MenuButton = ({ label, icon, isSelected, onClick, showLabel }) => {
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
        label: {
            display: showLabel ? "inline" : "none", // Esconde a label se `showLabel` for falso
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
            <span style={buttonStyles.label}>{label}</span>
        </div>
    );
};

const Menu = ({ items, onItemClick, showLabels }) => {
    const defaultSelectedIndex = items.findIndex((item) => item.startSelected);
    const [selectedItem, setSelectedItem] = useState(
        defaultSelectedIndex !== -1 ? defaultSelectedIndex : null
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
                    showLabel={showLabels}
                />
            ))}
        </div>
    );
};

export default function LeftSpace({ onButtonClick }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
        const newUrl = `/${action}`;
        window.history.pushState(null, "", newUrl);
        if (onButtonClick) {
            onButtonClick(action);
        }
    };

    const isSmallScreen = windowWidth < 850; // Define a largura para esconder labels

    return (
        <div
            style={{
                width: isSmallScreen ? "8%" : "15%", // Ajusta largura do menu em telas pequenas
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
                {!isSmallScreen && "Menu"}
            </h3>
            <Menu
                items={menuItems}
                onItemClick={handleMenuClick}
                showLabels={!isSmallScreen}
            />
        </div>
    );
}
