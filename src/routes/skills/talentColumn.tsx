import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./skills.css";

export interface TalentColumnProps {
    isActive: boolean,
    items: {
        name: string
    }[],
}

export const TalentColumn = component$((props: TalentColumnProps) => {
    useStylesScoped$(styles);

    const createItems = () => {
        const items: any[] = []
        for (let index = 0; index < props.items.length; index++) {
            const item = props.items[index];

            // This flips the order on inactive so they fade out from bottom to top
            const order = props.isActive ? index + 1 : props.items.length - index;

            items.push(<TalentItem name={item.name} order={order} isActive={props.isActive} />);
        }
        return items;
    }

    return (
        <div className={props.isActive ? "talent-column active" : "talent-column"}>
            {
                createItems()
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