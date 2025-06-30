import styles from "./styles.module.css";
import { House, Settings, Sun, History, Moon } from "lucide-react";
import { useState, useEffect } from "react";

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark';
  return storageTheme;
  });

  const nextThemeIcon = {
    dark: <Sun />,
    light: <Moon />,
  };
  
  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme == 'dark' ? 'light' : 'dark'
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    return () => {

    };
  }, [theme]);


  return (

    <nav className={styles.Menu}>
      <a className={styles.menuLink} href="" aria-label="Ir para Home" title="Ir para Home">
        <House />
      </a>
      <a className={styles.menuLink} href="" aria-label="Ver histórico" title="Histórico">
        <History />
      </a>
      <a className={styles.menuLink} href="" aria-label="Ir para Configurações" title="Configurações">
        <Settings />
      </a>
      <a className={styles.menuLink} href="" aria-label="Alterar tema" title="Alterar tema" onClick={handleThemeChange}>
        {nextThemeIcon[theme]}
      </a>
    </nav>

  );
}

