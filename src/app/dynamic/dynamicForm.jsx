"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import {
  CheckBoxComponent,
  RadioButtonComponent,
  ButtonComponent,
} from "@syncfusion/ej2-react-buttons";
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-react-dropdowns/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { dynamicForm,schema } from "./formSchema";


//Error Component
const Error = ({ children }) => <p style={{ color: "red" }}>{children}</p>;
function testLetterRegex(value) {
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ ]*$/.test(value);
  return regex;
}

const Input = ({ value, onChange, type, ...rest }) => {
  switch (type) {
    case "text":
      return (
        <TextBoxComponent
        className=" p-4 text-gray-600"
          placeholder={rest?.placeholder}
          onChange={(value) => {
            console.log(value)
            onChange(value)
          }}
          value={value}
        />
      );
    case "radio":
      return rest?.options.map((e) => (
        <RadioButtonComponent
          key={e}
          label={e}
          value={e}
          onChange={(value) => onChange(value)}
          checked={value === true}
        />
      ));
    case "dropdown":
      return (
        <DropDownListComponent
          dataSource={rest?.options}
          select={({ itemData }) => {
            onChange(itemData.value);
          }}
          value={value}
        />
      );

    case "checkbox":
      return (
        <CheckBoxComponent
          label={rest?.checkboxLabel}
          onChange={(e) => onChange(e.target.checked)}
          checked={value}
        />
      );

    default:
      return null;
  }
};

const Dynamic = () => {
  const {
    handleSubmit,
    control,
    // watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formInputs = Object.keys(dynamicForm).map((e) => {
    const { rules, defaultValue, label } = dynamicForm[e];

    return (
      <section key={e}>
        <label>{label}</label>
        <Controller
          name={e}
          control={control}
          rules={rules}
          defaultValue={defaultValue}
          error={true}
          render={({ field }) => (
            <div>
              <Input
                value={field.value}
                onChange={field.onChange}
                {...dynamicForm[e]}
              />
            </div>
          )}
        />
        {errors[e] && <Error>This field is required</Error>}
      </section>
    );
  });

  const onSubmit = (data) => console.log(data);


  return (
    <div className="wrapper">
      <h2 className="text-black">Dynamic Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formInputs}
        <div style={{ textAlign: "center" }}>
          <ButtonComponent type="submit" cssClass="e-success">
            Success
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default Dynamic;