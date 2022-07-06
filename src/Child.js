import { Data } from "./Data"

export const Child = ({setState, array}) => {

    const handle = (data) => {
        array.push({[data.color] : data.size});
        setState(array);
    }

    return(
        <>
            <div>
                {Data.map(data => <button onClick={() => handle(data)} key={data.id}>{data.color}</button>)}
            </div>
        </>
    )
}