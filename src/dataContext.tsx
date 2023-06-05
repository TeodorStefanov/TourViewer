import React, { ReactNode, useEffect, useState } from "react";
import { ContextType } from "./types/context";
import { urlServer } from "./utils/url";
import { requestCredentials } from "./utils/constans";
import { LoadingLoader } from "./components/loading";
import { useNavigate } from "react-router-dom";
import { Tour } from "./types/tour";

export const DataContext = React.createContext<ContextType>({ data: null });
const { key } = requestCredentials;
const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<null | Tour>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const promise = await fetch(`${urlServer}?key=${key}`);
        const response: ContextType = await promise.json();
        if (promise.status === 200) {
          setData(response.data);
          setLoading(true);
        } else {
          setLoading(true);
          navigate("/error");
        }
      } catch (err) {
        setLoading(true);
        navigate("/error");
      }
    };
    getData();
  }, [navigate]);
  if (!loading) {
    return <LoadingLoader />;
  }
  

  return (
    <DataContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
