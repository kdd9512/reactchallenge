import React, {useState} from "react";
import {useForm} from "react-hook-form"
import {atom, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import CreateToDo from "./CreateToDo";
import {Categories, categoryState, toDoSelector, toDoState} from "../atoms";
import ToDo from "./ToDo";
import SelectToDo from "./SelectToDo";

// interface IForm {
//     email: string;
//     firstname: string;
//     lastname: string;
//     username: string;
//     password1: string;
//     password2: string;
//     extraErr?: string;
// }

function ToDoList() {

    // react-hook-form 를 사용하지 않고 Hooks 로만 작성했을 때.
    // const [toDo, setToDo] = useState("");
    // const [toDoErr, setToDoErr] = useState("");
    // const onChange = (e:React.FormEvent<HTMLInputElement>) => {
    //     const {
    //         currentTarget: {value},
    //     } = e;
    //     setToDoErr("");
    //     setToDo(value);
    // };
    // const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     if (toDo.length < 10) {
    //         return setToDoErr(" it's too short")
    //     }
    //     console.log("submitted");
    // };
    // return (
    //     <div>
    //         <form onSubmit={onSubmit}>
    //             <input onChange={onChange} value={toDo} type="text" placeholder="Write To DO"/>
    //             <button type="submit">Add</button>
    //             {toDoErr !== "" ? toDoErr : null}
    //         </form>
    //     </div>
    // );

    // react-hook-form 을 이용하여 코드를 대폭 단축.
    // const {
    //     register,
    //     watch,
    //     handleSubmit,
    //     formState: {errors},
    //     setError
    // } = useForm<IForm>({
    //     // 사용자의 이해를 돕기 위해 최초 입력값을 설정할 수 있다.
    //     defaultValues: {
    //         email: "@email.com",
    //     }
    // });
    //
    // const onValid = (data: IForm) => {
    //     if (data.password1 !== data.password2) {
    //         setError("password2",
    //             {message: "password are not matched"},
    //             {shouldFocus: true})
    //     }
    //     // setError("extraErr", {message: "server offline"});
    // };
    //
    // console.log(errors);
    //
    // return (
    //     <div>
    //         <form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit(onValid)}>
    //             <input {...register("email",
    //                 {
    //                     required: "email is required",
    //                     pattern: {
    //                         value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //                         message: "Please recheck your input. it's not an email pattern."
    //                     }
    //                 })}
    //                    placeholder="email"/>
    //             <span>{errors?.email?.message}</span>
    //
    //             <input {...register("firstname", {
    //                 required: "firstname is required",
    //                 validate: {
    //                     notRed1: (value) => value.includes("문재인") ? "빨갱이는 허용되지 않습니다" : true,
    //                     notRed2: (value) => value.includes("김정은") ? "빨갱이는 허용되지 않습니다" : true,
    //                 }
    //             })}
    //                    placeholder="firstname"/>
    //             <span>{errors?.firstname?.message}</span>
    //
    //             <input {...register("lastname", {required: "lastname is required"})}
    //                    placeholder="lastname"/>
    //             <span>{errors?.lastname?.message}</span>
    //
    //             <input {...register("username", {required: "username is required"})}
    //                    placeholder="username"/>
    //             <span>{errors?.username?.message}</span>
    //
    //             <input {...register("password1",
    //                 {
    //                     required: "password1 is required",
    //                     minLength: {
    //                         value: 8,
    //                         message: "too short password. password must contain at least 8 words"
    //                     }
    //                 })}
    //                    placeholder="password1"/>
    //             <span>{errors?.password1?.message}</span>
    //
    //             <input {...register("password2", {required: "password2 is required"})}
    //                    placeholder="password2"/>
    //             <span>{errors?.password2?.message}</span>
    //
    //             <button>Add</button>
    //
    //             <span>
    //                 {errors?.extraErr?.message}
    //             </span>
    //
    //         </form>
    //     </div>
    // );

    // [value, setValue] = useState() 가 있다 가정할 때,
    // value 값만 가져오고 싶다면 useRecoilValue
    // value 값을 변경하고 싶다면(=setValue) useSetRecoilState
    // const value = useRecoilValue(toDoState);
    // const modFunc = useSetRecoilState(toDoState);
    // 둘 다 사용하려면 useRecoilState

    const toDos = useRecoilValue(toDoSelector);

    return (
        <div>
            <h1>TODOS</h1>
            <br/>
            <SelectToDo/>
            <CreateToDo/>
            {toDos?.map(toDo => <ToDo key={toDo.id} {...toDo}/>)}
        </div>
    );

}

export default ToDoList;