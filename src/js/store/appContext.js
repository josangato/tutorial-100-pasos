//Crea la variable para pasarla de vista en vista
import React,{ useState , useEffect} from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        //This will be passed as the context value
        const [state, setState] = useState(
            getState({
                getStore:() => state.store,
                getActions:() => state.actions,
                setStore: updateStore =>
                    setState({
                        store: Object.assign(state.store , updateStore),
                        actions: {...state.actions}
                    })
            })
        );

        useEffect(()=> {

        },[]);

        return(
            <Context.Provider value={state}>
                <PassedComponent{...props}/>
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;