import {atom, selector} from "recoil";
import useLocalStorage from "react-query/types/devtools/useLocalStorage";

export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE",
}

export enum stName {
    "localToDos" = "localToDos"
}

// category 에서 특정한 string 만 허용하도록 설정하였으므로, IToDo 는 Array 가 된다.
export interface IToDo {
    text: string;
    id: number;
    // 특정한 string 만 허용하도록 설정.
    category: Categories;
}

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO,
})

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: JSON.parse(localStorage.getItem(stName.localToDos) as string) || [],
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: (({get}) => {
        const toDos = get(toDoState);
        const category = get(categoryState);

        // 이 코드를 아래 한 줄로 단축할 수 있다.
        // switch (category) {
        //     case "TO_DO": {
        //         return toDos.filter((toDo) => toDo.category === "TO_DO");
        //     }
        //     case "DOING": {
        //         return toDos.filter((toDo) => toDo.category === "DOING");
        //     }
        //     case "DONE": {
        //         return toDos.filter((toDo) => toDo.category === "DONE");
        //     }
        // }
        return toDos.filter((toDo) => toDo.category === category);
    })
})

