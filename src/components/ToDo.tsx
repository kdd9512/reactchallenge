import React from "react";
import {Categories, IToDo, stName, toDoSelector, toDoState} from "../atoms";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {get} from "react-hook-form";

function ToDo({text, category, id}: IToDo) {

    const [toDos, setToDos] = useRecoilState(toDoState);
    const selector = useRecoilValue(toDoSelector);

    // 들어올 props 가 interface 의 어떠한 요소와 완벽히 일치하는 것을 표기하려면
    // interface명["해당요소 이름"]
    // const onClick = (newCategory:IToDo["category"]) => {
    //     console.log("want to ", newCategory);
    // }

    localStorage.setItem(stName.localToDos, JSON.stringify(toDos));

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
        localStorage.setItem(stName.localToDos, JSON.stringify(setToDos));
    }

    const deleteToDo = (e: React.MouseEvent<HTMLButtonElement>) => {
        const liId = e.currentTarget.parentElement?.id;
        const cleanToDos = toDos.filter((toDo) => toDo.id.toString() !== liId);
        setToDos(cleanToDos);
        localStorage.setItem(stName.localToDos, JSON.stringify(toDos));
    }

    return (
        <li id={id.toString()}>
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
            <button onClick={deleteToDo}>Delete</button>
        </li>
    );
}

export default ToDo;