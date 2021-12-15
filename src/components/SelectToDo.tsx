import {Categories, categoryState} from "../atoms";
import React from "react";
import {useRecoilState} from "recoil";

function SelectToDo() {
    const [category, setCategory] = useRecoilState(categoryState);

    const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
        setCategory(e.currentTarget.value as any);
    }
    return (
        <select onInput={onInput} value={category}>
            <option value={Categories.TO_DO}>To Do</option>
            <option value={Categories.DOING}>Doing</option>
            <option value={Categories.DONE}>Done</option>
        </select>
    )
}

export default SelectToDo;