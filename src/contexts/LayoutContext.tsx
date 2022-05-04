import {FC, createContext, useState, useContext, ReactNode, Dispatch, SetStateAction} from 'react';
export interface ILayoutContext {
    currentPage: string;
    setCurrentPage?: Dispatch<SetStateAction<string>>;
}

interface LayoutPageProps {
    children: ReactNode;
}

const LayoutContext = createContext<ILayoutContext | null>(null);

export const useLayoutContext = () => {
    const context = useContext(LayoutContext);
    if(context === undefined){
        throw new Error("useLayoutContext must be used within a LayoutProvider");
    }
    return context;
}

const LayoutContextProvider: FC<LayoutPageProps> = ({children}) => {
    const [currentPage, setCurrentPage] = useState("Home");

    return (
        <LayoutContext.Provider value={{currentPage, setCurrentPage}}>
            {children}
        </LayoutContext.Provider>
    );
}

export default LayoutContextProvider;
