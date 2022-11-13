import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./skills.css";
import { TalentColumn } from "./talentColumn";

export default component$(() => {
    useStylesScoped$(styles);

    const isTree1Active = useSignal(false);
    const isTree2Active = useSignal(false);
    const isTree3Active = useSignal(false);

    return (
        <>
            <div className="text-justified">
                <h1>Skills</h1>

                <p>Skills talent tree!</p>
            </div>
            <div className="tree-grid">
                <div className={isTree1Active.value ? "tree tree-1-active" : "tree tree-1"}>
                    <div className="talent-grid">
                        <h2 className="talent-header" onClick$={() => { isTree1Active.value = !isTree1Active.value }}>Tree 1</h2>
                        <TalentColumn isActive={isTree1Active.value}
                            items={[
                                { name: "Talent 1", iconClass: "fa-solid fa-camera" },
                                { name: "Talent 2", iconClass: "fa-solid fa-camera" },
                                { name: "Talent 3", iconClass: "fa-solid fa-camera" },
                            ]}
                        />
                        <TalentColumn isActive={isTree1Active.value}
                            items={[
                                { name: "Talent 1", iconClass: "fa-solid fa-camera" },
                                { name: "Talent 2", iconClass: "fa-solid fa-camera" },
                                { name: "Talent 3", iconClass: "fa-solid fa-camera" },
                            ]}
                        />
                    </div>
                </div>
                <div className={isTree2Active.value ? "tree tree-2-active" : "tree tree-2"}>
                    <div className="talent-grid">
                        <h2 className="talent-header" onClick$={() => { isTree2Active.value = !isTree2Active.value }}>Tree 2</h2>
                        <TalentColumn isActive={isTree2Active.value}
                            items={[
                                { name: "Talent 1", iconClass: "fa-solid fa-camera" },
                                { name: "Talent 2", iconClass: "fa-solid fa-camera" },
                                { name: "Talent 3", iconClass: "fa-solid fa-camera" },
                            ]}
                        />
                        <TalentColumn isActive={isTree2Active.value}
                            items={[
                                { name: "Talent 1", iconClass: "fa-solid fa-camera" },
                                { name: "Talent 2", iconClass: "fa-solid fa-camera" },
                                { name: "Talent 3", iconClass: "fa-solid fa-camera" },
                            ]}
                        />
                    </div>
                </div>
                <div className={isTree3Active.value ? "tree tree-3-active" : "tree tree-3"}>
                    <div className="talent-grid">
                        <h2 className="talent-header" onClick$={() => { isTree3Active.value = !isTree3Active.value }}>Tree 3</h2>
                        <TalentColumn isActive={isTree3Active.value}
                            items={[
                                { name: "Talent 1", iconClass: "fa-solid fa-camera" },
                                { name: "Talent 2", iconClass: "fa-solid fa-camera" },
                                { name: "Talent 3", iconClass: "fa-solid fa-camera" },
                            ]}
                        />
                        <TalentColumn isActive={isTree3Active.value}
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

/**
 * <div style="
    display: contents;
">
<svg viewBox="-50 0 100 100" xmlns="http://www.w3.org/2000/svg" style="
">
  <rect x="-1" y="0" width="1" height="100%" style="
    stroke: white;
    fill: white;
"></rect>
  Sorry, your browser does not support inline SVG.
</svg>
</div>
 */