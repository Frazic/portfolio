import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import styles from "./skills.css";
import { TalentColumn } from "./talentColumn";

export default component$(() => {
  useStylesScoped$(styles);

  const isTree1Active = useSignal(true);
  const isTree2Active = useSignal(true);
  const isTree3Active = useSignal(true);

  return (
    <>
      <style>
        {"\
@media screen and (min-width:1024px){\
footer {\
    transform: translateY(" +
          (isTree1Active.value || isTree2Active.value || isTree3Active.value
            ? "0"
            : "-15em") +
          ");\
    transition: transform 300ms ease;\
}}"}
      </style>
      <h1>Skills</h1>
      <div className="tree-grid">
        <div
          className={isTree1Active.value ? "tree tree-1-active" : "tree tree-1"}
        >
          <div className="talent-grid">
            <h2
              className="talent-header"
              onClick$={() => {
                isTree1Active.value = !isTree1Active.value;
              }}
            >
              Tree 1
            </h2>
            <TalentColumn
              isActive={isTree1Active.value}
              items={[
                { name: "Talent 1", iconClass: "fa-solid fa-camera" },
                { name: "Talent 2", iconClass: "fa-solid fa-camera" },
                { name: "Talent 3", iconClass: "fa-solid fa-camera" },
              ]}
            />
            <TalentColumn
              isActive={isTree1Active.value}
              items={[
                { name: "Talent 1", iconClass: "fa-solid fa-camera" },
                { name: "Talent 2", iconClass: "fa-solid fa-camera" },
                { name: "Talent 3", iconClass: "fa-solid fa-camera" },
              ]}
            />
          </div>
        </div>
        <div
          className={isTree2Active.value ? "tree tree-2-active" : "tree tree-2"}
        >
          <div className="talent-grid">
            <h2
              className="talent-header"
              onClick$={() => {
                isTree2Active.value = !isTree2Active.value;
              }}
            >
              Tree 2
            </h2>
            <TalentColumn
              isActive={isTree2Active.value}
              items={[
                {
                  name: "Talent 1",
                  iconClass: "fa-solid fa-camera",
                  tooltip: {
                    text: "Description of talent 1",
                    position: "right",
                  },
                },
                { name: "link" },
                {
                  name: "Talent 2",
                  iconClass: "fa-solid fa-camera",
                  tooltip: {
                    text: "Longer description of talent 2",
                    position: "left",
                  },
                },
                { name: "space" },
                {
                  name: "Talent 3",
                  iconClass: "fa-solid fa-camera",
                  tooltip: {
                    text: "Much much longer description of talent 3 that goes into too much details to fit into a reasonable tooltip that is easy to understand",
                    position: "right",
                  },
                },
              ]}
            />
            <TalentColumn
              isActive={isTree2Active.value}
              items={[
                { name: "Talent 1", iconClass: "fa-solid fa-camera" },
                { name: "empty" },
                { name: "Talent 2", iconClass: "fa-solid fa-camera" },
                { name: "link" },
                { name: "Talent 3", iconClass: "fa-solid fa-camera" },
              ]}
            />
          </div>
        </div>
        <div
          className={isTree3Active.value ? "tree tree-3-active" : "tree tree-3"}
        >
          <div className="talent-grid">
            <h2
              className="talent-header"
              onClick$={() => {
                isTree3Active.value = !isTree3Active.value;
              }}
            >
              Tree 3
            </h2>
            <TalentColumn
              isActive={isTree3Active.value}
              items={[
                { name: "Talent 1", iconClass: "fa-solid fa-camera" },
                { name: "Talent 2", iconClass: "fa-solid fa-camera" },
                { name: "Talent 3", iconClass: "fa-solid fa-camera" },
              ]}
            />
            <TalentColumn
              isActive={isTree3Active.value}
              items={[
                { name: "Talent 1", iconClass: "fa-solid fa-camera" },
                { name: "Talent 2", iconClass: "fa-solid fa-camera" },
                { name: "Talent 3", iconClass: "fa-solid fa-camera" },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = () => {
  return {
    title: "Skills",
  };
};
