import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./skills.css?inline";
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
                <div className="tree tree-1">
                    <div className={"talent-grid"} onClick$={() => { isTree1Active.value = !isTree1Active.value }}>
                        <div className="talent-header">Tree 1</div>
                        <TalentColumn isActive={isTree1Active.value}
                            items={[
                                { name: "Talent 1" },
                                { name: "Talent 2" },
                                { name: "Talent 3" }
                            ]}
                        />
                        <TalentColumn isActive={isTree1Active.value}
                            items={[
                                { name: "Talent 1" },
                                { name: "Talent 2" },
                                { name: "Talent 3" }
                            ]}
                        />
                        <TalentColumn isActive={isTree1Active.value}
                            items={[
                                { name: "Talent 1" },
                                { name: "Talent 2" },
                                { name: "Talent 3" }
                            ]}
                        />
                    </div>
                </div>
                <div className="tree tree-2">
                    <div className="talent-grid" onClick$={() => { isTree2Active.value = !isTree2Active.value }}>
                        <div className="talent-header">Tree 2</div>
                        <TalentColumn isActive={isTree2Active.value}
                            items={[
                                { name: "Talent 1" },
                                { name: "Talent 2" },
                                { name: "Talent 3" }
                            ]}
                        />
                        <TalentColumn isActive={isTree2Active.value}
                            items={[
                                { name: "Talent 1" },
                                { name: "Talent 2" },
                                { name: "Talent 3" }
                            ]}
                        />
                        <TalentColumn isActive={isTree2Active.value}
                            items={[
                                { name: "Talent 1" },
                                { name: "Talent 2" },
                                { name: "Talent 3" }
                            ]}
                        />
                    </div>
                </div>
                <div className="tree tree-3">
                    <div className="talent-grid" onClick$={() => { isTree3Active.value = !isTree3Active.value }}>
                        <div className="talent-header">Tree 3</div>
                        <TalentColumn isActive={isTree3Active.value}
                            items={[
                                { name: "Talent 1" },
                                { name: "Talent 2" },
                                { name: "Talent 3" }
                            ]}
                        />
                        <TalentColumn isActive={isTree3Active.value}
                            items={[
                                { name: "Talent 1" },
                                { name: "Talent 2" },
                                { name: "Talent 3" }
                            ]}
                        />
                        <TalentColumn isActive={isTree3Active.value}
                            items={[
                                { name: "Talent 1" },
                                { name: "Talent 2" },
                                { name: "Talent 3" }
                            ]}
                        />
                    </div>
                </div>
            </div>
        </>
    );
});