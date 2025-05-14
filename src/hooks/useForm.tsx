import { useEffect, useState } from "react";

export function useForm<
  T extends Record<string, unknown | Record<string, unknown>>
>(initialValues: T, validate?: (values: T) => void) {
  const [values, setValues] = useState<T>(initialValues);

  useEffect(() => {
    validate?.(values)
  }, [])

  function handleIntegerInputChange(
    value: number | undefined,
    targetValue: string,
    name: string
  ) {
    const keyValue = values[name] as Record<string, number>;
    keyValue[`${targetValue}`] = value || 0;

    setValues((prev) => {
      const newValue = {
        ...prev,
        [name]: { ...keyValue },
      };
      validate?.(newValue);
      return newValue;
    });
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const target = e.target;
    const { name, type } = target;

    const isCheckbox = type === "checkbox";
    const value = isCheckbox
      ? (target as HTMLInputElement).checked
      : target.value;

    let keyValue: string[] | string = values[name] as string[] | string;

    if (Array.isArray(keyValue)) {
      if (!value) {
        keyValue = [...keyValue.filter((item) => item !== target.value)];
      } else {
        keyValue = [...keyValue, target.value];
      }
    }

    setValues((prev) => {
      const newValue = {
        ...prev,
        [name]: isCheckbox ? [...keyValue] : value,
      };
      validate?.(newValue);
      return newValue;
    });
  }

  function reset() {
    setValues(initialValues);
  }

  return { values, handleChange, handleIntegerInputChange, reset };
}
