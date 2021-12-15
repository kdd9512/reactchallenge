import React from "react";
import {Categories, IToDo, toDoState} from "../atoms";
import {useSetRecoilState} from "recoil";

function ToDo({text, category, id}: IToDo) {

    const setToDos = useSetRecoilState(toDoState);

    // 들어올 props 가 interface 의 어떠한 요소와 완벽히 일치하는 것을 표기하려면
    // interface명["해당요소 이름"]
    // const onClick = (newCategory:IToDo["category"]) => {
    //     console.log("want to ", newCategory);
    // }

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: {name},
        } = e;
        setToDos((prevToDos) => {
            const targetIndex = prevToDos.findIndex(toDo => toDo.id === id);
            // const prevToDo = prevToDos[targetIndex];
            const newToDo = {text, id, category: name as any};
            return [
                ...prevToDos.slice(0, targetIndex),
                newToDo,
                ...prevToDos.slice(targetIndex + 1),
            ];
        })
    }

    return (
        <li>
            <span>{text}</span>
            {category !== Categories.DOING && (
                // <button onClick={() => onClick("DOING")}>Doing</button>
                <button name={Categories.DOING} onClick={onClick}>Doing</button>
            )}

            {category !== Categories.TO_DO && (
                // <button onClick={() => onClick("TO_DO")}>To Do</button>
                <button name={Categories.TO_DO} onClick={onClick}>To Do</button>
            )}

            {category !== Categories.DONE && (
                // <button onClick={() => onClick("DONE")}>Done</button>
                <button name={Categories.DONE} onClick={onClick}>Done</button>
            )}

        </li>
    );
}

export default ToDo;