import { component$, useStyles$, $, Signal } from "@builder.io/qwik";
import styles from "./skills.css";

export interface TalentColumnProps {
  isActive: boolean;
  setTooltip?: Signal;
  items: {
    name: string;
    iconClass?: string;
    tooltip?: string;
  }[];
}

export const TalentColumn = component$((props: TalentColumnProps) => {
  useStyles$(styles);

  const createItems$ = $(() => {
    const items: any[] = [];
    for (let index = 0; index < props.items.length; index++) {
      const item = props.items[index];

      // This flips the order on inactive so they fade out from bottom to top
      const order = props.isActive ? index + 1 : props.items.length - index;

      switch (item.name) {
        case "link":
          items.push(
            <div
              style={{ "--order": order }}
              className={props.isActive ? "talent-link active" : "talent-link"}
            >
              <div className="link-line"></div>
            </div>
          );
          break;

        case "space":
          items.push(
            <div
              style={{ "--order": order }}
              className={
                props.isActive ? "talent-space active" : "talent-space"
              }
            ></div>
          );
          break;

        case "empty":
          items.push(
            <div
              style={{ "--order": order }}
              className={
                props.isActive ? "talent-empty active" : "talent-empty"
              }
            ></div>
          );
          break;

        default:
          items.push(
            <TalentItem
              name={item.name}
              order={order}
              isActive={props.isActive}
              iconClass={item.iconClass}
              tooltip={item.tooltip}
              setTooltip={props.setTooltip}
            />
          );
          break;
      }
    }
    return items;
  });

  return (
    <div className={props.isActive ? "talent-column active" : "talent-column"}
    >
      {createItems$()}
    </div>
  );
});

interface TalentItemProps {
  name: string;
  order: number;
  isActive: boolean;
  iconClass?: string;
  setTooltip?: Signal;
  tooltip?: string;
}

export const TalentItem = component$((props: TalentItemProps) => {
  useStyles$(styles);

  const onClickItem$ = $(() => {
    if (props.setTooltip) {
      if (props.tooltip) {
        if (props.setTooltip.value != props.tooltip) {
          props.setTooltip.value = props.tooltip;
        } else {
          props.setTooltip.value = "";
        }
      } else {
        props.setTooltip.value = "";
      }
    }
  })

  return (
    <div
      style={{ "--order": props.order }}
      className={props.isActive ? "talent-item active" : "talent-item"}
      onClick$={onClickItem$}
    >
      {
        props.iconClass && <i class={props.iconClass + ""}></i> // For some reason withtout the "" this causes Qwik to crash
      }
      <span>{props.name}</span>
    </div>
  );
});
