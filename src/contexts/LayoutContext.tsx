import {createContext, useReducer, useContext} from 'react';

type TSidebarActions = "TOGGLE_SIDEBAR";

export interface ILayoutContextValues {
    sidebarProps: ISidebarProps;
    sidebarActions: React.Dispatch<ISidebarActions>;
}

interface ILayoutContextProps {
    children : JSX.Element | JSX.Element[]
}

export interface ISidebarProps {
    isSidebarOpen: boolean;
}

interface ISidebarActions {
    type: TSidebarActions;
}

const initialSidebarState: ISidebarProps = {
    isSidebarOpen: true
}

const LayoutContext = createContext<ILayoutContextValues | undefined>(undefined);

const sidebarReducer = (state: ISidebarProps, action: ISidebarActions) => {
    switch (action.type){
        case "TOGGLE_SIDEBAR":
            return {...state, isSidebarOpen: !state.isSidebarOpen };
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

export const useLayoutContext = () => {
    const context = useContext(LayoutContext);
    if(context === undefined){
        throw new Error("useLayoutContext must be used within a LayoutProvider");
    }
    return context;
}

const LayoutContextProvider = ({children}: ILayoutContextProps) => {
    const [sidebarState, sidebarDispatch] = useReducer(sidebarReducer, initialSidebarState);

    return (
        <LayoutContext.Provider value={{sidebarProps: sidebarState , sidebarActions: sidebarDispatch}}>
            {children}
        </LayoutContext.Provider>
    );
}

export default LayoutContextProvider;
