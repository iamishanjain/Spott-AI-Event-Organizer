import { mutation } from "@/convex/_generated/server";
import { useMutation, useQuery } from "convex/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const useConvexQuery = (query, ...args) => {
  const result = useQuery(query, ...args);

  const [data, setData] = useState(undefined);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (result === undefined) {
      setisLoading(true);
    } else {
      try {
        setData(result);
        setError(null);
      } catch (error) {
        setError(error);
        toast.error(error.message);
      } finally {
        setisLoading(false);
      }
    }
  }, [result]);

  return {
    data,
    error,
    isLoading,
  };
};

export const useConvexMutation = (mutation) => {
  const mutationFn = useMutation(mutation);

  const [data, setData] = useState(undefined);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false);

  const mutate = async (...args) => {
    setisLoading(true);
    setError(null);

    try {
      const response = await mutate(...args);
      setData(response);
      return response;
    } catch (error) {
      setError(err);
      toast.error(error.message);
    } finally {
      setisLoading(false);
    }
  };
  return { mutate, data, isLoading, error };
};
