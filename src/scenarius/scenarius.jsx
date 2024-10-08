import Scenario from "../scenario/scenario";

const Scenarius = ({ data }) => {
    return (
        <div>
            <h2>Сценарії</h2>
            <ul>
                {data.map((scenario) => (
                    <Scenario data={scenario} key={scenario.id} />
                ))}
            </ul>
        </div>
    );
};

export default Scenarius;