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
    default: [],
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: (({get}) => {
        const toDos = get(toDoState);
        const category = get(categoryState);

        // ** 여기서 localStorage 에 저장하지 않으면 가장 최근에 입력한 값이 localStorage 에 저장되지 않는다.
        // localStorage.setItem(stName.localToDos,JSON.stringify(toDos));

        // const savedToDos = localStorage.getItem(stName.localToDos);
        // if (savedToDos != null) {
        //     JSON.parse(savedToDos);
        // }
        // console.log(savedToDos)

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

