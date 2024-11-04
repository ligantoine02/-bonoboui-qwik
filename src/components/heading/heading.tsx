import { PropsOf, Slot, component$ } from "@builder.io/qwik";
import styles from "./heading.module.css";

export interface HeadingProps extends PropsOf<"h1"> {}

export const Heading = component$<HeadingProps>(() => {
	return (
		<h1 class={[styles.uppercase, styles.textCyan, styles.text5xl]}>
			<Slot />
		</h1>
	);
});
