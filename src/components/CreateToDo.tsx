import React from "react";
import {useForm} from "react-hook-form";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {categoryState, toDoState} from "../atoms";

interface IForm {
    toDo: string;
}

function CreateToDo() {

    const setToDos = useSetRecoilState(toDoState);
    // category 의 값만 필요하므로 useRecoilValue
    const category = useRecoilValue(categoryState);
    const {register, handleSubmit, setValue} = useForm<IForm>();

    // {} 를 이용, IForm 의 toDo만 가져온다.
    const handleValid = ({toDo}: IForm) => {

        // 그냥 toDos.push 는 state mutation 위반이 되므로 기존 toDos 값만을 가져와 새로운 state 를 만들어야한다.
        // 기존 toDos 인 prevToDos 의 element 를 Array 에 담고, 새 toDos 내용을 {}에 담는다.

        setToDos(prevToDos => [
            {text: toDo, id: Date.now(), category },
            ...prevToDos,
        ]);
        setValue("toDo", "");
    }

    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input {...register("toDo")}
                   type="text" placeholder="Write To DO"/>
            <button type="submit">Add</button>
        </form>
    );
}

export default CreateToDo;