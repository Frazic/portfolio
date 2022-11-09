import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./skills.css";

export interface TalentColumnProps {
    isActive: boolean,
    items: {
        name: string,
        order: number
    }[],
}

export const TalentColumn = component$((props: TalentColumnProps) => {
    useStylesScoped$(styles);

    return (
        // <div className={props.isActive ? "talent-column active" : "talent-column"}>
        <div className={"talent-column"}>
            {
                props.items.map((item) =>
                    <TalentItem name={item.name} order={item.order} isActive={props.isActive} />
                )
            }
        </div>
    )
});

interface TalentItemProps {
    name: string
    order: number;
    isActive: boolean;
}

export const TalentItem = component$((props: TalentItemProps) => {
    useStylesScoped$(styles);

    return (
        <div
            style={{ "--order": props.order }}
            className={props.isActive ? "talent-item active" : "talent-item"}>
            {props.name}
        </div>
    );
});