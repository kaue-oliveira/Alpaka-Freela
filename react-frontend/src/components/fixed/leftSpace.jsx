import React, { useState } from "react";

import packageEmoji from "../../img/package_1f4e6.png"
import manTechEmoji from "../../img/man-technologist-medium-dark-skin-tone_1f468-1f3fe-200d-1f4bb.png"
import briefCaseEmoji from "../../img/briefcase_1f4bc.png"
import globeEmoji from "../../img/globe-showing-europe-africa_1f30d.png"
import hammerEmoji from "../../img/hammer-and-wrench_1f6e0-fe0f.png"
import laptopEmoji from "../../img/laptop_1f4bb.png"
import rocketEmoji from "../../img/rocket_1f680.png"
import dragonEmoji from "../../img/dragon_1f409.png"

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
        backgroundColor: isSelected ? "#e7e5fd" : isHovered ? "#dbdbdb" : "#fff",
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
  const defaultSelectedIndex = items.findIndex(item => item.startSelected);
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
        />
      ))}
    </div>
  );
};

export default function LeftSpace({ onButtonClick }) {
  const menuItems = [
    {
      label: "Encontrar Freelancer",
      icon: manTechEmoji,
      action: "freelancer",
      startSelected: true,
    },
    {
      label: "Encontrar trabalho",
      icon: briefCaseEmoji,
      action: "trabalho",
    },
    {
      label: "Gerenciar conta / posts",
      icon: hammerEmoji,
      action: "conta",
    },
    {
      label: "Caixa de entrada",
      icon: rocketEmoji,
      action: "inbox",
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
    <div style={{ 
        width: "15%",
        padding: "30px",
        height: "88vh"
    }}>
        <h3 style={{ 
            marginBottom: "10px",
            color: "#242424",
            backgroundColor: "#dbdbdb",
            padding: "5px",
            borderRadius: "5px"
        }}> 
            <img src={packageEmoji} alt="" style={{ 
                width: "10%",
                marginLeft: "3%",
                marginRight: "3%",
            }}/>
            Menu
        </h3>
      <Menu items={menuItems} onItemClick={handleMenuClick} />
    </div>
  );
}