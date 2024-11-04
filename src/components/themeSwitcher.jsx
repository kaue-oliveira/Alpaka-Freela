import "../css/themeSwitcher.css"
import { useEffect } from "react";

export default function ThemeSwitcher() {
    useEffect(() => {
        // feather Icons script
        const featherScript = document.createElement("script");
        featherScript.src = "https://unpkg.com/feather-icons";
        featherScript.async = true;
        document.body.appendChild(featherScript);
    
        // feather icons after script load
        featherScript.onload = () => {
          if (window.feather) {
            window.feather.replace();
          }
        };
    
        var html = document.getElementsByTagName('html');
        var radios = document.getElementsByName('themes'); 
        var userThemeSetting = sessionStorage.getItem("theme");

        if (userThemeSetting) {
            html[0].classList.add(userThemeSetting);
            if (userThemeSetting === "light-theme")
                radios[0].checked = true;

            if (userThemeSetting === "dark-theme")
                radios[1].checked = true;

            if (userThemeSetting === "black-theme")
                radios[2].checked = true;
        }
            

        for (i = 0; i < radios.length; i++) {
            radios[i].addEventListener('change', function() {
            html[0].classList.remove(html[0].classList.item(0));
                html[0].classList.add(this.id);
                sessionStorage.setItem("theme", this.id);
            });
        }

        // clean scripts on element unmount
        return () => {
          document.body.removeChild(featherScript);
        };
      }, []);

    return (
        <div>
            <div className="theme-switcher">
                <input type="radio" id="light-theme" name="themes"/>
                <label htmlFor="light-theme">
                    <span>
                        <i data-feather="sun"></i>
                    </span>
                </label>
                <input type="radio" id="dark-theme" name="themes" />
                <label htmlFor="dark-theme">
                    <span>
                        <i data-feather="moon"></i>
                    </span>
                </label>
                <input type="radio" id="black-theme" name="themes" />
                <label htmlFor="black-theme">
                    <span>
                        <i data-feather="star"></i>
                    </span>
                </label>
                <span className="slider"></span>
            </div>
        </div>
    )
}