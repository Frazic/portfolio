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
                    <div className={"talent-grid"} onClick$={() => { isTree1Active.value = !isTree1Active.value; console.log(isTree1Active.value) }}>
                        <div className="talent-header">Tree 1</div>
                        <div className={isTree1Active.value ? "talent-column active" : "talent-column"}>
                            <div style={{ "--order": "1" }} className="talent-item">Talent 1</div>
                            <div style={{ "--order": "2" }} className="talent-item">Talent 1</div>
                        </div>
                        <div className={isTree1Active.value ? "talent-column active" : "talent-column"}>
                            {[1, 2, 3, 4, 5].map((i) => (<div style={{ "--order": i }} className="talent-item">Talent {i}</div>))}
                        </div>
                    </div>
                </div>

                <div className="tree tree-2">
                    <div className={"talent-grid"} onClick$={() => { isTree2Active.value = !isTree2Active.value; console.log("2 " + isTree2Active.value) }}>
                        <div className="talent-header">Tree 2</div>
                        <TalentColumn isActive={isTree2Active.value}
                            items={[
                                { name: "Talent 1", order: 1 },
                                { name: "Talent 2", order: 2 },
                                { name: "Talent 3", order: 3 }
                            ]} />
                    </div>
                </div>

                <div className="tree tree-3">Tree 3</div>
            </div>
        </>
    );
});