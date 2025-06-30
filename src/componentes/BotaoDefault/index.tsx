import styles from "./input.module.css"

type BotaoDefaultProps = {
  icon: React.ReactNode;
  color?: "green" | "red"
} & React.ComponentProps<"button">;

export function BotaoDefault({ icon, color = "green", ...rest}: BotaoDefaultProps) {
  return (
    <>
      <button className={`${styles.botao} ${styles[color]}`} {...rest}>
        {icon}
        
         </button>

    </>
  );
}