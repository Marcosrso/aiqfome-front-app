"use client";
import { Radio } from "@/components/radio/radio";
import { Checkbox } from "@/components/checkbox/checkbox";
import { Tag } from "@/components/tag/tag";
import Button from "@/components/button/button";
import IntegerInput from "@/components/input-integer/input-integer";

import styles from "./page.module.css";
import { Product } from "@/interfaces/product";
import parseCurrency from "@/utils/currency";
import { useForm } from "@/hooks/useForm";
import { useState } from "react";
import { TicketItem, useTicket } from "@/hooks/useTicket";

interface FormAddProductProps {
  product: Product;
}

export default function FormAddProduct({ product }: FormAddProductProps) {
  const initialFormState = product.options.reduce((acc, option) => {
    const types = {
      single: "",
      multi: [],
      text: "",
      integer: [],
    };
    acc[option.id] = types[option.type];
    if (option?.choices && option.type === "integer") {
      acc[option.id] = option?.choices.reduce(
        (accChoices, choise) => ({ ...accChoices, [choise.label]: 0 }),
        {}
      );
    }
    return acc;
  }, {} as Record<string, unknown>);

  const [quantity, setQuantity] = useState<null | number>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { validateTicketItem, remove, update } = useTicket();

  const { values, handleChange, handleIntegerInputChange } = useForm(
    initialFormState,
    (valuesFields) => {
      const errors = validateTicketItem(product, valuesFields);
      setErrors(errors);
      const isValid = Object.keys(errors).length > 0;
      
      if (isValid && quantity) {
        const ticketItem: TicketItem = {
          id: product.name,
          productId: product.name,
          name: product.name,
          quantity: quantity || 1,
          unitValue: 10,
          total: 10,
          options: valuesFields,
        };

        update(ticketItem);
      }
    }
  );

  const handleQuantityChange = (value: number | undefined) => {
    const newValue = typeof value === "number" ? value : null;
    setQuantity(newValue);

    if (typeof newValue === "number") {
      if (newValue === 0) {
        remove(product.name);
      } else {
        const ticketItem: TicketItem = {
          id: product.name,
          productId: product.name,
          name: product.name,
          quantity: newValue || 1,
          unitValue: 10,
          total: 10,
          options: values,
        };
        update(ticketItem);
      }
    }
  };

  return (
    <>
      <section className={styles["section-box"]}>
        <div className={styles["section-title"]}>
          <h3>quantos?</h3>
          {typeof quantity === "number" && quantity > 0 ? (
            <IntegerInput
              type="cart"
              value={quantity}
              onChange={(value) => handleQuantityChange(value)}
            />
          ) : (
            <Button
              skin="dark"
              disabled={Object.keys(errors).length > 0}
              onClick={() => handleQuantityChange(1)}
              className={styles["add-item-text-button"]}
            >
              Adicionar
            </Button>
          )}
        </div>
        total&nbsp;{parseCurrency(product.value)}
      </section>
      {product.options.map((option) => (
        <section key={option.id} className={styles["section-box"]}>
          <div className={styles["section-title"]}>
            <h3>{option.title}</h3>
            {option.required && <Tag>Obrigatório</Tag>}
          </div>
          {typeof option?.min === "number" && (
            <span>{`escolha ${
              (values[`${option.id}`] as string[])?.length || 0
            } de ${option?.max}`}</span>
          )}
          <span className={styles["error-message"]}>
            {errors[`${option.title}`]}
          </span>

          {option.type === "text" ? (
            <textarea
              name={option.id}
              value={values[`${option.id}`] as string}
              onChange={handleChange}
              placeholder={option.placeholder}
              rows={3}
              style={{ width: "100%" }}
            />
          ) : (
            option.choices?.map((choice) => (
              <div key={choice.label} className={styles["product-item"]}>
                <label style={{ display: "block" }}>
                  {option.type === "single" && (
                    <Radio
                      name={option.id}
                      label={choice.label}
                      value={choice.label}
                      checked={values[`${option.id}`] === choice.label}
                      onChange={handleChange}
                    />
                  )}
                  {option.type === "multi" && (
                    <Checkbox
                      name={option.id}
                      value={choice.label}
                      checked={(values[`${option.id}`] as string[]).includes(
                        choice.label
                      )}
                      onChange={handleChange}
                      label={choice.label}
                    />
                  )}
                  {option.type === "integer" && (
                    <div>
                      <IntegerInput
                        type="details"
                        value={
                          (values[`${option.id}`] as Record<string, number>)[
                            choice.label
                          ]
                        }
                        onChange={(value) =>
                          handleIntegerInputChange(
                            value,
                            choice.label,
                            option.id
                          )
                        }
                      />
                      {choice.label}
                    </div>
                  )}
                </label>
                <span className={styles["product-value"]}>{`+ ${parseCurrency(
                  choice.value
                )}`}</span>
              </div>
            ))
          )}
        </section>
      ))}
    </>
  );
}
