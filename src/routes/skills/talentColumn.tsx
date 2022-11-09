import { Component, component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./skills.css";

export interface TalentColumnProps {
    items$: Component<TalentItemProps>[];
}

export const TalentColumn = component$((props: TalentColumnProps) => {
    props.items$.forEach((item) => item.toString)
});

export interface TalentItemProps {
    name: string
    order: number;
}

export const TalentItem = component$((props: TalentItemProps) => {
    useStylesScoped$(styles);

    const isActive = useSignal(false);

    return (
        <div
            style={{ "--order": props.order }}
            className={isActive.value ? "talent-item active" : "talent-item"}>
            {props.name}
        </div>
    );
});