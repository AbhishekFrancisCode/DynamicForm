import * as yup from "yup"

export const dynamicForm = {
    firstName: {
      label: "Name",
      type: "text",
      placeholder: "Enter your first name",
      defaultValue: "",
      rules: {
        required: true,
      },
    },
    email: {
      label: "Email",
      type: "text",
      placeholder: "Enter your email address",
      defaultValue: "",
      rules: {
        required: true,
      },
    },
    gender: {
      label: "Gender",
      type: "radio",
      options: ["male"],
      defaultValue: true,
      rules: {
        required: true,
      },
    },
    profession: {
      label: "Profession",
      type: "dropdown",
      options: ["Frontend Developer", "Backend Developer", "Devops Engineer"],
      defaultValue: "",
      rules: {
        required: true,
      },
    },
    agree: {
      type: "checkbox",
      label: "",
      checkboxLabel: "I hereby agree to the terms.",
      defaultValue: false,
      rules: {
        required: true,
      },
    },
  };

export const schema = yup.object({
    firstName: yup.string().required().min(2).max(120).label("Name"),
    email: yup.string().email()
  });