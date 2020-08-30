import { createContext, useContext } from "react";

export interface ServiceData {
  apiUrl: string;
}

export const ServiceDataContext = createContext<ServiceData>({} as ServiceData);

export const useServiceDataContext = () => useContext(ServiceDataContext);
